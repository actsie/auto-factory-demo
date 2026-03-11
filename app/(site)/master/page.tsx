"use client";
import AnimatedContent from "@/components/animated-content";
import { ArrowUpRightIcon, CheckIcon, ChevronUpIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useAiModal } from "@/contexts/ai-modal-context";
import { team } from "@/data/team";

const teamBios: Record<string, string> = {
    Mai: "At Gusto, she built the internal tool that let non-technical marketers ship landing pages in days instead of a month. She later founded HeyMint, growing it to over a million users before it was acquired. She's a software engineer who knows how to make things that convert, not just look good.",
    Ben: "Thiel Fellow, Harvard dropout, co-founder of Stream (raised $20M from Pantera Capital). Years as a backend and full-stack engineer at YC-backed startups before moving into operations. Knows both what to build and what a company needs to grow.",
    Stacy: "Started in Customer Success, rose to CS Manager, then expanded into social media and marketing. Became Head of Marketing at a Silicon Valley startup, driving growth and brand presence across multiple channels.",
};

export default function Master() {
    const { openAiModal } = useAiModal();

    return (
        <main>
            {/* Hero */}
            <section className="bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-screen">
                    <AnimatedContent reverse distance={30} className="flex items-center gap-2 bg-white/50 backdrop-blur px-4 py-1.5 rounded-full text-sm text-gray-600">
                        <span className="size-2 rounded-full bg-green-500 inline-block animate-pulse" />
                        Fountain of Scale
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.1}>
                        <h1 className="text-center font-urbanist text-4xl/13 md:text-6xl/18 mt-4 font-bold max-w-4xl text-gray-800">
                            Most of what's slipping through isn't hard to fix.
                        </h1>
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.15}>
                        <p className="text-center font-urbanist text-4xl/13 md:text-6xl/18 font-bold text-purple-500">
                            It just needs a system.
                        </p>
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.2}>
                        <p className="text-center text-base/7 text-zinc-500 max-w-xl mt-5">
                            We build and run operations infrastructure for small teams — so leads, bookings, and presence don't fall through when you're heads down.
                        </p>
                    </AnimatedContent>

                    <AnimatedContent className="flex flex-col md:flex-row items-center gap-4 mt-8 w-full md:w-auto" delay={0.3}>
                        <button
                            onClick={() => openAiModal("Master — Hero")}
                            className="flex items-center justify-center gap-1.5 py-3 md:py-2.5 w-full md:w-auto px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full hover:opacity-90 transition-opacity"
                        >
                            Get in touch
                            <ArrowUpRightIcon size={16} />
                        </button>
                        <a
                            href="#services"
                            className="py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium text-center border border-white rounded-full"
                        >
                            See what we do
                        </a>
                    </AnimatedContent>
                </div>
            </section>

            {/* Services overview */}
            <section id="services" className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16">
                        <AnimatedContent>
                            <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">What We Do</p>
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800 max-w-2xl">
                                Four services. One goal: nothing falls through.
                            </h2>
                        </AnimatedContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                            {[
                                { n: "01", label: "AI for restaurants", sub: "Calls, DMs, reservations — handled 24/7", href: "/", bg: "bg-purple-50 border-purple-100", dot: "bg-purple-400" },
                                { n: "02", label: "AI for contractors", sub: "Every job inquiry captured, even on-site", href: "/contractors", bg: "bg-blue-50 border-blue-100", dot: "bg-blue-400" },
                                { n: "03", label: "Fix your page", sub: "Website rebuilt in one day, ready to convert", href: "/fix-your-page", bg: "bg-[#f0fafa] border-[#c5eceb]", dot: "bg-[#5bbfba]" },
                                { n: "04", label: "Indie hacker presence", sub: "Social media managed so your account stays alive", href: "/indie-hackers", bg: "bg-amber-50 border-amber-100", dot: "bg-amber-400" },
                            ].map((s) => (
                                <AnimatedContent key={s.n}>
                                    <Link href={s.href} className={`group block rounded-xl border p-6 ${s.bg} hover:shadow-md transition-all`}>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                                            <span className="text-zinc-300 text-xs font-mono">{s.n}</span>
                                        </div>
                                        <p className="font-urbanist font-semibold text-gray-800 text-lg leading-snug">{s.label}</p>
                                        <p className="text-zinc-500 text-xs/5 mt-2">{s.sub}</p>
                                        <div className="flex items-center gap-1 mt-5 text-purple-400 text-xs font-medium group-hover:gap-2 transition-all">
                                            Learn more <ArrowUpRightIcon size={12} />
                                        </div>
                                    </Link>
                                </AnimatedContent>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 1: Restaurant AI */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <AnimatedContent className="flex flex-col gap-5">
                            <div>
                                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium bg-purple-50 text-purple-500 border border-purple-100 px-3 py-1 rounded-full mb-4">
                                    🍽 Restaurants &amp; hospitality
                                </span>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                    An AI front desk that handles calls, DMs, and reservations — after hours.
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4">
                                    Most restaurants lose bookings between 6pm and midnight. The AI answers every call, handles reservations, replies to DMs, and sends a daily summary so your team always knows what came in.
                                </p>
                            </div>
                            <ul className="space-y-2">
                                {[
                                    "Answers calls and handles reservations 24/7",
                                    "Replies to DMs on Instagram, Facebook, and more",
                                    "Handles FAQs, dietary questions, private dining inquiries",
                                    "Daily summary so your team knows exactly what came in",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600">
                                        <CheckIcon className="h-4 w-4 shrink-0 text-purple-500 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/" className="flex items-center gap-1 text-purple-500 text-sm font-medium hover:text-purple-700 transition-colors w-max">
                                See how it works <ArrowUpRightIcon size={14} />
                            </Link>
                        </AnimatedContent>

                        {/* Chat mock */}
                        <AnimatedContent delay={0.1}>
                            <div className="rounded-2xl border border-zinc-200 bg-[#f0f2f5] overflow-hidden shadow-lg">
                                <div className="relative flex items-center px-4 py-3 bg-white border-b border-zinc-100 shrink-0">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                        <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
                                    </div>
                                    <p className="absolute inset-0 flex items-center justify-center text-zinc-500 text-xs pointer-events-none">AI Front Desk · Online</p>
                                </div>
                                <div className="px-4 py-4 space-y-3">
                                    <div className="flex justify-center">
                                        <span className="text-zinc-400 text-[10px] bg-zinc-200/70 px-3 py-1 rounded-full">Tonight · 9:47 PM</span>
                                    </div>
                                    <div className="flex justify-end">
                                        <div className="bg-purple-500 text-white rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[80%]">
                                            <p className="text-xs leading-relaxed">Can I get a table for 4 this Saturday at 7?</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start">
                                        <div className="bg-white shadow-sm rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%]">
                                            <p className="text-xs leading-relaxed text-zinc-700">Saturday 7pm for 4 — confirmed! You'll get a reminder the morning of. Anything else I can help with?</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <div className="bg-purple-500 text-white rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[80%]">
                                            <p className="text-xs leading-relaxed">Do you have a gluten-free menu?</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start">
                                        <div className="bg-white shadow-sm rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%]">
                                            <p className="text-xs leading-relaxed text-zinc-700">Yes — about 60% of our menu is gluten-free. I've added a note to your reservation so the team is ready.</p>
                                        </div>
                                    </div>
                                    <div className="pt-2 border-t border-[#edf9f8] flex items-center justify-between">
                                        <span className="text-[10px] text-zinc-400">4 interactions handled tonight</span>
                                        <span className="text-[10px] text-green-500 font-medium">● Live</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-3 bg-white border-t border-zinc-100">
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
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* Service 2: Contractors */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Activity log mock */}
                        <AnimatedContent>
                            <div className="rounded-xl border border-gray-200/60 bg-white overflow-hidden shadow-sm">
                                <div className="px-4 py-3 border-b border-[#edf9f8] flex items-center justify-between">
                                    <p className="text-[11px] font-medium text-zinc-500">Today · leads captured</p>
                                    <span className="text-[10px] text-green-500 font-medium">● 3 new</span>
                                </div>
                                {[
                                    { icon: "📞", time: "9:14 AM", name: "Sarah M.", inquiry: "Water heater install", status: "Booked Fri", statusColor: "text-green-600 bg-green-50 border-green-100" },
                                    { icon: "💬", time: "2:30 PM", name: "Mike T.", inquiry: "Gutter cleaning quote", status: "Estimate sent", statusColor: "text-blue-600 bg-blue-50 border-blue-100" },
                                    { icon: "🌙", time: "11:02 PM", name: "David K.", inquiry: "Emergency leak", status: "Urgent flag", statusColor: "text-red-500 bg-red-50 border-red-100" },
                                ].map((row, i) => (
                                    <div key={i} className="grid grid-cols-[32px_1fr_auto] items-center gap-3 px-4 py-4 border-b border-[#edf9f8] last:border-0">
                                        <div className="text-lg">{row.icon}</div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-700">{row.name} <span className="font-normal text-zinc-400">· {row.time}</span></p>
                                            <p className="text-[11px] text-zinc-400 mt-0.5">{row.inquiry}</p>
                                        </div>
                                        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${row.statusColor}`}>{row.status}</span>
                                    </div>
                                ))}
                                <div className="px-4 py-3 bg-[#f7fcfb] flex items-center justify-between">
                                    <p className="text-[11px] text-zinc-500">Potential revenue recovered</p>
                                    <p className="text-sm font-semibold text-gray-800">~$2,400</p>
                                </div>
                            </div>
                        </AnimatedContent>

                        {/* Copy */}
                        <AnimatedContent delay={0.1} className="flex flex-col gap-5">
                            <div>
                                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium bg-blue-50 text-blue-500 border border-blue-100 px-3 py-1 rounded-full mb-4">
                                    🔧 Home services &amp; contractors
                                </span>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                    Capture every job inquiry — even when your crew is on-site.
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4">
                                    62% of contractor calls go unanswered when crews are on the job. We make sure every call, text, and web inquiry gets a fast response and a clear path to booking.
                                </p>
                            </div>
                            <ul className="space-y-2">
                                {[
                                    "Answers calls and SMS during jobs, after hours, weekends",
                                    "Books jobs and schedules site visits automatically",
                                    "Follows up on estimates within 15 minutes",
                                    "Re-engages past customers for repeat work and reviews",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600">
                                        <CheckIcon className="h-4 w-4 shrink-0 text-purple-500 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contractors" className="flex items-center gap-1 text-purple-500 text-sm font-medium hover:text-purple-700 transition-colors w-max">
                                See how it works <ArrowUpRightIcon size={14} />
                            </Link>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* Service 3: Fix Your Page */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Copy */}
                        <AnimatedContent className="flex flex-col gap-5">
                            <div>
                                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium bg-[#f0fafa] text-[#5bbfba] border border-[#c5eceb] px-3 py-1 rounded-full mb-4">
                                    🌐 Any local business
                                </span>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                    A website that gets you booked, rebuilt in one day.
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4">
                                    Most visitors decide in seconds whether to book or keep scrolling. We rebuild your page so those first few seconds build trust and point them exactly where they need to go.
                                </p>
                            </div>
                            <ul className="space-y-2">
                                {[
                                    "Same-day turnaround — live in 24 hours",
                                    "Layout built around how visitors actually decide",
                                    "One clear, obvious next step (book, call, or order)",
                                    "Optional QR menu + digital ordering upgrade",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600">
                                        <CheckIcon className="h-4 w-4 shrink-0 text-purple-500 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/fix-your-page" className="flex items-center gap-1 text-purple-500 text-sm font-medium hover:text-purple-700 transition-colors w-max">
                                See what&apos;s included <ArrowUpRightIcon size={14} />
                            </Link>
                        </AnimatedContent>

                        {/* Before / After mock */}
                        <AnimatedContent delay={0.1}>
                            <div className="grid grid-cols-2 gap-3">
                                {/* Before */}
                                <div className="rounded-xl border border-red-100 bg-white overflow-hidden">
                                    <div className="px-3 py-2 bg-red-50 border-b border-red-100 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-300" />
                                        <p className="text-[10px] font-medium text-red-400 uppercase tracking-wide">Before</p>
                                    </div>
                                    <div className="p-3 space-y-2">
                                        <div className="h-4 bg-zinc-100 rounded w-2/3" />
                                        <div className="h-2.5 bg-zinc-50 rounded w-full" />
                                        <div className="h-2.5 bg-zinc-50 rounded w-5/6" />
                                        <div className="h-2.5 bg-zinc-50 rounded w-4/5" />
                                        <div className="h-2.5 bg-zinc-50 rounded w-full" />
                                        <div className="h-2.5 bg-zinc-50 rounded w-2/3" />
                                        <div className="mt-3 h-6 bg-zinc-100 rounded w-1/2" />
                                        <div className="h-6 bg-zinc-100 rounded w-2/3" />
                                        <div className="h-6 bg-zinc-100 rounded w-3/5" />
                                    </div>
                                    <div className="px-3 pb-3 flex flex-wrap gap-1">
                                        <span className="text-[9px] bg-red-50 text-red-300 px-2 py-0.5 rounded-full border border-red-100">No clear CTA</span>
                                        <span className="text-[9px] bg-red-50 text-red-300 px-2 py-0.5 rounded-full border border-red-100">Confusing layout</span>
                                    </div>
                                </div>
                                {/* After */}
                                <div className="rounded-xl border border-green-100 bg-white overflow-hidden">
                                    <div className="px-3 py-2 bg-green-50 border-b border-green-100 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                        <p className="text-[10px] font-medium text-green-500 uppercase tracking-wide">After</p>
                                    </div>
                                    <div className="p-3 space-y-2">
                                        <div className="h-4 bg-purple-100 rounded w-2/3" />
                                        <div className="h-2.5 bg-zinc-100 rounded w-full" />
                                        <div className="h-2.5 bg-zinc-100 rounded w-5/6" />
                                        <div className="h-8 bg-purple-500 rounded-full w-full mt-1" />
                                        <div className="h-2.5 bg-zinc-50 rounded w-4/5" />
                                        <div className="h-2.5 bg-zinc-50 rounded w-full" />
                                        <div className="grid grid-cols-2 gap-1 mt-1">
                                            <div className="h-7 bg-[#f0fafa] rounded-lg border border-[#c5eceb]" />
                                            <div className="h-7 bg-[#f0fafa] rounded-lg border border-[#c5eceb]" />
                                        </div>
                                        <div className="h-7 bg-[#f0fafa] rounded-lg border border-[#c5eceb]" />
                                    </div>
                                    <div className="px-3 pb-3 flex flex-wrap gap-1">
                                        <span className="text-[9px] bg-green-50 text-green-500 px-2 py-0.5 rounded-full border border-green-100">Converts</span>
                                        <span className="text-[9px] bg-green-50 text-green-500 px-2 py-0.5 rounded-full border border-green-100">Clear next step</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-[11px] text-zinc-400 mt-3">Same business. Different first impression.</p>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* Service 4: Indie Hackers */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Mini week mock */}
                        <AnimatedContent>
                            <div className="rounded-xl border border-gray-200/60 bg-white overflow-hidden shadow-sm">
                                <div className="px-4 py-3 border-b border-[#edf9f8]">
                                    <p className="text-[11px] font-medium text-zinc-400">Week of Mar 3 — missed tasks</p>
                                </div>
                                <div className="grid grid-cols-5 gap-1 px-3 pt-2.5 pb-1.5 border-b border-[#edf9f8]">
                                    {[{d:"Mon",n:"3"},{d:"Tue",n:"4"},{d:"Wed",n:"5"},{d:"Thu",n:"6"},{d:"Fri",n:"7"}].map(col => (
                                        <div key={col.d} className="text-center">
                                            <p className="text-[9px] text-zinc-400 uppercase tracking-wide">{col.d}</p>
                                            <p className="text-[12px] font-semibold text-gray-600">{col.n}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-5 gap-1 p-2 h-[220px]">
                                    {[
                                        [
                                            { flex: 1, label: "Standup", type: "meeting" },
                                            { flex: 2, label: "Dev", type: "dev" },
                                            { flex: 1, label: "X reply", type: "miss" },
                                            { flex: 3, label: "Build", type: "dev" },
                                            { flex: 1, label: "LI post", type: "miss" },
                                            { flex: 1, label: "PR review", type: "dev" },
                                        ],
                                        [
                                            { flex: 1, label: "Standup", type: "meeting" },
                                            { flex: 2, label: "Deep work", type: "dev" },
                                            { flex: 1, label: "X", type: "miss" },
                                            { flex: 4, label: "Feature build", type: "dev" },
                                            { flex: 1, label: "LI", type: "miss" },
                                            { flex: 1, label: "Reddit", type: "miss" },
                                            { flex: 1, label: "Deploy", type: "dev" },
                                        ],
                                        [
                                            { flex: 1, label: "Standup", type: "meeting" },
                                            { flex: 3, label: "Feature", type: "dev" },
                                            { flex: 1, label: "X", type: "miss" },
                                            { flex: 1, label: "Gym", type: "life" },
                                            { flex: 2, label: "Testing", type: "dev" },
                                            { flex: 1, label: "Reddit", type: "miss" },
                                        ],
                                        [
                                            { flex: 1, label: "1:1 call", type: "meeting" },
                                            { flex: 2, label: "Review", type: "dev" },
                                            { flex: 1, label: "LI", type: "miss" },
                                            { flex: 3, label: "Feature", type: "dev" },
                                            { flex: 1, label: "Sync", type: "meeting" },
                                            { flex: 1, label: "X", type: "miss" },
                                        ],
                                        [
                                            { flex: 1, label: "Standup", type: "meeting" },
                                            { flex: 2, label: "Deep work", type: "dev" },
                                            { flex: 1, label: "Email", type: "miss" },
                                            { flex: 1, label: "Doctor", type: "life" },
                                            { flex: 2, label: "Bug fixes", type: "dev" },
                                            { flex: 1, label: "Reddit", type: "miss" },
                                            { flex: 1, label: "Deploy", type: "dev" },
                                        ],
                                    ].map((col, ci) => (
                                        <div key={ci} className="flex flex-col gap-0.5 h-full">
                                            {col.map((block, bi) => (
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
                                <p className="text-[11px] text-zinc-400 px-4 py-3 border-t border-[#edf9f8]">Social falls out when building takes over. We make sure it doesn&apos;t.</p>
                            </div>
                        </AnimatedContent>

                        {/* Copy */}
                        <AnimatedContent delay={0.1} className="flex flex-col gap-5">
                            <div>
                                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium bg-amber-50 text-amber-600 border border-amber-100 px-3 py-1 rounded-full mb-4">
                                    ⚡ Indie hackers &amp; solo founders
                                </span>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                    Managed social presence so your account stays alive when you&apos;re heads down.
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4">
                                    The founders getting traction aren&apos;t just shipping — they&apos;re staying visible. We handle the daily work so you keep building without going quiet.
                                </p>
                            </div>
                            <ul className="space-y-2">
                                {[
                                    "Replies before the engagement window closes",
                                    "DMs handled so warm leads don't go cold",
                                    "Engagement with accounts that matter to your growth",
                                    "Scheduling so your presence doesn't disappear",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600">
                                        <CheckIcon className="h-4 w-4 shrink-0 text-purple-500 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/indie-hackers" className="flex items-center gap-1 text-purple-500 text-sm font-medium hover:text-purple-700 transition-colors w-max">
                                See how it works <ArrowUpRightIcon size={14} />
                            </Link>
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
                            <p className="text-zinc-500 text-base/7 mt-3 max-w-md mx-auto">Small team, direct access. No account managers in between.</p>
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
                                    <p className="text-zinc-500 text-sm mt-3 leading-6">{teamBios[person.name] ?? ""}</p>
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
                            <h2 className="font-urbanist font-bold text-4xl md:text-5xl text-gray-800 max-w-2xl">
                                Not sure which fits? Let&apos;s talk.
                            </h2>
                            <p className="text-zinc-500 text-base/7 mt-4 max-w-md mx-auto">
                                Tell us what&apos;s falling through and we&apos;ll figure out together what makes the most sense for your setup.
                            </p>
                            <div className="flex flex-col items-center gap-3 mt-10">
                                <button
                                    onClick={() => openAiModal("Master — Final CTA")}
                                    className="flex items-center justify-center gap-1.5 py-3 px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full hover:opacity-90 transition-opacity"
                                >
                                    Get in touch
                                    <ArrowUpRightIcon size={16} />
                                </button>
                                <p className="text-xs text-zinc-400">We respond within 24 hours.</p>
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
