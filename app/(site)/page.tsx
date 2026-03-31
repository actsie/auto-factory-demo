"use client";
import AnimatedContent from "@/components/animated-content";
import { ArrowUpRightIcon, CheckIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, XIcon } from "lucide-react";
import { useAiModal } from "@/contexts/ai-modal-context";
import { useState, useEffect, useRef } from "react";

const missedCases = [
    {
        time: "Mon 2:14 pm",
        source: "Zillow",
        sourceKey: "zillow" as const,
        inquiry: "Hi, I saw your listing on Zillow — can I book a viewing this week?",
        missed: "→ No reply",
        outcome: "Booked with next agent",
    },
    {
        time: "Sun 7:22 pm",
        source: "Facebook DM",
        sourceKey: "facebook" as const,
        inquiry: "Is the 3-bed on Maple still available? We want to schedule a tour ASAP.",
        missed: "→ Seen Monday",
        outcome: "Booked elsewhere",
    },
    {
        time: "Sun 6:45 pm",
        source: "Google Business",
        sourceKey: "google" as const,
        inquiry: "We're relocating next month. Are you available to show us a few places?",
        missed: "→ No answer",
        outcome: "Called another agent",
    },
    {
        time: "Tue 10:05 am",
        source: "Gmail lead",
        sourceKey: "gmail" as const,
        inquiry: "Reached out last week about the Oak Ave condo. Still interested if it's available.",
        missed: "→ No follow-up",
        outcome: "Lead went cold",
    },
    {
        time: "Sat 11:02 am",
        source: "Instagram",
        sourceKey: "instagram" as const,
        inquiry: "Love this listing! What's the asking price and is there parking?",
        missed: "→ Seen Thursday",
        outcome: "Already moved on",
    },
    {
        time: "Tue 9:30 am",
        source: "Realtor.com",
        sourceKey: "realtor" as const,
        inquiry: "I inquired 3 weeks ago about a condo. Just checking if anything new came up.",
        missed: "→ No follow-up",
        outcome: "Lead went cold",
    },
];

const sourceAvatars: Record<string, { bg: string; el: React.ReactNode }> = {
    gmail: {
        bg: "bg-[#EA4335]/10",
        el: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="text-[#EA4335]">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
        ),
    },
    zillow: {
        bg: "bg-[#006AFF]/10",
        el: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="text-[#006AFF]">
                <path d="M12 2L2 9.5l1.5 1.1L12 4.3l8.5 6.3L22 9.5zm0 4.5L4 12.5V22h6v-6h4v6h6v-9.5z"/>
            </svg>
        ),
    },
    instagram: {
        bg: "bg-[#E1306C]/10",
        el: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="text-[#E1306C]">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
        ),
    },
    google: {
        bg: "bg-[#4285F4]/10",
        el: (
            <svg viewBox="0 0 24 24" width="22" height="22">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
        ),
    },
    realtor: {
        bg: "bg-[#D92228]/10",
        el: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="text-[#D92228]">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2v-5h2v5zm0-7h-2V7h2v2z"/>
            </svg>
        ),
    },
    facebook: {
        bg: "bg-[#1877F2]/10",
        el: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="text-[#1877F2]">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
        ),
    },
};

