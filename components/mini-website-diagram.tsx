"use client";
import { useEffect } from "react";

const BL = 4, SPEED = 0.18, STAGGER = 80, PAUSE = 800, HOLD_AFTER = 4000;

export default function MiniWebsiteDiagram() {
  useEffect(() => {
    const svg = document.getElementById("miniHeroSvg") as unknown as SVGSVGElement;
    const container = document.getElementById("miniDiagramContainer") as HTMLElement;
    if (!svg || !container) return;

    const BEFORE_TEXTS = ["Designer queue", "Dev dependency", "Builder lock-in", "Updates take days"];
    const AFTER_TEXTS  = ["Edit in minutes", "Ship it yourself", "Own your code",  "Same-day updates"];

    let flipState = "before";
    let logoVisible = false;
    let ctaVisible = false;
    let chatTimers: ReturnType<typeof setTimeout>[] = [];

    function makePath(stroke: string, sw: number, da?: string, op?: number, blur?: number) {
      const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("fill", "none");
      p.setAttribute("stroke", stroke);
      p.setAttribute("stroke-width", String(sw));
      p.setAttribute("stroke-linecap", "round");
      if (da) p.setAttribute("stroke-dasharray", da);
      if (op != null) p.setAttribute("opacity", String(op));
      if (blur) p.style.filter = `blur(${blur}px)`;
      svg.appendChild(p);
      return p;
    }

    interface Beam {
      fromId: string; toId: string; color: string;
      rail?: SVGPathElement; glow?: SVGPathElement; sharp?: SVGPathElement; _total?: number;
    }
    interface Phase {
      beams: Beam[]; beforeOnly?: boolean; afterOnly?: boolean;
      startMs?: number; durationMs?: number;
    }

    const PHASES: Phase[] = [
      { beams: [
        { fromId: "miniBefore", toId: "miniPill0", color: "#2ee5d6" },
        { fromId: "miniBefore", toId: "miniPill1", color: "#5bbfba" },
        { fromId: "miniBefore", toId: "miniPill2", color: "#3dd9cc" },
        { fromId: "miniBefore", toId: "miniPill3", color: "#5bbfba" },
      ]},
      { beforeOnly: true, beams: [
        { fromId: "miniPill0", toId: "miniBlocked", color: "rgba(255,120,100,0.8)" },
        { fromId: "miniPill1", toId: "miniBlocked", color: "rgba(255,110,90,0.7)"  },
        { fromId: "miniPill2", toId: "miniBlocked", color: "rgba(255,120,100,0.8)" },
        { fromId: "miniPill3", toId: "miniBlocked", color: "rgba(255,110,90,0.7)"  },
      ]},
      { afterOnly: true, beams: [
        { fromId: "miniPill0", toId: "miniFos", color: "#2ee5d6" },
        { fromId: "miniPill1", toId: "miniFos", color: "#5bbfba" },
        { fromId: "miniPill2", toId: "miniFos", color: "#2ee5d6" },
        { fromId: "miniPill3", toId: "miniFos", color: "#5bbfba" },
      ]},
      { afterOnly: true, beams: [
        { fromId: "miniFos", toId: "miniAfter", color: "#2ee5d6" },
      ]},
    ];

    const BEAM_CONFIGS = PHASES.flatMap(p => p.beams);

    function isVertical() { return window.innerWidth < 960; }

    function elCenter(el: HTMLElement, cr: DOMRect, edge: string) {
      const r = el.getBoundingClientRect();
      if (isVertical()) {
        return { x: r.left + r.width / 2 - cr.left, y: (edge === "right" ? r.bottom : r.top) - cr.top };
      }
      return { x: (edge === "right" ? r.right : r.left) - cr.left, y: r.top + r.height / 2 - cr.top };
    }

    function bezierD(x1: number, y1: number, x2: number, y2: number) {
      if (isVertical()) {
        const dy = (y2 - y1) * 0.5;
        return `M ${x1} ${y1} C ${x1} ${y1+dy}, ${x2} ${y2-dy}, ${x2} ${y2}`;
      }
      const dx = (x2 - x1) * 0.5;
      return `M ${x1} ${y1} C ${x1+dx} ${y1}, ${x2-dx} ${y2}, ${x2} ${y2}`;
    }

    let beamsInitialized = false;
    let CYCLE = 8000, flipPoint = 4000, logoRevealT = 5000, ctaRevealT = 6000;
    let cycleStart = performance.now(), lastFlipState = "";

    function recomputeCycle() {
      let cursor = 0;
      PHASES.forEach(phase => {
        const maxTravel = Math.max(...phase.beams.map(b => (b._total || 150) / SPEED));
        phase.startMs    = cursor;
        phase.durationMs = maxTravel + (phase.beams.length - 1) * STAGGER;
        cursor += phase.durationMs;
      });
      flipPoint    = (PHASES[1].startMs || 0) + (PHASES[1].durationMs || 0);
      logoRevealT  = (PHASES[2].startMs || 0) + (PHASES[2].beams[0]._total || 150) / SPEED;
      ctaRevealT   = (PHASES[3].startMs || 0) + (PHASES[3].beams[0]._total || 150) / SPEED;
      CYCLE        = (PHASES[3].startMs || 0) + (PHASES[3].durationMs || 0) + HOLD_AFTER + PAUSE;
    }

    function drawAllBeams(resetCycle: boolean) {
      const cr = container.getBoundingClientRect();
      BEAM_CONFIGS.forEach(b => {
        const fromEl = document.getElementById(b.fromId);
        const toEl   = document.getElementById(b.toId);
        if (!fromEl || !toEl || !b.rail || !b.glow || !b.sharp) return;
        const p1 = elCenter(fromEl, cr, "right");
        const p2 = elCenter(toEl,   cr, "left");
        const d  = bezierD(p1.x, p1.y, p2.x, p2.y);
        [b.rail, b.glow, b.sharp].forEach(p => p.setAttribute("d", d));
        const tmp = document.createElementNS("http://www.w3.org/2000/svg", "path");
        tmp.setAttribute("d", d);
        svg.appendChild(tmp);
        const total = tmp.getTotalLength();
        svg.removeChild(tmp);
        const da = `${BL} ${total + BL * 2}`;
        b.glow.setAttribute("stroke-dasharray", da);
        b.sharp.setAttribute("stroke-dasharray", da);
        b._total = total;
      });
      if (resetCycle || !beamsInitialized) { recomputeCycle(); cycleStart = performance.now(); beamsInitialized = true; }
    }

    function setLogoVisible(v: boolean) {
      if (logoVisible === v) return;
      logoVisible = v;
      const blocked = document.getElementById("miniBlocked");
      const fos     = document.getElementById("miniFos");
      if (blocked) { blocked.style.opacity = v ? "0" : "1"; blocked.style.transform = v ? "scale(0.5)" : "scale(1)"; }
      if (fos)     { fos.style.opacity     = v ? "1" : "0"; fos.style.transform     = v ? "scale(1)"   : "scale(0.6)"; }
    }

    function clearChatTimers() { chatTimers.forEach(clearTimeout); chatTimers = []; }

    function setCtaVisible(v: boolean) {
      if (ctaVisible === v) return;
      ctaVisible = v;
      const afterCard = document.getElementById("miniAfter");
      if (!v) {
        if (afterCard) afterCard.style.opacity = "0.25";
        clearChatTimers();
        const t = document.getElementById("miniChatTyping");
        const s = document.getElementById("miniChatStatus");
        const b = document.getElementById("miniChatBtn");
        if (t) t.textContent = "";
        if (s) s.innerHTML = "";
        if (b) b.style.background = "#333";
        return;
      }
      if (afterCard) afterCard.style.opacity = "1";
      const command = "Add a pricing page";
      const statuses = [
        { text: "Making changes…", color: "#888" },
        { text: "Deploying…",      color: "#3b82f6" },
        { text: "✓ Done",          color: "rgb(13,148,136)" },
      ];
      const typingEl = document.getElementById("miniChatTyping");
      const statusEl = document.getElementById("miniChatStatus");
      const btnEl    = document.getElementById("miniChatBtn");
      let i = 0;
      function typeNext() {
        if (i <= command.length) {
          if (typingEl) typingEl.textContent = command.slice(0, i++);
          chatTimers.push(setTimeout(typeNext, 55));
        } else {
          chatTimers.push(setTimeout(() => {
            if (btnEl) btnEl.style.background = "#2ee5d6";
            chatTimers.push(setTimeout(() => {
              if (typingEl) typingEl.textContent = "";
              if (btnEl) btnEl.style.background = "#333";
              statuses.forEach((s, idx) => {
                chatTimers.push(setTimeout(() => {
                  if (statusEl) statusEl.innerHTML = `<span style="color:${s.color};font-weight:600;font-size:9px;">${s.text}</span>`;
                }, idx * 700));
              });
            }, 300));
          }, 200));
        }
      }
      chatTimers.push(setTimeout(typeNext, 400));
    }

    function flipPills(toState: string) {
      if (flipState === toState) return;
      flipState = toState;
      const label = document.getElementById("miniPillLabel");
      const texts = toState === "after" ? AFTER_TEXTS : BEFORE_TEXTS;
      if (label) {
        label.textContent = toState === "after" ? "After" : "Before";
        label.style.background   = toState === "after" ? "rgba(20,184,166,0.1)"   : "rgba(239,68,68,0.1)";
        label.style.borderColor  = toState === "after" ? "rgba(20,184,166,0.3)"   : "rgba(239,68,68,0.25)";
        label.style.color        = toState === "after" ? "rgb(13,148,136)"         : "rgb(220,60,60)";
      }
      const sb = document.getElementById("miniStatBuilder");
      const sd = document.getElementById("miniStatDeploy");
      if (toState === "after") {
        if (sb) { sb.textContent = "Your stack"; sb.style.color = "rgb(13,148,136)"; }
        if (sd) { sd.textContent = "Same day";   sd.style.color = "rgb(13,148,136)"; }
      } else {
        if (sb) { sb.textContent = "Webflow";   sb.style.color = "#dc2626"; }
        if (sd) { sd.textContent = "3–5 days";  sd.style.color = "#dc2626"; }
      }
      texts.forEach((text, i) => {
        setTimeout(() => {
          const pill = document.getElementById(`miniPill${i}`);
          if (!pill) return;
          const span = pill.querySelector(".mpill-text") as HTMLElement;
          const dot  = pill.querySelector(".mpill-dot")  as HTMLElement;
          if (!span) return;
          span.style.transform = "translateY(-120%)"; span.style.opacity = "0";
          setTimeout(() => {
            span.textContent = text;
            span.style.transition = "none";
            span.style.transform  = "translateY(120%)"; span.style.opacity = "0";
            span.getBoundingClientRect();
            span.style.transition = "transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease";
            span.style.transform  = "translateY(0)"; span.style.opacity = "1";
            if (dot) dot.style.background = toState === "after" ? "rgb(20,184,166)" : "rgba(220,60,60,0.8)";
          }, 180);
        }, i * 80);
      });
    }

    let rafId: number;

    function animateBeams(now: number) {
      const cycleT  = (now - cycleStart) % CYCLE;
      const isAfter = cycleT >= flipPoint && cycleT < (CYCLE - PAUSE);
      if (isAfter  && lastFlipState !== "after")  { lastFlipState = "after";  flipPills("after");  }
      if (!isAfter && lastFlipState !== "before")  { lastFlipState = "before"; flipPills("before"); }
      setLogoVisible(isAfter && cycleT >= logoRevealT);
      setCtaVisible(isAfter  && cycleT >= ctaRevealT);
      PHASES.forEach(phase => {
        const skip = (phase.beforeOnly && isAfter) || (phase.afterOnly && !isAfter);
        phase.beams.forEach((b, i) => {
          if (!b._total || !b.glow || !b.sharp || !b.rail) return;
          const beamStart  = (phase.startMs || 0) + i * STAGGER;
          const travelTime = b._total / SPEED;
          const progress   = (cycleT - beamStart) / travelTime;
          const hide = skip || progress < 0 || progress > 1;
          if (hide) {
            b.glow.setAttribute("stroke-dashoffset",  String(BL + 1));
            b.sharp.setAttribute("stroke-dashoffset", String(BL + 1));
            b.rail.setAttribute("opacity", skip ? "0" : "0.25");
          } else {
            const offset = BL - progress * (b._total + BL * 2);
            b.glow.setAttribute("stroke-dashoffset",  String(offset));
            b.sharp.setAttribute("stroke-dashoffset", String(offset));
            b.rail.setAttribute("opacity", "0.25");
          }
        });
      });
      rafId = requestAnimationFrame(animateBeams);
    }

    function initBeams() {
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      BEAM_CONFIGS.forEach(b => {
        b.rail  = makePath("rgba(100,100,120,0.2)", 1,  "2 4", undefined, undefined);
        b.glow  = makePath(b.color, 7, undefined, 0.3, 4);
        b.sharp = makePath(b.color, 2, undefined, 1,   undefined);
      });
      drawAllBeams(true);
      rafId = requestAnimationFrame(animateBeams);
    }

    const handleResize = () => drawAllBeams(false);
    window.addEventListener("resize", handleResize);
    initBeams();
    setTimeout(() => drawAllBeams(false), 300);
    setTimeout(() => drawAllBeams(false), 800);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      clearChatTimers();
    };
  }, []);

  const beforeTexts = ["Designer queue", "Dev dependency", "Builder lock-in", "Updates take days"];

  return (
    <div style={{ flex: 1, minWidth: 0, overflow: "hidden", borderRadius: "12px" }}>
      <style>{`
        #miniDiagramContainer { flex-direction: row; align-items: center; }
        #miniPillsCol { flex-direction: column; width: 112px; }
        @media (max-width: 960px) {
          #miniDiagramContainer { flex-direction: column !important; align-items: center !important; gap: 10px !important; }
          #miniBefore, #miniAfter { width: 100% !important; max-width: 300px; }
          #miniPillsCol { flex-direction: row !important; flex-wrap: wrap !important; width: 100% !important; max-width: 300px; gap: 6px !important; }
          #miniPillsCol > div[id^="miniPill"] { width: calc(50% - 3px) !important; }
        }
      `}</style>
    <div
      id="miniDiagramContainer"
      style={{
        position: "relative",
        background: "transparent",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 10px",
        gap: "6px",
        overflow: "hidden",
      }}
    >
      <svg
        id="miniHeroSvg"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 2, overflow: "hidden" }}
      />

      {/* Before card */}
      <div id="miniBefore" style={{ position: "relative", flexShrink: 0, width: "100px", zIndex: 3 }}>
        <div style={{ background: "#fff", borderRadius: "8px", padding: "8px 10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "6px" }}>
            <div style={{ width: "18px", height: "18px", borderRadius: "4px", background: "#e8e8e8", flexShrink: 0 }} />
            <div>
              <div style={{ width: "40px", height: "5px", background: "#ddd", borderRadius: "3px", marginBottom: "3px" }} />
              <div style={{ width: "28px", height: "4px", background: "#eee", borderRadius: "2px" }} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8px", padding: "2px 0", borderBottom: "1px solid #f0f0f0", color: "#999" }}>
              <span>Platform</span>
              <span id="miniStatBuilder" style={{ fontWeight: 700, color: "#dc2626", transition: "color 0.4s ease" }}>Webflow</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8px", padding: "2px 0", color: "#999" }}>
              <span>Deploy</span>
              <span id="miniStatDeploy" style={{ fontWeight: 700, color: "#dc2626", transition: "color 0.4s ease" }}>3–5 days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pills */}
      <div id="miniPillsCol" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px", flexShrink: 0, zIndex: 3 }}>
        <div id="miniPillLabel" style={{ fontSize: "7px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "2px 6px", borderRadius: "20px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", color: "rgb(220,60,60)", transition: "all 0.4s ease", marginBottom: "2px" }}>Before</div>
        {beforeTexts.map((text, i) => (
          <div key={i} id={`miniPill${i}`} style={{ display: "flex", alignItems: "center", gap: "5px", background: "rgba(255,255,255,0.7)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "20px", padding: "3px 8px", width: "112px" }}>
            <div className="mpill-dot" style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgba(220,60,60,0.8)", flexShrink: 0, transition: "background 0.4s ease" }} />
            <span className="mpill-text" style={{ fontSize: "8px", color: "#444", display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease" }}>{text}</span>
          </div>
        ))}
      </div>

      {/* Node */}
      <div style={{ flexShrink: 0, position: "relative", width: "30px", height: "30px", zIndex: 3 }}>
        <div id="miniBlocked" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "rgba(255,235,235,0.95)", border: "2px solid rgba(220,60,60,0.35)", display: "flex", alignItems: "center", justifyContent: "center", transition: "opacity 0.4s ease, transform 0.4s ease" }}>
          <svg width="13" height="13" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="8" stroke="rgba(255,90,70,0.5)" strokeWidth="1.5"/>
            <line x1="7" y1="7" x2="15" y2="15" stroke="rgba(255,100,80,0.8)" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="15" y1="7" x2="7" y2="15" stroke="rgba(255,100,80,0.8)" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>
        <div id="miniFos" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#fff", border: "2px solid rgba(20,184,166,0.5)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 10px rgba(20,184,166,0.2)", opacity: 0, transform: "scale(0.6)", transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}>
          <img src="/assets/auto-factory.png" alt="FoS" style={{ width: "15px", height: "15px", borderRadius: "3px" }} />
        </div>
      </div>

      {/* After card */}
      <div id="miniAfter" style={{ flexShrink: 0, position: "relative", width: "100px", zIndex: 3, opacity: 0.25, transition: "opacity 0.5s ease" }}>
        <div style={{ background: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.15)" }}>
          <div style={{ padding: "6px 8px", borderBottom: "1px solid #f0f0f0", display: "flex", alignItems: "center", gap: "5px" }}>
            <div style={{ width: "18px", height: "18px", borderRadius: "4px", background: "#e8e8e8", flexShrink: 0 }} />
            <div>
              <div style={{ width: "40px", height: "5px", background: "#ddd", borderRadius: "3px", marginBottom: "3px" }} />
              <div style={{ width: "28px", height: "4px", background: "#eee", borderRadius: "2px" }} />
            </div>
          </div>
          <div style={{ padding: "5px 8px", height: "28px", overflow: "hidden" }}>
            <div id="miniChatStatus" style={{ fontSize: "9px", color: "#aaa" }}></div>
          </div>
          <div style={{ padding: "4px 6px", borderTop: "1px solid #f0f0f0", display: "flex", alignItems: "center", gap: "4px", background: "#fafafa" }}>
            <div style={{ flex: 1, background: "#fff", border: "1px solid #e8e8e8", borderRadius: "4px", padding: "3px 5px", fontSize: "8px", height: "16px", display: "flex", alignItems: "center", overflow: "hidden" }}>
              <span id="miniChatTyping" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}></span>
            </div>
            <div id="miniChatBtn" style={{ width: "16px", height: "16px", borderRadius: "4px", background: "#333", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.3s ease" }}>
              <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5h6M6 3l2 2-2 2" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
