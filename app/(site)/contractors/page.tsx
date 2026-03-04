"use client";
import AnimatedContent from "@/components/animated-content";
import { ArrowUpRightIcon, CheckIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, FacebookIcon, FileTextIcon, LinkedinIcon, MessageSquareIcon, PhoneCallIcon, XIcon } from "lucide-react";
import Image from "next/image";
import CountUp from "@/components/count-number";
import { useAiModal } from "@/contexts/ai-modal-context";
import { useState, useEffect, useRef } from "react";

const heroStats = [
    { value: 62, suffix: "%", label: "of contractor calls go unanswered when crews are on job sites" },
    { value: 85, suffix: "%", label: "of customers who hit voicemail call a competitor instead" },
];

const missedCases = [
    {
        time: "Tue 4:18 pm",
        channel: "Phone call",
        channelType: "phone" as const,
        inquiry: "Water heater's leaking. Can you come today?",
        missed: "→ Voicemail",
        outcome: "Booked elsewhere",
    },
    {
        time: "Sat 7:30 pm",
        channel: "SMS",
        channelType: "sms" as const,
        inquiry: "Do you serve my area? Are you open?",
        missed: "→ No reply",
        outcome: "They call the next listing",
    },
    {
        time: "Sat 8:55 pm",
        channel: "Facebook DM",
        channelType: "facebook" as const,
        inquiry: "Can I get a rough price for a gutter clean?",
        missed: "→ Seen Monday",
        outcome: "Booked elsewhere",
    },
    {
        time: "Sun 10:12 am",
        channel: "Website form",
        channelType: "webform" as const,
        inquiry: "Need an estimate for a panel upgrade.",
        missed: "→ No reply",
        outcome: "Inquiry lost",
    },
];

const telegramSummaries = [
    {
        icon: "📞",
        title: "Phone Activity",
        date: "Monday, March 3",
        entries: [
            { time: "7:22 AM", handle: "Inbound call", type: "🗓 scheduling", text: "HVAC tune-up, 3-bed 2-bath. → Scheduled for Wed 9am. Confirmation sent to customer." },
            { time: "11:45 AM", handle: "Inbound call", type: "❓ availability", text: "Asked about weekend slots. → Auto-replied yes, Sat 10am booked and confirmed." },
            { time: "5:03 PM", handle: "Inbound call", type: "🚨 emergency", text: "Pipe burst under kitchen sink. → Flagged as emergency. On-call tech notified by SMS." },
        ],
        totals: [
            { label: "Calls handled", value: "3" },
            { label: "Jobs scheduled", value: "2" },
            { label: "Emergency flags", value: "1" },
            { label: "Leads captured", value: "3" },
            { label: "Follow-up needed", value: "1 — pipe emergency" },
        ],
    },
    {
        icon: "📋",
        title: "Follow-up Summary",
        date: "Monday, March 3",
        entries: [
            { time: "8:15 AM", handle: "Estimate #4821", type: "📩 15-min follow-up", text: "Auto follow-up sent: 'Did you get a chance to review the quote?' → Email opened." },
            { time: "2:30 PM", handle: "Estimate #4809", type: "✅ accepted", text: "3-day nudge sent. Customer replied: 'Yes, let's do it.' → Job confirmed, deposit link sent." },
            { time: "6:00 PM", handle: "Estimate #4797", type: "📩 final nudge", text: "Final follow-up on week-old estimate for gutter replacement. Awaiting reply." },
        ],
        totals: [
            { label: "Follow-ups sent", value: "3" },
            { label: "Estimates accepted", value: "1" },
            { label: "Revenue recovered", value: "$1,840" },
            { label: "Still pending", value: "2" },
            { label: "Next follow-up", value: "Tue 8:00 AM" },
        ],
    },
    {
        icon: "💬",
        title: "Web Inquiry Summary",
        date: "Monday, March 3",
        entries: [
            { time: "9:44 AM", handle: "Web form", type: "📩 auto-reply", text: "Quote request for gutter cleaning. → Auto-replied with pricing range + booking link." },
            { time: "1:15 PM", handle: "Web form", type: "📩 auto-reply", text: "Service area question for Marin County. → Confirmed coverage, linked to scheduling." },
            { time: "8:47 PM", handle: "Web form", type: "📩 after-hours", text: "Emergency drain clog. → After-hours reply sent, flagged for morning callback." },
        ],
        totals: [
            { label: "Web forms handled", value: "3" },
            { label: "Auto-replied", value: "3" },
            { label: "Missed", value: "0" },
            { label: "Leads captured", value: "3" },
            { label: "Follow-up needed", value: "1 — drain emergency" },
        ],
    },
];

