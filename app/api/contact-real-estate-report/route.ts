import { google } from "googleapis";
import { realEstateReports } from "@/data/real-estate-reports";

const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1493203534550794260/vNReYX3ekq2eM3wpZn3ZtIlXhNC2frcwL1mXXVT1e-PYHAYJKg_5731uh18NpNrAH22q";

export async function POST(req: Request) {
  try {
    const { email, agentId, phone } = await req.json();

    if (!email || !agentId) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get agent data
    const agent = realEstateReports.find((r) => r.id === agentId);
    if (!agent) {
      return Response.json(
        { error: "Agent not found" },
        { status: 404 }
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
        range: "real-estate-3-in-1!A:G",
        valueInputOption: "RAW",
        requestBody: {
          values: [
            [
              agentId,
              agent.agentName,
              agent.market,
              email,
              phone || "",
              new Date().toISOString(),
              typeof window !== "undefined" ? window.location.href : "",
            ],
          ],
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
            content: `🏠 New real estate report signup`,
            embeds: [
              {
                color: 2923323,
                fields: [
                  { name: "Agent", value: agent.agentName, inline: true },
                  { name: "Market", value: agent.market, inline: true },
                  { name: "Email", value: email, inline: true },
                  { name: "Phone", value: phone || "N/A", inline: true },
                  {
                    name: "Report",
                    value: `[${agent.agentName} - ${agent.market}](/reports/${agentId})`,
                    inline: false,
                  },
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
