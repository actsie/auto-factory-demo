"use client";
import AnimatedContent from "@/components/animated-content";
import { ArrowUpRightIcon, CheckIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon } from "lucide-react";
import Image from "next/image";
import { useIndieModal } from "@/contexts/indie-modal-context";
import { useState, useEffect, useRef } from "react";

const socialSummaries = [
    {
        icon: "🐦",
        title: "X Engagement",
        date: "Monday, March 3",
        entries: [
            { time: "8:45 AM", handle: "@levelsio", type: "💬 reply", text: "great point on indie pricing — replied with your take on bootstrapped SaaS margins" },
            { time: "11:02 AM", handle: "@tdinh_me", type: "💬 reply", text: "congrats on the launch — replied with a genuine note on your approach to distribution" },
            { time: "2:17 PM", handle: "@marc_louvion", type: "💬 reply", text: "thread on solo founder burnout — replied with your experience going heads down" },
            { time: "5:30 PM", handle: "@dannypostmaa", type: "💬 reply", text: "asked about your stack — replied with a short breakdown" },
        ],
        totals: [
            { label: "Replies sent", value: "4" },
            { label: "Accounts engaged", value: "4" },
            { label: "Impressions from replies", value: "~2,400" },
            { label: "New followers", value: "11" },
            { label: "Next session", value: "Tue 9:00 AM" },
        ],
    },
    {
        icon: "📩",
        title: "DM Summary",
        date: "Monday, March 3",
        entries: [
            { time: "9:14 AM", handle: "@handle_blurred", type: "📩 inbound DM", text: "asked about your pricing model → replied with context, flagged as warm lead" },
            { time: "1:38 PM", handle: "@handle_blurred", type: "📩 inbound DM", text: "interested in collaborating on a post → replied, asked for more details" },
            { time: "7:55 PM", handle: "@handle_blurred", type: "📩 inbound DM", text: "question about your onboarding flow → answered automatically with your FAQ" },
        ],
        totals: [
            { label: "DMs handled", value: "3" },
            { label: "Replied same day", value: "3" },
            { label: "Warm leads flagged", value: "1" },
            { label: "Follow-up needed", value: "1 — collab inquiry" },
            { label: "Auto-answered", value: "1" },
        ],
    },
    {
        icon: "📊",
        title: "Weekly Summary",
        date: "Week of March 3",
        entries: [
            { time: "Mon–Fri", handle: "Replies", type: "💬 engagement", text: "22 replies sent across X — avg 3 per day. Engaged with 18 unique accounts." },
            { time: "Mon–Fri", handle: "Scheduling", type: "🗓 posts", text: "4 posts published based on your drafts. Best performer: 1,240 impressions." },
            { time: "Mon–Fri", handle: "DMs", type: "📩 inbound", text: "9 DMs handled. 2 flagged as warm leads for you to follow up." },
        ],
        totals: [
            { label: "Replies sent", value: "22" },
            { label: "Posts published", value: "4" },
            { label: "New followers", value: "47" },
            { label: "Warm leads", value: "2" },
            { label: "DMs handled", value: "9" },
        ],
    },
];

const handles = [
    { what: "Replies before the window closes", detail: "Someone engages with your post. We reply while they still remember who you are." },
    { what: "DMs so warm leads don't go cold", detail: "Inbound interest that goes unanswered is a dead lead. We make sure nothing sits." },
    { what: "Engagement with accounts that matter", detail: "Showing up in the right threads and conversations so your account keeps growing." },
    { what: "Scheduling so your presence doesn't disappear", detail: "When you go heads down on the product, your account keeps moving." },
];

const comparisons = [
    {
        without: "You ship something. Nobody's seen your name before.\nLaunch lands quietly.",
        with: "Audience has been watching you build. Launch has a room waiting.",
    },
    {
        without: "Someone DMs you about the product.\nYou see it four days later.",
        with: "Replied same day. Lead stays warm.",
    },
    {
        without: "You go heads down for two weeks.\nThe account goes silent.",
        with: "Presence keeps moving. You focus on building.",
    },
];

