"use client";
import AnimatedContent from "@/components/animated-content";
import { ArrowUpRightIcon, ChevronDownIcon } from "lucide-react";
import { useAiModal } from "@/contexts/ai-modal-context";
import { useState, useEffect, useRef } from "react";

const manualMoments = [
    {
        time: "Mon 6:58 am",
        event: "Opening shift",
        issue: "Barista manually logging 47 pastry and supply items from the delivery.",
        outcome: "→ 25 minutes lost every morning",
    },
    {
        time: "Mon 2:15 pm",
        event: "Mid-service",
        issue: "Oat milk ran out. Nobody flagged it at open. Three orders refunded.",
        outcome: "→ Customer complaints",
    },
    {
        time: "Tue 9:40 pm",
        event: "Closing",
        issue: "Owner stayed late planning tomorrow's prep and sending reorder messages.",
        outcome: "→ Late night, every night",
    },
    {
        time: "Wed 7:12 am",
        event: "Opening shift",
        issue: "Syrup reorder missed because the group chat message got buried.",
        outcome: "→ Emergency run to restaurant supply",
    },
    {
        time: "Thu 11:30 am",
        event: "Mid-service",
        issue: "Closing barista called in sick. Inventory count skipped. Nobody knows stock levels.",
        outcome: "→ Guessing for the rest of the week",
    },
    {
        time: "Fri 8:05 pm",
        event: "End of week",
        issue: "Owner reconciling spreadsheet manually. Numbers don't match. Investigating.",
        outcome: "→ 2 hours of lost Friday night",
    },
];


const steps = [
    {
        n: "01",
        title: "We map your shop's workflow",
        body: "Your menu items, your suppliers, your par levels, your shift structure — so the system reflects how your shop actually runs, not a generic template.",
    },
    {
        n: "02",
        title: "We build and configure it for you",
        body: "No platform to log into and set up yourself. We configure daily receiving, par alerts, prep prompts, and reorder drafts. Built around your items.",
    },
    {
        n: "03",
        title: "Your team uses it with almost no learning curve",
        body: "Opener taps what arrived. System updates stock. You get an alert if anything is low. No data entry, no new app, no training required.",
    },
    {
        n: "04",
        title: "We keep it running as your menu changes",
        body: "New seasonal drinks, supplier changes, updated par levels — we handle the updates. You don't manage anything.",
    },
];

const comparisons = [
    {
        without: "Opener logs 40+ items from the delivery by hand. Takes 25 minutes. Every morning.",
        with: "Opener taps what arrived. System updates stock, flags anything short. Same info, 3 minutes.",
    },
    {
        without: "Oat milk runs out mid-service. Nobody flagged it at open.",
        with: "You get a low-stock alert the night before — before your first customer.",
    },
    {
        without: "Reordering means a group chat message and hoping someone follows up.",
        with: "Stock hits par level, system drafts the order. You approve with one tap.",
    },
    {
        without: "Prep planning lives in the owner\u2019s head or a spreadsheet that\u2019s a day behind.",
        with: "System looks at yesterday\u2019s sales and tells you what to prep. Based on actual data.",
    },
];

const faqs = [
    {
        q: "Do I need to replace my current POS?",
        a: "No. We work alongside your existing POS. We handle the inventory and reorder layer that your POS doesn't do well — without replacing anything.",
    },
    {
        q: "What if I'm already paying for MarketMan or Lightspeed?",
        a: "That's exactly who we built this for. We can usually replace that cost entirely, and do more of the things that were still manual on those platforms.",
    },
    {
        q: "Does my staff need to learn new software?",
        a: "No. The daily receiving workflow is designed to take under 5 minutes with almost no training. We build it around how your team already operates.",
    },
    {
        q: "What does setup cost?",
        a: "Setup is free. We're partnering with a small number of shops to refine the product. If it works well for you, we'll share the ongoing cost then.",
    },
    {
        q: "How long does it take to go live?",
        a: "Usually within a week. We need your menu, your suppliers, and a 30-minute call. After that, we configure and launch.",
    },
];