const agentSummaries = [
    {
        icon: "📞",
        title: "Call Activity",
        date: "Monday, March 3",
        entries: [
            { time: "9:15 AM", handle: "Inbound call", type: "🗓 viewing request", text: "Buyer asked about 3-bed in Westside. → Viewing booked for Wed 11am. Confirmation sent." },
            { time: "1:40 PM", handle: "Inbound call", type: "❓ listing question", text: "Asked about parking and HOA fees at Oak Ave listing. → Answered from listing sheet. Offered to book a call." },
            { time: "5:22 PM", handle: "Inbound call", type: "🏠 relocation inquiry", text: "Family relocating from Chicago, 2-month timeline. → Flagged as high-intent. Scheduled intro call for Tue 10am." },
        ],
        totals: [
            { label: "Calls handled", value: "3" },
            { label: "Viewings booked", value: "1" },
            { label: "High-intent leads", value: "1" },
            { label: "Leads captured", value: "3" },
            { label: "Follow-up needed", value: "1 — relocation buyer" },
        ],
    },
    {
        icon: "📋",
        title: "Follow-up Summary",
        date: "Monday, March 3",
        entries: [
            { time: "8:00 AM", handle: "Cold lead — James T.", type: "📩 re-engagement", text: "Auto follow-up sent to lead who went quiet 6 weeks ago. → Replied: 'Actually, we're ready to move now.'" },
            { time: "11:30 AM", handle: "Cold lead — Sarah M.", type: "📩 check-in", text: "3-month follow-up sent to buyer who paused search. → Email opened, no reply yet." },
            { time: "4:00 PM", handle: "Cold lead — David K.", type: "✅ reactivated", text: "Reached out after 2 months quiet. Replied with a new price range. → Viewing scheduled for Thu." },
        ],
        totals: [
            { label: "Follow-ups sent", value: "3" },
            { label: "Leads reactivated", value: "2" },
            { label: "Viewings booked from cold leads", value: "1" },
            { label: "Still pending", value: "1" },
            { label: "Next follow-up", value: "Tue 8:00 AM" },
        ],
    },
    {
        icon: "🏠",
        title: "Viewing & Booking Summary",
        date: "Monday, March 3",
        entries: [
            { time: "9:15 AM", handle: "Westside 3-bed", type: "✅ booked", text: "Viewing confirmed for Wed 11am. Confirmation and address sent to buyer automatically." },
            { time: "2:00 PM", handle: "Oak Ave condo", type: "📩 follow-up sent", text: "Buyer asked questions but didn't book. → Auto follow-up sent with a booking link." },
            { time: "4:30 PM", handle: "Chicago relocation buyer", type: "🗓 intro call booked", text: "High-intent buyer booked for Tue 10am. Prep notes sent to you automatically." },
        ],
        totals: [
            { label: "Viewings booked", value: "2" },
            { label: "Follow-ups sent", value: "1" },
            { label: "No-shows", value: "0" },
            { label: "Leads confirmed", value: "3" },
            { label: "Revenue pipeline added", value: "~$22,500" },
        ],
    },
];

const features = [
    {
        title: "Answer every inquiry, even when you can't",
        body: "You're mid-showing. A lead fills out a form or DMs your listing. They get a response in minutes. You find out after.",
    },
    {
        title: "Follow up until they're ready",
        body: "Most leads aren't ready the day they reach out. Your system follows up at the right intervals so you're top of mind when they are.",
    },
    {
        title: "Re-engage cold leads automatically",
        body: "Contacts who went quiet months ago get a check-in at the right time. You get flagged when someone's ready to move.",
    },
    {
        title: "Handle the repetitive questions across every channel",
        body: "Price, availability, viewings — across Gmail, Facebook, Zillow, and more. You get your time back.",
    },
];

const comparisons = [
    {
        without: "You're mid-showing. A lead calls.\nGoes to voicemail. They call the next agent.",
        with: "Your agent answers, qualifies the lead, and books a viewing. You find out after the showing.",
    },
    {
        without: "A cold lead from 3 months ago was ready to buy.\nYou never followed up.",
        with: "Automated re-engagement catches them at the right moment. Viewing booked.",
    },
    {
        without: "A caller asks about price and parking.\nYou're in a meeting. They move on.",
        with: "Your agent answers from the listing sheet instantly. Offers to book a call.",
    },
];

const steps = [
    {
        n: "01",
        title: "We learn how you work",
        body: "Your listings, your availability, how you qualify leads, what questions you get most — so your agent knows exactly what to say.",
    },
    {
        n: "02",
        title: "We build your follow-up sequences from scratch",
        body: "No templates to fill in, no platform to manage. Built around your channels, your listings, and how you close.",
    },
    {
        n: "03",
        title: "It runs automatically",
        body: "New leads get responses. Viewings get confirmed. Cold leads get re-engaged. You get a summary of everything that happened.",
    },
    {
        n: "04",
        title: "We keep it running",
        body: "New listings, updated availability, seasonal changes — we handle the updates. You don't manage anything.",
    },
];

const faqs = [
    {
        q: "Will callers know they're talking to an AI?",
        a: "It's built to handle the most common questions quickly and hand off anything complex to you. Most callers just get a fast, helpful answer.",
    },
    {
        q: "What happens when a lead wants to speak to a person?",
        a: "It routes them to you with context — who they are, what they asked, what was said. You pick up ready.",
    },
    {
        q: "Can it handle multiple listings at once?",
        a: "Yes. It pulls from your active listings and knows how to answer questions for each one separately.",
    },
    {
        q: "What if my availability changes?",
        a: "Just let us know. We update it. You don't touch any settings.",
    },
];

