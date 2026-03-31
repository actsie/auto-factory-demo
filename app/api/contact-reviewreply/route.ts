import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1478238114546847785/c0G-JKvnbXnHITau28XQdNCvleOAWAxg2_iuOE4JMgRWpK7QcHOByZnVXGKQJq2yU8wP";
const SHEET_NAME = "review-reply";

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
    const { email, mapsUrl, source } = body;

    const timestamp = new Date().toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
        dateStyle: "medium",
        timeStyle: "short",
    }) + " PST";

    try {
        const sheets = getSheets();
        const sheetId = process.env.GOOGLE_SHEET_ID;

        const readRes = await sheets.spreadsheets.values.get({
            spreadsheetId: sheetId,
            range: `${SHEET_NAME}!A2:A`,
        });
        const existingEmails: string[] = (readRes.data.values ?? []).flat().map((e: string) => e.toLowerCase());
        const isDuplicate = existingEmails.includes(email.toLowerCase());

        if (!isDuplicate) {
            await sheets.spreadsheets.values.append({
                spreadsheetId: sheetId,
                range: `${SHEET_NAME}!A:D`,
                valueInputOption: "USER_ENTERED",
                requestBody: {
                    values: [[email, mapsUrl ?? "", timestamp, source ?? ""]],
                },
            });
        }

        const divider = "━━━━━━━━━━━━━━━━━━━━━";
        const header = isDuplicate
            ? `⚠️ DUPLICATE — Review Reply Pilot${source ? ` · via ${source}` : ""}`
            : `🏢 New Review Reply Pilot Application${source ? ` · via ${source}` : ""}`;

        const lines = [
            header,
            divider,
            `📧 Email: ${email}${isDuplicate ? " *(already in sheet)*" : ""}`,
            `📍 Maps URL: ${mapsUrl}`,
            `⏰ Time: ${timestamp}`,
        ].join("\n");

        await fetch(DISCORD_WEBHOOK, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: lines }),
        });
    } catch (err) {
        console.error("[review-reply error]", err);
    }

    return NextResponse.json({ ok: true });
}