const steps = [
    {
        n: "01",
        title: "We learn your voice",
        body: "We read your posts, understand your product, and map how you talk about what you're building.",
    },
    {
        n: "02",
        title: "We set up the managed presence",
        body: "Replies, DMs, engagement, scheduling — configured around your product and audience.",
    },
    {
        n: "03",
        title: "Your job is to build and share",
        body: "Product updates, milestones, opinions — the stuff only you can write. We absorb everything else so you stay in flow.",
    },
    {
        n: "04",
        title: "We keep everything else moving",
        body: "We handle the daily work so your account doesn't go quiet when you're building.",
    },
];

const faqs = [
    {
        q: "Will it sound like me?",
        a: "That's the whole point. We study how you write before we touch anything. If a reply doesn't sound right, we'd rather flag it than send it.",
    },
    {
        q: "What platforms does this cover?",
        a: "Primarily X (Twitter) to start — that's where most indie hackers are building in public. We can expand from there.",
    },
    {
        q: "What do I still need to do?",
        a: "Write the real posts — product updates, opinions, builds. We handle the rest: replies, DMs, engagement, scheduling.",
    },
    {
        q: "What's the catch with free?",
        a: "We're doing free setups for a small number of indie hackers right now. We ask for honest feedback and a case study if it works. That's it.",
    },
];

const team = [
    {
        name: "Mai",
        image: "/assets/mai.jpeg",
        role: "Co-founder",
        linkedin: "https://www.linkedin.com/in/mai-akiyoshi/",
        x: "https://x.com/mai_on_chain",
        bio: "At Gusto, she built the internal tool that let non-technical marketers ship landing pages in days instead of a month. She later founded HeyMint, growing it to over a million users before it was acquired. She's a software engineer who knows how to make things that convert, not just look good.",
    },
    {
        name: "Ben",
        image: "/assets/ben.jpeg",
        role: "Co-founder",
        linkedin: "https://www.linkedin.com/in/intenex/",
        x: "https://x.com/intenex",
        bio: "Thiel Fellow, Harvard dropout, co-founder of Stream (raised $20M from Pantera Capital). Years as a backend and full-stack engineer at YC-backed startups before moving into operations. Knows both what to build and what a company needs to grow.",
    },
    {
        name: "Stacy",
        image: "/assets/stacy.jpg",
        role: "Head of Marketing & Customer Success",
        linkedin: "https://www.linkedin.com/in/stacydonnaj/",
        x: "https://x.com/stacydj0x",
        bio: "Started in Customer Success, rose to CS Manager, then expanded into social media and marketing. Became Head of Marketing at a Silicon Valley startup, driving growth and brand presence across multiple channels.",
    },
];