const handles = [
    "Answers calls during jobs, after hours, and weekends",
    "Books jobs or schedules a site visit",
    "Replies to quote and pricing questions fast",
    "Follows up on estimates automatically (15 min, 3 days, final nudge)",
    "Re-engages past customers with seasonal reminders",
    "Sends review requests after completed jobs",
];

const comparisons = [
    {
        without: "Call comes in mid-job. Goes to voicemail.\nCustomer calls a competitor.",
        with: "Call answered instantly. Job booked. Customer confirmed.",
    },
    {
        without: "Estimate sits in inbox until the end of the day.",
        with: "Instant reply + follow-up sent automatically.",
    },
    {
        without: "A web inquiry at 9pm goes unanswered until morning.",
        with: "Chat replies with basic pricing info and a booking link, overnight.",
    },
];

const results = [
    { value: 60, suffix: "%", prefix: "", label: "higher conversion rate through AI call handling vs missed calls" },
    { value: 18, suffix: "%", prefix: "", label: "of previously unbooked leads converted via automated follow-up" },
    { value: 95, suffix: "%", prefix: "", label: "follow-up rate on missed calls within 15 minutes using automation" },
];

const steps = [
    {
        n: "01",
        title: "We map your calls and questions",
        body: "Service area, hours, emergency calls, pricing ranges, scheduling rules — so the AI knows exactly how to handle each one.",
    },
    {
        n: "02",
        title: "We connect your booking flow",
        body: "So it can schedule, confirm, and route jobs — not just take messages.",
    },
    {
        n: "03",
        title: "It runs automatically",
        body: "Calls, web inquiries, follow-ups, and review requests during the windows you miss most.",
    },
    {
        n: "04",
        title: "Your team gets a daily summary",
        body: "Booked jobs, captured leads, and anything that needs a personal touch.",
    },
];

const faqs = [
    {
        q: "Does this replace my office admin or dispatcher?",
        a: "No. It covers the hours nobody can answer: while crews are on sites, after close, and on weekends. Your team handles the work that needs a person.",
    },
    {
        q: "What happens when the AI isn't sure about pricing or scope?",
        a: "It gives a range or says it'll need a site visit, then routes to your team. You set the guardrails — it never quotes outside them.",
    },
    {
        q: "Will customers know they're talking to AI?",
        a: "It's designed to handle the most common questions quickly and route anything complex to you. Most customers just get a fast answer.",
    },
    {
        q: "What channels can it cover?",
        a: "Phone, web forms, text, and social DMs are the biggest wins for contractors.",
    },
];