export default function RealEstate() {
    const { openAiModal } = useAiModal();
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [carouselHovered, setCarouselHovered] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (carouselHovered) return;
        intervalRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % agentSummaries.length);
        }, 3500);
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [carouselHovered]);

    const [stackExpanded, setStackExpanded] = useState(false);
    const stackRef = useRef<HTMLDivElement>(null);

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
    const [form, setForm] = useState({ name: "", email: "", business: "", website: "", notes: "" });
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [formLoading, setFormLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const inputBase = "border bg-[#f7fcfb] rounded-lg px-3 py-2 text-sm text-gray-800 placeholder:text-zinc-400 focus:outline-none transition-colors";
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
                body: JSON.stringify({ ...form, source: "Real Estate — Sign Up Form" }),
            });
            setFormSubmitted(true);
        } finally {
            setFormLoading(false);
        }
    }

    return (
        <main>
            {/* Hero */}
            <section className="bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-screen">
                    <AnimatedContent reverse distance={30} className="flex items-center gap-2 bg-white/50 backdrop-blur px-4 py-1.5 rounded-full text-sm text-gray-600">
                        <span className="size-2 rounded-full bg-green-500 inline-block animate-pulse" />
                        Built for real estate agents · Free setup, limited spots
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.1}>
                        <h1 className="text-center font-urbanist text-5xl/15 md:text-6xl/18 mt-4 font-bold max-w-3xl">
                            <span className="text-gray-800">The follow-up system for real estate agents.</span>
                        </h1>
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.2}>
                        <p className="text-center text-base/7 text-zinc-500 max-w-xl mt-3">
                            Every lead gets a response. Every viewing gets confirmed. Even when you&apos;re with another client.
                        </p>
                    </AnimatedContent>

                    <AnimatedContent className="flex flex-col md:flex-row items-center gap-4 mt-8 w-full md:w-auto" delay={0.3}>
                        <button
                            onClick={() => openAiModal("Real Estate — Hero")}
                            className="flex items-center justify-center gap-1.5 py-3 md:py-2.5 w-full md:w-auto px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full"
                        >
                            Get started — it&apos;s free
                            <ArrowUpRightIcon size={16} />
                        </button>
                        <a
                            href="#features"
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
                        {[
                            { value: "21×", label: "more likely to qualify a lead if you respond within 5 minutes" },
                            { value: "69%", label: "of callers who reach voicemail won't leave a message — they call the next agent" },
                            { value: "$7,500+", label: "in lost commission for every missed lead, on average" },
                            { value: "78%", label: "of buyers work with whoever responds first" },
                        ].map((stat, i) => (
                            <AnimatedContent key={i} delay={i * 0.1} className="border border-[#edf9f8] rounded-xl p-6 bg-[#f7fcfb]">
                                <p className="font-urbanist font-bold text-4xl text-gray-800">{stat.value}</p>
                                <p className="text-zinc-600 text-sm/6 mt-2 min-h-[4.5rem]">{stat.label}</p>
                            </AnimatedContent>
                        ))}
                    </div>
                    <p className="text-zinc-400 text-xs px-8 md:px-16 pb-8 -mt-6">
                        Sources: MIT Lead Response Management Study, NAR Agent Response Time Report 2024, Inside Sales study on lead response
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
                                    Missed leads don&apos;t wait. They go to the next agent on the list.
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4">
                                    A buyer fills out a form while you&apos;re showing a property. Someone DMs your Facebook ad on Sunday evening. You&apos;re busy doing the job — and by the time you get back to them, they&apos;ve already booked with someone else.
                                </p>
                                <p className="text-zinc-500 text-base/7 mt-3">
                                    It&apos;s not a capacity problem. It&apos;s a timing problem. And timing is everything in real estate.
                                </p>
                            </AnimatedContent>
                            <AnimatedContent className="p-4 md:p-6 bg-purple-500 w-full rounded-xl">
                                <p className="text-base text-white">
                                    We build the follow-up system. We run it. You don&apos;t manage anything.
                                </p>
                                <button
                                    onClick={() => openAiModal("Real Estate — Problem CTA")}
                                    className="bg-white hover:bg-gray-100 transition-colors px-5 py-2 rounded-full mt-6 flex items-center gap-1 text-sm font-medium w-max"
                                >
                                    See how it works
                                    <ArrowUpRightIcon size={16} />
                                </button>
                            </AnimatedContent>
                        </div>

                        <div className="flex flex-col items-center justify-center py-8">
                            <p className="text-sm text-zinc-400 mb-8 text-center">Every one of these is a commission that went to someone who picked up.</p>
                            <div ref={stackRef} style={{ perspective: "600px" }}>
                                <ul
                                    className="relative flex flex-col transition-all duration-500"
                                    style={{ transformStyle: "preserve-3d", gap: stackExpanded ? "12px" : "0px" }}
                                >
                                    {missedCases.map((c, i) => {
                                        const n = missedCases.length;
                                        const rev = n - 1 - i;
                                        const transforms = [
                                            "translateZ(80px) translateY(-48px)",
                                            "translateZ(40px) translateY(-24px)",
                                            "translateZ(10px) translateY(-8px)",
                                            "translateZ(0px) translateY(0px)",
                                            "translateZ(-20px) translateY(10px)",
                                            "translateZ(-50px) translateY(22px)",
                                            "translateZ(-80px) translateY(36px)",
                                            "translateZ(-110px) translateY(50px)",
                                        ];
                                        const opacities = [1, 0.92, 0.82, 0.72, 0.62, 0.52, 0.42, 0.32];
                                        const blurs = [0, 0, 1, 1.5, 2, 2.5, 3, 4];
                                        const avatar = sourceAvatars[c.sourceKey];
                                        return (
                                            <li
                                                key={i}
                                                className="list-none w-full max-w-md bg-white rounded-xl shadow-md flex gap-4 items-center px-4 py-3 cursor-pointer"
                                                style={{
                                                    transform: stackExpanded ? "none" : (transforms[rev] ?? "translateZ(0)"),
                                                    opacity: stackExpanded ? 1 : (opacities[rev] ?? 0.3),
                                                    filter: stackExpanded ? "none" : (blurs[rev] ? `blur(${blurs[rev]}px)` : "none"),
                                                    transition: "all 500ms",
                                                    transitionDelay: `${i * 40}ms`,
                                                }}
                                            >
                                                <div className={`w-12 h-12 rounded-lg shrink-0 flex items-center justify-center ${avatar.bg}`}>
                                                    {avatar.el}
                                                </div>
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
                </div>
            </section>

            {/* Features */}
            <section id="features" className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 border-x md:divide-x border-[#edf9f8] divide-[#edf9f8] max-w-7xl mx-auto">
                    <div className="p-4 pt-16 md:p-16">
                        <AnimatedContent>
                            <p className="text-sm font-medium text-zinc-500 mb-6">Handled automatically, around the clock</p>
                        </AnimatedContent>
                        <div
                            className="relative"
                            onMouseEnter={() => setCarouselHovered(true)}
                            onMouseLeave={() => setCarouselHovered(false)}
                        >
                            <div className="relative h-[580px]">
                                {agentSummaries.map((summary, idx) => (
                                    <div key={idx} className={`absolute inset-0 transition-opacity duration-300 ${idx === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                                        <div className="bg-[#f0f2f5] rounded-2xl overflow-hidden shadow-xl border border-zinc-200 flex flex-col h-full">
                                            <div className="relative flex items-center px-4 py-3 bg-white border-b border-zinc-100 shrink-0">
                                                <div className="flex gap-1.5">
                                                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                                    <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
                                                </div>
                                                <p className="absolute inset-0 flex items-center justify-center text-zinc-500 text-xs pointer-events-none">AI Daily Summary</p>
                                            </div>

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

                            <div className="flex items-center justify-between mt-4">
                                <button
                                    onClick={() => setCurrentSlide(prev => (prev - 1 + agentSummaries.length) % agentSummaries.length)}
                                    className="p-1.5 rounded-full border border-[#edf9f8] text-zinc-400 hover:text-zinc-600 transition-colors"
                                >
                                    <ChevronLeftIcon size={16} />
                                </button>
                                <div className="flex gap-1.5">
                                    {agentSummaries.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentSlide(i)}
                                            className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentSlide ? "bg-purple-500" : "bg-zinc-200"}`}
                                        />
                                    ))}
                                </div>
                                <button
                                    onClick={() => setCurrentSlide(prev => (prev + 1) % agentSummaries.length)}
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
                                <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">What it handles</p>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                    Everything you need to never miss a lead
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4 max-w-sm">
                                    Your follow-up system responds to every inquiry, re-engages cold leads, and confirms viewings automatically. You come out of every showing with new appointments already waiting.
                                </p>
                                <ul className="mt-6 flex flex-col gap-5">
                                    {features.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5">
                                            <CheckIcon size={15} className="text-purple-500 mt-0.5 shrink-0" />
                                            <div>
                                                <p className="text-gray-800 text-sm font-medium">{item.title}</p>
                                                <p className="text-zinc-500 text-sm/6 mt-1">{item.body}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedContent>
                            <AnimatedContent delay={0.1} className="mt-8 flex items-center justify-between gap-5 p-6 bg-[#5bbfba] w-full rounded-xl">
                                <h3 className="text-base text-white text-balance">
                                    You come out of every showing with new appointments already waiting.
                                </h3>
                                <button
                                    onClick={() => openAiModal("Real Estate — Features CTA")}
                                    className="bg-white hover:bg-gray-100 transition-colors px-5 py-2 rounded-full text-sm font-medium w-max shrink-0"
                                >
                                    Get started
                                </button>
                            </AnimatedContent>
                        </div>
                    </div>
                </div>
            </section>

            {/* Before / After */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16">
                        <AnimatedContent className="text-center mb-12">
                            <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">Why Response Time Is Everything</p>
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">In real estate, speed isn&apos;t just polite — it&apos;s the difference</h2>
                        </AnimatedContent>

                        <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-y-6 sm:gap-y-0 lg:max-w-3xl lg:grid-cols-2">
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
                                    onClick={() => openAiModal("Real Estate — Comparison CTA")}
                                    className="mt-10 w-full rounded-full bg-purple-500 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-purple-400 transition-colors"
                                >
                                    Get started — it&apos;s free
                                </button>
                            </AnimatedContent>
                        </div>
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
                                    We build it. We run it. You don&apos;t manage anything.
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4 max-w-sm">
                                    This isn&apos;t a platform you log into and figure out. We build your follow-up system from scratch, set it up around how you work, and keep it running.
                                </p>
                            </AnimatedContent>
                            <AnimatedContent delay={0.1} className="p-4 md:p-6 bg-purple-500 w-full rounded-xl mt-8">
                                <p className="text-base text-white">
                                    Built for your business. Running in the background. You just close deals.
                                </p>
                                <button
                                    onClick={() => openAiModal("Real Estate — How It Works CTA")}
                                    className="bg-white hover:bg-gray-100 transition-colors px-5 py-2 rounded-full mt-6 flex items-center gap-1 text-sm font-medium w-max"
                                >
                                    Get started
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

            {/* FAQ + Sign up form */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-[#edf9f8]">
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

                        <div className="p-8 md:p-16">
                            <AnimatedContent className="mb-8">
                                <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">Free to start</p>
                                <h2 className="font-urbanist font-semibold text-2xl text-gray-800">Sign up to get started</h2>
                                <p className="text-zinc-500 text-sm/6 mt-2">
                                    We&apos;re doing free setups for a small number of real estate agents right now. You get a fully working follow-up system built for your business. We ask for feedback and a case study if it works. That&apos;s it.
                                </p>
                                <p className="text-zinc-400 text-xs mt-3">No credit card required. Limited spots.</p>
                            </AnimatedContent>
                            {formSubmitted ? (
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
                                <form onSubmit={handleFormSubmit} noValidate className="flex flex-col gap-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-medium text-gray-700">Name <span className="text-purple-500">*</span></label>
                                            <input name="name" value={form.name} onChange={handleFormChange} type="text" placeholder="Your name" className={formErrors.name ? inputError : inputNormal} />
                                            {formErrors.name && <p className="text-xs text-red-500">{formErrors.name}</p>}
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-medium text-gray-700">Email <span className="text-purple-500">*</span></label>
                                            <input name="email" value={form.email} onChange={handleFormChange} type="email" placeholder="you@yourcompany.com" className={formErrors.email ? inputError : inputNormal} />
                                            {formErrors.email && <p className="text-xs text-red-500">{formErrors.email}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-gray-700">Your name or brokerage <span className="text-purple-500">*</span></label>
                                        <input name="business" value={form.business} onChange={handleFormChange} type="text" placeholder="e.g. Jane Smith · Coldwell Banker" className={formErrors.business ? inputError : inputNormal} />
                                        {formErrors.business && <p className="text-xs text-red-500">{formErrors.business}</p>}
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-gray-700">Website <span className="text-zinc-400 font-normal">(optional)</span></label>
                                        <input name="website" value={form.website} onChange={handleFormChange} type="url" placeholder="https://yoursite.com" className={inputNormal} />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-gray-700">Anything else? <span className="text-zinc-400 font-normal">(optional)</span></label>
                                        <textarea name="notes" value={form.notes} onChange={handleFormChange} rows={2} placeholder="Markets you work in, average calls per week, what's falling through..." className={`${inputNormal} resize-none`} />
                                    </div>
                                    <button type="submit" disabled={formLoading} className="mt-2 w-full py-2.5 bg-purple-500 hover:bg-purple-600 disabled:opacity-60 text-white rounded-full text-sm font-medium transition-colors">
                                        {formLoading ? "Sending..." : "Apply for free setup"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16">
                        <AnimatedContent className="text-center mb-16">
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">You&apos;re working with us directly</h2>
                            <p className="text-zinc-500 text-base/7 mt-3 max-w-md mx-auto">The agent never clocks out. Neither do we.</p>
                        </AnimatedContent>
                        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                            {[
                                {
                                    name: "Mai",
                                    image: "/assets/mai.jpeg",
                                    role: "Co-founder",
                                    linkedin: "https://www.linkedin.com/in/mai-akiyoshi/",
                                    x: "https://x.com/mai_on_chain",
                                    bio: "At Gusto, she built the internal tool that let non-technical marketers ship landing pages in days instead of a month — the same problem she's solving here, just directly for small businesses. She later founded HeyMint, growing it to over a million users before it was acquired.",
                                },
                                {
                                    name: "Ben",
                                    image: "/assets/ben.jpeg",
                                    role: "Co-founder",
                                    linkedin: "https://www.linkedin.com/in/intenex/",
                                    x: "https://x.com/intenex",
                                    bio: "Thiel Fellow, Harvard dropout, and co-founder of Stream, which raised $20M from investors including Pantera Capital. He's spent years as a backend and full-stack engineer at YC-backed startups before moving into operations.",
                                },
                                {
                                    name: "Stacy",
                                    image: "/assets/stacy.jpg",
                                    role: "Head of Marketing & Customer Success",
                                    linkedin: "https://www.linkedin.com/in/stacydonnaj/",
                                    x: "https://x.com/stacydj0x",
                                    bio: "Stacy began her career in Customer Success and quickly rose through the ranks to become CS Manager, then expanded her scope to social media and marketing. Her talent and work ethic propelled her to Head of Marketing at a Silicon Valley startup.",
                                },
                            ].map((person, i) => (
                                <AnimatedContent key={i} delay={i * 0.15} className="flex flex-col max-w-xs">
                                    <img src={person.image} alt={person.name} className="w-52 h-64 object-cover rounded-lg" />
                                    <h3 className="text-lg font-medium text-gray-800 mt-4">{person.name}</h3>
                                    <div className="flex items-center gap-2 mt-2">
                                        <a href={person.x} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-600 transition-colors">
                                            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        </a>
                                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                                            <img src="/assets/linkedin.png" alt="LinkedIn" width={18} height={18} />
                                        </a>
                                    </div>
                                    <p className="text-purple-500 text-sm font-medium mt-1">{person.role}</p>
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
                                Make sure every call has somewhere to go.
                            </h2>
                            <p className="text-zinc-500 text-base/7 mt-4 max-w-md mx-auto">
                                Free setup. No credit card. We&apos;re opening this up to a small number of businesses right now.
                            </p>
                        </AnimatedContent>
                        <AnimatedContent delay={0.1} className="mt-8">
                            <button
                                onClick={() => openAiModal("Real Estate — Final CTA")}
                                className="flex items-center gap-1.5 py-2.5 px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full text-sm font-medium"
                            >
                                Apply for free setup
                                <ArrowUpRightIcon size={14} />
                            </button>
                        </AnimatedContent>
                        <AnimatedContent delay={0.15} className="mt-4">
                            <p className="text-xs text-zinc-400">Limited spots. No strings.</p>
                        </AnimatedContent>

                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="mt-16 flex flex-col items-center gap-2 group"
                        >
                            <div className="relative w-10 h-10">
                                <img src="/assets/auto-factory.png" alt="Logo" className="w-10 h-10 object-contain" />
                                <ChevronUpIcon size={14} className="absolute -top-3 left-1/2 -translate-x-1/2 text-zinc-300 group-hover:text-zinc-500 transition-colors" />
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