export default function IndieHackers() {
    const { openIndieModal } = useIndieModal();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const scheduleRef = useRef<HTMLDivElement>(null);
    const [scheduleView, setScheduleView] = useState<"day" | "week" | "month">("day");
    const scheduleTimers = useRef<ReturnType<typeof setTimeout>[]>([]);
    const restartSchedule = useRef<() => void>(() => {});

    useEffect(() => {
        const el = scheduleRef.current;
        if (!el) return;

        const t = (fn: () => void, ms: number) => {
            const id = setTimeout(fn, ms);
            scheduleTimers.current.push(id);
        };

        function runCycle() {
            scheduleTimers.current.forEach(clearTimeout);
            scheduleTimers.current = [];
            // All timers scheduled upfront from cycle start — no nesting
            t(() => setScheduleView("week"), 4000);
            t(() => setScheduleView("month"), 8000);
            t(() => setScheduleView("day"), 12000);
            t(runCycle, 12200);
        }

        restartSchedule.current = () => {
            setScheduleView("day");
            runCycle();
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) { runCycle(); observer.disconnect(); }
            },
            { threshold: 0.4 }
        );
        observer.observe(el);
        return () => { observer.disconnect(); scheduleTimers.current.forEach(clearTimeout); };
    }, []);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [carouselHovered, setCarouselHovered] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (carouselHovered) return;
        intervalRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % socialSummaries.length);
        }, 6000);
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [carouselHovered]);

    useEffect(() => {
        scrollRefs.current.forEach((el, i) => { if (i !== currentSlide && el) el.scrollTop = 0; });
        const el = scrollRefs.current[currentSlide];
        if (!el) return;
        const timer = setTimeout(() => { el.scrollTo({ top: el.scrollHeight, behavior: "smooth" }); }, 3000);
        return () => clearTimeout(timer);
    }, [currentSlide]);


    return (
        <main>
            {/* Hero */}
            <section className="bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-screen">
                    <AnimatedContent reverse distance={30} className="flex items-center gap-2 bg-white/50 backdrop-blur px-4 py-1.5 rounded-full text-sm text-gray-600">
                        <span className="size-2 rounded-full bg-green-500 inline-block animate-pulse" />
                        Free setup · indie hackers
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.1}>
                        <h1 className="text-center font-urbanist text-4xl/13 md:text-5xl/16 mt-4 font-bold max-w-3xl">
                            <span className="text-gray-800">The founders getting traction are not just shipping.<br />They&apos;re staying visible.</span>
                        </h1>
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.2}>
                        <p className="text-center text-base/7 text-zinc-500 max-w-xl mt-3">
                            We handle that part.
                        </p>
                    </AnimatedContent>

                    <AnimatedContent className="flex flex-col md:flex-row items-center gap-4 mt-8 w-full md:w-auto" delay={0.3}>
                        <button
                            onClick={() => openIndieModal("Indie Hackers — Hero")}
                            className="flex items-center justify-center gap-1.5 py-3 md:py-2.5 w-full md:w-auto px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full hover:opacity-90 transition-opacity"
                        >
                            Apply for free setup
                            <ArrowUpRightIcon size={16} />
                        </button>
                        <a
                            href="#handles"
                            className="py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium text-center border border-white rounded-full"
                        >
                            See what we&apos;d handle
                        </a>
                    </AnimatedContent>
                    <AnimatedContent distance={30} delay={0.4}>
                        <p className="text-center text-xs text-zinc-400 mt-3">
                            Free setup. We&apos;re working with a small number of indie hackers right now.
                        </p>
                    </AnimatedContent>
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
                                    Most solo founders don&apos;t disappear because they stopped caring.
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4">
                                    They disappear because building already takes the whole day.
                                </p>
                                <p className="text-zinc-500 text-base/7 mt-3">
                                    So the posting slows down. Replies get missed. The launch comes, and there is no momentum around it.
                                </p>
                                <p className="text-zinc-500 text-base/7 mt-3">
                                    Showing up consistently matters. But for most founders, social is the first thing to fall behind.
                                </p>
                            </AnimatedContent>
                            <AnimatedContent className="p-4 md:p-6 bg-purple-500 w-full rounded-xl">
                                <p className="text-base text-white">
                                    You keep building. We keep you visible.
                                </p>
                            </AnimatedContent>
                        </div>

                        {/* Right — schedule / week / month view */}
                        <AnimatedContent>
                            <div
                                ref={scheduleRef}
                                className="relative rounded-xl border border-gray-200/60 bg-white overflow-hidden"
                                onMouseEnter={() => { scheduleTimers.current.forEach(clearTimeout); scheduleTimers.current = []; }}
                                onMouseLeave={() => restartSchedule.current()}
                            >

                                {/* Header */}
                                <div className="px-4 py-3 border-b border-[#edf9f8] flex items-center justify-between">
                                    <p className="text-[11px] font-medium text-zinc-400">
                                        {scheduleView === "day" ? "Tuesday — a normal dev day" : scheduleView === "week" ? "Week of Mar 3 — missed tasks" : "Feb 10 – Mar 7 — engagement activity"}
                                    </p>
                                    <div className="flex items-center gap-1">
                                        {(["day", "week", "month"] as const).map(v => (
                                            <button key={v} onClick={() => setScheduleView(v)} className={`w-1.5 h-1.5 rounded-full transition-colors ${scheduleView === v ? "bg-zinc-400" : "bg-zinc-200"}`} />
                                        ))}
                                    </div>
                                </div>

                                {/* Fixed-height content area */}
                                <div className="relative h-[400px]">

                                    {/* Day view */}
                                    <div className={`absolute inset-0 overflow-y-auto transition-all duration-500 ${scheduleView === "day" ? "opacity-100 scale-100" : "opacity-0 pointer-events-none scale-95"}`}>
                                        {[
                                            { time: "9:00 AM",  title: "Deep work",           detail: "Auth system refactor",                     type: "dev" },
                                            { time: "10:30 AM", title: "Cold email outreach",  detail: "Pushed to later",                          type: "skipped" },
                                            { time: "11:00 AM", title: "X engagement",         detail: "Pushed to later",                          type: "skipped", icon: "x" },
                                            { time: "12:00 PM", title: "Feature build",        detail: "Pricing page + checkout. Went 3 hrs over.", type: "dev-tall" },
                                            { time: "3:30 PM",  title: "LinkedIn post",        detail: "Still a draft",                            type: "skipped", icon: "li" },
                                            { time: "4:00 PM",  title: "LinkedIn outreach",    detail: "Didn't get to it",                         type: "skipped", icon: "li" },
                                            { time: "5:00 PM",  title: "Reddit engagement",    detail: "Too tired. Tomorrow.",                     type: "skipped", icon: "reddit" },
                                            { time: "6:00 PM",  title: "Deploy",               detail: "Finally shipped",                          type: "dev" },
                                        ].map((item, i) => (
                                            <div key={i} className={`grid grid-cols-[72px_1fr] border-b border-[#edf9f8] last:border-0 ${item.type === "dev-tall" ? "bg-purple-50/30" : ""}`}>
                                                <div className="py-2.5 px-3 border-r border-[#edf9f8]">
                                                    <span className="text-[10px] text-zinc-400 leading-tight">{item.time}</span>
                                                </div>
                                                <div className="px-3 py-2 flex flex-col justify-center">
                                                    <div className="flex items-center gap-1.5">
                                                        {item.icon === "x" && <svg viewBox="0 0 24 24" width="9" height="9" fill="currentColor" className="text-zinc-300 shrink-0"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>}
                                                        {item.icon === "li" && <svg viewBox="0 0 24 24" width="9" height="9" fill="currentColor" className="text-zinc-300 shrink-0"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>}
                                                        {item.icon === "reddit" && <svg viewBox="0 0 24 24" width="9" height="9" fill="currentColor" className="text-zinc-300 shrink-0"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" /></svg>}
                                                        <p className={`text-[11px] font-medium leading-tight ${item.type === "skipped" ? "text-zinc-400 line-through" : "text-gray-700"}`}>{item.title}</p>
                                                        {item.type === "skipped" && <span className="text-[9px] bg-red-50 text-red-400 px-1.5 py-0.5 rounded-full font-medium shrink-0">Missed</span>}
                                                    </div>
                                                    <p className={`text-[10px] mt-0.5 ${item.type === "skipped" ? "text-zinc-300" : "text-zinc-400"}`}>{item.detail}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Week view */}
                                    <div className={`absolute inset-0 flex flex-col transition-all duration-500 ${scheduleView === "week" ? "opacity-100 scale-100" : "opacity-0 pointer-events-none scale-95"}`}>
                                        {/* Day headers */}
                                        <div className="grid grid-cols-5 gap-1 px-3 pt-2.5 pb-1.5 border-b border-[#edf9f8] shrink-0">
                                            {[
                                                { d: "Mon", n: "3" }, { d: "Tue", n: "4" }, { d: "Wed", n: "5" }, { d: "Thu", n: "6" }, { d: "Fri", n: "7" }
                                            ].map(col => (
                                                <div key={col.d} className="text-center">
                                                    <p className="text-[9px] text-zinc-400 uppercase tracking-wide">{col.d}</p>
                                                    <p className="text-[13px] font-semibold text-gray-600">{col.n}</p>
                                                </div>
                                            ))}
                                        </div>
                                        {/* Event columns */}
                                        <div className="grid grid-cols-5 gap-1 p-2 flex-1 min-h-0">
                                            {[
                                                // Mon 3
                                                { blocks: [
                                                    { flex: 1, label: "Standup", type: "meeting" },
                                                    { flex: 3, label: "Auth refactor", type: "dev" },
                                                    { flex: 1, label: "Cold email", type: "miss" },
                                                    { flex: 1, label: "X reply", type: "miss", icon: "x" },
                                                    { flex: 3, label: "Checkout build", type: "dev" },
                                                    { flex: 1, label: "LI post", type: "miss", icon: "li" },
                                                    { flex: 1, label: "LI outreach", type: "miss", icon: "li" },
                                                    { flex: 1, label: "PR review", type: "dev" },
                                                ]},
                                                // Tue 4 — mirrors the day view
                                                { blocks: [
                                                    { flex: 1, label: "Standup", type: "meeting" },
                                                    { flex: 2, label: "Deep work", type: "dev" },
                                                    { flex: 1, label: "Cold email", type: "miss" },
                                                    { flex: 1, label: "X engage", type: "miss", icon: "x" },
                                                    { flex: 4, label: "Feature build", type: "dev" },
                                                    { flex: 1, label: "LI post", type: "miss", icon: "li" },
                                                    { flex: 1, label: "LI outreach", type: "miss", icon: "li" },
                                                    { flex: 1, label: "Reddit", type: "miss", icon: "reddit" },
                                                    { flex: 1, label: "Deploy", type: "dev" },
                                                ]},
                                                // Wed 5
                                                { blocks: [
                                                    { flex: 1, label: "Standup", type: "meeting" },
                                                    { flex: 3, label: "Feature work", type: "dev" },
                                                    { flex: 1, label: "X engage", type: "miss", icon: "x" },
                                                    { flex: 1, label: "Gym", type: "life" },
                                                    { flex: 2, label: "Testing", type: "dev" },
                                                    { flex: 1, label: "Reddit", type: "miss", icon: "reddit" },
                                                    { flex: 1, label: "Hotfix", type: "dev" },
                                                ]},
                                                // Thu 6
                                                { blocks: [
                                                    { flex: 1, label: "1:1 call", type: "meeting" },
                                                    { flex: 2, label: "Code review", type: "dev" },
                                                    { flex: 1, label: "LinkedIn", type: "miss", icon: "li" },
                                                    { flex: 3, label: "Feature build", type: "dev" },
                                                    { flex: 1, label: "Team sync", type: "meeting" },
                                                    { flex: 1, label: "X reply", type: "miss", icon: "x" },
                                                    { flex: 1, label: "Dinner", type: "life" },
                                                ]},
                                                // Fri 7
                                                { blocks: [
                                                    { flex: 1, label: "Standup", type: "meeting" },
                                                    { flex: 2, label: "Deep work", type: "dev" },
                                                    { flex: 1, label: "Cold email", type: "miss" },
                                                    { flex: 1, label: "Doctor", type: "life" },
                                                    { flex: 2, label: "Bug fixes", type: "dev" },
                                                    { flex: 1, label: "Reddit", type: "miss", icon: "reddit" },
                                                    { flex: 1, label: "Deploy", type: "dev" },
                                                    { flex: 1, label: "Happy hour", type: "life" },
                                                ]},
                                            ].map((col, ci) => (
                                                <div key={ci} className="flex flex-col gap-0.5 h-full">
                                                    {col.blocks.map((block, bi) => (
                                                        <div
                                                            key={bi}
                                                            style={{ flex: block.flex }}
                                                            className={`rounded px-1 py-0.5 min-h-0 flex items-center overflow-hidden ${
                                                                block.type === "dev" ? "bg-purple-50 border border-purple-100" :
                                                                block.type === "meeting" ? "bg-blue-50 border border-blue-100" :
                                                                block.type === "life" ? "bg-zinc-100 border border-zinc-200" :
                                                                "bg-red-50 border border-red-100"
                                                            }`}
                                                        >
                                                            <span className={`text-[8px] truncate w-full ${
                                                                block.type === "dev" ? "text-purple-400" :
                                                                block.type === "meeting" ? "text-blue-400" :
                                                                block.type === "life" ? "text-zinc-400" :
                                                                "text-red-300 line-through"
                                                            }`}>
                                                                {block.label}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Month view */}
                                    <div className={`absolute inset-0 flex flex-col transition-all duration-500 p-3 ${scheduleView === "month" ? "opacity-100 scale-100" : "opacity-0 pointer-events-none scale-105"}`}>
                                        <div className="grid grid-cols-5 gap-1 mb-1.5">
                                            {["Mon", "Tue", "Wed", "Thu", "Fri"].map(d => (
                                                <p key={d} className="text-[9px] text-zinc-400 text-center font-medium">{d}</p>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-5 gap-1 flex-1">
                                            {[
                                                {score:4},{score:3},{score:4},{score:3},{score:4}, // Feb 10–14 — active
                                                {score:3},{score:2},{score:3},{score:2},{score:3}, // Feb 17–21 — slipping
                                                {score:1},{score:2},{score:0},{score:1},{score:1}, // Feb 24–28 — mostly gone
                                                {score:0},{score:0},{score:0},{score:0},{score:0}, // Mar 3–7 — matches week view
                                            ].map((day, i) => (
                                                <div key={i} className={`rounded-md flex items-center justify-center text-[9px] font-medium border ${
                                                    day.score >= 3 ? "bg-green-50 border-green-200 text-green-600" :
                                                    day.score >= 1 ? "bg-amber-50 border-amber-200 text-amber-500" :
                                                    "bg-red-50 border-red-100 text-red-300"
                                                }`}>
                                                    {day.score === 0 ? "—" : `${day.score}/5`}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-4 mt-2 pt-2 border-t border-[#edf9f8]">
                                            <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-green-200 inline-block" /><span className="text-[9px] text-zinc-400">Active</span></div>
                                            <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-amber-200 inline-block" /><span className="text-[9px] text-zinc-400">Partial</span></div>
                                            <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-red-100 inline-block" /><span className="text-[9px] text-zinc-400">Nothing</span></div>
                                        </div>
                                    </div>

                                </div>

                                <p className="text-xs text-zinc-400 px-4 py-3 border-t border-[#edf9f8]">Consistent presence compounds. Absence does too.</p>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* What we handle */}
            <section id="handles" className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 border-x md:divide-x border-[#edf9f8] divide-[#edf9f8] max-w-7xl mx-auto">
                    {/* Left — carousel */}
                    <div className="p-4 pt-16 md:p-16"
                        onMouseEnter={() => setCarouselHovered(true)}
                        onMouseLeave={() => setCarouselHovered(false)}
                    >
                        <AnimatedContent>
                            <p className="text-sm font-medium text-zinc-500 mb-6">Handled automatically, every day</p>
                        </AnimatedContent>
                        <div className="relative h-[540px]">
                            {socialSummaries.map((summary, idx) => (
                                <div key={idx} className={`absolute inset-0 transition-opacity duration-300 ${idx === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                                    <div className="bg-[#f0f2f5] rounded-2xl overflow-hidden shadow-xl border border-zinc-200 flex flex-col h-full">
                                        {/* Window chrome */}
                                        <div className="relative flex items-center px-4 py-3 bg-white border-b border-zinc-100 shrink-0">
                                            <div className="flex gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                                <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
                                            </div>
                                            <p className="absolute inset-0 flex items-center justify-center text-zinc-500 text-xs pointer-events-none">Daily Summary</p>
                                        </div>
                                        {/* Chat area */}
                                        <div
                                            ref={(el) => { scrollRefs.current[idx] = el; }}
                                            className="px-4 py-4 space-y-2.5 flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white [&::-webkit-scrollbar-thumb]:rounded-full"
                                            style={{ scrollbarWidth: "thin", scrollbarColor: "#ffffff transparent" }}
                                        >
                                            <div className="flex justify-center mb-3">
                                                <span className="text-zinc-400 text-[10px] bg-zinc-200/70 px-3 py-1 rounded-full">
                                                    {summary.icon} {summary.title} — {summary.date}
                                                </span>
                                            </div>
                                            {summary.entries.map((entry, i) => (
                                                <div key={i} className="flex items-end gap-2 max-w-[88%]">
                                                    <div className="bg-white shadow-sm rounded-2xl rounded-tl-sm px-3.5 py-2.5 w-full">
                                                        <p className="text-zinc-400 text-[10px] font-mono mb-1">
                                                            <span className="blur-[3px] select-none">{entry.handle}</span> · {entry.type}
                                                        </p>
                                                        <p className="text-zinc-700 text-xs leading-relaxed">{entry.text}</p>
                                                        <p className="text-zinc-400 text-[10px] text-right mt-0.5">{entry.time}</p>
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
                            <button onClick={() => setCurrentSlide(prev => (prev - 1 + socialSummaries.length) % socialSummaries.length)} className="p-1.5 rounded-full border border-[#edf9f8] text-zinc-400 hover:text-zinc-600 transition-colors">
                                <ChevronLeftIcon size={16} />
                            </button>
                            <div className="flex gap-1.5">
                                {socialSummaries.map((_, i) => (
                                    <button key={i} onClick={() => setCurrentSlide(i)} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentSlide ? "bg-purple-500" : "bg-zinc-200"}`} />
                                ))}
                            </div>
                            <button onClick={() => setCurrentSlide(prev => (prev + 1) % socialSummaries.length)} className="p-1.5 rounded-full border border-[#edf9f8] text-zinc-400 hover:text-zinc-600 transition-colors">
                                <ChevronRightIcon size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Right — what we handle */}
                    <div>
                        <div className="p-4 pt-16 md:p-16 flex flex-col items-start md:sticky md:top-26">
                            <AnimatedContent>
                                <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">What We Handle</p>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                    The daily work that keeps your account alive
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4 max-w-sm">
                                    Not the content strategy. Not the big posts. The unglamorous consistent work that makes building in public actually work.
                                </p>
                                <ul className="mt-6 space-y-3">
                                    {handles.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-zinc-600">
                                            <CheckIcon className="h-4 w-4 shrink-0 text-purple-500 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-gray-800">{item.what}</p>
                                                <p className="text-zinc-500 mt-0.5">{item.detail}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedContent>
                            <AnimatedContent delay={0.1} className="mt-8 p-6 bg-[#5bbfba] w-full rounded-xl">
                                <h3 className="text-base text-white text-balance">
                                    The unglamorous daily work, done.
                                </h3>
                            </AnimatedContent>
                        </div>
                    </div>
                </div>
            </section>

            {/* Before & After */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16">
                        <AnimatedContent className="text-center mb-12">
                            <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">Before & After</p>
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">What changes when your presence is managed</h2>
                        </AnimatedContent>

                        <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-y-6 sm:gap-y-0 lg:max-w-3xl lg:grid-cols-2">
                            <AnimatedContent className="rounded-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-tr-none lg:rounded-bl-3xl">
                                <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Without</h3>
                                <ul className="mt-8 space-y-5">
                                    {comparisons.map((pair, i) => (
                                        <li key={i} className="flex gap-x-3">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300" />
                                            <span className="text-zinc-500 text-sm/6 whitespace-pre-line">{pair.without}</span>
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedContent>

                            <AnimatedContent delay={0.1} className="relative rounded-3xl bg-white p-8 shadow-lg shadow-gray-200/80 ring-1 ring-gray-900/5 sm:p-10 lg:-ml-6 lg:px-12 lg:py-14">
                                <h3 className="text-xs font-semibold uppercase tracking-widest text-purple-500">With us</h3>
                                <ul className="mt-8 space-y-5">
                                    {comparisons.map((pair, i) => (
                                        <li key={i} className="flex gap-x-3">
                                            <CheckIcon className="h-5 w-5 shrink-0 text-purple-500 mt-0.5" aria-hidden="true" />
                                            <span className="text-zinc-700 text-sm/6">{pair.with}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => openIndieModal("Indie Hackers — Before & After CTA")}
                                    className="mt-10 w-full rounded-full bg-purple-500 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-purple-400 transition-colors"
                                >
                                    See if it&apos;s a fit
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
                                    Simple to start, runs in the background
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4 max-w-sm">
                                    We do the setup. You don&apos;t change how you work or learn new tools.
                                </p>
                            </AnimatedContent>
                            <AnimatedContent delay={0.1} className="p-4 md:p-6 bg-purple-500 w-full rounded-xl mt-8">
                                <p className="text-base text-white">
                                    You keep building. We keep you visible.
                                </p>
                                <button
                                    onClick={() => openIndieModal("Indie Hackers — How It Works CTA")}
                                    className="bg-white hover:bg-gray-100 transition-colors px-5 py-2 rounded-full mt-4 flex items-center gap-1 text-sm font-medium w-max"
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

            {/* FAQ */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
                        {/* Left — FAQs */}
                        <div>
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

                        {/* Right — still have questions */}
                        <AnimatedContent className="md:sticky md:top-26">
                            <div className="p-6 bg-[#5bbfba] rounded-xl flex flex-col gap-4">
                                <h3 className="font-urbanist font-semibold text-xl text-white">Still have questions?</h3>
                                <p className="text-white/80 text-sm/6">We&apos;re a small team and we respond to everything. Reach out and we&apos;ll get back to you within 24 hours.</p>
                                <button
                                    onClick={() => openIndieModal("Indie Hackers — FAQ")}
                                    className="flex items-center gap-1.5 py-2.5 px-6 bg-white text-[#5bbfba] font-medium rounded-full hover:opacity-90 transition-opacity w-max text-sm"
                                >
                                    Reach out
                                    <ArrowUpRightIcon size={14} />
                                </button>
                            </div>
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
                            <p className="text-zinc-500 text-base/7 mt-3 max-w-md mx-auto">You&apos;ll have direct access to the people building it.</p>
                        </AnimatedContent>
                        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                            {team.map((person, i) => (
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
                                What you&apos;re building deserves a stronger presence.
                            </h2>
                            <p className="text-zinc-500 text-base/7 mt-4 max-w-md mx-auto">
                                Free setup for a small number of indie hackers. You get a fully managed presence. We get feedback and a case study if it works.
                            </p>
                            <div className="flex flex-col items-center gap-3 mt-10">
                                <button
                                    onClick={() => openIndieModal("Indie Hackers — Final CTA")}
                                    className="flex items-center justify-center gap-1.5 py-3 px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full hover:opacity-90 transition-opacity"
                                >
                                    Apply for free setup
                                    <ArrowUpRightIcon size={16} />
                                </button>
                                <p className="text-xs text-zinc-400">Limited spots. Free setup while we&apos;re in early access.</p>
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
