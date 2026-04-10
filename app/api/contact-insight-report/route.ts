import { google } from "googleapis";

const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1492201148684173534/Sm0kLcz9vHsJsd4eFDwjyqDVT3gbEoLXwOJaumflgOo4czk85C9Cl1vEw9GKg4GwzWTf";

export async function POST(req: Request) {
  try {
    const { email, name, company, url } = await req.json();

    if (!email || !name || !company) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Google Sheets
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

    try {
      const sheetsApi = google.sheets({ version: "v4", auth });
      await sheetsApi.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "website-migration!A:D",
        valueInputOption: "RAW",
        requestBody: {
          values: [[new Date().toISOString(), name, email, company]],
        },
      });
    } catch (sheetsError) {
      console.error("Sheets error:", sheetsError);
    }

    // Discord
    if (DISCORD_WEBHOOK) {
      try {
        await fetch(DISCORD_WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `🚀 New insight report signup`,
            embeds: [
              {
                color: 2923323,
                fields: [
                  { name: "Name", value: name, inline: true },
                  { name: "Email", value: email, inline: true },
                  { name: "Report", value: company, inline: false },
                  { name: "URL", value: url || "N/A", inline: false },
                  {
                    name: "Time",
                    value: new Date().toLocaleString(),
                    inline: false,
                  },
                ],
              },
            ],
          }),
        });
      } catch (discordError) {
        console.error("Discord error:", discordError);
      }
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
