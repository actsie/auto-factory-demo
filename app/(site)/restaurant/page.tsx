"use client";
import AnimatedContent from "@/components/animated-content";
import { ArrowUpRightIcon, ChevronDownIcon, ChevronUpIcon, LinkedinIcon, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import CountUp from "@/components/count-number";
import AiModal from "@/components/ai-modal";
import { useState } from "react";

const heroStats = [
    { value: 43, suffix: "%", label: "of restaurant calls go unanswered" },
    { value: 69, suffix: "%", label: "won't call again if they don't reach someone the first time" },
];

const handlesPoints = [
    { text: "Calls answered instantly — reservations, hours, location, policies", span: 2 },
    { text: "Reservation capture after hours so voicemail stops eating bookings", span: 1 },
    { text: "DM and inquiry replies for private dining, catering, gift cards, events", span: 1 },
    { text: "Auto posting at peak planning times (Thu night, Fri afternoon, Sun morning)", span: 1 },
    { text: "Review requests that actually go out after visits", span: 1 },
];

const comparisons = [
    {
        without: "Call at 9pm goes to voicemail. Diner books elsewhere.",
        with: "Call answered instantly. Reservation confirmed automatically.",
    },
    {
        without: "Private dining DM sits until Monday.",
        with: "Instant reply + info + link to book.",
    },
    {
        without: "Social posts skip weekends — when people actually plan.",
        with: "Posts go live during the real planning window.",
    },
];

const results = [
    { value: 87, suffix: "%", label: "reduction in missed calls with AI phone handling" },
    { value: 91, suffix: "%", label: "drop in hold time" },
    { value: 128, prefix: "+", suffix: "", label: "bookings per month per location in a pilot" },
];

const steps = [
    {
        n: "01",
        title: "We map your calls and questions",
        body: "We document your most common requests — reservations, hours, parking, allergens, events — so the AI knows how to handle them correctly.",
    },
    {
        n: "02",
        title: "We connect your booking flow",
        body: "We integrate with your booking system so the AI can confirm, capture, and route reservations — not just take a message.",
    },
    {
        n: "03",
        title: "It runs automatically",
        body: "The AI answers calls, replies to DMs, and posts on schedule during rush, after hours, and on off days.",
    },
    {
        n: "04",
        title: "Your team gets a daily summary",
        body: "A clean log of what happened: confirmed bookings, captured leads, and only the messages that actually need a human.",
    },
];

const faqs = [
    {
        q: "Does this replace my host or front of house team?",
        a: "No. It covers the shift when nobody can answer: during rush and after close. Your team handles in-person hospitality and anything nuanced.",
    },
    {
        q: "What happens when the AI isn't sure?",
        a: "It escalates or routes to your team, and you'll see it clearly in the summary.",
    },
    {
        q: "Will this annoy customers?",
        a: "It's designed for fast, helpful handling of the most common requests, and quick routing for anything complex.",
    },
    {
        q: "What channels can it cover?",
        a: "Phone, DMs, and automated social scheduling are the biggest wins for restaurants.",
    },
];

export default function Restaurant() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalSource, setModalSource] = useState("");
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    function openAiModal(source: string) {
        setModalSource(source);
        setModalOpen(true);
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
                            <span className="text-gray-800">Your restaurant is open 24/7.<br />Your staff <span className="underline decoration-2 underline-offset-4">isn&apos;t.</span></span>
                        </h1>
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.2}>
                        <p className="text-center text-base/7 text-zinc-700 max-w-xl mt-4">
                            AI that answers calls, handles reservation and event inquiries, and keeps your social active when your team is busy — or closed — without replacing anyone.
                        </p>
                    </AnimatedContent>

                    <AnimatedContent className="flex flex-col md:flex-row items-center gap-4 mt-8 w-full md:w-auto" delay={0.3}>
                        <button
                            onClick={() => openAiModal("Restaurant — Hero")}
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
                    <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                        {heroStats.map((stat, i) => (
                            <AnimatedContent key={i} delay={i * 0.1} className="border border-[#edf9f8] rounded-xl p-6 bg-[#f7fcfb]">
                                <p className="font-urbanist font-bold text-4xl text-gray-800">
                                    <CountUp to={stat.value} duration={1.5} delay={i * 0.15} />{stat.suffix}
                                </p>
                                <p className="text-zinc-600 text-sm/6 mt-2">{stat.label}</p>
                            </AnimatedContent>
                        ))}
                        <AnimatedContent delay={0.2} className="border border-[#edf9f8] rounded-xl p-6 bg-[#f7fcfb]">
                            <p className="font-urbanist font-bold text-4xl text-gray-800">$3K – $18K</p>
                            <p className="text-zinc-600 text-sm/6 mt-2">monthly revenue lift reported from AI reservation and phone automation</p>
                        </AnimatedContent>
                    </div>
                    <p className="text-zinc-400 text-xs px-8 md:px-16 pb-8 -mt-6">
                        Sources cited in the reference guide (Slang.ai, Popmenu, Toast, and others).
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
                                    Missed calls don&apos;t just disappear. They go to the restaurant down the street.
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4">
                                    Diners call at 9pm. They DM about private dining on a Sunday morning. They ask simple questions after close. If no one answers, they book somewhere else.
                                </p>
                                <p className="text-zinc-500 text-base/7 mt-3">
                                    This isn&apos;t a staff effort issue. It&apos;s an offline hours issue.
                                </p>
                            </AnimatedContent>
                            <AnimatedContent className="p-4 md:p-6 bg-purple-500 w-full rounded-xl">
                                <p className="text-base text-white">
                                    We close the gap — without adding to your headcount.
                                </p>
                                <button
                                    onClick={() => openAiModal("Restaurant — Problem CTA")}
                                    className="bg-white hover:bg-gray-100 transition-colors px-5 py-2 rounded-full mt-6 flex items-center gap-1 text-sm font-medium w-max"
                                >
                                    Book a walkthrough
                                    <ArrowUpRightIcon size={16} />
                                </button>
                            </AnimatedContent>
                        </div>

                        <div className="flex flex-col gap-6">
                            <AnimatedContent className="border border-[#edf9f8] rounded-xl p-6 bg-[#f7fcfb]">
                                <p className="text-zinc-500 text-sm/6">
                                    A diner calls on a Saturday night to ask about your private dining room. Your host is slammed. It goes to voicemail. They hang up and book somewhere else in 90 seconds.
                                </p>
                            </AnimatedContent>
                            <AnimatedContent delay={0.1} className="border border-[#edf9f8] rounded-xl p-6 bg-[#f7fcfb]">
                                <p className="text-zinc-500 text-sm/6">
                                    A group texts your Instagram DM asking about the chef&apos;s tasting menu on Sunday morning. Nobody&apos;s monitoring it. By Monday, they&apos;ve already made a reservation at a competitor.
                                </p>
                            </AnimatedContent>
                            <AnimatedContent delay={0.2} className="border border-[#edf9f8] rounded-xl p-6 bg-[#f7fcfb]">
                                <p className="text-zinc-500 text-sm/6">
                                    Someone Googles your restaurant at 10pm to check if you take walk-ins. They call. Voicemail. They drive somewhere else.
                                </p>
                            </AnimatedContent>
                        </div>
                    </div>
                </div>
            </section>

            {/* What AI handles */}
            <section id="handles" className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 border-x md:divide-x border-[#edf9f8] divide-[#edf9f8] max-w-7xl mx-auto">
                    <div>
                        <div className="p-4 pt-16 md:p-16 flex flex-col items-start md:sticky md:top-26">
                            <AnimatedContent>
                                <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">What AI Handles</p>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                    While your team is in service or offline
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4 max-w-sm">
                                    AI doesn&apos;t replace your people — it covers the shift when no one is there. Every missed call, unanswered DM, and weekend social window.
                                </p>
                            </AnimatedContent>
                            <AnimatedContent delay={0.1} className="mt-8 border border-[#edf9f8] rounded-xl p-5 bg-[#f7fcfb] w-full">
                                <p className="text-sm font-medium text-gray-700">What your team gets</p>
                                <p className="text-zinc-500 text-sm/6 mt-2">
                                    A clean summary of what happened: confirmed bookings, captured leads, and only the messages that need a human.
                                </p>
                            </AnimatedContent>
                        </div>
                    </div>
                    <div className="p-4 pt-16 md:p-16">
                        <AnimatedContent>
                            <p className="text-sm font-medium text-zinc-500 mb-6">Handled automatically, around the clock</p>
                        </AnimatedContent>
                        <div className="grid grid-cols-2 gap-3">
                            {handlesPoints.map((point, i) => (
                                <AnimatedContent
                                    key={i}
                                    delay={i * 0.08}
                                    className={`bg-[#dbd2ff]/20 backdrop-blur-md border border-white/60 shadow-sm rounded-xl p-5 ${point.span === 2 ? "col-span-2" : "col-span-1"}`}
                                >
                                    <p className={`text-zinc-700 ${point.span === 2 ? "text-base/7 font-medium" : "text-sm/6"}`}>{point.text}</p>
                                </AnimatedContent>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Without / With comparison */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16">
                        <AnimatedContent className="text-center mb-12">
                            <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">Before & After</p>
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">What changes when AI covers the gap</h2>
                        </AnimatedContent>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-3 max-w-3xl mx-auto">
                            <div className="text-xs font-semibold uppercase tracking-widest text-zinc-400 pb-2">Without AI</div>
                            <div className="text-xs font-semibold uppercase tracking-widest text-purple-400 pb-2">With AI</div>
                            {comparisons.map((pair, i) => (
                                <>
                                    <AnimatedContent key={`without-${i}`} delay={i * 0.1} className="bg-zinc-50 border border-zinc-100 rounded-xl p-5">
                                        <p className="text-zinc-500 text-sm/6">{pair.without}</p>
                                    </AnimatedContent>
                                    <AnimatedContent key={`with-${i}`} delay={i * 0.1 + 0.05} className="bg-[#dbd2ff]/20 border border-purple-100 rounded-xl p-5">
                                        <p className="text-zinc-700 text-sm/6">{pair.with}</p>
                                    </AnimatedContent>
                                </>
                            ))}
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
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">Restaurants use this to capture more bookings</h2>
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
                        </div>
                    </div>
                    <div className="p-4 pt-16 md:p-16 flex flex-col gap-4">
                        {steps.map((step, i) => (
                            <AnimatedContent key={i} delay={i * 0.1} className="border border-[#edf9f8] rounded-xl p-6 bg-[#f7fcfb]">
                                <p className="text-purple-400 text-xs font-semibold tracking-widest mb-2">{step.n}</p>
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
                    <div className="p-8 md:p-16 max-w-2xl mx-auto">
                        <AnimatedContent className="text-center mb-12">
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
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">Want to see what this looks like for your restaurant?</h2>
                            <p className="text-zinc-500 text-base/7 mt-3 max-w-md mx-auto">
                                Restaurants using AI to handle after-hours reservations and inquiries typically report $3,000 to $18,000 in additional monthly revenue from bookings that used to be missed.
                            </p>
                        </AnimatedContent>
                        <AnimatedContent delay={0.1} className="flex flex-col sm:flex-row items-center gap-3 mt-8 text-sm text-zinc-500">
                            <span>We&apos;ll show you the gaps we&apos;d cover</span>
                            <span className="hidden sm:inline text-zinc-300">·</span>
                            <span>What we&apos;d automate first</span>
                            <span className="hidden sm:inline text-zinc-300">·</span>
                            <span>No pitch, no pressure</span>
                        </AnimatedContent>
                        <AnimatedContent delay={0.15} className="mt-8">
                            <button
                                onClick={() => openAiModal("Restaurant — Scoping Call")}
                                className="flex items-center gap-1.5 py-2.5 px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full text-sm font-medium"
                            >
                                Book a 15-min walkthrough
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
                                Ready to stop missing the shift?
                            </h2>
                            <p className="text-zinc-500 text-base/7 mt-4 max-w-md mx-auto">
                                We review what&apos;s falling through, build the automation in 2 weeks, and hand it off — or run it for you.
                            </p>
                            <AnimatedContent className="flex flex-wrap justify-center gap-6 mt-10">
                                <div className="flex flex-col items-center gap-1">
                                    <span className="font-urbanist font-bold text-2xl text-gray-800">2 weeks</span>
                                    <span className="text-zinc-400 text-xs">to build & hand off</span>
                                </div>
                                <div className="w-px bg-[#edf9f8] hidden md:block" />
                                <div className="flex flex-col items-center gap-1">
                                    <span className="font-urbanist font-bold text-2xl text-gray-800">Week 1</span>
                                    <span className="text-zinc-400 text-xs">gap audit & setup</span>
                                </div>
                                <div className="w-px bg-[#edf9f8] hidden md:block" />
                                <div className="flex flex-col items-center gap-1">
                                    <span className="font-urbanist font-bold text-2xl text-gray-800">Week 2</span>
                                    <span className="text-zinc-400 text-xs">build, test, hand off</span>
                                </div>
                            </AnimatedContent>
                            <div className="flex items-center justify-center mt-10">
                                <button
                                    onClick={() => openAiModal("Restaurant — Final CTA")}
                                    className="flex items-center justify-center gap-1.5 py-3 px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full"
                                >
                                    Book a 15-min walkthrough
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

            <AiModal open={modalOpen} source={modalSource} onClose={() => setModalOpen(false)} />
        </main>
    );
}
