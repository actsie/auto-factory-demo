import { growthReports, GrowthReport } from "@/data/growth-reports";
import { NextRequest } from "next/server";

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function signalClass(s: GrowthReport["experiments"][0]["signal"]) {
  return s === "High signal" ? "signal-high" : "signal-compounds";
}
function statusPill(status: string) {
  if (status === "Untapped") return "pill-untapped";
  if (status === "Partial") return "pill-partial";
  return "pill-long";
}
function scoreClass(score: number) {
  if (score >= 7) return "high";
  if (score >= 5) return "medium";
  return "low";
}
function badgeClass(signal: string) {
  if (signal === "Hot") return "badge-hot";
  if (signal === "High") return "badge-high";
  return "badge-mid";
}
function barClass(signal: string) {
  return signal === "Hot" ? "bar-fill amber" : "bar-fill";
}

function buildHTML(r: GrowthReport): string {
  const communities = r.communities.map(c => `
    <div class="ct-row">
      <div class="ct-name"><a href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">${esc(c.name)}</a></div>
      <div><span class="ct-badge ${badgeClass(c.signal)}">${esc(c.signal)}</span></div>
      <div class="bar-wrap"><div class="bar-track"><div class="${barClass(c.signal)}" style="--bar-target:${c.activity}%"></div></div></div>
      <div class="ct-members">${esc(c.members)}</div>
    </div>`).join("");

  const channels = r.channels.map(c => `
    <div class="ch-row">
      <div><div class="ch-name">${esc(c.name)}</div><div class="ch-note">${esc(c.note)}</div></div>
      <div class="ch-status"><span class="status-pill ${statusPill(c.status)}">${esc(c.status)}</span></div>
      <div class="ch-score ${scoreClass(c.score)}">${c.score}</div>
    </div>`).join("");

  const competitors = r.competitors.map(c => {
    const doing = c.doing.map(d => `<span class="check">✓</span> ${esc(d)}`).join(" &nbsp;");
    const missing = c.isOpportunity
      ? esc(c.missing[0])
      : c.missing.map(m => `<span class="x">✗</span> ${esc(m)}`).join(" &nbsp;");
    return `
    <div class="comp-row${c.isOpportunity ? " opportunity" : ""}">
      <div class="comp-name">${esc(c.name)}</div>
      <div class="comp-doing">${doing}</div>
      <div class="comp-gap">${missing}</div>
    </div>`;
  }).join("");

  const experiments = r.experiments.map((exp, i) => {
    const blurred = i > 0 ? " blurred" : "";
    const tags = exp.tags.map((t, j) => `<span class="exp-tag${j === 0 ? " timeline" : ""}">${esc(t)}</span>`).join("");
    return `
    <div class="exp-card">
      <div class="exp-num${blurred}">${i + 1}</div>
      <div class="${blurred ? "blurred" : ""}">
        <div class="exp-title">${esc(exp.title)}</div>
        <div class="exp-desc">${esc(exp.desc)}</div>
        <div class="exp-tags">${tags}</div>
      </div>
      <div class="${blurred ? "blurred" : ""}">
        <span class="exp-signal ${signalClass(exp.signal)}">${esc(exp.signal)}</span>
      </div>
    </div>`;
  }).join("");

  const keywords = r.keywords.map(kw => {
    const cls = kw.type !== "stage" ? ` ${kw.type}` : "";
    return `<span class="kw${cls}">${esc(kw.text)}</span>`;
  }).join("");

  const stats = r.stats.map(s => `
    <div class="hl-stat">
      <div class="hl-number ${s.color}">${esc(s.number)}</div>
      <div class="hl-label">${esc(s.label)}</div>
    </div>`).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex,nofollow">
<title>Growth Insight Report: ${esc(r.company)}</title>
<link rel="icon" href="/icon.png" type="image/png">
<script src="https://app.cal.com/embed/embed.js" async></script>
<style>
  :root {
    --ink:#064420; --ink-2:#2d4a35; --ink-3:#6b7280; --ink-4:#9ca3af;
    --canvas:#FAF1E6; --surface:#FDFAF6; --surface-up:#FDFAF6;
    --sage:#E4EFE7;
    --border:rgba(6,68,32,0.08); --border-soft:rgba(6,68,32,0.05); --border-hard:rgba(6,68,32,0.14);
    --amber:#92400e; --amber-mid:#d97706; --amber-bg:#fef3c7; --amber-line:#fde68a;
    --blue:#1d4ed8; --blue-bg:#eff6ff; --blue-line:#bfdbfe;
    --green:#064420; --green-bg:#E4EFE7; --green-line:#c2d9c8;
    --red:#991b1b; --red-bg:#fef2f2;
    --shadow-card:0 0 0 0.5px rgba(6,68,32,0.05),0 1px 2px rgba(6,68,32,0.05),0 2px 4px rgba(6,68,32,0.04),0 4px 12px rgba(6,68,32,0.03);
    --shadow-soft:0 0 0 0.5px rgba(6,68,32,0.04),0 1px 3px rgba(6,68,32,0.04),0 2px 6px rgba(6,68,32,0.02);
    --radius:10px; --radius-sm:6px;
  }
  *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
  button{font-family:inherit;font-size:inherit;border:none;cursor:pointer;background:none}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif;background:linear-gradient(180deg,var(--canvas) 0%,var(--surface) 40%,var(--sage) 100%);background-attachment:fixed;color:var(--ink);line-height:1.6;-webkit-font-smoothing:antialiased}
  nav{background:rgba(253,250,246,0.85);border-bottom:1px solid var(--border);padding:14px 40px;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:100;backdrop-filter:blur(10px)}
  .nav-brand{font-size:13px;font-weight:600;color:var(--ink);letter-spacing:-0.2px}
  .nav-brand span{color:var(--ink-3);font-weight:400}
  .nav-cta{background:#064420;color:#fff;padding:7px 16px;border-radius:var(--radius-sm);font-size:13px;font-weight:500;text-decoration:none;letter-spacing:-0.1px;transition:opacity 0.15s ease;position:relative;overflow:hidden}
  .doc-header{max-width:860px;margin:0 auto;padding:56px 40px 40px;border-bottom:1px solid var(--border)}
  .doc-label{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--ink-4);margin-bottom:20px}
  .doc-company{font-size:38px;font-weight:700;letter-spacing:-1.2px;line-height:1.05;color:var(--ink);margin-bottom:10px}
  .doc-company em{font-style:normal;color:var(--amber-mid)}
  .doc-sub{font-size:15px;color:var(--ink-3);margin-bottom:28px;max-width:520px;line-height:1.5}
  .doc-meta{display:flex;gap:24px;flex-wrap:wrap}
  .doc-meta-item{font-size:12px;color:var(--ink-4)}
  .doc-meta-item strong{color:var(--ink-2);font-weight:600}
  .headline-stats{max-width:860px;margin:0 auto;padding:36px 40px;display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border);border-bottom:1px solid var(--border)}
  .hl-stat{background:var(--surface);padding:28px 32px}
  .hl-number{font-size:48px;font-weight:700;letter-spacing:-2px;line-height:1;margin-bottom:8px;font-variant-numeric:tabular-nums}
  .hl-number.amber{color:var(--amber-mid)} .hl-number.blue{color:var(--blue)} .hl-number.ink{color:var(--ink)}
  .hl-label{font-size:13px;color:var(--ink-3);line-height:1.4;max-width:160px}
  main{max-width:860px;margin:0 auto;padding:48px 40px 80px}
  .section{margin-bottom:56px}
  .section-eyebrow{display:flex;align-items:center;gap:12px;margin-bottom:14px}
  .section-num{font-size:11px;font-weight:700;letter-spacing:1px;color:var(--ink-4);text-transform:uppercase;font-variant-numeric:tabular-nums}
  .section-rule{flex:1;height:1px;background:var(--border)}
  .section-title{font-size:20px;font-weight:700;letter-spacing:-0.4px;margin-bottom:4px;color:var(--ink)}
  .section-desc{font-size:14px;color:var(--ink-3);margin-bottom:20px}
  .callout{background:rgba(107,114,128,0.06);border:1px solid var(--border);border-radius:var(--radius);padding:14px 18px;margin-bottom:20px;font-size:14px;color:var(--ink-2);line-height:1.6;box-shadow:var(--shadow-soft)}
  .callout.amber{background:rgba(217,119,6,0.07);border-color:var(--amber-line)}
  .callout.blue{background:rgba(29,78,216,0.06);border-color:var(--blue-line)}
  .callout.green{background:rgba(22,163,74,0.06);border-color:var(--green-line)}
  .stat-row{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:16px}
  .stat-card{background:var(--surface-up);border:1px solid var(--border);border-radius:var(--radius);padding:20px 22px;box-shadow:var(--shadow-card)}
  .stat-card-label{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:var(--ink-4);margin-bottom:8px}
  .stat-card-value{font-size:32px;font-weight:700;letter-spacing:-1px;line-height:1;margin-bottom:6px;font-variant-numeric:tabular-nums}
  .stat-card-value.blue{color:var(--blue)} .stat-card-value.amber{color:var(--amber-mid)}
  .stat-card-desc{font-size:13px;color:var(--ink-3);line-height:1.4}
  .community-table{background:var(--surface-up);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-card)}
  .ct-header{display:grid;grid-template-columns:1fr 72px 1fr 64px;padding:10px 20px;background:var(--surface);border-bottom:1px solid var(--border);font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:var(--ink-4);gap:12px;align-items:center}
  .ct-row{display:grid;grid-template-columns:1fr 72px 1fr 64px;padding:13px 20px;border-bottom:1px solid var(--border-soft);gap:12px;align-items:center}
  .ct-row:last-child{border-bottom:none}
  .ct-name{font-size:14px;font-weight:600;color:var(--ink)}
  .ct-name a{color:var(--blue);text-decoration:none}
  .ct-name a:hover{text-decoration:underline}
  .ct-badge{display:inline-block;font-size:10px;font-weight:600;padding:3px 9px;border-radius:20px;white-space:nowrap}
  .badge-hot{background:var(--amber-bg);color:var(--amber);border:1px solid var(--amber-line)}
  .badge-high{background:var(--green-bg);color:var(--green);border:1px solid var(--green-line)}
  .badge-mid{background:var(--surface);color:var(--ink-3);border:1px solid var(--border)}
  .bar-wrap{display:flex;align-items:center;gap:10px}
  .bar-track{flex:1;height:5px;background:var(--surface);border-radius:3px;overflow:hidden}
  .bar-fill{height:100%;border-radius:3px;background:var(--blue);width:0!important;transition:width 2s cubic-bezier(0.25,0.1,0.25,1)}
  .bar-fill.amber{background:var(--amber-mid)}
  .bar-fill.animated{width:var(--bar-target)!important}
  .ct-members{font-size:12px;color:var(--ink-3);text-align:right;font-variant-numeric:tabular-nums}
  .channel-list{background:var(--surface-up);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-card)}
  .ch-header{display:grid;grid-template-columns:1fr 120px 56px;padding:10px 20px;background:var(--surface);border-bottom:1px solid var(--border);font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:var(--ink-4);gap:16px;align-items:center}
  .ch-row{display:grid;grid-template-columns:1fr 120px 56px;padding:16px 20px;border-bottom:1px solid var(--border-soft);gap:16px;align-items:start}
  .ch-row:last-child{border-bottom:none}
  .ch-name{font-size:14px;font-weight:600;color:var(--ink);margin-bottom:3px}
  .ch-note{font-size:12px;color:var(--ink-3);line-height:1.4}
  .ch-status{padding-top:1px}
  .ch-score{font-size:22px;font-weight:700;letter-spacing:-0.5px;text-align:right;line-height:1;font-variant-numeric:tabular-nums;padding-top:1px}
  .ch-score.high{color:var(--amber-mid)} .ch-score.medium{color:var(--ink-3)} .ch-score.low{color:var(--ink-4)}
  .status-pill{display:inline-block;font-size:10px;font-weight:600;padding:3px 9px;border-radius:20px}
  .pill-untapped{background:var(--amber-bg);color:var(--amber);border:1px solid var(--amber-line)}
  .pill-partial{background:var(--blue-bg);color:var(--blue);border:1px solid var(--blue-line)}
  .pill-long{background:var(--surface);color:var(--ink-3);border:1px solid var(--border)}
  .comp-table{background:var(--surface-up);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-card)}
  .comp-header{display:grid;grid-template-columns:140px 1fr 1fr;padding:10px 20px;background:var(--surface);border-bottom:1px solid var(--border);font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:var(--ink-4);gap:16px}
  .comp-row{display:grid;grid-template-columns:140px 1fr 1fr;padding:14px 20px;border-bottom:1px solid var(--border-soft);gap:16px;align-items:start;font-size:13px}
  .comp-row:last-child{border-bottom:none}
  .comp-row.opportunity{background:var(--sage);border-top:1px solid var(--green-line)}
  .comp-name{font-weight:600;color:var(--ink)}
  .comp-doing{color:var(--ink-2)}
  .comp-doing .check{color:#16a34a}
  .comp-gap{color:var(--red);font-size:12px}
  .comp-gap .x{opacity:0.7}
  .comp-row.opportunity .comp-name{color:var(--green)}
  .comp-row.opportunity .comp-doing{color:#166534;font-weight:500}
  .comp-row.opportunity .comp-gap{color:var(--green);font-weight:600;font-size:12px}
  .exp-card{background:var(--surface-up);border:1px solid var(--border);border-radius:var(--radius);padding:22px 24px;margin-bottom:10px;display:grid;grid-template-columns:44px 1fr auto;gap:18px;align-items:start;box-shadow:var(--shadow-card)}
  .exp-num{width:44px;height:44px;background:#064420;color:#fff;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;letter-spacing:-0.5px;flex-shrink:0;font-variant-numeric:tabular-nums}
  .exp-title{font-size:15px;font-weight:700;margin-bottom:6px;letter-spacing:-0.2px}
  .exp-desc{font-size:13px;color:var(--ink-2);line-height:1.6;margin-bottom:10px}
  .exp-tags{display:flex;gap:6px;flex-wrap:wrap}
  .exp-tag{font-size:11px;font-weight:500;padding:3px 10px;border-radius:20px;background:var(--surface);color:var(--ink-3);border:1px solid var(--border)}
  .exp-tag.timeline{background:var(--blue-bg);color:var(--blue);border-color:var(--blue-line)}
  .exp-signal{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;padding:4px 10px;border-radius:var(--radius-sm);white-space:nowrap}
  .signal-high{background:var(--amber-bg);color:var(--amber);border:1px solid var(--amber-line)}
  .signal-compounds{background:var(--surface);color:var(--ink-3);border:1px solid var(--border)}
  .exp-unlock{background:var(--surface-up);border:1px solid var(--border-hard);border-radius:var(--radius);padding:36px 28px 32px;margin-top:4px;display:flex;flex-direction:column;align-items:center;text-align:center;box-shadow:var(--shadow-card)}
  .exp-unlock-title{font-size:16px;font-weight:700;color:var(--ink);letter-spacing:-0.3px;margin-bottom:8px}
  .exp-unlock-sub{font-size:14px;color:var(--ink-3);line-height:1.5;max-width:400px;margin-bottom:20px}
  .exp-unlock-btn{display:inline-block;background:var(--amber-mid);color:#fff;font-size:14px;font-weight:600;padding:11px 28px;border-radius:var(--radius-sm);text-decoration:none;white-space:nowrap;letter-spacing:-0.1px;transition:opacity 0.15s ease;position:relative;overflow:hidden}
  .keyword-cloud{background:var(--surface-up);border:1px solid var(--border);border-radius:var(--radius);padding:22px;display:flex;flex-wrap:wrap;gap:7px;box-shadow:var(--shadow-card)}
  .kw{font-size:13px;font-weight:500;padding:6px 13px;border-radius:20px;border:1px solid var(--border);color:var(--ink-2);background:var(--surface)}
  .kw.trigger{background:var(--amber-bg);border-color:var(--amber-line);color:var(--amber)}
  .kw.pain{background:var(--blue-bg);border-color:var(--blue-line);color:var(--blue)}
  .kw.blurred{filter:blur(4px);user-select:none;pointer-events:none;opacity:0.7}
  .kw-legend{display:flex;gap:20px;margin-top:12px;font-size:11px;color:var(--ink-4);align-items:center}
  .kw-legend-dot{width:10px;height:10px;border-radius:3px;display:inline-block;margin-right:5px}
  .cta-section{background:#064420;border-radius:14px;padding:48px 44px;text-align:center;margin-top:48px}
  .cta-eyebrow{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--amber-mid);margin-bottom:16px}
  .cta-title{font-size:28px;font-weight:700;color:#fff;letter-spacing:-0.7px;line-height:1.2;margin-bottom:12px}
  .cta-sub{font-size:15px;color:#94a3b8;margin-bottom:32px;max-width:460px;margin-left:auto;margin-right:auto;line-height:1.6}
  .cta-btn{display:inline-block;background:#fff;color:var(--ink);padding:13px 30px;border-radius:var(--radius-sm);font-size:14px;font-weight:600;text-decoration:none;letter-spacing:-0.2px;transition:opacity 0.15s ease;position:relative;overflow:hidden}
  footer{text-align:center;padding:28px 40px;font-size:12px;color:var(--ink-4);border-top:1px solid var(--border)}
  footer a{color:var(--ink-4)}
  .divider{height:1px;background:var(--border);margin:0 0 48px}
  .blurred{filter:blur(4px);user-select:none;pointer-events:none;opacity:0.7}
  .btn-ripple{position:absolute;width:600px;height:600px;border-radius:50%;transform:translate(-50%,-50%) scale(0);transition:transform 0.35s cubic-bezier(0.4,0,0.2,1);opacity:1;pointer-events:none;z-index:0}
  .btn-ripple.active{transform:translate(-50%,-50%) scale(1)}
  @keyframes slideIn{0%{opacity:0;transform:translateY(32px)}100%{opacity:1;transform:translateY(0)}}
  .anim-ready{opacity:0}
  .anim-settle{animation:slideIn 0.5s cubic-bezier(0.22,1,0.36,1) forwards}
  @media(max-width:680px){
    nav{padding:12px 20px}
    .doc-header{padding:36px 20px 28px}
    .doc-company{font-size:28px}
    .headline-stats{padding:0;grid-template-columns:1fr;gap:0}
    .hl-stat{padding:20px 20px;border-bottom:1px solid var(--border)}
    .hl-number{font-size:36px;letter-spacing:-1px}
    .hl-label{font-size:13px;max-width:100%}
    main{padding:36px 20px 60px}
    .stat-row{grid-template-columns:1fr}
    .ct-header,.ct-row{grid-template-columns:1fr 72px 52px}
    .ct-row .bar-wrap{display:none}
    .ct-header>div:nth-child(3){display:none}
    .ch-header,.ch-row{grid-template-columns:1fr 90px}
    .ch-score{display:none!important}
    .comp-header{display:none}
    .comp-row{grid-template-columns:1fr;gap:8px;padding:16px 20px}
    .comp-name{font-size:14px;font-weight:700;padding-bottom:4px;border-bottom:1px solid var(--border-soft)}
    .comp-doing{font-size:12px}
    .comp-gap{display:block;font-size:12px}
    .exp-card{grid-template-columns:38px 1fr}
    .exp-signal{display:none}
    .cta-section{padding:36px 20px}
    .cta-title{font-size:22px}
  }
</style>
</head>
<body>
<nav>
  <div class="nav-brand">growth<span>audit</span> / ${esc(r.company)}</div>
  <button data-cal-link="schedule.fos/30min" data-cal-config='{"layout":"month_view"}' class="nav-cta">Schedule a call</button>
</nav>
<div class="doc-header">
  <div class="doc-label">Growth Insight Report</div>
  <div class="doc-company">Growth opportunities<br>for <em>${esc(r.company)}</em></div>
  <p class="doc-sub">Where you can move first, and what your main competitors are still ignoring.</p>
  <div class="doc-meta">
    <div class="doc-meta-item">Industry <strong>${esc(r.industry)}</strong></div>
    <div class="doc-meta-item">Prepared by <strong>Mai</strong></div>
    <div class="doc-meta-item">Date <strong>${esc(r.date)}</strong></div>
  </div>
</div>
<div class="headline-stats">${stats}</div>
<main>
  <div class="section">
    <div class="section-eyebrow"><span class="section-num">01</span><div class="section-rule"></div></div>
    <div class="section-title">Missed Buyer Conversations</div>
    <div class="section-desc">Where your buyers are already talking. Nobody from your space is showing up.</div>
    <div class="callout amber">${esc(r.communitiesCallout)}</div>
    <div class="stat-row" style="grid-template-columns:1fr">
      <div class="stat-card">
        <div class="stat-card-label">Combined community reach</div>
        <div class="stat-card-value blue" id="community-count" data-target="${esc(r.communityReach)}">0M+</div>
        <div class="stat-card-desc">${esc(r.communityReachLabel)}</div>
      </div>
    </div>
    <div class="community-table">
      <div class="ct-header"><div>Community</div><div>Signal</div><div>Activity</div><div style="text-align:right">Members</div></div>
      ${communities}
    </div>
  </div>
  <div class="divider"></div>
  <div class="section">
    <div class="section-eyebrow"><span class="section-num">02</span><div class="section-rule"></div></div>
    <div class="section-title">Channel Opportunity Map</div>
    <div class="section-desc">Which channels fit your product, and which to run first.</div>
    <div class="callout blue">${esc(r.channelsCallout)}</div>
    <div class="channel-list">
      <div class="ch-header"><div>Channel</div><div>Status</div><div style="text-align:right">Score</div></div>
      ${channels}
    </div>
  </div>
  <div class="divider"></div>
  <div class="section">
    <div class="section-eyebrow"><span class="section-num">03</span><div class="section-rule"></div></div>
    <div class="section-title">What Competitors Are (and Aren't) Doing</div>
    <div class="section-desc">Where the gaps are, and where you can show up first.</div>
    <div class="callout amber">${esc(r.competitorsCallout)}</div>
    <div class="comp-table">
      <div class="comp-header"><div>Competitor</div><div>What they're doing</div><div>What they're missing</div></div>
      ${competitors}
    </div>
  </div>
  <div class="divider"></div>
  <div class="section">
    <div class="section-eyebrow"><span class="section-num">04</span><div class="section-rule"></div></div>
    <div class="section-title">The 3 Experiments to Run First</div>
    <div class="section-desc">Ordered by what gives you something real to learn inside 30 days.</div>
    <div class="callout">${esc(r.experimentsCallout)}</div>
    ${experiments}
    <div class="exp-unlock">
      <div class="exp-unlock-title">${esc(r.experimentsUnlockTitle)}</div>
      <div class="exp-unlock-sub">${esc(r.experimentsUnlockSub)}</div>
      <button data-cal-link="schedule.fos/30min" data-cal-config='{"layout":"month_view"}' class="exp-unlock-btn">Schedule a call</button>
    </div>
  </div>
  <div class="divider"></div>
  <div class="section">
    <div class="section-eyebrow"><span class="section-num">05</span><div class="section-rule"></div></div>
    <div class="section-title">Buyer Signal Keywords</div>
    <div class="section-desc">${esc(r.keywordsDesc)}</div>
    <div class="keyword-cloud">${keywords}</div>
    <div class="kw-legend">
      <div><span class="kw-legend-dot" style="background:var(--amber-bg);border:1px solid var(--amber-line)"></span>Trigger signal</div>
      <div><span class="kw-legend-dot" style="background:var(--blue-bg);border:1px solid var(--blue-line)"></span>Pain signal</div>
      <div><span class="kw-legend-dot" style="background:var(--surface);border:1px solid var(--border)"></span>Stage signal</div>
    </div>
  </div>
  <div class="cta-section" id="book">
    <div class="cta-eyebrow">Let's chat</div>
    <div class="cta-title">${esc(r.ctaTitle)}</div>
    <div class="cta-sub">${esc(r.ctaSub)}</div>
    <button data-cal-link="schedule.fos/30min" data-cal-config='{"layout":"month_view"}' class="cta-btn">Schedule a strategy call →</button>
  </div>
</main>
<footer>
  <div>Growth Audit prepared for ${esc(r.company)} · ${esc(r.date)} · Data from Reddit, LinkedIn, and market research</div>
  <div style="margin-top:4px">Prepared by Mai</div>
</footer>
<script>
  function setupRipple(btn,fillColor){
    btn.style.overflow='hidden';
    Array.from(btn.childNodes).forEach(node=>{
      if(node.nodeType===Node.TEXT_NODE&&node.textContent.trim()){
        const s=document.createElement('span');
        s.style.cssText='position:relative;z-index:1;pointer-events:none;';
        s.textContent=node.textContent;
        btn.replaceChild(s,node);
      }else if(node.nodeType===Node.ELEMENT_NODE&&!node.classList.contains('btn-ripple')){
        node.style.position='relative';node.style.zIndex='1';
      }
    });
    const ripple=document.createElement('span');
    ripple.className='btn-ripple';ripple.style.background=fillColor;btn.appendChild(ripple);
    btn.addEventListener('mouseenter',e=>{
      const r=btn.getBoundingClientRect();
      ripple.style.left=(e.clientX-r.left)+'px';ripple.style.top=(e.clientY-r.top)+'px';
      ripple.classList.add('active');
    });
    btn.addEventListener('mousemove',e=>{
      if(!ripple.classList.contains('active')){
        const r=btn.getBoundingClientRect();
        ripple.style.left=(e.clientX-r.left)+'px';ripple.style.top=(e.clientY-r.top)+'px';
      }
    });
    btn.addEventListener('mouseleave',()=>{
      ripple.style.transition='none';ripple.classList.remove('active');
      requestAnimationFrame(()=>{ripple.style.transition='';});
    });
  }
  (function(C,A,L){let p=function(a,ar){a.q.push(ar)};let d=C.document;C.Cal=C.Cal||function(){let cal=C.Cal;let ar=arguments;if(!cal.loaded){cal.ns={};cal.q=cal.q||[];d.head.appendChild(d.createElement("script")).src=A;cal.loaded=true}if(ar[0]===L){const api=function(){p(api,arguments)};const namespace=ar[1];api.q=api.q||[];typeof namespace==="string"&&(cal.ns[namespace]=api)&&p(api,ar);return}p(cal,ar)};"object"!==typeof C.Cal.ns&&(C.Cal.ns={});const api=C.Cal.ns[""]=C.Cal;api.q=[];p(api,["init",{origin:"https://cal.com"}])})(window,"https://app.cal.com/embed/embed.js","init");
  Cal("ui",{"hideEventTypeDetails":false,"layout":"month_view"});
  document.querySelectorAll('.nav-cta').forEach(b=>setupRipple(b,'#d97706'));
  document.querySelectorAll('.exp-unlock-btn').forEach(b=>setupRipple(b,'#0f1117'));
  document.querySelectorAll('.cta-btn').forEach(b=>setupRipple(b,'#d97706'));
  const communitySection=document.querySelector('.community-table');
  const countEl=document.getElementById('community-count');
  let communityAnimated=false;
  const communityObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting&&!communityAnimated){
        communityAnimated=true;
        const target=parseInt(countEl.dataset.target,10);
        const duration=2000;const start=performance.now();
        function easeIn(t){return t*t*t;}
        function tick(now){
          const elapsed=Math.min(now-start,duration);
          const progress=easeIn(elapsed/duration);
          countEl.textContent=Math.floor(progress*target)+'M+';
          if(elapsed<duration)requestAnimationFrame(tick);
          else countEl.textContent=target+'M+';
        }
        requestAnimationFrame(tick);
        document.querySelectorAll('.community-table .bar-fill').forEach((bar,i)=>{
          setTimeout(()=>bar.classList.add('animated'),i*120);
        });
        communityObserver.unobserve(entry.target);
      }
    });
  },{threshold:0.2});
  if(communitySection)communityObserver.observe(communitySection);
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('anim-settle');observer.unobserve(entry.target);}
    });
  },{threshold:0.07});
  const statEls=document.querySelectorAll('.hl-stat');
  const statsParent=document.querySelector('.headline-stats');
  if(statsParent){
    const statsObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          statEls.forEach((el,i)=>{el.classList.add('anim-ready');setTimeout(()=>el.classList.add('anim-settle'),i*120);});
          statsObserver.unobserve(entry.target);
        }
      });
    },{threshold:0.1});
    statsObserver.observe(statsParent);
  }
  document.querySelectorAll('.doc-header,.callout,.stat-card,.community-table,.channel-list,.comp-table,.exp-card,.exp-unlock,.keyword-cloud,.cta-section').forEach(el=>{
    el.classList.add('anim-ready');observer.observe(el);
  });
</script>
</body>
</html>`;
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ clientId: string }> }
) {
  const { clientId } = await params;
  const r = growthReports.find((g) => g.id === clientId);
  if (!r) return new Response("Not found", { status: 404 });

  return new Response(buildHTML(r), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
