import { reports } from "@/data/reports";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ clientId: string }>;
}

export async function generateStaticParams() {
  return reports.map((report) => ({
    clientId: report.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { clientId } = await params;
  const report = reports.find((r) => r.id === clientId);
  if (!report) return {};
  return {
    title: `Website Insight Report — ${report.company}`,
    description: `Discover how ${report.company} can migrate from Webflow to a faster, more flexible stack.`,
  };
}

export default async function ReportPage({ params }: Props) {
  const { clientId } = await params;
  const report = reports.find((r) => r.id === clientId);
  if (!report) notFound();

  const initials = report.company.split(" ").slice(0, 2).map((w: string) => w[0]).join("").toUpperCase();

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.0/dist/confetti.browser.min.js"></script>

      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes beam-spin {
          0% { --angle: 0deg; }
          100% { --angle: 360deg; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
          25%       { opacity: 0.3; transform: scale(0.55) rotate(20deg); }
          50%       { opacity: 1; transform: scale(1.15) rotate(0deg); }
          75%       { opacity: 0.5; transform: scale(0.7) rotate(-15deg); }
        }
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #1a1a1a; color: #fff; }

        input::placeholder { color: rgba(46,229,214,0.45); }
        input:focus { outline: none; box-shadow: none; }
        #ctaEmailField:focus { border: 1px solid #2ee5d6 !important; }
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px #2a2a2a inset !important;
          -webkit-text-fill-color: #fff !important;
        }

        .nav-cta {
          background: #2ee5d6; color: #1a1a1a;
          font-size: 13px; font-weight: 800;
          padding: 9px 22px; border-radius: 50px;
          text-decoration: none;
          display: inline-flex; align-items: center; gap: 7px;
          overflow: hidden;
        }
        .nav-arrow { transition: transform 0.25s cubic-bezier(0.4,0,0.2,1); flex-shrink: 0; }
        .nav-cta:hover .nav-arrow { transform: translateX(4px); }

        .cta-btn {
          margin-top: 12px; width: 100%;
          background: #2ee5d6; color: #1a1a1a;
          font-size: 15px; font-weight: 800;
          padding: 14px 28px; border-radius: 50px;
          border: none; cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
        }
        .cta-arrow { transition: transform 0.25s cubic-bezier(0.4,0,0.2,1); flex-shrink: 0; }
        .cta-btn:hover .cta-arrow { transform: translateX(4px); }

        .beam-wrapper { opacity: 0.45; transition: opacity 0.3s ease; }
        .beam-wrapper:has(input:focus) { opacity: 1; }

        #frictionCardsGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

        .fcard { background:#fff; border:1px solid rgba(0,0,0,0.07); border-radius:16px; padding:24px; box-shadow:0 2px 12px rgba(0,0,0,0.04); }
        .fcard-title { font-size:14px; font-weight:700; color:#1a1a1a; margin-bottom:16px; }
        .frow { display:flex; justify-content:space-between; align-items:center; padding:7px 0; border-bottom:1px solid #f5f5f5; font-size:13px; }
        .frow.last { border-bottom:none; }
        .flabel { color:#999; }
        .fgood { font-weight:600; color:#0d9e8e; }
        .fbad { font-weight:600; color:#dc2626; }

        .brow { display:grid; grid-template-columns:1fr 32px 1fr; align-items:center; gap:16px; padding:16px 0; border-bottom:1px solid #f0eeea; font-size:14px; }
        .brow.last { border-bottom:none; }
        .before-col { color:#aaa; text-decoration:line-through; text-decoration-color:#ddd; }
        .arrow-col { color:#ccc; text-align:center; font-size:18px; }
        .after-col { color:#0d9e8e; font-weight:600; }

        .aiex { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:16px 20px; margin-bottom:10px; }
        .aiex-label { font-size:10px; color:rgba(255,255,255,0.4); margin-bottom:5px; text-transform:uppercase; letter-spacing:0.08em; }
        .aiex-prompt { color:#e5e7eb; font-style:italic; font-size:14px; }
        .aiex-result { margin-top:10px; font-size:13px; color:#2ee5d6; font-weight:600; }

        .icard { background:#fff; border:1px solid rgba(0,0,0,0.07); border-radius:16px; padding:28px 24px; box-shadow:0 2px 12px rgba(0,0,0,0.04); }
        .iicon { font-size:28px; margin-bottom:14px; color:#1a1a1a; }
        .ititle { font-size:15px; font-weight:700; color:#1a1a1a; margin-bottom:6px; }
        .idesc { font-size:13px; color:rgba(26,5,51,0.55); line-height:1.55; }

        .audit-pill {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(30,30,30,0.85); border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50px; padding: 8px 14px;
          font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.85);
          backdrop-filter: blur(4px); white-space: nowrap; overflow: hidden; width: 100%;
        }
        .pill-text { display: block; transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease; }
        .pill-dot { width: 7px; height: 7px; border-radius: 50%; display: inline-block; flex-shrink: 0; transition: background 0.4s ease; }
        .pill-dot--before { background: rgba(255,110,90,0.8); }
        .pill-dot--after  { background: #2ee5d6; }
        .audit-pill.is-after { border-color: rgba(46,229,214,0.25); background: rgba(20,60,60,0.6); }

        @media (max-width: 1100px) {
          .hero-diagram { flex-direction: column !important; align-items: center !important; gap: 24px !important; padding-bottom: 48px !important; }
          #heroCard    { width: 100% !important; max-width: 340px; }
          #pillsCol    { width: 100% !important; max-width: 340px; display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 8px !important; }
          #pillsCol .audit-pill { white-space: normal !important; font-size: 11px !important; }
          #migrateCta  { width: 100% !important; max-width: 340px; }
          #migrateCta > div:last-child { width: 100% !important; }
          .hero-diagram > div:nth-child(2) { align-items: center !important; width: 100%; max-width: 340px; }
        }

        @media (max-width: 768px) {
          #frictionCardsGrid   { grid-template-columns: 1fr; }
          .problem-grid        { grid-template-columns: 1fr !important; }
          .included-grid       { grid-template-columns: repeat(2,1fr) !important; }
          section, nav { padding-left: 20px !important; padding-right: 20px !important; }
          #heroSection { padding-top: 60px !important; min-height: auto !important; }
          nav { padding-top: 12px !important; padding-bottom: 12px !important; }
          .brow { grid-template-columns: 1fr !important; gap: 4px !important; padding: 14px 0 !important; }
          .arrow-col { display: none !important; }
          .migration-card { padding: 28px 20px !important; }
          #ctaEmailField { width: 100% !important; }
          #ctaForm { flex-direction: column !important; align-items: stretch !important; }
          #ctaForm input { width: 100% !important; }
          #ctaForm .cta-btn { width: 100% !important; margin-top: 0 !important; }
          #heroSection > div[style*="max-width:560px"] { max-width: 100% !important; text-align: center !important; }
          #heroSparkle { display: none !important; }
        }

        @media (max-width: 480px) {
          .included-grid { grid-template-columns: 1fr !important; }
        }

        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 0.08s; }
        .reveal-delay-2 { transition-delay: 0.16s; }
        .reveal-delay-3 { transition-delay: 0.24s; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(20,20,20,0.9)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "14px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="https://fountainofscale.com" style={{ fontSize: "15px", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/assets/auto-factory.png" alt="Logo" style={{ width: "28px", height: "28px", borderRadius: "6px" }} />
          {"Fountain of Scale"}
        </a>
        <a href="#cta" className="nav-cta">
          Start my migration
          <svg className="nav-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </nav>

      {/* HERO */}
      <section id="heroSection" style={{ position: "relative", background: "#1a1a1a", backgroundImage: "linear-gradient(0deg, rgba(30,30,30,0) 40%, rgba(30,30,30,0.9) 100%), radial-gradient(ellipse 60% 50% at 85% 20%, rgba(46,229,214,0.18) 0%, rgba(46,229,214,0) 70%)", color: "#fff", padding: "80px 80px 0", minHeight: "88vh", display: "flex", flexDirection: "column" }}>
        {/* Glow blobs */}
        <div style={{ position: "absolute", top: "60px", right: "80px", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle,rgba(46,229,214,0.2),rgba(46,229,214,0))", pointerEvents: "none", filter: "blur(40px)" }}></div>
        <div style={{ position: "absolute", top: "40px", right: "40px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle at 30% 25%,rgba(46,229,214,0.3),rgba(46,229,214,0))", pointerEvents: "none", filter: "blur(30px)" }}></div>

        {/* Sparkle */}
        <div id="heroSparkle" style={{ position: "absolute", top: "88px", right: "200px", width: "32px", height: "32px", pointerEvents: "none", animation: "twinkle 5s ease-in-out infinite" }}>
          <svg viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0 L17.5 14.5 L32 16 L17.5 17.5 L16 32 L14.5 17.5 L0 16 L14.5 14.5 Z" />
          </svg>
        </div>

        {/* Hero content */}
        <div style={{ maxWidth: "560px", position: "relative", zIndex: 2 }}>
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2ee5d6", marginBottom: "20px" }}>
            Website Insight Report
          </div>
          <h1 id="heroHeading" style={{ fontSize: "clamp(40px,5vw,68px)", fontWeight: 800, lineHeight: 1.06, marginBottom: "20px", letterSpacing: "-0.02em" }}>
            Here's where you're losing time.
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.72)", lineHeight: 1.6, maxWidth: "460px", marginBottom: "36px" }}>
            We analyzed {report.company}&apos;s site. Here&apos;s what we&apos;d fix first — and how fast it can change.
          </p>

          {/* Company badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "14px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "14px 20px", marginBottom: "36px" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: report.logoNeedsBg ? "#fff" : "rgba(46,229,214,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: report.logoNeedsBg ? "4px" : "0" }}>
              <img src={report.logo} alt={report.company} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
            </div>
            <div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "2px" }}>Insight Report for</div>
              <div style={{ fontSize: "15px", fontWeight: 700 }}>{report.company}</div>
            </div>
            <div style={{ width: "1px", height: "32px", background: "rgba(255,255,255,0.1)", margin: "0 6px" }}></div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>{report.url.replace("https://", "")}</div>
          </div>
        </div>

        {/* Hero diagram */}
        <svg id="heroSvg" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 2, overflow: "visible" }}></svg>

        <div className="hero-diagram" style={{ position: "relative", zIndex: 3, marginTop: "48px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 0, paddingBottom: "72px" }}>

          {/* Col 1: Company card */}
          <div id="heroCard" style={{ position: "relative", flexShrink: 0, width: "200px" }}>
            <div style={{ position: "absolute", inset: "-12px", borderRadius: "22px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}></div>
            <div style={{ position: "relative", background: "#fff", borderRadius: "14px", padding: "16px 18px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "6px", background: report.logoNeedsBg ? "#fff" : "rgba(26,26,26,0.08)", border: report.logoNeedsBg ? "1px solid #eee" : "none", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: "3px" }}>
                  <img src={report.logo} alt={report.company} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                </div>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#1a1a1a" }}>{report.company}</div>
                  <div style={{ fontSize: "10px", color: "#999" }}>{report.url.replace("https://", "")}</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", padding: "4px 0", borderBottom: "1px solid #f0f0f0", color: "#666" }}><span>Pages</span><span style={{ fontWeight: 600, color: "#1a1a1a" }}>{report.pages}</span></div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", padding: "4px 0", borderBottom: "1px solid #f0f0f0", color: "#666" }}><span>Industry</span><span style={{ fontWeight: 600, color: "#1a1a1a", fontSize: "10px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "90px", display: "block" }}>{report.industry.split("/")[0].trim()}</span></div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", padding: "4px 0", borderBottom: "1px solid #f0f0f0", color: "#666" }}><span>Website Builder</span><span id="cardStatBuilder" style={{ fontWeight: 600, color: "#1a1a1a", transition: "color 0.4s ease" }}>Webflow</span></div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", padding: "4px 0", borderBottom: "1px solid #f0f0f0", color: "#666" }}><span>Deploy time</span><span id="cardStatDeploy" style={{ fontWeight: 600, color: "#dc2626", transition: "color 0.4s ease" }}>3–5 days</span></div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", padding: "4px 0", color: "#666" }}><span>Designer + Dev</span><span id="cardStatCost" style={{ fontWeight: 600, color: "#dc2626", transition: "color 0.4s ease" }}>$$/hr</span></div>
              </div>
            </div>
          </div>

          {/* Col 2: Pills */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px", flexShrink: 0 }}>
            <div id="pillStateLabel" style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "20px", background: "rgba(255,100,80,0.15)", border: "1px solid rgba(255,100,80,0.3)", color: "rgba(255,130,110,0.9)", transition: "all 0.4s ease" }}>Before</div>
            <div id="pillsCol" style={{ display: "flex", flexDirection: "column", gap: "8px", width: "220px" }}>
              <div className="audit-pill" id="auditPill0"><span className="pill-dot pill-dot--before"></span><span className="pill-text">Designer queue</span></div>
              <div className="audit-pill" id="auditPill1"><span className="pill-dot pill-dot--before"></span><span className="pill-text">Dev dependency</span></div>
              <div className="audit-pill" id="auditPill2"><span className="pill-dot pill-dot--before"></span><span className="pill-text">Builder lock-in</span></div>
              <div className="audit-pill" id="auditPill3"><span className="pill-dot pill-dot--before"></span><span className="pill-text">Every change = a brief</span></div>
              <div className="audit-pill" id="auditPill4"><span className="pill-dot pill-dot--before"></span><span className="pill-text">Updates take days</span></div>
              <div className="audit-pill" id="auditPill5"><span className="pill-dot pill-dot--before"></span><span className="pill-text">No site ownership</span></div>
            </div>
          </div>

          {/* Col 3: Node */}
          <div style={{ flexShrink: 0, position: "relative", width: "56px", height: "56px" }}>
            <div id="blockedNode" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "rgba(60,10,10,0.6)", border: "2px solid rgba(255,80,60,0.35)", display: "flex", alignItems: "center", justifyContent: "center", transition: "opacity 0.4s ease,transform 0.4s ease" }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="8" stroke="rgba(255,90,70,0.5)" strokeWidth="1.5"/>
                <line x1="7" y1="7" x2="15" y2="15" stroke="rgba(255,100,80,0.8)" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="15" y1="7" x2="7" y2="15" stroke="rgba(255,100,80,0.8)" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <div id="fosLogo" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "linear-gradient(135deg,#2a2a2a,#111)", border: "2px solid rgba(46,229,214,0.4)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 24px rgba(46,229,214,0.2)", opacity: 0, transform: "scale(0.6)", transition: "opacity 0.5s ease,transform 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}>
              <img src="/assets/auto-factory.png" alt="FoS" style={{ width: "28px", height: "28px", borderRadius: "4px" }} />
            </div>
          </div>

          {/* Col 4: Mini chat card */}
          <div id="migrateCta" style={{ flexShrink: 0, opacity: 0, transform: "translateX(14px)", transition: "opacity 0.5s ease,transform 0.5s cubic-bezier(0.34,1.56,0.64,1)", position: "relative" }}>
            <div style={{ position: "absolute", inset: "-12px", borderRadius: "22px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}></div>
            <div style={{ position: "relative", background: "#fff", borderRadius: "14px", width: "188px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}>
              <div style={{ padding: "10px 14px", borderBottom: "1px solid #f0f0f0", display: "flex", alignItems: "center", gap: "7px" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "5px", background: report.logoNeedsBg ? "#fff" : "#f5f5f5", border: "1px solid #eee", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: "3px" }}>
                  <img src={report.logo} alt={report.company} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                </div>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a1a" }}>{report.company}</div>
                  <div style={{ fontSize: "9px", color: "#aaa" }}>{report.url.replace("https://", "")}</div>
                </div>
              </div>
              <div style={{ padding: "10px 14px", height: "54px", display: "flex", flexDirection: "column", gap: "5px", overflow: "hidden" }}>
                <div id="chatStatus" style={{ fontSize: "10px", color: "#aaa", lineHeight: 1.5 }}></div>
              </div>
              <div style={{ padding: "8px 10px", borderTop: "1px solid #f0f0f0", display: "flex", alignItems: "center", gap: "6px", background: "#fafafa" }}>
                <div style={{ flex: 1, background: "#fff", border: "1px solid #e8e8e8", borderRadius: "6px", padding: "5px 8px", fontSize: "10px", color: "#1a1a1a", height: "22px", display: "flex", alignItems: "center", overflow: "hidden" }}>
                  <span id="chatTyping" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}></span><span id="chatCursor" style={{ display: "inline-block", width: "1px", height: "10px", background: "#1a1a1a", marginLeft: "1px", flexShrink: 0, animation: "blink 0.8s step-end infinite" }}></span>
                </div>
                <div id="chatSendBtn" style={{ width: "22px", height: "22px", borderRadius: "5px", background: "#e8e8e8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.3s ease" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5h6M6 3l2 2-2 2" stroke="#aaa" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" id="chatSendIcon"/></svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "80px 40px" }}>
        <div className="problem-grid reveal" style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>The Problem</div>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Every change to your site goes through someone else first.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { title: "Designer in the loop", desc: "Even a one-line copy change means a brief, a queue, and a wait." },
              { title: "No direct access", desc: "You can see the site. You can't touch it without involving a specialist." },
              { title: "You know exactly what needs to change.", desc: "You just can't change it." },
            ].map((item, idx) => (
              <div key={idx} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "14px", padding: "22px 24px" }}>
                <div style={{ fontSize: "16px", fontWeight: 700, marginBottom: "6px" }}>{item.title}</div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRICTION BREAKDOWN */}
      <section style={{ background: "#f5f4f1", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="reveal" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0d9e8e", marginBottom: "12px" }}>The Friction</div>
          <h2 className="reveal reveal-delay-1" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: "#1a1a1a", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "10px" }}>
            Every time you want to change something, it becomes a project.
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(26,5,51,0.55)", marginBottom: "36px" }}>Where manual website management slows {report.company} down.</p>
          <div id="frictionCardsGrid" className="reveal">
            {[
              { scenario: "Update homepage hero copy", should: "5 min", actually: "2–5 days", why: "Designer queue" },
              { scenario: "Add a new landing page", should: "1 day", actually: "1–2 weeks", why: "Brief → build → approve" },
              { scenario: "Test a different CTA", should: "10 min", actually: "Blocked", why: "Need dev or platform expertise" },
              { scenario: "Respond to market feedback", should: "Same day", actually: "Next sprint", why: "No direct access" },
            ].map((item, idx) => (
              <div key={idx} className="fcard">
                <div className="fcard-title">{item.scenario}</div>
                <div className="frow"><span className="flabel">Should take</span><span className="fgood">{item.should}</span></div>
                <div className="frow"><span className="flabel">Actually takes</span><span className="fbad">{item.actually}</span></div>
                <div className="frow last"><span className="flabel">Why</span><span className="fbad">{item.why}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFTER MIGRATION */}
      <section style={{ background: "#f5f4f1", padding: "0 40px 80px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="migration-card reveal" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "20px", padding: "48px", boxShadow: "0 2px 24px rgba(0,0,0,0.05)" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1a1a1a", marginBottom: "12px", opacity: 0.5 }}>After Migration</div>
            <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, color: "#1a1a1a", letterSpacing: "-0.02em", marginBottom: "32px" }}>What full control looks like.</h2>
            <div>
              <div className="brow"><span className="before-col">Update copy → wait on designer → days later</span><span className="arrow-col">→</span><span className="after-col">Edit it yourself, live in minutes</span></div>
              <div className="brow"><span className="before-col">New landing page → brief → build → approve → weeks</span><span className="arrow-col">→</span><span className="after-col">Describe it → review → ship same day</span></div>
              <div className="brow"><span className="before-col">Test a new CTA → blocked without dev help</span><span className="arrow-col">→</span><span className="after-col">Try it, revert it, try another — whenever you want</span></div>
              <div className="brow"><span className="before-col">Respond to customer feedback → next sprint</span><span className="arrow-col">→</span><span className="after-col">Change it now, while the insight is fresh</span></div>
              <div className="brow last"><span className="before-col">Current hosting → ${report.hostingCost}/mo and climbing</span><span className="arrow-col">→</span><span className="after-col">Your code to keep forever.</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section style={{ background: "#1a1a1a", backgroundImage: "radial-gradient(ellipse 80% 60% at 50% 100%,rgba(46,229,214,0.2) 0%,rgba(30,30,30,0.3) 45%,rgba(26,26,26,0) 80%)", padding: "80px 40px", color: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2ee5d6", marginBottom: "14px" }}>AI-Powered</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "14px" }}>Make updates whenever inspiration strikes.</h2>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", maxWidth: "460px", margin: "0 auto" }}>Full control. Change things whenever you want.</p>
          </div>

          <div id="aiBlock" className="reveal" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "32px", marginBottom: "24px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2ee5d6", marginBottom: "16px" }}>How it works for {report.company}</div>
            {[
              { prompt: report.aiExamples.prompt1, result: report.aiExamples.result1 },
              { prompt: report.aiExamples.prompt2, result: report.aiExamples.result2 },
              { prompt: report.aiExamples.prompt3, result: report.aiExamples.result3 },
            ].map((item, idx) => (
              <div key={idx} className="aiex">
                <div className="aiex-label">You say</div>
                <div className="aiex-prompt">&ldquo;{item.prompt}&rdquo;</div>
                <div className="aiex-result">{item.result}</div>
              </div>
            ))}

            <form id="aiForm" style={{ marginTop: "24px" }}>
              <div id="aiFormInputs">
                <div className="beam-wrapper" style={{ position: "relative", background: "conic-gradient(from var(--angle),transparent 65%,#2ee5d6 79%,#b0f4f8 86%,transparent 93%)", borderRadius: "10px", padding: "2px", animation: "beam-spin 4s linear infinite" }}>
                  <input type="text" id="aiChangeField" placeholder="What do you want changed on your website?" style={{ padding: "14px 18px", borderRadius: "8px", border: "none", fontSize: "15px", width: "100%", background: "#2a2a2a", color: "#fff" }} />
                </div>
                <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)", marginTop: "10px" }} id="emailWrapper">
                  <input type="email" id="aiEmailField" placeholder="Your email" style={{ padding: "14px 18px", borderRadius: "10px", border: "none", fontSize: "15px", width: "100%", background: "transparent", color: "#fff" }} />
                </div>
              </div>
              <button id="migrateBtn" type="submit" className="cta-btn">
                Get started
                <svg className="cta-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ background: "#f5f4f1", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1a1a1a", marginBottom: "12px", opacity: 0.5 }}>What&apos;s Included</div>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: "#1a1a1a", letterSpacing: "-0.02em", marginBottom: "10px" }}>Everything in the migration.</h2>
          <p style={{ fontSize: "16px", color: "rgba(26,5,51,0.5)", marginBottom: "40px" }}>First week we&apos;re hands-on. Then it&apos;s yours.</p>
          <div className="included-grid reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }}>
            {[
              { icon: "fa-magnifying-glass", title: "Full Audit", desc: "We map every page, form, and integration before touching anything." },
              { icon: "fa-wrench", title: "Complete Rebuild", desc: "Same design, same URLs, cleaner code you actually own." },
              { icon: "fa-flask-vial", title: "Full Testing", desc: "Every URL, form, and integration verified before go-live." },
              { icon: "fa-rocket", title: "SEO-Safe Launch", desc: "301 redirects, DNS migration, Google Lighthouse verified." },
              { icon: "fa-comments", title: "Hands-On Onboarding", desc: "We're in there with you making changes, not just fixing bugs." },
              { icon: "fa-infinity", title: "No Lock-In", desc: "Your code, your site. No long-term contract required — we're here when you need us." },
            ].map((item, idx) => (
              <div key={idx} className="icard">
                <div className="iicon"><i className={`fas ${item.icon}`}></i></div>
                <div className="ititle">{item.title}</div>
                <div className="idesc">{item.desc}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "13px", color: "rgba(26,5,51,0.4)", marginTop: "20px", textAlign: "center" }}>Timeline: 1–2 weeks start to finish.</p>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" style={{ background: "#1a1a1a", backgroundImage: "radial-gradient(ellipse 70% 60% at 50% 100%,rgba(46,229,214,0.15) 0%,rgba(30,30,30,0.2) 50%,rgba(26,26,26,0) 80%)", padding: "100px 40px", textAlign: "center", color: "#fff" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2ee5d6", marginBottom: "16px" }}>Website Migration · Your Code to Keep</div>
          <h2 id="ctaHeading" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "48px" }}>Ready to own your website?</h2>
          <form id="ctaForm" style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginBottom: "20px" }}>
            <input id="ctaEmailField" type="email" placeholder="Your email" required style={{ padding: "14px 20px", borderRadius: "50px", border: "1px solid rgba(255,255,255,0.15)", fontSize: "15px", width: "260px", background: "rgba(255,255,255,0.07)", color: "#fff", outline: "none", transition: "border-color 0.2s ease" }} />
            <button id="ctaBtn" type="submit" className="cta-btn" style={{ width: "auto", marginTop: 0 }}>
              Start my migration
              <svg className="cta-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>After submitting, we&apos;ll ask you a few quick questions about your site. We use your answers to prep before we start.</div>
        </div>
      </section>

      {/* FOOTER */}
      <div style={{ background: "#1a1a1a", textAlign: "center", padding: "24px", fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
        Data based on site audit of {report.url} · Report prepared by Fountain of Scale
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
(function() {
  // ── Beam system ──────────────────────────────────────────────
  const BL = 6, SPEED = 0.18, STAGGER = 110, PAUSE = 900;
  const PHASES = [
    { beams: [
      { fromId:'heroCard', toId:'auditPill0', color:'#2ee5d6' },
      { fromId:'heroCard', toId:'auditPill1', color:'#5bbfba' },
      { fromId:'heroCard', toId:'auditPill2', color:'#3dd9cc' },
      { fromId:'heroCard', toId:'auditPill3', color:'#5bbfba' },
      { fromId:'heroCard', toId:'auditPill4', color:'#2ee5d6' },
      { fromId:'heroCard', toId:'auditPill5', color:'#3dd9cc' },
    ]},
    { beforeOnly: true, beams: [
      { fromId:'auditPill0', toId:'blockedNode', color:'rgba(255,120,100,0.8)' },
      { fromId:'auditPill1', toId:'blockedNode', color:'rgba(255,110,90,0.7)'  },
      { fromId:'auditPill2', toId:'blockedNode', color:'rgba(255,120,100,0.8)' },
      { fromId:'auditPill3', toId:'blockedNode', color:'rgba(255,110,90,0.7)'  },
      { fromId:'auditPill4', toId:'blockedNode', color:'rgba(255,120,100,0.8)' },
      { fromId:'auditPill5', toId:'blockedNode', color:'rgba(255,110,90,0.7)'  },
    ]},
    { afterOnly: true, beams: [
      { fromId:'auditPill0', toId:'fosLogo', color:'#2ee5d6' },
      { fromId:'auditPill1', toId:'fosLogo', color:'#5bbfba' },
      { fromId:'auditPill2', toId:'fosLogo', color:'#2ee5d6' },
      { fromId:'auditPill3', toId:'fosLogo', color:'#5bbfba' },
      { fromId:'auditPill4', toId:'fosLogo', color:'#2ee5d6' },
      { fromId:'auditPill5', toId:'fosLogo', color:'#5bbfba' },
    ]},
    { afterOnly: true, beams: [
      { fromId:'fosLogo', toId:'migrateCta', color:'#2ee5d6' },
    ]},
  ];
  const BEAM_CONFIGS = PHASES.flatMap(p => p.beams);

  const BEFORE_TEXTS = ['Designer queue','Dev dependency','Builder lock-in','Every change = a brief','Updates take days','No site ownership'];
  const AFTER_TEXTS  = ['Edit in minutes','Ship it yourself','Own your code','Self-serve edits','Same-day updates','Full ownership'];
  const HOLD_AFTER = 6000;
  let flipState = 'before';

  function flipPills(toState) {
    if (flipState === toState) return;
    flipState = toState;
    const label = document.getElementById('pillStateLabel');
    const texts = toState === 'after' ? AFTER_TEXTS : BEFORE_TEXTS;
    if (toState === 'after') {
      label.textContent = 'After';
      label.style.background = 'rgba(46,229,214,0.12)';
      label.style.borderColor = 'rgba(46,229,214,0.3)';
      label.style.color = '#2ee5d6';
    } else {
      label.textContent = 'Before';
      label.style.background = 'rgba(255,100,80,0.15)';
      label.style.borderColor = 'rgba(255,100,80,0.3)';
      label.style.color = 'rgba(255,130,110,0.9)';
    }
    const sb = document.getElementById('cardStatBuilder');
    const sd = document.getElementById('cardStatDeploy');
    const sc = document.getElementById('cardStatCost');
    if (toState === 'after') {
      if (sb) { sb.textContent = 'Your stack'; sb.style.color = '#2ee5d6'; }
      if (sd) { sd.textContent = 'Same day';  sd.style.color = '#2ee5d6'; }
      if (sc) { sc.textContent = 'As needed'; sc.style.color = '#2ee5d6'; }
    } else {
      if (sb) { sb.textContent = 'Webflow';  sb.style.color = '#1a1a1a'; }
      if (sd) { sd.textContent = '3–5 days'; sd.style.color = '#dc2626'; }
      if (sc) { sc.textContent = '$$/hr';    sc.style.color = '#dc2626'; }
    }
    texts.forEach((text, i) => {
      setTimeout(() => {
        const pill = document.getElementById('auditPill' + i);
        if (!pill) return;
        const span = pill.querySelector('.pill-text');
        const dot  = pill.querySelector('.pill-dot');
        span.style.transform = 'translateY(-120%)';
        span.style.opacity = '0';
        setTimeout(() => {
          span.textContent = text;
          span.style.transition = 'none';
          span.style.transform = 'translateY(120%)';
          span.style.opacity = '0';
          span.getBoundingClientRect();
          span.style.transition = 'transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease';
          span.style.transform = 'translateY(0)';
          span.style.opacity = '1';
          if (toState === 'after') {
            dot.classList.replace('pill-dot--before','pill-dot--after');
            pill.classList.add('is-after');
          } else {
            dot.classList.replace('pill-dot--after','pill-dot--before');
            pill.classList.remove('is-after');
          }
        }, 180);
      }, i * 80);
    });
  }

  let CYCLE = 10000, flipPoint = 5000, logoRevealT = 6000, ctaRevealT = 7500;

  function recomputeCycle() {
    let cursor = 0;
    PHASES.forEach(phase => {
      const maxTravel = Math.max(...phase.beams.map(b => (b._total || 200) / SPEED));
      phase.startMs    = cursor;
      phase.durationMs = maxTravel + (phase.beams.length - 1) * STAGGER;
      cursor += phase.durationMs;
    });
    flipPoint   = PHASES[1].startMs + PHASES[1].durationMs;
    logoRevealT = PHASES[2].startMs + (PHASES[2].beams[0]._total || 200) / SPEED;
    ctaRevealT  = PHASES[3].startMs + (PHASES[3].beams[0]._total || 200) / SPEED;
    CYCLE       = PHASES[3].startMs + PHASES[3].durationMs + HOLD_AFTER + PAUSE;
  }

  let cycleStart = performance.now(), lastFlipState = '', logoVisible = false, ctaVisible = false;

  function setLogoVisible(v) {
    if (logoVisible === v) return;
    logoVisible = v;
    const blocked = document.getElementById('blockedNode');
    const logo    = document.getElementById('fosLogo');
    blocked.style.opacity   = v ? '0' : '1';
    blocked.style.transform = v ? 'scale(0.5)' : 'scale(1)';
    logo.style.opacity      = v ? '1' : '0';
    logo.style.transform    = v ? 'scale(1)' : 'scale(0.6)';
  }

  let chatTimers = [];
  function clearChatTimers() { chatTimers.forEach(clearTimeout); chatTimers = []; }

  function setCtaVisible(v) {
    if (ctaVisible === v) return;
    ctaVisible = v;
    const cta = document.getElementById('migrateCta');
    if (!v) {
      cta.style.opacity   = '0';
      cta.style.transform = 'translateX(14px)';
      clearChatTimers();
      const typing = document.getElementById('chatTyping');
      const status = document.getElementById('chatStatus');
      const btn    = document.getElementById('chatSendBtn');
      if (typing) typing.textContent = '';
      if (status) status.innerHTML  = '';
      if (btn)    btn.style.background = '#e8e8e8';
      return;
    }
    cta.style.opacity   = '1';
    cta.style.transform = 'translateX(0)';
    const command  = 'Add a pricing page';
    const statuses = [
      { text:'Making changes…',     color:'#888'    },
      { text:'Updating your site…', color:'#f59e0b' },
      { text:'Deploying…',          color:'#3b82f6' },
      { text:'✓ Done',              color:'#2ee5d6' },
    ];
    const typingEl = document.getElementById('chatTyping');
    const statusEl = document.getElementById('chatStatus');
    const btnEl    = document.getElementById('chatSendBtn');
    let i = 0;
    function typeNext() {
      if (i <= command.length) {
        if (typingEl) typingEl.textContent = command.slice(0, i);
        i++;
        chatTimers.push(setTimeout(typeNext, 60));
      } else {
        chatTimers.push(setTimeout(() => {
          if (btnEl) btnEl.style.background = '#2ee5d6';
          chatTimers.push(setTimeout(() => {
            if (typingEl) typingEl.textContent = '';
            if (btnEl)    btnEl.style.background = '#e8e8e8';
            statuses.forEach((s, idx) => {
              chatTimers.push(setTimeout(() => {
                if (statusEl) statusEl.innerHTML = '<span style="color:' + s.color + ';font-weight:600;">' + s.text + '</span>';
              }, idx * 700));
            });
          }, 300));
        }, 200));
      }
    }
    chatTimers.push(setTimeout(typeNext, 400));
  }

  function makePath(stroke, sw, da, op, blur) {
    const svg = document.getElementById('heroSvg');
    const p = document.createElementNS('http://www.w3.org/2000/svg','path');
    p.setAttribute('fill','none');
    p.setAttribute('stroke', stroke);
    p.setAttribute('stroke-width', sw);
    p.setAttribute('stroke-linecap','round');
    if (da) p.setAttribute('stroke-dasharray', da);
    if (op != null) p.setAttribute('opacity', op);
    if (blur) p.style.filter = 'blur(' + blur + 'px)';
    svg.appendChild(p);
    return p;
  }

  const isMobile = () => window.innerWidth <= 1100;

  function elCenter(el, heroRect, edge) {
    const r = el.getBoundingClientRect();
    if (isMobile()) {
      return { x: r.left + r.width/2 - heroRect.left, y: (edge==='bottom'?r.bottom:r.top) - heroRect.top };
    }
    return { x: (edge==='right'?r.right:r.left) - heroRect.left, y: r.top + r.height/2 - heroRect.top };
  }

  function bezierD(x1,y1,x2,y2) {
    if (isMobile()) {
      const dy = (y2-y1)*0.5;
      return 'M '+x1+' '+y1+' C '+x1+' '+(y1+dy)+', '+x2+' '+(y2-dy)+', '+x2+' '+y2;
    }
    const dx = (x2-x1)*0.5;
    return 'M '+x1+' '+y1+' C '+(x1+dx)+' '+y1+', '+(x2-dx)+' '+y2+', '+x2+' '+y2;
  }

  let beamsInitialized = false;
  function drawAllBeams(resetCycle) {
    const svgEl = document.getElementById('heroSvg');
    const hero = document.getElementById('heroSection');
    if (!hero || !svgEl) return;
    const hr = hero.getBoundingClientRect();
    BEAM_CONFIGS.forEach(b => {
      const fromEl = document.getElementById(b.fromId);
      const toEl   = document.getElementById(b.toId);
      if (!fromEl || !toEl) return;
      const p1 = elCenter(fromEl, hr, isMobile() ? 'bottom' : 'right');
      const p2 = elCenter(toEl,   hr, isMobile() ? 'top'    : 'left');
      const d  = bezierD(p1.x, p1.y, p2.x, p2.y);
      b.rail.setAttribute('d', d);
      b.glow.setAttribute('d', d);
      b.sharp.setAttribute('d', d);
      const tmp = document.createElementNS('http://www.w3.org/2000/svg','path');
      tmp.setAttribute('d', d);
      svgEl.appendChild(tmp);
      const total = tmp.getTotalLength();
      svgEl.removeChild(tmp);
      const da = BL + ' ' + (total + BL*2);
      b.glow.setAttribute('stroke-dasharray', da);
      b.sharp.setAttribute('stroke-dasharray', da);
      b._total = total;
    });
    if (resetCycle || !beamsInitialized) {
      recomputeCycle();
      cycleStart = performance.now();
      beamsInitialized = true;
    }
  }

  window.addEventListener('resize', () => drawAllBeams(false));

  function animateBeams(now) {
    const cycleT  = (now - cycleStart) % CYCLE;
    const isAfter = cycleT >= flipPoint && cycleT < (CYCLE - PAUSE);
    if (isAfter && lastFlipState !== 'after')  { lastFlipState = 'after';  flipPills('after');  }
    if (!isAfter && lastFlipState !== 'before') { lastFlipState = 'before'; flipPills('before'); }
    setLogoVisible(isAfter && cycleT >= logoRevealT);
    setCtaVisible(isAfter && cycleT >= ctaRevealT);
    PHASES.forEach(phase => {
      const skip = (phase.beforeOnly && isAfter) || (phase.afterOnly && !isAfter);
      phase.beams.forEach((b, i) => {
        if (!b._total) return;
        const total     = b._total;
        const beamStart = phase.startMs + i * STAGGER;
        const travelTime = total / SPEED;
        const progress  = (cycleT - beamStart) / travelTime;
        const hide = skip || progress < 0 || progress > 1;
        if (hide) {
          b.glow.setAttribute('stroke-dashoffset',  BL + 1);
          b.sharp.setAttribute('stroke-dashoffset', BL + 1);
          b.rail.setAttribute('opacity', skip ? '0' : '0.25');
        } else {
          const offset = BL - progress * (total + BL*2);
          b.glow.setAttribute('stroke-dashoffset',  offset);
          b.sharp.setAttribute('stroke-dashoffset', offset);
          b.rail.setAttribute('opacity', '0.25');
        }
      });
    });
    requestAnimationFrame(animateBeams);
  }
  function initBeams() {
    const svg = document.getElementById('heroSvg');
    if (!svg) return;
    BEAM_CONFIGS.forEach(b => {
      b.rail  = makePath('rgba(180,160,220,0.25)', 1.2, '3 5', null, null);
      b.glow  = makePath(b.color, 10, null, 0.3, 5);
      b.sharp = makePath(b.color, 3, null, 1, null);
    });
    drawAllBeams(true);
    requestAnimationFrame(animateBeams);
  }

  function safeInitBeams() {
    initBeams();
    // On mobile, layout may shift after load — redraw paths without restarting the cycle
    setTimeout(() => drawAllBeams(false), 300);
    setTimeout(() => drawAllBeams(false), 800);
  }

  if (document.readyState === 'complete') {
    safeInitBeams();
  } else {
    window.addEventListener('load', safeInitBeams);
  }

  // ── Form handler ──────────────────────────────────────────────
  function showModal() {
    const modal = document.createElement('div');
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(10,2,26,0.7);display:flex;align-items:center;justify-content:center;z-index:9999;backdrop-filter:blur(4px)';
    modal.innerHTML = '<div style="background:#fff;border-radius:20px;padding:48px 40px;max-width:420px;text-align:center;margin:20px;"><div style="font-size:36px;margin-bottom:16px;">✓</div><h3 style="font-size:22px;font-weight:800;margin-bottom:10px;color:#1a1a1a;">Thanks!</h3><p style="font-size:14px;color:#666;margin-bottom:28px;line-height:1.6;">8 quick questions about your site so we can prep before we start.</p><a href="https://forms.gle/Xr7CmjGEB1Hsmd6y5" target="_blank" style="display:inline-block;background:#2ee5d6;color:#1a1a1a;padding:13px 28px;border-radius:50px;text-decoration:none;font-weight:800;font-size:14px;">Answer Questions →</a></div>';
    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
    document.body.appendChild(modal);
  }

  async function handleSubmit(email, buttonEl, formEl, company) {
    if (!email) {
      formEl.style.animation = 'shake 0.4s ease';
      setTimeout(() => formEl.style.animation = '', 400);
      return;
    }
    buttonEl.disabled = true;
    const orig = buttonEl.innerHTML;
    buttonEl.textContent = 'Sending...';
    try {
      const response = await fetch('/api/contact-insight-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Report signup', email, company, url: window.location.href })
      });
      if (response.ok) {
        buttonEl.textContent = '✓ Submitted';
        if (window.confetti) confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        setTimeout(showModal, 500);
        setTimeout(() => { buttonEl.disabled = false; buttonEl.innerHTML = orig; }, 3000);
      } else {
        buttonEl.textContent = 'Try again';
        buttonEl.disabled = false;
      }
    } catch(e) {
      buttonEl.textContent = 'Error - try again';
      buttonEl.disabled = false;
    }
  }

  const COMPANY = ${JSON.stringify(report.company)};

  document.getElementById('aiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const change = document.getElementById('aiChangeField').value.trim();
    const email  = document.getElementById('aiEmailField').value.trim();
    handleSubmit(email, document.getElementById('migrateBtn'), this, COMPANY + (change ? ' — ' + change : ''));
  });

  document.getElementById('ctaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    handleSubmit(document.getElementById('ctaEmailField').value.trim(), document.getElementById('ctaBtn'), this, COMPANY);
  });

  // ── GSAP heading animations ───────────────────────────────────
  window.addEventListener('load', () => {
    if (!window.gsap) return;

    const heroHeading = document.getElementById('heroHeading');
    heroHeading.innerHTML = heroHeading.textContent.trim().split(/\\s+/).map(w => '<span style="display:inline-block;">' + w + '</span>').join(' ');
    const words = heroHeading.querySelectorAll('span');
    const tl = gsap.timeline();
    words.forEach((el, i) => {
      tl.from(el, { duration: 0.8, opacity: 0, scale: i % 2 === 0 ? 0 : 2, force3D: true, ease: 'back.out(1.4)' }, i * 0.08);
    });

    const ctaHeading = document.getElementById('ctaHeading');
    ctaHeading.innerHTML = ctaHeading.textContent.trim().split(/\\s+/).map(w => '<span style="display:inline-block;">' + w + '</span>').join(' ');

    function playCtaAnim() {
      const ws = ctaHeading.querySelectorAll('span');
      gsap.killTweensOf(ws);
      const tl2 = gsap.timeline();
      ws.forEach((el, i) => {
        tl2.from(el, { duration: 0.8, opacity: 0, scale: i % 2 === 0 ? 0 : 2, force3D: true, ease: 'back.out(1.4)' }, i * 0.08);
      });
    }

    document.querySelector('nav a[href="#cta"]').addEventListener('click', function(e) {
      e.preventDefault();
      obs.disconnect();
      document.getElementById('cta').scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(playCtaAnim, 750);
    });

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { playCtaAnim(); obs.disconnect(); } });
    }, { threshold: 0.8 });
    obs.observe(ctaHeading);
  });
  // ── Scroll reveal ─────────────────────────────────────────────
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
})();
          `,
        }}
      />
    </>
  );
}