export default function BeveragePage() {
    const { openAiModal } = useAiModal();
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [stackExpanded, setStackExpanded] = useState(false);
    const stackRef = useRef<HTMLDivElement>(null);
    const [withUsExpanded, setWithUsExpanded] = useState(false);
    const withUsRef = useRef<HTMLDivElement>(null);
    const [form, setForm] = useState({ name: "", email: "", business: "", website: "", notes: "" });
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [formLoading, setFormLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

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
        const el = withUsRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setTimeout(() => setWithUsExpanded(true), 300);
            },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const inputBase = "border bg-white rounded-lg px-3 py-2 text-sm text-gray-800 placeholder:text-zinc-400 focus:outline-none transition-colors";
    const inputNormal = `${inputBase} border-[#edf9f8] focus:border-purple-300`;
    const inputError = `${inputBase} border-red-300 focus:border-red-400`;

    function handleFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) setFormErrors(prev => { const next = { ...prev }; delete next[name]; return next; });
    }

    async function handleFormSubmit(e: React.FormEvent) {
        e.preventDefault();
        const errs: Record<string, string> = {};
        if (!form.name.trim()) errs.name = "Name is required";
        if (!form.email.trim()) errs.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
        if (!form.business.trim()) errs.business = "Required";
        if (Object.keys(errs).length > 0) { setFormErrors(errs); return; }
        setFormLoading(true);
        try {
            await fetch("/api/contact-ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, source: "Beverage — Sign Up Form" }),
            });
            setFormSubmitted(true);
        } finally {
            setFormLoading(false);
        }
    }

    return (
        <main>
            <style>{`
                .bubble-right {
                    position: relative;
                    background: var(--c, #ffffff);
                    border-radius: 1em;
                    padding: 0.65em 1em;
                }
                .bubble-right::after {
                    content: '';
                    position: absolute;
                    right: -0.6em;
                    top: 50%;
                    transform: translateY(-50%);
                    border: 0.4em solid transparent;
                    border-left: 0.65em solid var(--c, #ffffff);
                    border-right: 0;
                }
                .bubble-left {
                    position: relative;
                    background: var(--c, #f7fcfb);
                    border-radius: 1em;
                    padding: 0.65em 1em;
                }
                .bubble-left::after {
                    content: '';
                    position: absolute;
                    left: -0.6em;
                    top: 50%;
                    transform: translateY(-50%);
                    border: 0.4em solid transparent;
                    border-right: 0.65em solid var(--c, #f7fcfb);
                    border-left: 0;
                }
            `}</style>
            {/* Hero */}
            <section className="bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-screen">
                    <AnimatedContent reverse distance={30} className="flex items-center gap-2 bg-white/50 backdrop-blur px-4 py-1.5 rounded-full text-sm text-gray-600">
                        <span className="size-2 rounded-full bg-green-500 inline-block animate-pulse" />
                        Built for independent coffee shops, boba shops, and bars · Free setup
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.1}>
                        <h1 className="text-center font-urbanist text-5xl/15 md:text-6xl/18 mt-4 font-bold max-w-3xl">
                            <span className="text-gray-800">Simpler inventory.<br />Less stress.</span>
                        </h1>
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.2}>
                        <p className="text-center text-base/7 text-zinc-500 max-w-xl mt-3">
                            We track deliveries, par levels, prep, and reorders — built around your menu and run for you. Your team keeps doing what they do best.
                        </p>
                    </AnimatedContent>


                    <AnimatedContent className="flex flex-col md:flex-row items-center gap-4 mt-8 w-full md:w-auto" delay={0.3}>
                        <button
                            onClick={() => openAiModal("Beverage — Hero")}
                            className="flex items-center justify-center gap-1.5 py-3 md:py-2.5 w-full md:w-auto px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full"
                        >
                            Get started — it&apos;s free
                            <ArrowUpRightIcon size={16} />
                        </button>
                        <a
                            href="#problem"
                            className="py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium text-center border border-white rounded-full"
                        >
                            See what this fixes
                        </a>
                    </AnimatedContent>
                </div>
            </section>

            {/* Stats strip */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                        {[
                            { value: "25 min", label: "lost every morning logging deliveries by hand" },
                            { value: "$200–400", label: "per month for tools built for restaurants, not coffee shops" },
                            { value: "1–3 hrs", label: "a week spent counting, reordering, and planning prep manually" },
                            { value: "1 week", label: "to go live — we handle the full setup" },
                        ].map((stat, i) => (
                            <AnimatedContent key={i} delay={i * 0.1} className="border border-[#edf9f8] rounded-xl p-6 bg-[#f7fcfb]">
                                <p className="font-urbanist font-bold text-4xl text-gray-800">{stat.value}</p>
                                <p className="text-zinc-600 text-sm/6 mt-2 min-h-[4.5rem]">{stat.label}</p>
                            </AnimatedContent>
                        ))}
                    </div>
                </div>
            </section>

            {/* Problem */}
            <section id="problem" className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div className="md:sticky md:top-26 flex flex-col gap-6">
                            <AnimatedContent>
                                <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">The Problem</p>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                    Counting by hand works until life gets busy—and then it doesn&apos;t.
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4">
                                    Handwritten logs. Group chat threads. Opening baristas counting 40+ items from a delivery by hand. Reorders sent from memory or skipped entirely.
                                </p>
                                <p className="text-zinc-500 text-base/7 mt-3">
                                    Manual tracking works on slow days. But one sick shift or a busy rush, and it all falls apart — leaving you to clean it up later.
                                </p>
                                <div className="mt-6 space-y-2">
                                    {[
                                        { quote: "We\u2019re constantly running out of things because we just send a message in a group chat when we\u2019re low.", align: "left" },
                                        { quote: "Manually updating inventory every day is impossible. Just not feasible.", align: "right" },
                                        { quote: "Late nights spent on restocking and prep planning long after closing.", align: "right" },
                                    ].map(({ quote, align }, i) => (
                                        <AnimatedContent key={i} delay={i * 0.1} className={`flex overflow-visible ${align === "right" ? "justify-end pr-4" : "justify-start pl-4"}`}>
                                            <div
                                                className={`max-w-[85%] text-sm text-zinc-600 leading-snug ${align === "right" ? "bubble-right" : "bubble-left"}`}
                                                style={{ '--c': align === "right" ? "#ede9ff" : "#f0f0f0" } as React.CSSProperties}
                                            >
                                                {quote}
                                            </div>
                                        </AnimatedContent>
                                    ))}
                                    <p className="text-xs text-zinc-400 pt-2">From Reddit, Square Community, and G2 — real operators, unprompted.</p>
                                </div>
                            </AnimatedContent>
                            <AnimatedContent className="p-4 md:p-6 bg-purple-500 w-full rounded-xl">
                                <p className="text-base text-white">
                                    We set it up around your shop and keep it running. Your team barely has to think about it.
                                </p>
                                <button
                                    onClick={() => openAiModal("Beverage — Problem CTA")}
                                    className="bg-white hover:bg-gray-100 transition-colors px-5 py-2 rounded-full mt-6 flex items-center gap-1 text-sm font-medium w-max"
                                >
                                    See how it works
                                    <ArrowUpRightIcon size={16} />
                                </button>
                            </AnimatedContent>
                        </div>

                        <div className="flex flex-col items-center justify-center py-8">
                            <p className="text-sm text-zinc-400 mb-8 text-center">These are the moments that eat your time — and nobody&apos;s tracking them.</p>
                            <div ref={stackRef} style={{ perspective: "600px" }}>
                                <ul
                                    className="relative flex flex-col transition-all duration-500"
                                    style={{ transformStyle: "preserve-3d", gap: stackExpanded ? "12px" : "0px" }}
                                >
                                    {manualMoments.map((m, i) => {
                                        const n = manualMoments.length;
                                        const rev = n - 1 - i;
                                        const transforms = [
                                            "translateZ(80px) translateY(-48px)",
                                            "translateZ(40px) translateY(-24px)",
                                            "translateZ(10px) translateY(-8px)",
                                            "translateZ(0px) translateY(0px)",
                                            "translateZ(-20px) translateY(10px)",
                                            "translateZ(-50px) translateY(22px)",
                                        ];
                                        const opacities = [1, 0.92, 0.82, 0.72, 0.62, 0.52];
                                        const blurs = [0, 0, 1, 1.5, 2, 2.5];
                                        return (
                                            <li
                                                key={i}
                                                className="list-none w-full max-w-md bg-white rounded-xl shadow-sm px-4 py-3"
                                                style={{
                                                    transform: stackExpanded ? "none" : (transforms[rev] ?? "translateZ(0)"),
                                                    opacity: stackExpanded ? 1 : (opacities[rev] ?? 0.3),
                                                    filter: stackExpanded ? "none" : (blurs[rev] ? `blur(${blurs[rev]}px)` : "none"),
                                                    transition: "all 500ms",
                                                    transitionDelay: `${i * 40}ms`,
                                                }}
                                            >
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-xs font-semibold text-gray-800">{m.event}</span>
                                                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-500 shrink-0">Manual</span>
                                                </div>
                                                <p className="text-xs text-zinc-500">{m.issue}</p>
                                                <p className="text-[10px] text-zinc-400 mt-0.5">{m.time} · {m.outcome}</p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What we replace — comparison table */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8] p-8 md:p-16">
                    <AnimatedContent>
                        <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">The Savings Pitch</p>
                        <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800 mb-3">
                            You&apos;re probably either paying for something that doesn&apos;t fit — or doing this manually.
                        </h2>
                        <p className="text-zinc-500 text-base/7 max-w-2xl mb-10">
                            Most small beverage shops are on tools built for restaurants, or running on spreadsheets and memory. Neither actually solves the problem.
                        </p>
                    </AnimatedContent>

                    {/* Comparison table — scrollable on mobile */}
                    <div className="overflow-x-auto -mx-2 px-2">
                        <table className="w-full text-sm border-separate border-spacing-0 min-w-[600px]">
                            <thead>
                                <tr>
                                    <th className="text-left px-4 py-3 text-zinc-400 font-normal w-[200px]" />
                                    <th className="text-left px-4 py-3 bg-white rounded-tl-xl border-t border-l border-[#edf9f8]">
                                        <p className="font-urbanist font-semibold text-gray-800">Toast</p>
                                        <p className="text-xs text-zinc-400 font-normal mt-0.5">$0–300/mo + hardware</p>
                                    </th>
                                    <th className="text-left px-4 py-3 bg-white border-t border-l border-[#edf9f8]">
                                        <p className="font-urbanist font-semibold text-gray-800">Square</p>
                                        <p className="text-xs text-zinc-400 font-normal mt-0.5">$139/mo per location</p>
                                    </th>
                                    <th className="text-left px-4 py-3 bg-white border-t border-l border-[#edf9f8]">
                                        <p className="font-urbanist font-semibold text-gray-800">Spreadsheets</p>
                                        <p className="text-xs text-zinc-400 font-normal mt-0.5">Free — but fragile</p>
                                    </th>
                                    <th className="text-left px-4 py-3 bg-purple-600 rounded-tr-xl border-t border-l border-purple-500">
                                        <p className="font-urbanist font-semibold text-white">Fountain of Scale</p>
                                        <p className="text-xs text-purple-200 font-normal mt-0.5">Built for your shop</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        label: "Monthly cost",
                                        vals: ["$0–300/mo + $300–700 processing", "$139/mo per location", "Free", "Free for first partners"],
                                    },
                                    {
                                        label: "Built for beverage shops",
                                        vals: ["✗ Restaurant ecosystem", "✗ Routes to MarketMan", "✗ Person-dependent", "✓ Built for beverage"],
                                    },
                                    {
                                        label: "Par level alerts",
                                        vals: ["✗ Limited", "✗ Basic only", "✗ None", "✓ Automated"],
                                    },
                                    {
                                        label: "Prep planning from sales",
                                        vals: ["✗ Not included", "✗ Not included", "✗ None", "✓ Based on your sales"],
                                    },
                                    {
                                        label: "Auto reorder drafts",
                                        vals: ["✗ Manual", "✗ Manual", "✗ None", "✓ One-tap approval"],
                                    },
                                    {
                                        label: "Manual tracking still required",
                                        vals: ["✓ Still required", "✓ Still required", "✓ Entirely manual", "✗ Eliminated"],
                                    },
                                    {
                                        label: "Setup fee",
                                        vals: ["$800–1,200 hardware", "None", "None", "Free"],
                                    },
                                    {
                                        label: "Works with your POS",
                                        vals: ["✓ Native", "✓ Native", "✗ Manual export", "✓ Works alongside"],
                                    },
                                ].map((row, ri, arr) => {
                                    const isLast = ri === arr.length - 1;
                                    return (
                                        <tr key={row.label}>
                                            <td className="px-4 py-3 text-zinc-500 border-b border-[#edf9f8]">{row.label}</td>
                                            {row.vals.map((val, ci) => {
                                                const isUs = ci === 3;
                                                const base = isUs ? "bg-purple-600 border-l border-purple-500" : "bg-white border-l border-[#edf9f8]";
                                                const bottom = isLast ? (isUs ? " rounded-br-xl rounded-bl-xl border-b border-purple-500" : ci === 0 ? " rounded-bl-xl border-b border-[#edf9f8]" : " border-b border-[#edf9f8]") : "";
                                                const textColor = isUs ? "text-white" : "text-zinc-600";
                                                return (
                                                    <td key={ci} className={`px-4 py-3 ${base}${bottom} border-b ${isUs ? "border-purple-500" : "border-[#edf9f8]"}`}>
                                                        <span className={`text-sm ${textColor}`}>{val}</span>
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Before / After */}
            <section id="features" className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8] p-8 md:p-16">
                    <AnimatedContent>
                        <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">Before &amp; After</p>
                        <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800 mb-3">
                            Same shifts. A fraction of the manual work.
                        </h2>
                    </AnimatedContent>
                    <AnimatedContent className="mt-10 border border-[#edf9f8] rounded-2xl overflow-hidden">
                        {/* Header row */}
                        <div
                            ref={withUsRef}
                            className="grid border-b border-[#edf9f8]"
                            style={{ gridTemplateColumns: withUsExpanded ? "2fr 3fr" : "1fr 1fr", transition: "grid-template-columns 700ms ease" }}
                        >
                            <div className="px-6 py-3 bg-[#f7fcfb] border-r border-[#edf9f8]">
                                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Without us</p>
                            </div>
                            <div className="px-6 py-3 border-l border-purple-100/60" style={{ background: "rgba(237,233,255,0.45)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
                                <p className="text-xs font-semibold uppercase tracking-widest text-purple-500">With us</p>
                            </div>
                        </div>
                        {/* Data rows */}
                        {comparisons.map((c, i, arr) => (
                            <div key={i} className={`grid${i < arr.length - 1 ? " border-b border-[#edf9f8]" : ""}`} style={{ gridTemplateColumns: withUsExpanded ? "2fr 3fr" : "1fr 1fr", transition: "grid-template-columns 700ms ease" }}>
                                <div className="px-6 py-5 border-r border-[#edf9f8]">
                                    <p className="text-sm/6 text-gray-600">{c.without}</p>
                                </div>
                                <div className="px-6 py-5 border-l border-purple-100/60" style={{ background: "rgba(237,233,255,0.2)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
                                    <p className="text-sm/6 text-gray-600">{c.with}</p>
                                </div>
                            </div>
                        ))}
                    </AnimatedContent>
                </div>
            </section>

            {/* How it works */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8] p-8 md:p-16">
                    <AnimatedContent>
                        <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">How It Works</p>
                        <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800 mb-12">
                            We do the setup. You get the result.
                        </h2>
                    </AnimatedContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {steps.map((s, i) => (
                            <AnimatedContent key={i} delay={i * 0.1} className="flex gap-5">
                                <span className="font-urbanist font-bold text-3xl text-purple-200 shrink-0 leading-none mt-1">{s.n}</span>
                                <div>
                                    <p className="font-urbanist font-semibold text-lg text-gray-800 mb-2">{s.title}</p>
                                    <p className="text-zinc-500 text-sm/6">{s.body}</p>
                                </div>
                            </AnimatedContent>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8] p-8 md:p-16">
                    <AnimatedContent>
                        <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">FAQ</p>
                        <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800 mb-10">Common questions</h2>
                    </AnimatedContent>
                    <div className="max-w-2xl divide-y divide-[#edf9f8]">
                        {faqs.map((faq, i) => (
                            <AnimatedContent key={i} delay={i * 0.05}>
                                <button
                                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <span className="font-medium text-gray-800 text-sm">{faq.q}</span>
                                    <ChevronDownIcon
                                        size={16}
                                        className={`text-zinc-400 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                                    />
                                </button>
                                {openFaq === i && (
                                    <p className="text-sm text-zinc-500 leading-relaxed pb-5 -mt-1">{faq.a}</p>
                                )}
                            </AnimatedContent>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16">
                        <AnimatedContent className="mb-16">
                            <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">The Team</p>
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">You&apos;re working with us directly</h2>
                            <p className="text-zinc-500 text-base/7 mt-3 max-w-md">Not a support ticket. Not an account manager. The people building it.</p>
                        </AnimatedContent>
                        <div className="flex flex-wrap gap-12 md:gap-20">
                            {[
                                {
                                    name: "Mai",
                                    image: "/assets/mai.jpeg",
                                    role: "Co-founder",
                                    linkedin: "https://www.linkedin.com/in/mai-akiyoshi/",
                                    x: "https://x.com/mai_on_chain",
                                    bio: "At Gusto, she built the internal tool that let non-technical marketers ship landing pages in days instead of a month. She later founded HeyMint, growing it to over a million users before it was acquired. She\u2019s a software engineer who knows how to make systems that actually get used.",
                                },
                                {
                                    name: "Ben",
                                    image: "/assets/ben.jpeg",
                                    role: "Co-founder",
                                    linkedin: "https://www.linkedin.com/in/intenex/",
                                    x: "https://x.com/intenex",
                                    bio: "Thiel Fellow, Harvard dropout, and co-founder of Stream, which raised $20M from investors including Pantera Capital. Years as a backend and full-stack engineer at YC-backed startups. He brings technical depth and practical business judgment.",
                                },
                                {
                                    name: "Stacy",
                                    image: "/assets/stacy.jpg",
                                    role: "Head of Marketing & Customer Success",
                                    linkedin: "https://www.linkedin.com/in/stacydonnaj/",
                                    x: "https://x.com/stacydj0x",
                                    bio: "Started in Customer Success, rose to CS Manager, then Head of Marketing at a Silicon Valley startup. She\u2019s the one making sure the system works for your shop and that you\u2019re never left hanging.",
                                },
                            ].map((person, i) => (
                                <AnimatedContent key={i} delay={i * 0.15} className="flex flex-col max-w-xs">
                                    <img src={person.image} alt={person.name} className="w-52 h-64 object-cover rounded-lg" />
                                    <h3 className="font-urbanist font-semibold text-lg text-gray-800 mt-4">{person.name}</h3>
                                    <p className="text-purple-500 text-sm font-medium mt-0.5">{person.role}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <a href={person.x} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-600 transition-colors">
                                            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        </a>
                                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-80 transition-opacity">
                                            <img src="/assets/linkedin.png" alt="LinkedIn" width={18} height={18} />
                                        </a>
                                    </div>
                                    <p className="text-zinc-500 text-sm mt-3 leading-6">{person.bio}</p>
                                </AnimatedContent>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA / Form */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8] p-8 md:p-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <AnimatedContent>
                            <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">Get Started</p>
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800 mb-4">
                                See it in action — then decide.
                            </h2>
                            <p className="text-zinc-500 text-base/7 mb-6">
                                We&apos;re working with a handful of shops to get this right. Setup is free. We configure it around your menu, run it for you, and show you exactly how it works before you pay a thing.
                            </p>
                            <ul className="space-y-2">
                                {[
                                    "Free setup — built around your menu",
                                    "No new app for your team to learn",
                                    "Can replace MarketMan or Lightspeed at lower cost",
                                    "Works alongside your existing POS",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                                        <span className="size-1.5 rounded-full bg-purple-400 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </AnimatedContent>

                        <AnimatedContent delay={0.1}>
                            {formSubmitted ? (
                                <div className="border border-[#edf9f8] rounded-2xl p-8 bg-[#f7fcfb] text-center">
                                    <p className="font-urbanist font-semibold text-xl text-gray-800 mb-2">We&apos;ll be in touch soon.</p>
                                    <p className="text-sm text-zinc-500">We review every submission personally. Expect to hear from us within 1 business day.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleFormSubmit} className="border border-[#edf9f8] rounded-2xl p-6 bg-[#f7fcfb] flex flex-col gap-4">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="flex flex-col gap-1">
                                            <label className="text-xs font-medium text-zinc-500">Your name</label>
                                            <input name="name" value={form.name} onChange={handleFormChange} placeholder="Your name" className={formErrors.name ? inputError : inputNormal} />
                                            {formErrors.name && <p className="text-xs text-red-400">{formErrors.name}</p>}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="text-xs font-medium text-zinc-500">Email</label>
                                            <input name="email" value={form.email} onChange={handleFormChange} placeholder="you@yourshop.com" className={formErrors.email ? inputError : inputNormal} />
                                            {formErrors.email && <p className="text-xs text-red-400">{formErrors.email}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-medium text-zinc-500">Shop name <span className="text-red-400">*</span></label>
                                        <input name="business" value={form.business} onChange={handleFormChange} placeholder="Your shop name" className={formErrors.business ? inputError : inputNormal} />
                                        {formErrors.business && <p className="text-xs text-red-400">{formErrors.business}</p>}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-medium text-zinc-500">Website or Instagram (optional)</label>
                                        <input name="website" value={form.website} onChange={handleFormChange} placeholder="yourshop.com" className={inputNormal} />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-medium text-zinc-500">What&apos;s your current inventory process? (optional)</label>
                                        <textarea name="notes" value={form.notes} onChange={handleFormChange} rows={3} placeholder="Spreadsheet, MarketMan, group chats, memory..." className={`${inputNormal} resize-none`} />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={formLoading}
                                        className="flex items-center justify-center gap-1.5 py-2.5 px-6 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full text-sm font-medium disabled:opacity-60 w-full"
                                    >
                                        {formLoading ? "Sending..." : "Get started — it's free"}
                                        {!formLoading && <ArrowUpRightIcon size={15} />}
                                    </button>
                                    <p className="text-xs text-zinc-400 text-center">We review every submission personally and reach out within 1 business day.</p>
                                </form>
                            )}
                        </AnimatedContent>
                    </div>
                </div>
            </section>
        </main>
    );
}
