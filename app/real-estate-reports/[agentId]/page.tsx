import { realEstateReports } from "@/data/real-estate-reports";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ agentId: string }>;
}

export async function generateStaticParams() {
  return realEstateReports.map((report) => ({
    agentId: report.id,
  }));
}

async function RealEstateReportPage({ params }: Props) {
  const { agentId } = await params;
  const report = realEstateReports.find((r) => r.id === agentId);

  if (!report) {
    notFound();
  }

  const agentInitial = report.agentName.charAt(0).toUpperCase();

  return (
    <>
      {/* Top bar */}
      <div style={{ background: "#1a1a1a", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="https://fountainofscale.com" style={{ fontSize: "15px", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/assets/auto-factory.png" alt="Logo" style={{ width: "24px", height: "24px" }} />
          Fountain of Scale
        </a>
        <a href="#cta" style={{ background: "#2ee5d6", color: "#1a1a1a", fontSize: "13px", fontWeight: 700, padding: "8px 18px", borderRadius: "6px", textDecoration: "none" }}>
          Get My Lead List
        </a>
      </div>

      {/* Hero */}
      <div style={{ background: "#1a1a1a", color: "#fff", padding: "56px 32px 48px", textAlign: "center" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2ee5d6", marginBottom: "16px" }}>
          Pre-Listing Intelligence Report
        </div>
        <h1 style={{ fontSize: "34px", fontWeight: 800, lineHeight: "1.2", marginBottom: "12px", maxWidth: "640px", margin: "0 auto 12px" }}>
          California's <span style={{ color: "#2ee5d6" }}>Hidden Inventory Gap</span>
        </h1>
        <p style={{ fontSize: "16px", color: "#aaa", maxWidth: "520px", margin: "0 auto 32px" }}>
          Someone in {report.market} posted "must sell" this morning. They haven't signed with an agent yet. Here's how many you missed this week — and exactly where they are.
        </p>

        <div style={{ display: "inline-flex", alignItems: "center", gap: "16px", background: "#2a2a2a", border: "1px solid #333", borderRadius: "10px", padding: "16px 24px", textAlign: "left" }}>
          <div style={{ width: "44px", height: "44px", background: "#2ee5d6", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: 800, color: "#1a1a1a" }}>
            {agentInitial}
          </div>
          <div>
            <div style={{ fontSize: "11px", color: "#666", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>
              Report for
            </div>
            <div style={{ fontSize: "16px", fontWeight: 700, color: "#fff" }}>{report.agentName}</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "32px", justifyContent: "center", marginTop: "24px", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "11px", color: "#666", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
              Market
            </div>
            <div style={{ fontSize: "13px", color: "#ccc", fontWeight: 500 }}>{report.market}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "11px", color: "#666", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
              Contact
            </div>
            <div style={{ fontSize: "13px", color: "#ccc", fontWeight: 500 }}>{report.phone}</div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Opportunity strip */}
        <div style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: "12px", padding: "32px", margin: "32px 0", textAlign: "center" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: "8px" }}>
            Immediate Opportunity
          </div>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "6px" }}>Every change to your leads goes through someone else first</h2>
          <p style={{ fontSize: "14px", color: "#666", maxWidth: "480px", margin: "0 auto" }}>
            Leads sitting in a queue. Admin work. Following up on outdated information. Time you don't get back.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "#e8e8e8", border: "1px solid #e8e8e8", borderRadius: "12px", overflow: "hidden", margin: "24px 0" }}>
          <div style={{ background: "#fff", padding: "24px 16px", textAlign: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 800, lineHeight: "1", marginBottom: "6px", color: "#1a1a1a" }} id="oppCounter">
              {report.leadsPerWeek}
            </div>
            <div style={{ fontSize: "12px", color: "#888", lineHeight: "1.4" }}>
              More qualified leads<br />
              in {report.market} this week<br />
              (you probably missed most)
            </div>
          </div>
          <div style={{ background: "#fff", padding: "24px 16px", textAlign: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 800, lineHeight: "1", marginBottom: "6px", color: "#1a1a1a" }} id="hourCounter">
              24
            </div>
            <div style={{ fontSize: "12px", color: "#888", lineHeight: "1.4" }}>
              Within this window,<br />
              another agent has usually<br />
              already made contact
            </div>
          </div>
        </div>

        {/* Source breakdown section */}
        <div style={{ margin: "32px 0" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "6px" }}>
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: "#1a1a1a", color: "#fff", padding: "3px 8px", borderRadius: "4px" }}>
              Opportunity Breakdown
            </span>
          </div>
          <h2 style={{ fontSize: "20px", fontWeight: 700 }}>Where these leads are hiding — and how many</h2>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>15+ public channels scanned. You don't pay for a list. You don't hand over credentials. It's all public data, found for you.</p>

          {/* Source table */}
          <div style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: "12px", overflow: "hidden" }}>
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr", gap: "0", background: "#f9f9f8", padding: "14px 20px", borderBottom: "1px solid #e8e8e8", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#888", letterSpacing: "0.08em" }}>
              <div>Source</div>
              <div>Monthly Posts Across CA</div>
              <div>Lead Quality</div>
            </div>

            {/* Craigslist */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr", gap: "0", alignItems: "center", padding: "14px 20px", borderBottom: "1px solid #e8e8e8", fontSize: "14px" }}>
              <div style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "28px", height: "28px", background: "#9ca3af", color: "#fff", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700 }}>CL</div>
                Craigslist Real Estate
              </div>
              <div style={{ fontWeight: 700, color: "#1a1a1a" }}>{report.monthlyPosts.craigslist.toLocaleString()}+</div>
              <div><span style={{ display: "inline-block", padding: "3px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: 600, background: "#1ecab3", color: "#fff" }}>High</span></div>
            </div>

            {/* Facebook */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr", gap: "0", alignItems: "center", padding: "14px 20px", borderBottom: "1px solid #e8e8e8", fontSize: "14px" }}>
              <div style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "28px", height: "28px", background: "#9ca3af", color: "#fff", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700 }}>FB</div>
                Facebook Marketplace
              </div>
              <div style={{ fontWeight: 700, color: "#1a1a1a" }}>{report.monthlyPosts.facebook.toLocaleString()}+</div>
              <div><span style={{ display: "inline-block", padding: "3px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: 600, background: "#80f4f1", color: "#1a1a1a" }}>Medium</span></div>
            </div>

            {/* FSBO */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr", gap: "0", alignItems: "center", padding: "14px 20px", borderBottom: "1px solid #e8e8e8", fontSize: "14px" }}>
              <div style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "28px", height: "28px", background: "#9ca3af", color: "#fff", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700 }}>FSBO</div>
                CA FSBO Networks
              </div>
              <div style={{ fontWeight: 700, color: "#1a1a1a" }}>{report.monthlyPosts.fsbo.toLocaleString()}+</div>
              <div><span style={{ display: "inline-block", padding: "3px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: 600, background: "#1ecab3", color: "#fff" }}>High</span></div>
            </div>

            {/* Probate */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr", gap: "0", alignItems: "center", padding: "14px 20px", fontSize: "14px" }}>
              <div style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "28px", height: "28px", background: "#9ca3af", color: "#fff", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700 }}>PROB</div>
                County Probate Dockets
              </div>
              <div style={{ fontWeight: 700, color: "#1a1a1a" }}>{report.monthlyPosts.probate.toLocaleString()}+</div>
              <div><span style={{ display: "inline-block", padding: "3px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: 600, background: "#1ecab3", color: "#fff" }}>High</span></div>
            </div>
          </div>
        </div>

        {/* Proof block */}
        <div style={{ margin: "32px 0" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "6px" }}>
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: "#1a1a1a", color: "#fff", padding: "3px 8px", borderRadius: "4px" }}>
              Live Example
            </span>
          </div>
          <h2 style={{ fontSize: "20px", fontWeight: 700 }}>What a real lead looks like</h2>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>Found this week. Public posting. No data purchased.</p>

          <div style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: "12px", padding: "20px" }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#9ca3af", marginBottom: "12px" }}>
              <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "#1ecab3", marginRight: "8px", verticalAlign: "middle" }}></span>
              Source: Craigslist · FSBO · {report.market}
            </div>
            <div style={{ marginBottom: "16px", lineHeight: "1.6" }}>
              <strong>"Moving to Texas next month, need to sell my 3-bed in Pasadena. No agents please."</strong>
              <br /><br />
              Asking $680k, will negotiate. House needs some work but priced to move fast. Serious buyers only. We can close in 30 days.
            </div>
            <div style={{ background: "#e0f9f8", border: "1px solid #80f4f1", borderRadius: "8px", padding: "14px 16px", display: "flex", gap: "10px", fontSize: "14px", color: "#1a5f5b" }}>
              <span style={{ color: "#2ee5d6", fontSize: "16px", marginTop: "2px", flexShrink: 0 }}>💡</span>
              <span>
                <strong>The Insight:</strong> "No agents please" isn't a hard no — it's a cost objection. Industry data shows 80% of FSBO sellers end up listing with an agent anyway. This seller is time-pressured, has a hard deadline, and is already negotiating with themselves on price. That's a listing waiting to be claimed. Most agents never see it.
              </span>
            </div>
          </div>
        </div>

        {/* AI Keywords section */}
        <div style={{ margin: "32px 0" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "6px" }}>
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: "#1a1a1a", color: "#fff", padding: "3px 8px", borderRadius: "4px" }}>
              AI Intelligence
            </span>
          </div>
          <h2 style={{ fontSize: "20px", fontWeight: 700 }}>The "motivated seller" signals AI scans for</h2>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>These are the phrases that flag a lead as high-priority.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", margin: "16px 0" }}>
            {[
              { icon: "💼", text: '"Moving due to job / relocating"', sub: "Hard deadline. Motivated to close fast." },
              { icon: "📋", text: '"Must sell quickly / ASAP"', sub: "Timeline pressure = motivation." },
              { icon: "🏠", text: '"As-is, cash preferred"', sub: "Ready to bypass traditional process." },
              { icon: "📚", text: '"Inherited property, need to sell"', sub: "Often unmotivated to carry long term." },
            ].map((card, idx) => (
              <div key={idx} style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: "10px", padding: "20px", textAlign: "center" }}>
                <div style={{ fontSize: "24px", marginBottom: "10px" }}>{card.icon}</div>
                <div style={{ fontSize: "14px", fontWeight: 700, marginBottom: "4px" }}>{card.text}</div>
                <div style={{ fontSize: "12px", color: "#888", lineHeight: "1.5" }}>{card.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div style={{ background: "#1a1a1a", borderRadius: "14px", padding: "48px 40px", marginTop: "40px", textAlign: "center", color: "#fff" }} id="cta">
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2ee5d6", marginBottom: "12px" }}>
            Get Your Lead List Every Morning
          </div>
          <h2 style={{ fontSize: "26px", fontWeight: 800, marginBottom: "10px", lineHeight: "1.2" }}>Stop missing opportunities.<br />Get the list delivered.</h2>
          <p style={{ color: "#aaa", fontSize: "15px", marginBottom: "28px", maxWidth: "440px", marginLeft: "auto", marginRight: "auto" }}>
            Drop your email and we'll reach out within 24 hours.
          </p>
          <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "16px" }}>Takes 5 minutes to set up</p>
          <form style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginBottom: "16px" }}>
            <input type="email" placeholder="Your email" required style={{ padding: "14px 18px", borderRadius: "8px", border: "none", fontSize: "15px", width: "280px", background: "#2a2a2a", color: "#fff", outline: "none" }} />
            <button type="submit" style={{ background: "#2ee5d6", color: "#1a1a1a", fontSize: "15px", fontWeight: 800, padding: "14px 28px", borderRadius: "8px", border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>
              Get Started
            </button>
          </form>
          <div style={{ fontSize: "12px", color: "#555" }}>Limited spots</div>
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "24px", fontSize: "12px", color: "#bbb" }}>
        Report prepared by Fountain of Scale
      </div>

      <style>{`
        input::placeholder { color: #5ab9af; }
        input:focus::placeholder { color: #7dd9d0; }
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 1000px #2a2a2a inset !important;
          -webkit-text-fill-color: #fff !important;
          border: none !important;
        }
        input:-webkit-autofill::placeholder { -webkit-text-fill-color: #5ab9af !important; }
        input:focus { outline: none; box-shadow: none; border: none; }
        @media (max-width: 640px) {
          h1 { font-size: 24px; }
          div[style*="gridTemplateColumns: repeat(2"] { grid-template-columns: 1fr !important; }
          div[style*="gridTemplateColumns: 2fr"] { grid-template-columns: 1fr 1fr 1fr !important; }
          div[style*="gridTemplateColumns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

export default RealEstateReportPage;