export default function Contractors() {
    const { openAiModal } = useAiModal();
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [carouselHovered, setCarouselHovered] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (carouselHovered) return;
        intervalRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % telegramSummaries.length);
        }, 3500);
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [carouselHovered]);

    const [faqForm, setFaqForm] = useState({ name: "", email: "", business: "", website: "", gap: "", notes: "" });
    const [faqErrors, setFaqErrors] = useState<Record<string, string>>({});
    const [faqLoading, setFaqLoading] = useState(false);
    const [faqSubmitted, setFaqSubmitted] = useState(false);

    const GAP_OPTIONS = ["Missed calls during jobs", "Web form inquiries", "Quote follow-ups", "All of the above"];
    const inputBase = "border bg-[#f7fcfb] rounded-lg px-3 py-2 text-sm text-gray-800 placeholder:text-zinc-400 focus:outline-none transition-colors";
    const inputNormal = `${inputBase} border-[#edf9f8] focus:border-purple-300`;
    const inputError = `${inputBase} border-red-300 focus:border-red-400`;

    function handleFaqFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setFaqForm(prev => ({ ...prev, [name]: value }));
        if (faqErrors[name]) setFaqErrors(prev => { const next = { ...prev }; delete next[name]; return next; });
    }

    async function handleFaqFormSubmit(e: React.FormEvent) {
        e.preventDefault();
        const errs: Record<string, string> = {};
        if (!faqForm.name.trim()) errs.name = "Name is required";
        if (!faqForm.email.trim()) errs.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(faqForm.email)) errs.email = "Enter a valid email";
        if (!faqForm.business.trim()) errs.business = "Business name is required";
        if (Object.keys(errs).length > 0) { setFaqErrors(errs); return; }
        setFaqLoading(true);
        try {
            await fetch("/api/contact-ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...faqForm, source: "Contractor — FAQ form" }),
            });
            setFaqSubmitted(true);
        } finally {
            setFaqLoading(false);
        }
    }

    return (
        <main>
            {/* Hero */}
            <section className="bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-screen">
                    <AnimatedContent reverse distance={30} className="flex items-center gap-2 bg-white/50 backdrop-blur px-4 py-1.5 rounded-full text-sm text-gray-600">
                        <span className="size-2 rounded-full bg-green-500 inline-block animate-pulse" />
                        Always-on automation · Built in 2 weeks
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.1}>
                        <h1 className="text-center font-urbanist text-5xl/15 md:text-6xl/18 mt-4 font-bold max-w-3xl">
                            <span className="text-gray-800">Capture jobs even when nobody can pick up.</span>
                        </h1>
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.2}>
                        <p className="text-center text-base/7 text-zinc-500 max-w-xl mt-3">
                            A front desk layer that runs in the background: fast answers, job booking, and clean handoffs for anything that needs a personal touch.
                        </p>
                    </AnimatedContent>

                    <AnimatedContent className="flex flex-col md:flex-row items-center gap-4 mt-8 w-full md:w-auto" delay={0.3}>
                        <button
                            onClick={() => openAiModal("Contractor — Hero")}
                            className="flex items-center justify-center gap-1.5 py-3 md:py-2.5 w-full md:w-auto px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full"
                        >
                            Book a 15-min walkthrough
                            <ArrowUpRightIcon size={16} />
                        </button>
                        <a
                            href="#handles"
                            className="py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium text-center border border-white rounded-full"
                        >
                            See what it handles
                        </a>
                    </AnimatedContent>
                </div>
            </section>

            {/* Stats strip */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                        {heroStats.map((stat, i) => (
                            <AnimatedContent key={i} delay={i * 0.1} className="border border-[#edf9f8] rounded-xl p-6 bg-[#f7fcfb]">
                                <p className="font-urbanist font-bold text-4xl text-gray-800">
                                    <CountUp to={stat.value} duration={1.5} delay={i * 0.15} />{stat.suffix}
                                </p>
                                <p className="text-zinc-600 text-sm/6 mt-2 min-h-[4.5rem]">{stat.label}</p>
                            </AnimatedContent>
                        ))}
                        <AnimatedContent delay={0.2} className="border border-[#edf9f8] rounded-xl p-6 bg-[#f7fcfb]">
                            <p className="font-urbanist font-bold text-4xl text-gray-800">&lt;3%</p>
                            <p className="text-zinc-600 text-sm/6 mt-2 min-h-[4.5rem]">of callers leave a voicemail for a contractor to return</p>
                        </AnimatedContent>
                        <AnimatedContent delay={0.3} className="border border-[#edf9f8] rounded-xl p-6 bg-[#f7fcfb]">
                            <p className="font-urbanist font-bold text-4xl text-gray-800">Up to $120K</p>
                            <p className="text-zinc-600 text-sm/6 mt-2 min-h-[4.5rem]">annual revenue lost from missed calls (based on 1,200+ contractors)</p>
                        </AnimatedContent>
                    </div>
                    <p className="text-zinc-400 text-xs px-8 md:px-16 pb-8 -mt-6">
                        Sources: CallBird AI Contractor Report 2024, Housecall Pro Missed Calls Study 2024, Suzee AI Home Services Report 2024
                    </p>
                </div>
            </section>

            {/* Problem */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div className="md:sticky md:top-26 flex flex-col gap-6">
                            <AnimatedContent>
                                <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">The Problem</p>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                    Missed calls don&apos;t disappear. They go to the contractor down the street.
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4">
                                    A homeowner calls at 6:40pm about a leaking pipe. Another fills out your website form Sunday morning asking for a quote. Your crew is on jobs, nobody sees it fast enough, and both end up booking the next company that answers.
                                </p>
                                <p className="text-zinc-500 text-base/7 mt-3">
                                    Your team isn&apos;t dropping the ball. The job and the sales pipeline just can&apos;t run at the same time.
                                </p>
                            </AnimatedContent>
                            <AnimatedContent className="p-4 md:p-6 bg-purple-500 w-full rounded-xl">
                                <p className="text-base text-white">
                                    We handle the buildout. You don&apos;t change how you work.
                                </p>
                                <button
                                    onClick={() => openAiModal("Contractor — Problem CTA")}
                                    className="bg-white hover:bg-gray-100 transition-colors px-5 py-2 rounded-full mt-6 flex items-center gap-1 text-sm font-medium w-max"
                                >
                                    See what we&apos;d automate first
                                    <ArrowUpRightIcon size={16} />
                                </button>
                            </AnimatedContent>
                        </div>

                        <div className="flex flex-col gap-4">
                            {missedCases.map((c, i) => (
                                <AnimatedContent key={i} delay={i * 0.1} className="border border-gray-200/60 rounded-xl p-5 bg-gray-50/80 backdrop-blur-sm">
                                    <div className="grid grid-cols-3 items-center">
                                        <div className="flex flex-col gap-1 pr-4">
                                            <div className="flex items-center gap-1.5">
                                                {c.channelType === "phone" && <PhoneCallIcon size={12} className="text-zinc-400" />}
                                                {c.channelType === "sms" && <MessageSquareIcon size={12} className="text-zinc-400" />}
                                                {c.channelType === "facebook" && <FacebookIcon size={12} className="text-zinc-400" />}
                                                {c.channelType === "webform" && <FileTextIcon size={12} className="text-zinc-400" />}
                                                <span className="text-xs text-zinc-500 font-medium">{c.channel}</span>
                                            </div>
                                            <span className="text-xs text-zinc-400">{c.time}</span>
                                        </div>
                                        <div className="flex flex-col gap-1.5 px-4 border-l border-[#edf9f8]">
                                            <p className="text-sm text-gray-700">&ldquo;{c.inquiry}&rdquo;</p>
                                            <span className="text-xs text-zinc-400">{c.missed}</span>
                                            <span className="w-max text-xs font-medium px-2 py-0.5 rounded-full bg-red-50 text-red-400">Missed</span>
                                        </div>
                                        <div className="pl-4 border-l border-[#edf9f8]">
                                            <span className="text-xs text-zinc-400">{c.outcome}</span>
                                        </div>
                                    </div>
                                </AnimatedContent>
                            ))}
                            <AnimatedContent delay={0.45}>
                                <p className="text-sm text-zinc-400 px-1">It&apos;s not staff effort. It&apos;s timing. People book when you&apos;re on a job site.</p>
                            </AnimatedContent>
                        </div>
                    </div>
                </div>
            </section>

            {/* What AI handles */}
            <section id="handles" className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 border-x md:divide-x border-[#edf9f8] divide-[#edf9f8] max-w-7xl mx-auto">
                    <div className="p-4 pt-16 md:p-16">
                        <AnimatedContent>
                            <p className="text-sm font-medium text-zinc-500 mb-6">Handled automatically, around the clock</p>
                        </AnimatedContent>
                        {/* Telegram chat window carousel */}
                        <div
                            className="relative"
                            onMouseEnter={() => setCarouselHovered(true)}
                            onMouseLeave={() => setCarouselHovered(false)}
                        >
                            <div className="relative h-[580px]">
                                {telegramSummaries.map((summary, idx) => (
                                    <div key={idx} className={`absolute inset-0 transition-opacity duration-300 ${idx === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                                        <div className="bg-[#f0f2f5] rounded-2xl overflow-hidden shadow-xl border border-zinc-200 flex flex-col h-full">
                                            {/* Window chrome */}
                                            <div className="relative flex items-center px-4 py-3 bg-white border-b border-zinc-100 shrink-0">
                                                <div className="flex gap-1.5">
                                                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                                    <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
                                                </div>
                                                <p className="absolute inset-0 flex items-center justify-center text-zinc-500 text-xs pointer-events-none">AI Daily Summary</p>
                                            </div>

                                            {/* Chat area */}
                                            <div className="px-4 py-4 space-y-2.5 flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white [&::-webkit-scrollbar-thumb]:rounded-full" style={{ scrollbarWidth: "thin", scrollbarColor: "#ffffff transparent" }}>
                                                <div className="flex justify-center mb-3">
                                                    <span className="text-zinc-400 text-[10px] bg-zinc-200/70 px-3 py-1 rounded-full">
                                                        {summary.icon} {summary.title} — {summary.date}
                                                    </span>
                                                </div>

                                                {summary.entries.map((entry, i) => (
                                                    <div key={i} className="flex items-end gap-2 max-w-[88%]">
                                                        <div className="bg-white shadow-sm rounded-2xl rounded-tl-sm px-3.5 py-2.5 w-full">
                                                            <p className="text-zinc-400 text-[10px] font-mono mb-1">
                                                                {entry.time} · {entry.handle} · {entry.type}
                                                            </p>
                                                            <p className="text-zinc-700 text-xs leading-relaxed">{entry.text}</p>
                                                        </div>
                                                    </div>
                                                ))}

                                                <div className="flex items-end gap-2 max-w-[88%] pt-1">
                                                    <div className="bg-[#dbd2ff]/40 border border-purple-100 rounded-2xl rounded-tl-sm px-3.5 py-2.5 w-full">
                                                        <p className="text-zinc-400 text-[10px] font-mono mb-2">Summary</p>
                                                        <div className="flex flex-col gap-1">
                                                            {summary.totals.map((row, i) => (
                                                                <div key={i} className="flex items-baseline justify-between gap-4">
                                                                    <span className="text-zinc-400 text-[10px] font-mono">{row.label}</span>
                                                                    <span className="text-zinc-600 text-[10px] font-mono font-medium shrink-0">{row.value}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Compose bar */}
                                            <div className="shrink-0 flex items-center gap-2 px-3 py-3 bg-white border-t border-zinc-100">
                                                <div className="flex-1 bg-zinc-100 rounded-full px-4 py-2">
                                                    <p className="text-zinc-400 text-xs">Message...</p>
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center shrink-0">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white translate-x-0.5">
                                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center justify-between mt-4">
                                <button
                                    onClick={() => setCurrentSlide(prev => (prev - 1 + 3) % 3)}
                                    className="p-1.5 rounded-full border border-[#edf9f8] text-zinc-400 hover:text-zinc-600 transition-colors"
                                >
                                    <ChevronLeftIcon size={16} />
                                </button>
                                <div className="flex gap-1.5">
                                    {telegramSummaries.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentSlide(i)}
                                            className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentSlide ? "bg-purple-500" : "bg-zinc-200"}`}
                                        />
                                    ))}
                                </div>
                                <button
                                    onClick={() => setCurrentSlide(prev => (prev + 1) % 3)}
                                    className="p-1.5 rounded-full border border-[#edf9f8] text-zinc-400 hover:text-zinc-600 transition-colors"
                                >
                                    <ChevronRightIcon size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="p-4 pt-16 md:p-16 flex flex-col items-start md:sticky md:top-26">
                            <AnimatedContent>
                                <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">What AI Handles</p>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                    While your crew is in the field or after hours
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4 max-w-sm">
                                    AI doesn&apos;t replace your technicians. It covers the shift when nobody can answer.
                                </p>
                                <ul className="mt-6 flex flex-col gap-3">
                                    {handles.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5">
                                            <CheckIcon size={15} className="text-purple-500 mt-0.5 shrink-0" />
                                            <span className="text-zinc-600 text-sm/6">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedContent>
                            <AnimatedContent delay={0.1} className="mt-8 flex items-center justify-between gap-5 p-6 bg-[#5bbfba] w-full rounded-xl">
                                <h3 className="text-base text-white text-balance">
                                    Confirmed bookings, captured leads, and only the messages that actually need your attention.
                                </h3>
                                <button
                                    onClick={() => openAiModal("Contractor — What AI Handles CTA")}
                                    className="bg-white hover:bg-gray-100 transition-colors px-5 py-2 rounded-full text-sm font-medium w-max shrink-0"
                                >
                                    Get a setup plan
                                </button>
                            </AnimatedContent>
                        </div>
                    </div>
                </div>
            </section>

            {/* Without / With comparison */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16">
                        <AnimatedContent className="text-center mb-12">
                            <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">Before &amp; After</p>
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">What changes when AI covers the gap</h2>
                        </AnimatedContent>

                        <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-y-6 sm:gap-y-0 lg:max-w-3xl lg:grid-cols-2">
                            {/* Without AI — light, left */}
                            <AnimatedContent className="rounded-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-tr-none lg:rounded-bl-3xl">
                                <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Without AI</h3>
                                <ul className="mt-8 space-y-5">
                                    {comparisons.map((pair, i) => (
                                        <li key={i} className="flex gap-x-3">
                                            <XIcon className="h-5 w-5 shrink-0 text-zinc-300 mt-0.5" aria-hidden="true" />
                                            <span className="text-zinc-500 text-sm/6 whitespace-pre-line">{pair.without}</span>
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedContent>

                            {/* With AI — elevated, right */}
                            <AnimatedContent delay={0.1} className="relative rounded-3xl bg-white p-8 shadow-lg shadow-gray-200/80 ring-1 ring-gray-900/5 sm:p-10 lg:-ml-6 lg:px-12 lg:py-14">
                                <h3 className="text-xs font-semibold uppercase tracking-widest text-purple-500">With AI</h3>
                                <ul className="mt-8 space-y-5">
                                    {comparisons.map((pair, i) => (
                                        <li key={i} className="flex gap-x-3">
                                            <CheckIcon className="h-5 w-5 shrink-0 text-purple-500 mt-0.5" aria-hidden="true" />
                                            <span className="text-zinc-700 text-sm/6">{pair.with}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => openAiModal("Contractor — Before & After CTA")}
                                    className="mt-10 w-full rounded-full bg-purple-500 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-purple-400 transition-colors"
                                >
                                    Schedule a call
                                </button>
                            </AnimatedContent>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16">
                        <AnimatedContent className="text-center mb-12">
                            <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">Results</p>
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">What contractors are seeing with AI phone and booking tools</h2>
                        </AnimatedContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {results.map((stat, i) => (
                                <AnimatedContent key={i} delay={i * 0.1} className="border border-[#edf9f8] rounded-xl p-6 bg-[#f7fcfb] text-center">
                                    <p className="font-urbanist font-bold text-5xl text-gray-800">
                                        {stat.prefix}<CountUp to={stat.value} duration={1.5} delay={i * 0.15} />{stat.suffix}
                                    </p>
                                    <p className="text-zinc-500 text-sm/6 mt-3">{stat.label}</p>
                                </AnimatedContent>
                            ))}
                        </div>
                        <p className="text-zinc-400 text-xs mt-6">
                            Sources: Avoca AI Home Services Results 2024, Sameday AI Conversion Data 2024
                        </p>
                        <p className="text-zinc-400 text-xs mt-2 italic">
                            A roofing client recovered $53,000 from old leads using automated follow-up.
                        </p>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 border-x md:divide-x border-[#edf9f8] divide-[#edf9f8] max-w-7xl mx-auto">
                    <div>
                        <div className="p-4 pt-16 md:p-16 flex flex-col items-start md:sticky md:top-26">
                            <AnimatedContent>
                                <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">How It Works</p>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                    A simple setup, then it runs in the background
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4 max-w-sm">
                                    We handle the buildout. Your team doesn&apos;t need to learn new software or change how they work.
                                </p>
                            </AnimatedContent>
                            <AnimatedContent delay={0.1} className="p-4 md:p-6 bg-purple-500 w-full rounded-xl mt-8">
                                <p className="text-base text-white">
                                    We handle the buildout. You don&apos;t change how you work.
                                </p>
                                <button
                                    onClick={() => openAiModal("Contractor — How It Works CTA")}
                                    className="bg-white hover:bg-gray-100 transition-colors px-5 py-2 rounded-full mt-6 flex items-center gap-1 text-sm font-medium w-max"
                                >
                                    Schedule a call
                                    <ArrowUpRightIcon size={16} />
                                </button>
                            </AnimatedContent>
                        </div>
                    </div>
                    <div className="p-4 pt-16 md:p-16 flex flex-col gap-4">
                        {steps.map((step, i) => (
                            <AnimatedContent key={i} delay={i * 0.1} className="border border-[#edf9f8] rounded-xl p-6 bg-[#f7fcfb]">
                                <p className="text-purple-500 text-xs font-semibold tracking-widest mb-2">{step.n}</p>
                                <p className="font-medium text-gray-800">{step.title}</p>
                                <p className="text-zinc-500 text-sm/6 mt-2">{step.body}</p>
                            </AnimatedContent>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-[#edf9f8]">
                        {/* Left — FAQ accordion */}
                        <div className="p-8 md:p-16">
                            <AnimatedContent className="mb-12">
                                <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">FAQ</p>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">Common questions</h2>
                            </AnimatedContent>
                            <div className="flex flex-col divide-y divide-[#edf9f8]">
                                {faqs.map((faq, i) => (
                                    <AnimatedContent key={i} delay={i * 0.05}>
                                        <button
                                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                            className="w-full flex items-center justify-between gap-4 py-5 text-left"
                                        >
                                            <span className="font-medium text-gray-800 text-sm/6">{faq.q}</span>
                                            {openFaq === i
                                                ? <ChevronUpIcon size={16} className="text-zinc-400 shrink-0" />
                                                : <ChevronDownIcon size={16} className="text-zinc-400 shrink-0" />
                                            }
                                        </button>
                                        {openFaq === i && (
                                            <p className="text-zinc-500 text-sm/6 pb-5">{faq.a}</p>
                                        )}
                                    </AnimatedContent>
                                ))}
                            </div>
                        </div>

                        {/* Right — inline form */}
                        <div className="p-8 md:p-16">
                            <AnimatedContent className="mb-8">
                                <h2 className="font-urbanist font-semibold text-2xl text-gray-800">Let&apos;s talk</h2>
                                <p className="text-zinc-500 text-sm/6 mt-2">We&apos;ll review your setup and get back to you within 24 hours.</p>
                            </AnimatedContent>
                            {faqSubmitted ? (
                                <AnimatedContent className="flex flex-col items-center justify-center py-12 text-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <h3 className="font-urbanist font-semibold text-xl text-gray-800">We got it.</h3>
                                    <p className="text-zinc-500 text-sm mt-2">We&apos;ll be in touch within 24 hours.</p>
                                </AnimatedContent>
                            ) : (
                                <form onSubmit={handleFaqFormSubmit} noValidate className="flex flex-col gap-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-medium text-gray-700">Name <span className="text-purple-500">*</span></label>
                                            <input name="name" value={faqForm.name} onChange={handleFaqFormChange} type="text" placeholder="Your name" className={faqErrors.name ? inputError : inputNormal} />
                                            {faqErrors.name && <p className="text-xs text-red-500">{faqErrors.name}</p>}
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-medium text-gray-700">Email <span className="text-purple-500">*</span></label>
                                            <input name="email" value={faqForm.email} onChange={handleFaqFormChange} type="email" placeholder="you@yourcompany.com" className={faqErrors.email ? inputError : inputNormal} />
                                            {faqErrors.email && <p className="text-xs text-red-500">{faqErrors.email}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-gray-700">Business name <span className="text-purple-500">*</span></label>
                                        <input name="business" value={faqForm.business} onChange={handleFaqFormChange} type="text" placeholder="Your business name" className={faqErrors.business ? inputError : inputNormal} />
                                        {faqErrors.business && <p className="text-xs text-red-500">{faqErrors.business}</p>}
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-gray-700">Website <span className="text-zinc-400 font-normal">(optional)</span></label>
                                        <input name="website" value={faqForm.website} onChange={handleFaqFormChange} type="url" placeholder="https://yourcompany.com" className={inputNormal} />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-gray-700">Biggest gap <span className="text-zinc-400 font-normal">(optional)</span></label>
                                        <select name="gap" value={faqForm.gap} onChange={handleFaqFormChange} className={`${inputNormal} appearance-none`}>
                                            <option value="">Select one...</option>
                                            {GAP_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-gray-700">Anything else? <span className="text-zinc-400 font-normal">(optional)</span></label>
                                        <textarea name="notes" value={faqForm.notes} onChange={handleFaqFormChange} rows={2} placeholder="Tell us about your current setup..." className={`${inputNormal} resize-none`} />
                                    </div>
                                    <button type="submit" disabled={faqLoading} className="mt-2 w-full py-2.5 bg-purple-500 hover:bg-purple-600 disabled:opacity-60 text-white rounded-full text-sm font-medium transition-colors">
                                        {faqLoading ? "Sending..." : "Let's talk"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Scoping Call */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="py-20 px-4 flex flex-col items-center text-center">
                        <AnimatedContent className="w-max border border-[#edf9f8] p-3 rounded-full text-purple-500 bg-white mb-6">
                            <PhoneCallIcon size={24} />
                        </AnimatedContent>
                        <AnimatedContent delay={0.05}>
                            <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">Where to start</p>
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">Want to see what this looks like for your business?</h2>
                        </AnimatedContent>
                        <AnimatedContent delay={0.1} className="flex flex-col sm:flex-row items-center gap-3 mt-8 text-sm text-zinc-500">
                            <span>We&apos;ll show you the gaps we&apos;d cover</span>
                            <span className="hidden sm:inline text-zinc-300">·</span>
                            <span>What we&apos;d automate first</span>
                            <span className="hidden sm:inline text-zinc-300">·</span>
                            <span>What it would look like in your exact call flow</span>
                        </AnimatedContent>
                        <AnimatedContent delay={0.15} className="mt-8">
                            <button
                                onClick={() => openAiModal("Contractor — Scoping Call")}
                                className="flex items-center gap-1.5 py-2.5 px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full text-sm font-medium"
                            >
                                Show me my gaps
                                <ArrowUpRightIcon size={14} />
                            </button>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16">
                        <AnimatedContent className="text-center mb-16">
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">You&apos;re working with us directly</h2>
                            <p className="text-zinc-500 text-base/7 mt-3 max-w-md mx-auto">The automation never clocks out. Neither do we.</p>
                        </AnimatedContent>
                        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                            {[
                                {
                                    name: "Mai",
                                    image: "/assets/mai.jpeg",
                                    role: "Co-founder",
                                    linkedin: "https://www.linkedin.com/in/mai-akiyoshi/",
                                    bio: "At Gusto, she built the internal tool that let non-technical marketers ship landing pages in days instead of a month — the same problem she's solving here, just directly for small businesses. She later founded HeyMint, growing it to over a million users before it was acquired. She's a software engineer who knows how to make pages that convert, not just look good.",
                                },
                                {
                                    name: "Ben",
                                    image: "/assets/ben.jpeg",
                                    role: "Co-founder",
                                    linkedin: "https://www.linkedin.com/in/intenex/",
                                    bio: "Thiel Fellow, Harvard dropout, and co-founder of Stream, which raised $20M from investors including Pantera Capital. He's spent years as a backend and full-stack engineer at YC-backed startups before moving into operations — he brings both technical depth and practical business judgment to what a company needs online.",
                                },
                            ].map((person, i) => (
                                <AnimatedContent key={i} delay={i * 0.15} className="flex flex-col max-w-xs">
                                    <img src={person.image} alt={person.name} className="w-52 h-64 object-cover rounded-lg" />
                                    <div className="flex items-center gap-2 mt-4">
                                        <h3 className="text-lg font-medium text-gray-800">{person.name}</h3>
                                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-600">
                                            <LinkedinIcon size={16} />
                                        </a>
                                    </div>
                                    <p className="text-purple-500 text-sm font-medium">{person.role}</p>
                                    <p className="text-zinc-500 text-sm mt-3 leading-6">{person.bio}</p>
                                </AnimatedContent>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16 pb-24 md:pb-32 flex flex-col items-center text-center">
                        <AnimatedContent>
                            <h2 className="font-urbanist font-bold text-4xl md:text-5xl text-gray-800 max-w-xl">
                                Someone&apos;s calling right now. Nobody&apos;s there.
                            </h2>
                            <p className="text-zinc-500 text-base/7 mt-4 max-w-md mx-auto">
                                We review what&apos;s falling through, build the automation in 2 weeks, and hand it off — or run it for you.
                            </p>
                            <AnimatedContent className="flex flex-wrap justify-center gap-6 mt-10">
                                <div className="flex flex-col items-center gap-1">
                                    <span className="font-urbanist font-bold text-2xl text-gray-800">2 weeks</span>
                                    <span className="text-zinc-400 text-xs">to build &amp; hand off</span>
                                </div>
                                <div className="w-px bg-[#edf9f8] hidden md:block" />
                                <div className="flex flex-col items-center gap-1">
                                    <span className="font-urbanist font-bold text-2xl text-gray-800">Week 1</span>
                                    <span className="text-zinc-400 text-xs">gap audit &amp; setup</span>
                                </div>
                                <div className="w-px bg-[#edf9f8] hidden md:block" />
                                <div className="flex flex-col items-center gap-1">
                                    <span className="font-urbanist font-bold text-2xl text-gray-800">Week 2</span>
                                    <span className="text-zinc-400 text-xs">build, test, hand off</span>
                                </div>
                            </AnimatedContent>
                            <div className="flex items-center justify-center mt-10">
                                <button
                                    onClick={() => openAiModal("Contractor — Final CTA")}
                                    className="flex items-center justify-center gap-1.5 py-3 px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full"
                                >
                                    Let&apos;s fix that
                                    <ArrowUpRightIcon size={16} />
                                </button>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 cursor-pointer"
                    aria-label="Scroll to top"
                >
                    <Image
                        src="/assets/auto-factory.png"
                        alt="Scroll to top"
                        width={48}
                        height={48}
                        className="h-12 w-12 opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <ChevronUpIcon size={14} strokeWidth={3} className="absolute inset-0 m-auto text-white" />
                </button>
            </section>

        </main>
    );
}
