"use client";
import { useState, useEffect, useRef } from "react";
import { MenuIcon, XIcon, PhoneIcon, PhoneCallIcon, MailIcon, MapPinIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const navLinks = ["Home", "About", "Services", "How It Works", "Contact"];

const stats = [
    { value: "2M+", label: "Calls Handled" },
    { value: "< 800ms", label: "Avg. Response Time" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "0", label: "Missed Calls" },
];

const services = [
    {
        title: "Always-On Reception",
        description: "Answers in under a second. Qualifies, books, and routes — no hold music, no voicemail, no missed revenue.",
        image: "/assets/v4e/telephoneonchair.jpg",
    },
    {
        title: "Outbound at Scale",
        description: "Hundreds of follow-up calls a day. Sounds human. Converts like one.",
        image: "/assets/v4e/hand-holdin-iphone.jpg",
    },
    {
        title: "Call Intelligence",
        description: "Every call transcribed, scored, and summarized. You see what callers want before you call them back.",
        image: "/assets/v4e/purpletoorangesoundwave.jpg",
    },
];

const howItWorks = [
    {
        n: "01",
        title: "Custom-built around your business.",
        description: "We map your exact call flow, train the agent on your products, objections, and edge cases — then build it from scratch. No templates. No generic scripts.",
        image: "/assets/v4e/prototype-notes.jpg",
        reverse: false,
    },
    {
        n: "02",
        title: "Live on your number in days.",
        description: "No new phone number. No new software. Your agent is live on your existing line within days — answering every call, booking appointments, routing your team.",
        image: "/assets/v4e/iphonefacingupontable.jpg",
        reverse: true,
    },
    {
        n: "03",
        title: "You wake up knowing everything.",
        description: "Every call summarized. Every lead scored. Every booking confirmed. A daily report lands in your inbox so nothing falls through.",
        image: "/assets/v4e/blackandwhitesoundwave.jpg",
        reverse: false,
    },
];

const testimonials = [
    {
        name: "Rachel D.",
        role: "Owner, Bright Dental Group",
        text: "We were missing 30% of calls during peak hours and didn't know it. V4E fixed that in week one. Bookings are up, and I stopped worrying about the phones.",
    },
    {
        name: "Marcus T.",
        role: "Operations Manager, PrimeMove Real Estate",
        text: "Every inbound lead gets a response in under a second — even when our whole team is on showings. It's the closest thing to cloning your best receptionist.",
    },
    {
        name: "Lisa K.",
        role: "Founder, Spark Home Services",
        text: "I was skeptical about the voice sounding robotic. It doesn't. Customers ask it questions, it handles them, and I get a clean summary every morning.",
    },
];

export default function V4ESample() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [testimonialIdx, setTestimonialIdx] = useState(0);
    const [stackExpanded, setStackExpanded] = useState(false);
    const stackRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const liveScenarios: { caller: string; agent: string; outbound?: boolean; phone: string }[] = [
        { phone: "+1 (628) 204-3817", caller: "Hi, I just wanted to confirm my reservation for tonight — table for 2 under Johnson, 7pm.", agent: "Hi! Yes, confirmed — tonight at 7pm, table for 2 under Johnson. We'll see you then. Anything else I can help with?" },
        { phone: "+1 (415) 882-6043", caller: "Do you have anything available tonight around 8? It's our anniversary, just the two of us.", agent: "Congratulations! We have availability at 8pm and 8:30pm tonight. Which works better for you?" },
        { phone: "+1 (510) 374-9921", caller: "What time does the kitchen close on Sundays?", agent: "The kitchen closes at 9:30pm on Sundays and we close at 10. Would you like to make a reservation?" },
        { phone: "+1 (669) 551-0284", outbound: true, agent: "Hi, this is V4E calling from The Ember Room — just reaching out to confirm your reservation for 4 guests this Saturday at 7:30pm under Martinez. Does that still work for you?", caller: "Yes, that's perfect! We're actually really excited." },
        { phone: "+1 (408) 763-5502", caller: "My AC stopped working — do you do emergency calls on weekends?", agent: "Yes, we offer emergency service on weekends. Can I get your address and a quick description of the issue?" },
        { phone: "+1 (925) 418-7736", caller: "I saw the listing on 4th Ave — is it still available and can I schedule a viewing?", agent: "Yes, that property is still available. I can book a viewing for you — what days work best this week?" },
        { phone: "+1 (707) 293-8150", caller: "I'd like to book a cleaning. My last one was about 6 months ago.", agent: "Of course! We have availability this Thursday at 2pm or Friday at 9am. Which works better for you?" },
    ];
    const [liveIdx, setLiveIdx] = useState(0);
    const [livePhase, setLivePhase] = useState<"question" | "typing" | "response">("question");

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTestimonialIdx(prev => (prev + 1) % testimonials.length);
        }, 4000);
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, []);

    useEffect(() => {
        if (livePhase === "question") {
            const t = setTimeout(() => setLivePhase("typing"), 1400);
            return () => clearTimeout(t);
        }
        if (livePhase === "typing") {
            const t = setTimeout(() => setLivePhase("response"), 1200);
            return () => clearTimeout(t);
        }
        if (livePhase === "response") {
            const t = setTimeout(() => {
                setLivePhase("question");
                setLiveIdx(prev => (prev + 1) % liveScenarios.length);
            }, 3800);
            return () => clearTimeout(t);
        }
    }, [livePhase, liveIdx]);

    useEffect(() => {
        const el = stackRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setStackExpanded(true), 800);
                } else {
                    setStackExpanded(false);
                }
            },
            { threshold: 0.4 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const els = document.querySelectorAll("[data-animate]");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target as HTMLElement;
                    const delay = el.dataset.delay || "0";
                    setTimeout(() => el.classList.add("v4e-visible"), Number(delay));
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.15 });
        els.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="v4e-wrap" style={{ fontFamily: "'Unna', serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Unna:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap');
                body { border: 15px solid #ffffff; box-sizing: border-box; background-color: #ffffff; }
                .v4e-wrap p, .v4e-wrap a, .v4e-wrap span, .v4e-wrap button, .v4e-wrap input, .v4e-wrap textarea, .v4e-wrap nav { font-family: 'Inter', sans-serif; }
                [data-animate] { opacity: 0; transform: translateY(32px); transition: opacity 0.7s ease, transform 0.7s ease; }
                [data-animate].v4e-visible { opacity: 1; transform: translateY(0); }
                .live-fade-in { animation: liveFadeIn 0.5s ease forwards; }
                @keyframes liveFadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
                .orb-talking { animation: orbTalk 0.7s ease-in-out infinite; }
                @keyframes orbTalk { 0%, 100% { transform: translateX(-50%) scale(1); } 50% { transform: translateX(-50%) scale(1.13); } }
                .live-pulse { animation: livePulse 1.5s ease-in-out infinite; }
                @keyframes livePulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
                .typing-dot { animation: typingBounce 1s ease-in-out infinite; }
                .typing-dot:nth-child(2) { animation-delay: 0.15s; }
                .typing-dot:nth-child(3) { animation-delay: 0.3s; }
                @keyframes typingBounce { 0%, 80%, 100% { transform: translateY(0); opacity: 0.4; } 40% { transform: translateY(-4px); opacity: 1; } }
                .service-card:hover .service-overlay { opacity: 1; }
                .service-overlay { transition: opacity 0.4s ease; }

                /* Horizontal soundwave animation */
                .v4e-soundwave {
                  --cp: #b87fd4;
                  --co: #c4896a;
                  --cy: #c9b870;
                  --cw: #ddd0b0;
                  background-color: #000;
                  background-image:
                    radial-gradient(100px 4px at 235px 0px, var(--cp), #0000),
                    radial-gradient(100px 4px at 235px 300px, var(--cp), #0000),
                    radial-gradient(1.5px 1.5px at 117.5px 150px, var(--cp) 100%, #0000 150%),
                    radial-gradient(100px 4px at 252px 0px, var(--co), #0000),
                    radial-gradient(100px 4px at 252px 300px, var(--co), #0000),
                    radial-gradient(1.5px 1.5px at 126px 150px, var(--co) 100%, #0000 150%),
                    radial-gradient(100px 4px at 150px 0px, var(--cy), #0000),
                    radial-gradient(100px 4px at 150px 300px, var(--cy), #0000),
                    radial-gradient(1.5px 1.5px at 75px 150px, var(--cy) 100%, #0000 150%),
                    radial-gradient(100px 4px at 253px 0px, var(--cw), #0000),
                    radial-gradient(100px 4px at 253px 300px, var(--cw), #0000),
                    radial-gradient(1.5px 1.5px at 126.5px 150px, var(--cw) 100%, #0000 150%),
                    radial-gradient(100px 4px at 204px 0px, var(--cp), #0000),
                    radial-gradient(100px 4px at 204px 300px, var(--cp), #0000),
                    radial-gradient(1.5px 1.5px at 102px 150px, var(--cp) 100%, #0000 150%),
                    radial-gradient(100px 4px at 134px 0px, var(--co), #0000),
                    radial-gradient(100px 4px at 134px 300px, var(--co), #0000),
                    radial-gradient(1.5px 1.5px at 67px 150px, var(--co) 100%, #0000 150%),
                    radial-gradient(100px 4px at 179px 0px, var(--cy), #0000),
                    radial-gradient(100px 4px at 179px 300px, var(--cy), #0000),
                    radial-gradient(1.5px 1.5px at 89.5px 150px, var(--cy) 100%, #0000 150%),
                    radial-gradient(100px 4px at 299px 0px, var(--cw), #0000),
                    radial-gradient(100px 4px at 299px 300px, var(--cw), #0000),
                    radial-gradient(1.5px 1.5px at 149.5px 150px, var(--cw) 100%, #0000 150%),
                    radial-gradient(100px 4px at 215px 0px, var(--cp), #0000),
                    radial-gradient(100px 4px at 215px 300px, var(--cp), #0000),
                    radial-gradient(1.5px 1.5px at 107.5px 150px, var(--cp) 100%, #0000 150%),
                    radial-gradient(100px 4px at 281px 0px, var(--co), #0000),
                    radial-gradient(100px 4px at 281px 300px, var(--co), #0000),
                    radial-gradient(1.5px 1.5px at 140.5px 150px, var(--co) 100%, #0000 150%),
                    radial-gradient(100px 4px at 158px 0px, var(--cy), #0000),
                    radial-gradient(100px 4px at 158px 300px, var(--cy), #0000),
                    radial-gradient(1.5px 1.5px at 79px 150px, var(--cy) 100%, #0000 150%),
                    radial-gradient(100px 4px at 210px 0px, var(--cw), #0000),
                    radial-gradient(100px 4px at 210px 300px, var(--cw), #0000),
                    radial-gradient(1.5px 1.5px at 105px 150px, var(--cw) 100%, #0000 150%);
                  background-size:
                    235px 300px, 235px 300px, 235px 300px,
                    252px 300px, 252px 300px, 252px 300px,
                    150px 300px, 150px 300px, 150px 300px,
                    253px 300px, 253px 300px, 253px 300px,
                    204px 300px, 204px 300px, 204px 300px,
                    134px 300px, 134px 300px, 134px 300px,
                    179px 300px, 179px 300px, 179px 300px,
                    299px 300px, 299px 300px, 299px 300px,
                    215px 300px, 215px 300px, 215px 300px,
                    281px 300px, 281px 300px, 281px 300px,
                    158px 300px, 158px 300px, 158px 300px,
                    210px 300px, 210px 300px, 210px 300px;
                  animation: v4e-hi 150s linear infinite;
                }
                .v4e-soundwave::after {
                  content: "";
                  position: absolute;
                  inset: 0;
                  z-index: 1;
                  background-image: radial-gradient(circle at 50% 50%, #0000 0, #0000 2px, hsl(0 0 4%) 2px);
                  background-size: 8px 8px;
                  --f: blur(1em) brightness(6);
                  animation: v4e-hii 10s linear infinite;
                }
                @keyframes v4e-hii {
                  0% { backdrop-filter: blur(1em) brightness(6) hue-rotate(0deg); }
                  to { backdrop-filter: blur(1em) brightness(6) hue-rotate(360deg); }
                }
                @keyframes v4e-hi {
                  0% {
                    background-position:
                      220px 0px, 220px 3px, 337.5px 151.5px,
                      24px 25px, 24px 28px, 150px 176.5px,
                      16px 50px, 16px 53px, 91px 201.5px,
                      224px 75px, 224px 78px, 350.5px 226.5px,
                      19px 100px, 19px 103px, 121px 251.5px,
                      120px 125px, 120px 128px, 187px 276.5px,
                      31px 150px, 31px 153px, 120.5px 301.5px,
                      235px 175px, 235px 178px, 384.5px 326.5px,
                      121px 200px, 121px 203px, 228.5px 351.5px,
                      224px 225px, 224px 228px, 364.5px 376.5px,
                      26px 250px, 26px 253px, 105px 401.5px,
                      75px 275px, 75px 278px, 180px 426.5px;
                  }
                  to {
                    background-position:
                      6800px 0px, 6800px 3px, 6917.5px 151.5px,
                      13632px 25px, 13632px 28px, 13758px 176.5px,
                      5416px 50px, 5416px 53px, 5491px 201.5px,
                      17175px 75px, 17175px 78px, 17301.5px 226.5px,
                      5119px 100px, 5119px 103px, 5221px 251.5px,
                      8428px 125px, 8428px 128px, 8495px 276.5px,
                      9876px 150px, 9876px 153px, 9965.5px 301.5px,
                      13391px 175px, 13391px 178px, 13540.5px 326.5px,
                      14741px 200px, 14741px 203px, 14848.5px 351.5px,
                      18770px 225px, 18770px 228px, 18910.5px 376.5px,
                      5082px 250px, 5082px 253px, 5161px 401.5px,
                      6375px 275px, 6375px 278px, 6480px 426.5px;
                  }
                }
            `}</style>

            {/* Navbar */}
            <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 pb-1 flex justify-center">
                <header style={{
                    width: "100%", maxWidth: "900px",
                    background: "rgba(10,10,10,0.55)",
                    backdropFilter: "blur(24px) saturate(180%)",
                    WebkitBackdropFilter: "blur(24px) saturate(180%)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "1.5rem",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}>
                    <div className="px-6 py-3.5 flex items-center justify-between">
                        <div className="text-white font-bold text-2xl tracking-tight">V4E</div>

                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map(link => (
                                <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                                    {link}
                                </a>
                            ))}
                        </nav>

                        <a href="#contact"
                            className="hidden md:inline-block bg-white text-black font-semibold text-sm px-5 py-2 rounded-full hover:bg-gray-100 transition-colors">
                            Get Started
                        </a>

                        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                        </button>
                    </div>

                    {menuOpen && (
                        <div className="md:hidden border-t border-white/20 px-6 py-4 flex flex-col gap-4">
                            {navLinks.map(link => (
                                <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="text-white/80 text-sm font-medium"
                                    onClick={() => setMenuOpen(false)}>
                                    {link}
                                </a>
                            ))}
                            <a href="#contact"
                                className="w-max bg-black text-white font-semibold text-sm px-5 py-2 rounded-full">
                                Get Started
                            </a>
                        </div>
                    )}
                </header>
            </div>

            {/* Hero */}
            <section id="home" className="relative overflow-hidden" style={{ backgroundColor: "#000", minHeight: "90vh", borderRadius: "2rem", margin: "0 8px 8px 8px" }}>
                <div className="v4e-soundwave absolute inset-0" style={{ opacity: 0.5 }} />
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col items-start justify-center min-h-[90vh]">
                    <span data-animate data-delay="0" className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
                        AI Voice Agent Platform
                    </span>
                    <h1 data-animate data-delay="100" className="text-white font-extrabold text-6xl md:text-8xl leading-tight max-w-3xl">
                        Answers every call.<br />Misses none.
                    </h1>
                    <p data-animate data-delay="200" className="text-white/60 text-xl mt-6 max-w-xl leading-relaxed">
                        V4E builds AI voice agents that sound human, handle real conversations, and run 24/7 — on your existing phone number, live in days.
                    </p>
                    <div data-animate data-delay="300" className="flex flex-col sm:flex-row gap-4 mt-10">
                        <a href="#contact"
                            className="bg-white text-black font-semibold px-8 py-3 rounded-full text-sm hover:bg-gray-100">
                            See a live demo
                        </a>
                        <a href="#how-it-works"
                            className="border border-white/30 text-white hover:bg-white/10 font-medium px-8 py-3 rounded-full text-sm">
                            How it works
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats strip */}
            <section style={{ backgroundColor: "#000", borderRadius: "2rem", margin: "0 8px 8px 8px" }}>
                <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((s, i) => (
                        <div key={i} data-animate data-delay={i * 100} className="text-center">
                            <p className="text-white font-bold text-4xl md:text-5xl">{s.value}</p>
                            <p className="text-white/80 text-base mt-1">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Live Call Demo */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div data-animate>
                        <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest">Live Demo</span>
                        <h2 className="text-gray-900 font-bold text-4xl md:text-5xl mt-3 mb-6 leading-tight">Handles any question.<br />Any time of day.</h2>
                        <p className="text-gray-500 text-base leading-relaxed">Booking confirmations, reservations, availability, FAQs, emergency requests — your agent handles them all in real time, with a voice that sounds human and responses that actually make sense.</p>
                    </div>
                    <div data-animate data-delay="150" className="flex justify-center">
                        <div style={{ width: "100%", maxWidth: "380px", backgroundColor: "#000", padding: "3px", borderRadius: "28px" }}>
                            <div style={{ backgroundColor: "#fff", borderRadius: "26px", overflow: "hidden" }}>
                                {/* Card header */}
                                <div style={{ backgroundColor: "#000" }} className="px-5 py-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                                            <PhoneCallIcon size={16} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-semibold">{liveScenarios[liveIdx].outbound ? "Outbound Call" : "Incoming Call"}</p>
                                            <p className="text-white/50 text-xs">{liveScenarios[liveIdx].phone}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="live-pulse w-2 h-2 rounded-full bg-green-400 inline-block" />
                                        <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">Live</span>
                                    </div>
                                </div>
                                {/* Chat area */}
                                <div className="px-4 py-5 flex flex-col gap-3 justify-end" style={{ height: "280px", overflow: "hidden" }}>
                                    {liveScenarios[liveIdx].outbound ? (
                                        <>
                                            {/* Outbound: agent speaks first */}
                                            <div key={`q-${liveIdx}`} className="live-fade-in flex justify-start">
                                                <div style={{ backgroundColor: "#000" }} className="rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%]">
                                                    <p className="text-xs text-white/50 font-semibold mb-1">V4E Agent</p>
                                                    <p className="text-sm text-white leading-snug">{liveScenarios[liveIdx].agent}</p>
                                                </div>
                                            </div>
                                            {/* Customer reply */}
                                            {(livePhase === "typing" || livePhase === "response") && (
                                                <div className="flex justify-end">
                                                    <div className="bg-gray-100 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%]">
                                                        <p className="text-xs text-gray-500 font-semibold mb-1">Customer</p>
                                                        {livePhase === "typing" ? (
                                                            <div className="flex items-center gap-1 py-1">
                                                                <span className="typing-dot w-1.5 h-1.5 rounded-full bg-gray-400 inline-block" />
                                                                <span className="typing-dot w-1.5 h-1.5 rounded-full bg-gray-400 inline-block" />
                                                                <span className="typing-dot w-1.5 h-1.5 rounded-full bg-gray-400 inline-block" />
                                                            </div>
                                                        ) : (
                                                            <p key={`a-${liveIdx}`} className="live-fade-in text-sm text-gray-800 leading-snug">{liveScenarios[liveIdx].caller}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {/* Inbound: caller speaks first */}
                                            <div key={`q-${liveIdx}`} className="live-fade-in flex justify-end">
                                                <div className="bg-gray-100 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%]">
                                                    <p className="text-xs text-gray-500 font-semibold mb-1">Caller</p>
                                                    <p className="text-sm text-gray-800 leading-snug">{liveScenarios[liveIdx].caller}</p>
                                                </div>
                                            </div>
                                            {/* Agent response */}
                                            {(livePhase === "typing" || livePhase === "response") && (
                                                <div className="flex justify-start">
                                                    <div style={{ backgroundColor: "#000" }} className="rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%]">
                                                        <p className="text-xs text-white/50 font-semibold mb-1">V4E Agent</p>
                                                        {livePhase === "typing" ? (
                                                            <div className="flex items-center gap-1 py-1">
                                                                <span className="typing-dot w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
                                                                <span className="typing-dot w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
                                                                <span className="typing-dot w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
                                                            </div>
                                                        ) : (
                                                            <p key={`a-${liveIdx}`} className="live-fade-in text-sm text-white leading-snug">{liveScenarios[liveIdx].agent}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                                {/* Footer */}
                                <div className="relative px-5 pt-8 pb-5 border-t border-gray-100">
                                    {/* Hovering orb */}
                                    <div className={(liveScenarios[liveIdx].outbound ? livePhase === "question" : livePhase === "response") ? "orb-talking" : ""} style={{
                                        position: "absolute",
                                        top: "-8px",
                                        left: "50%",
                                        transform: (liveScenarios[liveIdx].outbound ? livePhase === "question" : livePhase === "response") ? undefined : `translateX(-50%) scale(${livePhase === "typing" ? 1.1 : 1})`,
                                        width: "64px", height: "64px", borderRadius: "50%",
                                        overflow: "hidden",
                                        boxShadow: (liveScenarios[liveIdx].outbound ? livePhase === "question" : livePhase === "response")
                                            ? "0 8px 32px rgba(0,0,0,0.25), 0 0 48px rgba(180,120,210,0.3)"
                                            : "0 4px 16px rgba(0,0,0,0.15)",
                                        transitionProperty: "box-shadow",
                                        transitionDuration: "0.5s",
                                        transitionTimingFunction: "ease",
                                        border: "2px solid rgba(255,255,255,0.8)",
                                    }}>
                                        <div className="v4e-soundwave absolute inset-0" style={{ opacity: (liveScenarios[liveIdx].outbound ? livePhase === "question" : livePhase === "response") ? 0.9 : 0.45, transition: "opacity 0.5s ease" }} />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-400">Powered by V4E</span>
                                        <span className="text-xs text-gray-300">{liveIdx + 1} / {liveScenarios.length}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-24 px-6" style={{ backgroundColor: "#fff" }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:[&>*:first-child]:order-2">
                    <div>
                        <span data-animate className="text-gray-400 text-xs font-semibold uppercase tracking-widest">What is V4E?</span>
                        <h2 data-animate data-delay="100" className="text-gray-900 font-bold text-4xl md:text-5xl mt-3 mb-6 leading-tight">
                            Not a bot.<br />A voice agent that works.
                        </h2>
                        <p data-animate data-delay="200" className="text-gray-500 text-base leading-relaxed mb-4">
                            V4E handles every business call — inbound, outbound, after-hours, follow-up. Built custom around your call flow. No templates, no IVR menus, no hold music.
                        </p>
                        <p data-animate data-delay="250" className="text-gray-500 text-base leading-relaxed mb-8">
                            Real estate agents, clinics, home service businesses — any team that can't afford to miss a call. We set it up, keep it running, and send you a report every morning.
                        </p>
                        <a href="#contact"
                            className="inline-block bg-black text-white font-semibold text-sm px-7 py-3 rounded-full transition-colors">
                            Hear it yourself
                        </a>
                    </div>
                    <div data-animate data-delay="150" className="flex flex-col items-center justify-center py-4">
                        <p className="text-sm text-gray-400 mb-8 text-center">Every one of these is revenue that went to someone who picked up.</p>
                        <div ref={stackRef} style={{ perspective: "600px" }}>
                            <ul className="relative flex flex-col transition-all duration-500"
                                style={{ transformStyle: "preserve-3d", gap: stackExpanded ? "12px" : "0px" }}>
                                {[
                                    { time: "Mon 9:43 am", source: "Inbound call", iconBg: "bg-zinc-100", icon: <PhoneCallIcon size={20} className="text-zinc-500" />, inquiry: "Hi, I'd like to book a cleaning appointment for this week.", missed: "→ Voicemail", outcome: "Booked elsewhere" },
                                    { time: "Mon 2:14 pm", source: "Google Business", iconBg: "bg-[#4285F4]/10", icon: <svg viewBox="0 0 24 24" width="20" height="20"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>, inquiry: "We're relocating next month — can someone show us a few places?", missed: "→ No answer", outcome: "Called another agent" },
                                    { time: "Sat 11:02 am", source: "Inbound call", iconBg: "bg-zinc-100", icon: <PhoneCallIcon size={20} className="text-zinc-500" />, inquiry: "My AC stopped working. Do you do emergency calls on weekends?", missed: "→ No answer", outcome: "Found another company" },
                                    { time: "Sun 7:15 pm", source: "Inbound call", iconBg: "bg-zinc-100", icon: <PhoneCallIcon size={20} className="text-zinc-500" />, inquiry: "I need to reschedule my appointment for tomorrow morning.", missed: "→ Voicemail", outcome: "No-show next day" },
                                    { time: "Tue 8:50 am", source: "Google Business", iconBg: "bg-[#4285F4]/10", icon: <svg viewBox="0 0 24 24" width="20" height="20"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>, inquiry: "Are you taking new patients? I've been looking for a dentist nearby.", missed: "→ No reply", outcome: "Went to a competitor" },
                                    { time: "Fri 7:02 pm", source: "Inbound call", iconBg: "bg-zinc-100", icon: <PhoneCallIcon size={20} className="text-zinc-500" />, inquiry: "Hi, just calling to confirm our reservation for tomorrow night — table for 6 at 8pm?", missed: "→ No answer", outcome: "Didn't show up" },
                                    { time: "Sat 5:45 pm", source: "Inbound call", iconBg: "bg-zinc-100", icon: <PhoneCallIcon size={20} className="text-zinc-500" />, inquiry: "Do you have a table for 4 available tonight around 7:30? It's our anniversary.", missed: "→ Voicemail", outcome: "Booked elsewhere" },
                                    { time: "Wed 12:10 pm", source: "Google Business", iconBg: "bg-[#4285F4]/10", icon: <svg viewBox="0 0 24 24" width="20" height="20"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>, inquiry: "Do you cater private events? We're planning a birthday dinner for 20 people next month.", missed: "→ No reply", outcome: "Hired a different venue" },
                                ].map((c, i, arr) => {
                                    const rev = arr.length - 1 - i;
                                    const transforms = [
                                        "translateZ(80px) translateY(-48px)",
                                        "translateZ(50px) translateY(-30px)",
                                        "translateZ(25px) translateY(-16px)",
                                        "translateZ(0px) translateY(0px)",
                                        "translateZ(-20px) translateY(10px)",
                                        "translateZ(-45px) translateY(22px)",
                                        "translateZ(-70px) translateY(34px)",
                                        "translateZ(-100px) translateY(48px)",
                                    ];
                                    const opacities = [1, 0.93, 0.84, 0.75, 0.65, 0.55, 0.42, 0.30];
                                    const blurs = [0, 0, 0.5, 1, 1.5, 2, 2.5, 3.5];
                                    return (
                                        <li key={i} className="list-none w-full max-w-md bg-white rounded-xl border border-black flex gap-4 items-center px-4 py-3"
                                            style={{
                                                transform: stackExpanded ? "none" : (transforms[rev] ?? "translateZ(0)"),
                                                opacity: stackExpanded ? 1 : (opacities[rev] ?? 0.3),
                                                filter: stackExpanded ? "none" : (blurs[rev] ? `blur(${blurs[rev]}px)` : "none"),
                                                transition: "all 500ms",
                                                transitionDelay: `${i * 40}ms`,
                                            }}>
                                            <div className={`w-11 h-11 rounded-lg shrink-0 flex items-center justify-center ${c.iconBg}`}>{c.icon}</div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between gap-2 mb-0.5">
                                                    <span className="text-xs font-semibold text-gray-800">{c.source}</span>
                                                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-red-50 text-red-400 shrink-0">Missed</span>
                                                </div>
                                                <p className="text-xs text-zinc-500 truncate">&ldquo;{c.inquiry}&rdquo;</p>
                                                <p className="text-[10px] text-zinc-400 mt-0.5">{c.time} · {c.missed}</p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div data-animate className="text-center mb-14">
                        <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest">What We Handle</span>
                        <h2 className="text-gray-900 font-bold text-4xl md:text-5xl mt-3">Built for every conversation.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <div key={i} data-animate data-delay={i * 120} className="service-card cursor-pointer group" style={{ backgroundColor: "#000", padding: "10px", borderRadius: "20px" }}>
                                <div className="relative overflow-hidden" style={{ borderRadius: "12px" }}>
                                <img src={s.image} alt={s.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="service-overlay absolute inset-0 opacity-0 flex flex-col items-center justify-center p-6 text-center"
                                    style={{ backgroundColor: "rgba(0,0,0,0.85)" }}>
                                    <h3 className="text-white font-bold text-lg mb-3">{s.title}</h3>
                                    <p className="text-white/90 text-sm leading-relaxed">{s.description}</p>
                                </div>
                                </div>
                                <div className="p-4 pt-3">
                                    <h3 className="text-white font-semibold text-xl">{s.title}</h3>
                                    <p className="text-white/50 text-sm mt-1 line-clamp-2">{s.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" style={{ backgroundColor: "#fff" }} className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div data-animate className="text-center mb-16">
                        <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest">The Process</span>
                        <h2 className="text-gray-900 font-bold text-4xl md:text-5xl mt-3">Live in days, not months.</h2>
                    </div>
                    <div className="flex flex-col gap-24">
                        {howItWorks.map((step, i) => (
                            <div data-animate key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${step.reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                                <div>
                                    <span className="text-white font-bold text-5xl">{step.n}</span>
                                    <h3 className="text-gray-900 font-bold text-3xl mt-3 mb-4">{step.title}</h3>
                                    <p className="text-gray-500 text-base leading-relaxed">{step.description}</p>
                                    {i === 2 && (
                                        <a href="#contact"
                                            className="inline-block mt-6 bg-black text-white font-semibold text-sm px-7 py-3 rounded-full hover:bg-gray-1000 transition-colors">
                                            Get Started
                                        </a>
                                    )}
                                </div>
                                <div style={{ backgroundColor: "#000", padding: "10px", borderRadius: "20px" }}>
                                    <img src={step.image} alt={step.title}
                                        className="w-full h-[480px] object-cover"
                                        style={{ borderRadius: "12px" }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div data-animate className="mb-14">
                        <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest">The Team</span>
                        <h2 className="text-gray-900 font-bold text-4xl md:text-5xl mt-3">Built by people who<br />obsess over the details.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
                        {[
                            { name: "Mai", role: "Co-founder", image: "/assets/mai.jpeg", linkedin: "https://www.linkedin.com/in/mai-akiyoshi/", x: "https://x.com/mai_on_chain", bio: "Former software engineer turned founder. Built HeyMint from zero to acquisition by Alchemy — 1M+ users, $3.4M raised, Stanford StartX. At Gusto, she built a no-code tool that compressed landing page delivery from a month to a few days. Same pattern, applied now to entire roles: find what repeats, build the system, free up the humans for work that actually needs them." },
                            { name: "Ben", role: "Co-founder", image: "/assets/ben.jpeg", linkedin: "https://www.linkedin.com/in/intenex/", x: "https://x.com/intenex", bio: "Thiel Fellow. Harvard dropout. Co-founded Stream, raising $20M from Pantera Capital. Then worked as a backend and full-stack engineer before becoming COO — which means he's seen the same problem from both sides: operators buried in repeatable work that should have been automated months ago." },
                        ].map((member, i) => (
                            <div key={member.name} data-animate data-delay={i * 150} style={{ backgroundColor: "#000", padding: "10px", borderRadius: "20px" }}>
                                <img src={member.image} alt={member.name}
                                    className="w-full h-72 object-cover object-top"
                                    style={{ borderRadius: "12px" }} />
                                <div className="p-4 pt-3">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <p className="text-white font-semibold text-xl">{member.name}</p>
                                            <p className="text-white/50 text-sm mt-0.5">{member.role}</p>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                                                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                            </a>
                                            <a href={member.x} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                                                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                            </a>
                                        </div>
                                    </div>
                                    <p className="text-white/50 text-sm leading-relaxed">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section style={{ backgroundColor: "#000", borderRadius: "2rem", margin: "0 8px 8px 8px" }} className="py-20 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <span data-animate className="text-white/50 text-xs font-semibold uppercase tracking-widest">Client Results</span>
                    <h2 data-animate data-delay="100" className="text-white font-bold text-4xl mt-3 mb-12">Proven impact. Real conversations.</h2>
                    <div className="relative min-h-[140px]">
                        {testimonials.map((t, i) => (
                            <div key={i}
                                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${i === testimonialIdx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
                                <p className="text-white text-lg md:text-xl leading-relaxed italic mb-6">
                                    &ldquo;{t.text}&rdquo;
                                </p>
                                <p className="text-white font-semibold text-sm">{t.name}</p>
                                <p className="text-white/70 text-xs mt-1">{t.role}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-16">
                        <button
                            onClick={() => setTestimonialIdx(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                            <ChevronLeftIcon size={16} />
                        </button>
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button key={i} onClick={() => setTestimonialIdx(i)}
                                    className={`w-2 h-2 rounded-full transition-colors ${i === testimonialIdx ? "bg-white" : "bg-white/40"}`} />
                            ))}
                        </div>
                        <button
                            onClick={() => setTestimonialIdx(prev => (prev + 1) % testimonials.length)}
                            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                            <ChevronRightIcon size={16} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <span data-animate className="text-gray-400 text-xs font-semibold uppercase tracking-widest">Get Started</span>
                        <h2 data-animate data-delay="100" className="text-gray-900 font-bold text-4xl mt-3 mb-6">Hear it live.<br />Then decide.</h2>
                        <p data-animate data-delay="200" className="text-gray-500 text-base leading-relaxed mb-10">
                            Tell us about your business. We'll show you exactly what a voice agent built for you sounds like — before you commit to anything.
                        </p>
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#000" }}>
                                    <PhoneIcon size={15} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">Phone</p>
                                    <p className="text-gray-700 text-sm font-medium">+1 (415) 000-0000</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#000" }}>
                                    <MailIcon size={15} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">Email</p>
                                    <p className="text-gray-700 text-sm font-medium">hello@v4e.ai</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#000" }}>
                                    <MapPinIcon size={15} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">Location</p>
                                    <p className="text-gray-700 text-sm font-medium">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" placeholder="Your Name"
                                className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors" />
                            <input type="email" placeholder="Email Address"
                                className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors" />
                        </div>
                        <input type="tel" placeholder="Phone Number"
                            className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors" />
                        <input type="text" placeholder="Business Name"
                            className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors" />
                        <textarea rows={4} placeholder="Tell us about your business and what you need..."
                            className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors resize-none" />
                        <button type="submit"
                            className="w-full py-3 rounded-full font-semibold text-sm text-white transition-colors"
                            style={{ backgroundColor: "#000" }}>
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ backgroundColor: "#252525", borderRadius: "2rem", margin: "0 8px 8px 8px" }} className="py-14 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <p className="text-white font-bold text-2xl mb-4">V4E</p>
                        <p className="text-white/50 text-sm leading-relaxed">
                            AI voice agents for businesses that can't afford to miss a call.
                        </p>
                    </div>
                    <div>
                        <p className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Quick Links</p>
                        <div className="flex flex-col gap-3">
                            {navLinks.map(link => (
                                <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="text-white/50 hover:text-white text-sm transition-colors">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Contact</p>
                        <div className="flex flex-col gap-3 text-white/50 text-sm">
                            <p>hello@v4e.ai</p>
                            <p>+1 (415) 000-0000</p>
                            <p>San Francisco, CA</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs">© 2025 V4E · Voice for Everything. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
