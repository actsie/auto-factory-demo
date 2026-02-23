import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const FORMSPREE_URL = "https://formspree.io/f/maqdlqvy";
const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1475381110736162990/5A1g6AgVl8srYSHrgygtNgIKSG2Z0gIec9um20XBKgUVJbSBmCn4lSehpuozDowRJ2Wa";
const SHEET_NAME = "fountain-of-scale";

function getSheets() {
    let privateKey = (process.env.GOOGLE_PRIVATE_KEY ?? "").trim();
    if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
        privateKey = privateKey.slice(1, -1);
    }
    privateKey = privateKey.replace(/\\n/g, "\n");

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: privateKey,
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    return google.sheets({ version: "v4", auth });
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, email, company, website, linkedin, jdUrl, jdText, jdMode, techStack, notes, source } = body;

    // 1. Submit to Formspree
    const formspreeRes = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
    });

    if (!formspreeRes.ok) {
        return NextResponse.json({ error: "Submission failed" }, { status: 500 });
    }

    // 2. Google Sheets + Discord
    try {
const sheets = getSheets();
    const sheetId = process.env.GOOGLE_SHEET_ID;

    const readRes = await sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: `${SHEET_NAME}!A2:A`,
    });
    const existingEmails: string[] = (readRes.data.values ?? []).flat().map((e: string) => e.toLowerCase());
    const isDuplicate = existingEmails.includes(email.toLowerCase());
    const timestamp = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles", dateStyle: "medium", timeStyle: "short" }) + " PST";
    const jd = jdMode === "url" ? jdUrl : jdText ? `[pasted] ${jdText.slice(0, 300)}${jdText.length > 300 ? "..." : ""}` : "";

    // 3. Write new row if not duplicate
    if (!isDuplicate) {
        await sheets.spreadsheets.values.append({
            spreadsheetId: sheetId,
            range: `${SHEET_NAME}!A:J`,
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[email, timestamp, name, company, website ?? "", linkedin ?? "", jd, techStack ?? "", notes ?? "", source ?? ""]],
            },
        });
    }

    // 4. Build totals + email list
    const allEmails = isDuplicate ? existingEmails : [...existingEmails, email.toLowerCase()];
    const totalCount = allEmails.length;
    const emailList = allEmails.map((e, i) => `${i + 1}. ${e}`).join("\n");

    // 5. Format and send Discord message
    const divider = "━━━━━━━━━━━━━━━━━━━━━";
    const header = isDuplicate
        ? `⚠️ DUPLICATE — Scoping Request${source ? ` · via ${source}` : ""}`
        : `📋 New Scoping Request #${totalCount}${source ? ` · via ${source}` : ""}`;

    const lines = [
        header,
        divider,
        `📧 Email: ${email}${isDuplicate ? " *(already in sheet)*" : ""}`,
        `👤 Name: ${name}`,
        `🏢 Company: ${company}`,
        website ? `Website: ${website}` : null,
        linkedin ? `LinkedIn: ${linkedin}` : null,
        jd ? `JD: ${jd}` : null,
        techStack ? `Tech Stack: ${techStack}` : null,
        notes ? `Notes: ${notes}` : null,
        `⏰ Time: ${timestamp}`,
        `📊 Total Requests: ${totalCount}`,
        divider,
        `📬 All Emails:\n${emailList}`,
    ].filter(Boolean).join("\n");

    await fetch(DISCORD_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: lines }),
    });

    } catch (err) {
        console.error("[discord-notify error]", err);
    }

    return NextResponse.json({ ok: true });
}
