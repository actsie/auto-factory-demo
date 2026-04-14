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

  if (!report) {
    notFound();
  }

  return (
    <>
      {/* Top bar */}
      <div style={{ background: "#1a1a1a", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="https://fountainofscale.com" style={{ fontSize: "15px", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="/assets/auto-factory.png"
            alt="Logo"
            style={{ width: "28px", height: "28px", display: "inline-block" }}
          />
          Fountain<span style={{ color: "#fff" }}>of Scale</span>
        </a>
        <a href="#cta" style={{ background: "#2ee5d6", color: "#1a1a1a", fontSize: "13px", fontWeight: 700, padding: "8px 18px", borderRadius: "6px", textDecoration: "none", cursor: "pointer", border: "none" }}>
          Start my migration
        </a>
      </div>

      {/* Hero */}
      <div style={{ background: "#1a1a1a", color: "#fff", padding: "56px 32px 48px", textAlign: "center" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2ee5d6", marginBottom: "16px" }}>Website Insight Report</div>
        <h1 style={{ fontSize: "32px", fontWeight: 800, lineHeight: "1.2", marginBottom: "12px", maxWidth: "620px", margin: "0 auto 12px" }}>
          Here's where you're losing time.
        </h1>
        <p style={{ fontSize: "16px", color: "#aaa", maxWidth: "500px", margin: "0 auto 32px" }}>
          We analyzed {report.company}'s site. Here's what we'd fix first.
        </p>

        <div style={{ display: "inline-flex", alignItems: "center", gap: "16px", background: "#2a2a2a", border: "1px solid #333", borderRadius: "10px", padding: "16px 24px", textAlign: "left" }}>
          <div style={{ minWidth: "44px", height: "44px", background: report.logoNeedsBg ? "#fff" : "transparent", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "#1a1a1a", padding: report.logoNeedsBg ? "8px 12px" : "0" }}>
            <img src={report.logo} alt={report.company} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
          </div>
          <div>
            <div style={{ fontSize: "11px", color: "#666", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>Insight Report for</div>
            <div style={{ fontSize: "16px", fontWeight: 700, color: "#fff" }}>{report.company}</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "32px", justifyContent: "center", marginTop: "24px", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "11px", color: "#666", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>Client URL</div>
            <div style={{ fontSize: "13px", color: "#ccc", fontWeight: 500 }}>{report.url}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "11px", color: "#666", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>Industry</div>
            <div style={{ fontSize: "13px", color: "#ccc", fontWeight: 500 }}>{report.industry}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "11px", color: "#666", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>Website Pages</div>
            <div style={{ fontSize: "13px", color: "#ccc", fontWeight: 500 }}>{report.pages}</div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Opportunity strip */}
        <div style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: "12px", padding: "32px", margin: "32px 0", textAlign: "center" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: "8px" }}>Immediate Opportunity</div>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "6px" }}>Every change to your site goes through someone else first</h2>
          <p style={{ fontSize: "14px", color: "#666", maxWidth: "480px", margin: "0 auto" }}>
            Updates sitting in a queue. Designer availability. Briefs that take a week to turn around. Time you don't get back.
          </p>
        </div>

        {/* Stats with Counters */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "#e8e8e8", border: "1px solid #e8e8e8", borderRadius: "12px", overflow: "hidden", margin: "24px 0" }}>
          <div style={{ background: "#fff", padding: "24px 16px", textAlign: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 800, lineHeight: "1", marginBottom: "6px", color: "#1a1a1a" }}>
              <span id="waitCounter" suppressHydrationWarning>0</span>
              <span style={{ fontSize: "28px", fontWeight: 600, marginLeft: "4px" }} suppressHydrationWarning>days</span>
            </div>
            <div style={{ fontSize: "12px", color: "#888", lineHeight: "1.4" }}>
              Average wait time<br />
              per website change<br />
              (website builders + designer + engineer)
            </div>
          </div>
          <div style={{ background: "#fff", padding: "24px 16px", textAlign: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 800, lineHeight: "1", marginBottom: "6px", color: "#1a1a1a" }} id="deployCounter">
              <span suppressHydrationWarning>3</span>
              <span style={{ fontSize: "28px", fontWeight: 600, marginLeft: "4px" }} suppressHydrationWarning>d</span>
            </div>
            <div style={{ fontSize: "12px", color: "#888", lineHeight: "1.4" }}>From 3 days down to 10min<br />after migration</div>
          </div>
        </div>

        {/* Section 1: Friction breakdown */}
        <div style={{ margin: "32px 0" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "6px" }}>
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: "#1a1a1a", color: "#fff", padding: "3px 8px", borderRadius: "4px" }}>The Problem</span>
          </div>
          <h2 style={{ fontSize: "20px", fontWeight: 700 }}>Every time you want to change something, it becomes a project</h2>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>Where manual website management slows you down.</p>

          <div id="frictionCardsGrid">
            {[
              { scenario: "Update homepage hero copy", should: "5 min", actually: "2–5 days", why: "Designer queue" },
              { scenario: "Add a new landing page", should: "1 day", actually: "1–2 weeks", why: "Brief → build → approve" },
              { scenario: "Test a different CTA", should: "10 min", actually: "Blocked", why: "Need dev or platform expertise" },
              { scenario: "Respond to market feedback", should: "Same day", actually: "Next sprint", why: "No direct access" },
            ].map((item, idx) => (
              <div key={idx} style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a", marginBottom: "12px" }}>{item.scenario}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "1px solid #f5f5f5", fontSize: "13px" }}>
                  <span style={{ color: "#888" }}>Should take</span>
                  <span style={{ color: "#5bbfba", fontWeight: 600 }}>{item.should}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "1px solid #f5f5f5", fontSize: "13px" }}>
                  <span style={{ color: "#888" }}>Actually takes</span>
                  <span style={{ color: "#dc2626", fontWeight: 600 }}>{item.actually}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", fontSize: "13px" }}>
                  <span style={{ color: "#888" }}>Why</span>
                  <span style={{ color: "#dc2626", fontWeight: 600 }}>{item.why}</span>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "14px", color: "#666", marginTop: "8px" }}>
            By the time it's live, the moment's passed. For a business that needs to move fast, that friction costs more than the subscription.
          </p>
        </div>

        {/* Section 2: What changes */}
        <div style={{ margin: "32px 0" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "6px" }}>
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: "#1a1a1a", color: "#fff", padding: "3px 8px", borderRadius: "4px" }}>After Migration</span>
          </div>
          <h2 style={{ fontSize: "20px", fontWeight: 700 }}>What full control looks like</h2>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>The site moves at your speed, not a designer's schedule.</p>

          <ul style={{ listStyle: "none", margin: "16px 0" }}>
            {[
              { before: "Update copy → wait on designer → days later", after: "Edit it yourself, live in minutes" },
              { before: "New landing page → brief → build → approve → weeks", after: "Describe it to AI → review → ship same day" },
              { before: "Test a new CTA → blocked without dev help", after: "Try it, revert it, try another — whenever you want" },
              { before: "Respond to customer feedback → next sprint", after: "Change it now, while the insight is fresh" },
              { before: `Current hosting → $${report.hostingCost}/mo and climbing`, after: "Your code to keep forever." },
            ].map((item, idx) => (
              <li key={idx} style={{ display: "flex", gap: "12px", padding: "14px 0", borderBottom: "1px solid #f0f0ee", fontSize: "14px" }}>
                <span style={{ flex: 1, color: "#888", textDecoration: "line-through", textDecorationColor: "#ddd" }}>{item.before}</span>
                <span style={{ color: "#ccc", flexShrink: 0 }}>→</span>
                <span style={{ flex: 1, color: "#5bbfba", fontWeight: 500 }}>{item.after}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: AI */}
        <div style={{ margin: "32px 0" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "6px" }}>
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: "#1a1a1a", color: "#fff", padding: "3px 8px", borderRadius: "4px" }}>AI-Powered</span>
          </div>
          <h2 style={{ fontSize: "20px", fontWeight: 700 }}>Make updates whenever inspiration strikes</h2>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>Full control. Change things whenever you want.</p>

          <div style={{ background: "#1a1a1a", borderRadius: "12px", padding: "28px", margin: "20px 0" }} id="aiBlock">
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2ee5d6", marginBottom: "12px" }}>
              How it works for {report.company}
            </div>

            {[
              { prompt: report.aiExamples.prompt1, result: report.aiExamples.result1 },
              { prompt: report.aiExamples.prompt2, result: report.aiExamples.result2 },
              { prompt: report.aiExamples.prompt3, result: report.aiExamples.result3 },
            ].map((item, idx) => (
              <div key={idx} style={{ background: "#2a2a2a", borderRadius: "8px", padding: "14px 18px", marginBottom: "10px", fontSize: "14px" }}>
                <div style={{ fontSize: "11px", color: "#999", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.06em" }}>You say</div>
                <div style={{ color: "#e5e7eb", fontStyle: "italic" }}>"{item.prompt}"</div>
                <div style={{ marginTop: "8px", fontSize: "13px", color: "#2ee5d6", fontWeight: 600 }}>{item.result}</div>
              </div>
            ))}

            <form id="aiForm" style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginTop: "20px", alignItems: "center" }}>
              <div id="aiFormInputs">
                <div className="form-input-wrapper beam-wrapper" style={{ position: "relative", background: "conic-gradient(from var(--angle), transparent 65%, #2ee5d6 79%, #80f4f1 86%, transparent 93%)", borderRadius: "8px", padding: "2px", animation: "beam-spin 4s linear infinite" }}>
                  <input type="text" id="aiChangeField" placeholder="What do you want changed on your website?" style={{ padding: "14px 18px", borderRadius: "6px", border: "none", fontSize: "15px", width: "100%", background: "#2a2a2a", color: "#fff" }} />
                </div>
                <div className="form-input-wrapper beam-wrapper" style={{ position: "relative", background: "#2a2a2a", borderRadius: "8px", border: "1px solid #333" }} id="emailWrapper">
                  <input type="email" id="aiEmailField" placeholder="Your email" style={{ padding: "14px 18px", borderRadius: "8px", border: "none", fontSize: "15px", width: "100%", background: "#2a2a2a", color: "#fff" }} />
                </div>
              </div>
              <button id="migrateBtn" type="submit" style={{ background: "#2ee5d6", color: "#1a1a1a", fontSize: "15px", fontWeight: 800, padding: "14px 28px", borderRadius: "8px", border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>
                Get started
              </button>
            </form>
          </div>
        </div>

        {/* Section 4: What's included */}
        <div style={{ margin: "32px 0" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "6px" }}>
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: "#1a1a1a", color: "#fff", padding: "3px 8px", borderRadius: "4px" }}>What's Included</span>
          </div>
          <h2 style={{ fontSize: "20px", fontWeight: 700 }}>Everything in the migration</h2>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>Your migration. First week we're hands-on. Then it's yours.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", margin: "16px 0" }}>
            {[
              { icon: "fa-magnifying-glass", title: "Full Audit", desc: "We map every page, form, and integration before touching anything" },
              { icon: "fa-wrench", title: "Complete Rebuild", desc: "Same design, same URLs, cleaner code you actually own" },
              { icon: "fa-flask-vial", title: "Full Testing", desc: "Every URL, form, and integration verified before go-live" },
              { icon: "fa-rocket", title: "SEO-Safe Launch", desc: "301 redirects, DNS migration, Google Lighthouse verified" },
              { icon: "fa-comments", title: "First Week Support", desc: "First week after launch is on us. Any issue, we're on it." },
              { icon: "fa-infinity", title: "Yours Forever", desc: "After day 7, it's yours completely. No lock-in, no retainer required" },
            ].map((item, idx) => (
              <div key={idx} style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: "10px", padding: "20px 16px", textAlign: "center" }}>
                <div style={{ fontSize: "32px", marginBottom: "10px", color: "#2ee5d6" }}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div style={{ fontSize: "14px", fontWeight: 700, marginBottom: "4px" }}>{item.title}</div>
                <div style={{ fontSize: "12px", color: "#888", lineHeight: "1.5" }}>{item.desc}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "13px", color: "#888", marginTop: "12px", textAlign: "center" }}>
            Timeline: 1–2 weeks start to finish.
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: "#1a1a1a", borderRadius: "14px", padding: "48px 40px", marginTop: "40px", textAlign: "center", color: "#fff" }} id="cta">
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2ee5d6", marginBottom: "12px" }}>
            Website Migration · Your Code to Keep
          </div>
          <h2 style={{ fontSize: "26px", fontWeight: 800, marginBottom: "10px", lineHeight: "1.2" }}>Ready to own your website?</h2>
          <p style={{ color: "#aaa", fontSize: "15px", marginBottom: "28px", maxWidth: "440px", marginLeft: "auto", marginRight: "auto" }}>
            After submitting, we'll ask you a few quick questions about your site. We use your answers to prep before we start.
          </p>
          <form id="ctaForm" style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginBottom: "16px" }}>
            <input id="ctaEmailField" type="email" placeholder="Your email" required style={{ padding: "14px 18px", borderRadius: "8px", border: "none", fontSize: "15px", width: "280px", background: "#2a2a2a", color: "#fff", outline: "none" }} />
            <button id="ctaBtn" type="submit" style={{ background: "#2ee5d6", color: "#1a1a1a", fontSize: "15px", fontWeight: 800, padding: "14px 28px", borderRadius: "8px", border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>
              Start my migration
            </button>
          </form>
          <div style={{ fontSize: "12px", color: "#888", marginTop: "12px", lineHeight: "1.5" }}>After submitting, we'll ask you 5 quick questions about your site. We use your answers to prep before we start.</div>
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "24px", fontSize: "12px", color: "#bbb" }}>
        Data based on site audit of {report.url} · Report prepared by Fountain of Scale
      </div>

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

        input::placeholder {
          color: #5ab9af;
        }

        input:focus::placeholder {
          color: #7dd9d0;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 1000px #2a2a2a inset !important;
          -webkit-text-fill-color: #fff !important;
          border: none !important;
        }

        input:-webkit-autofill::placeholder {
          -webkit-text-fill-color: #5ab9af !important;
        }

        input:focus {
          outline: none;
          box-shadow: none;
          border: none;
        }

        .beam-wrapper {
          opacity: 0.4;
          transition: opacity 0.3s ease;
        }

        .beam-wrapper:has(input:focus) {
          opacity: 1;
        }

        #frictionCardsGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 16px 0;
        }

        #aiFormInputs {
          display: flex;
          gap: 10px;
          flex: 1;
        }

        .form-input-wrapper {
          flex: 1;
          min-width: 0;
        }

        @media (max-width: 768px) {
          #frictionCardsGrid {
            grid-template-columns: 1fr;
          }

          #aiForm {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
          }

          #aiFormInputs {
            flex-direction: column;
            gap: 12px;
            flex: unset;
            width: 100%;
          }

          .form-input-wrapper {
            width: 100%;
            flex: unset;
          }

          #migrateBtn {
            width: 100%;
          }
        }
      `}</style>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function formatDeployTime(minutes) {
              if (minutes >= 1440) {
                const days = Math.floor(minutes / 1440);
                return '<span>' + days + '</span><span style="font-size: 28px; font-weight: 600; margin-left: 4px;">d</span>';
              } else if (minutes >= 60) {
                const hours = Math.floor(minutes / 60);
                return '<span>' + hours + '</span><span style="font-size: 28px; font-weight: 600; margin-left: 4px;">h</span>';
              } else {
                return '<span>' + minutes + '</span><span style="font-size: 28px; font-weight: 600; margin-left: 4px;">min</span>';
              }
            }

            document.addEventListener('DOMContentLoaded', function() {
              // Animate wait counter (0 to 3 days)
              gsap.to({ value: 0 }, {
                value: 3,
                duration: 3,
                snap: { value: 1 },
                ease: "power2.out",
                onUpdate: function() {
                  document.getElementById('waitCounter').textContent = Math.floor(this.targets()[0].value);
                }
              });

              // Animate deploy counter (4320 minutes / 3 days down to 10 minutes)
              gsap.to({ value: 4320 }, {
                value: 10,
                duration: 3,
                snap: { value: 1 },
                ease: "power2.out",
                onUpdate: function() {
                  const minutes = Math.floor(this.targets()[0].value);
                  document.getElementById('deployCounter').innerHTML = formatDeployTime(minutes);
                }
              });

              const form = document.getElementById('aiForm');
              const changeField = document.getElementById('aiChangeField');
              const emailField = document.getElementById('aiEmailField');
              const emailWrapper = document.getElementById('emailWrapper');
              const aiBlock = document.getElementById('aiBlock');
              const button = document.getElementById('migrateBtn');

              if (form && changeField && emailField && button) {
                form.addEventListener('submit', async function(e) {
                  e.preventDefault();

                  const change = changeField.value.trim();
                  const email = emailField.value.trim();

                  if (!email) {
                    gsap.to(aiBlock, { x: -10, duration: 0.1, repeat: 3, yoyo: true, ease: "power1.inOut" });
                    if (emailWrapper) gsap.to(emailWrapper, { x: -8, duration: 0.1, repeat: 5, yoyo: true, ease: "power1.inOut" });
                    return;
                  }

                  button.disabled = true;
                  button.textContent = 'Sending...';

                  try {
                    const response = await fetch('/api/contact-insight-report', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        name: change || 'No message',
                        email,
                        company: '${report.company}',
                        url: window.location.href
                      })
                    });

                    if (response.ok) {
                      button.textContent = '✓ Submitted';
                      changeField.value = '';
                      emailField.value = '';

                      // Trigger confetti
                      if (window.confetti) {
                        confetti({
                          particleCount: 100,
                          spread: 70,
                          origin: { y: 0.6 }
                        });
                      }

                      // Show survey modal after 500ms
                      setTimeout(() => {
                        const modal = document.createElement('div');
                        modal.id = 'surveyModal';
                        modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 9999;';

                        const modalContent = document.createElement('div');
                        modalContent.style.cssText = 'background: #fff; border-radius: 12px; padding: 40px; max-width: 400px; text-align: center;';

                        const checkmark = document.createElement('div');
                        checkmark.style.cssText = 'font-size: 32px; margin-bottom: 16px;';
                        checkmark.textContent = '✓';

                        const title = document.createElement('h3');
                        title.style.cssText = 'font-size: 20px; font-weight: 800; margin-bottom: 12px; color: #1a1a1a;';
                        title.textContent = 'Thanks!';

                        const desc = document.createElement('p');
                        desc.style.cssText = 'font-size: 14px; color: #666; margin-bottom: 28px; line-height: 1.6;';
                        desc.textContent = '8 quick questions about your site so we can prep before we start.';

                        const link = document.createElement('a');
                        link.href = 'https://forms.gle/Xr7CmjGEB1Hsmd6y5';
                        link.target = '_blank';
                        link.style.cssText = 'display: inline-block; background: #2ee5d6; color: #1a1a1a; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 800; font-size: 14px; cursor: pointer;';
                        link.textContent = 'Answer Questions →';

                        modalContent.appendChild(checkmark);
                        modalContent.appendChild(title);
                        modalContent.appendChild(desc);
                        modalContent.appendChild(link);
                        modal.appendChild(modalContent);

                        document.body.appendChild(modal);

                        // Close modal on background click
                        modal.addEventListener('click', function(e) {
                          if (e.target === modal) modal.remove();
                        });
                      }, 500);

                      setTimeout(() => {
                        button.disabled = false;
                        button.textContent = 'Get started';
                      }, 3000);
                    } else {
                      button.textContent = 'Try again';
                      button.disabled = false;
                    }
                  } catch (error) {
                    console.error('Error:', error);
                    button.textContent = 'Error - try again';
                    button.disabled = false;
                  }
                });

                emailField.addEventListener('focus', function() {
                  gsap.killTweensOf(aiBlock);
                });
              }

              // CTA form handler
              const ctaForm = document.getElementById('ctaForm');
              const ctaEmailField = document.getElementById('ctaEmailField');
              const ctaBtn = document.getElementById('ctaBtn');

              if (ctaForm && ctaEmailField && ctaBtn) {
                ctaForm.addEventListener('submit', async function(e) {
                  e.preventDefault();

                  const email = ctaEmailField.value.trim();

                  if (!email) {
                    gsap.to(ctaForm, { x: -10, duration: 0.1, repeat: 3, yoyo: true, ease: "power1.inOut" });
                    return;
                  }

                  ctaBtn.disabled = true;
                  ctaBtn.textContent = 'Sending...';

                  try {
                    const response = await fetch('/api/contact-insight-report', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        name: 'CTA signup',
                        email,
                        company: '${report.company}',
                        url: window.location.href
                      })
                    });

                    if (response.ok) {
                      ctaBtn.textContent = '✓ Submitted';
                      ctaEmailField.value = '';

                      // Trigger confetti
                      if (window.confetti) {
                        confetti({
                          particleCount: 100,
                          spread: 70,
                          origin: { y: 0.6 }
                        });
                      }

                      // Show modal after 500ms
                      setTimeout(() => {
                        const modal = document.createElement('div');
                        modal.id = 'surveyModal';
                        modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 9999;';

                        const modalContent = document.createElement('div');
                        modalContent.style.cssText = 'background: #fff; border-radius: 12px; padding: 40px; max-width: 400px; text-align: center;';

                        const checkmark = document.createElement('div');
                        checkmark.style.cssText = 'font-size: 32px; margin-bottom: 16px;';
                        checkmark.textContent = '✓';

                        const title = document.createElement('h3');
                        title.style.cssText = 'font-size: 20px; font-weight: 800; margin-bottom: 12px; color: #1a1a1a;';
                        title.textContent = 'Thanks!';

                        const desc = document.createElement('p');
                        desc.style.cssText = 'font-size: 14px; color: #666; margin-bottom: 28px; line-height: 1.6;';
                        desc.textContent = '8 quick questions about your site so we can prep before we start.';

                        const link = document.createElement('a');
                        link.href = 'https://forms.gle/Xr7CmjGEB1Hsmd6y5';
                        link.target = '_blank';
                        link.style.cssText = 'display: inline-block; background: #2ee5d6; color: #1a1a1a; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 800; font-size: 14px; cursor: pointer;';
                        link.textContent = 'Answer Questions →';

                        modalContent.appendChild(checkmark);
                        modalContent.appendChild(title);
                        modalContent.appendChild(desc);
                        modalContent.appendChild(link);
                        modal.appendChild(modalContent);

                        document.body.appendChild(modal);

                        // Close modal on background click
                        modal.addEventListener('click', function(e) {
                          if (e.target === modal) modal.remove();
                        });
                      }, 500);

                      setTimeout(() => {
                        ctaBtn.disabled = false;
                        ctaBtn.textContent = 'Start my migration';
                      }, 3000);
                    } else {
                      ctaBtn.textContent = 'Try again';
                      ctaBtn.disabled = false;
                    }
                  } catch (error) {
                    console.error('Error:', error);
                    ctaBtn.textContent = 'Error - try again';
                    ctaBtn.disabled = false;
                  }
                });
              }
            });
          `,
        }}
      />
    </>
  );
}
