import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const FORMSPREE_URL = "https://formspree.io/f/mbdapgba";
const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1475415928786386986/AW176TPjqqZ0aXkHRQNj60Hhb_zednsybgYLmyztN_tgmyTa1vcrnhL0wTQEgnz0uehr";
const SHEET_NAME = "fix-your-page";

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
    const { email, website, frustration, timeline, source } = body;

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

        if (!isDuplicate) {
            await sheets.spreadsheets.values.append({
                spreadsheetId: sheetId,
                range: `${SHEET_NAME}!A:F`,
                valueInputOption: "USER_ENTERED",
                requestBody: {
                    values: [[email, timestamp, website ?? "", frustration ?? "", timeline ?? "", source ?? ""]],
                },
            });
        }

        const allEmails = isDuplicate ? existingEmails : [...existingEmails, email.toLowerCase()];
        const totalCount = allEmails.length;
        const emailList = allEmails.map((e, i) => `${i + 1}. ${e}`).join("\n");

        const divider = "━━━━━━━━━━━━━━━━━━━━━";
        const header = isDuplicate
            ? `⚠️ DUPLICATE — Site Migration Request${source ? ` · via ${source}` : ""}`
            : `🖥️ New Site Migration Request #${totalCount}${source ? ` · via ${source}` : ""}`;

        const lines = [
            header,
            divider,
            `📧 Email: ${email}${isDuplicate ? " *(already in sheet)*" : ""}`,
            website ? `🌐 Website: ${website}` : null,
            frustration ? `😤 Frustration: ${frustration}` : null,
            timeline ? `📅 Timeline: ${timeline}` : null,
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
        console.error("[fyp discord-notify error]", err);
    }

    return NextResponse.json({ ok: true });
}
