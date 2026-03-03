"use client";
import AnimatedContent from "@/components/animated-content";
import { ArrowUpRightIcon, CalendarIcon, ChevronUpIcon, ClockIcon, LinkedinIcon, MessageSquareIcon } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/contexts/modal-context";
import CountUp from "@/components/count-number";

const problemStats = [
    {
        value: 40,
        suffix: "%",
        label: "of all social media engagement happens between 8pm and midnight — after most teams have signed off",
    },
    {
        value: 32,
        suffix: "%",
        label: "more engagement on weekend posts on average — the least likely to be scheduled by small business owners",
    },
    {
        value: 21,
        suffix: "×",
        label: "more likely to convert an inquiry into a sale when you respond to DMs within 5 minutes",
    },
];

const aiPillars = [
    {
        icon: CalendarIcon,
        title: "Social Media",
        description: "Posts go live at the right time. Comments, DMs, and welcome messages are handled around the clock — on a calendar your team sets once.",
        iconBg: "bg-purple-500",
        cardBg: "bg-[#dbd2ff]/40",
    },
    {
        icon: MessageSquareIcon,
        title: "Customer Service",
        description: "No inquiry waits until Monday. Instant replies overnight and on weekends, with a clean morning summary of anything that needs a human.",
        iconBg: "bg-[#5bbfba]",
        cardBg: "bg-[#edf9f8]/40",
    },
    {
        icon: ClockIcon,
        title: "Inbox & Follow-ups",
        description: "Booking confirmations, follow-up sequences, and reminders sent automatically — so no lead falls through between Friday 5pm and Monday 9am.",
        iconBg: "bg-[#c98dc0]",
        cardBg: "bg-[#ede8f6]/40",
    },
];

const socialPoints = [
    { text: "Scheduled posts go live at the optimal time — even if it's 7am Saturday or 9pm Tuesday", span: 2 },
    { text: "Comments and common DMs ('What are your hours?', 'Do you ship to X?', 'How do I book?') get instant replies around the clock", span: 1 },
    { text: "New follower welcome messages go out automatically, starting the relationship before your team even wakes up", span: 1 },
];

const socialStats = [
    { value: 63, suffix: "%", label: "of businesses say scheduling posts in advance improved their consistency" },
    { value: 3, suffix: "×", label: "more DMs handled per week with the same team size when AI handles common queries" },
];

const voicePoints = [
    { text: "Missed calls answered instantly — even at 2am on a Sunday", span: 2 },
    { text: "Common questions handled by voice: hours, pricing, availability, directions", span: 1 },
    { text: "Bookings taken over the phone and added to your calendar automatically", span: 1 },
    { text: "Urgent requests flagged and passed to the right person", span: 1 },
    { text: "Your team gets a summary of every after-hours call in the morning", span: 1 },
];

const servicePoints = [
    { text: '"Are you open this weekend?" — instant reply, 24/7', span: 2 },
    { text: '"Can I book a tasting for next Saturday?" — captured, confirmed, and added to the calendar overnight', span: 1 },
    { text: '"Do you ship to Texas?" — answered in seconds, not after the weekend', span: 1 },
    { text: '"What\'s your return policy?" — handled automatically, with a warm, on-brand tone', span: 1 },
    { text: "Your team sees a clean summary in the morning — only the conversations that need a human touch", span: 1 },
];

const serviceStats = [
    { value: 67, suffix: "%", label: "of customers expect a reply within the hour, even on weekends" },
    { value: 30, suffix: "%", label: "reduction in missed inquiries for micro-businesses using AI customer service" },
];

export default function AiAutomation() {
    const { openModal } = useModal();

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
                            <span className="text-gray-800">Your customers don&apos;t<br />wait until <span className="underline decoration-2 underline-offset-4">Monday.</span></span>
                        </h1>
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.2}>
                        <p className="text-center text-base/7 text-zinc-700 max-w-xl mt-4">
                            We build the automation that responds, books, and follows up while your team is off the clock.
                        </p>
                    </AnimatedContent>

                    <AnimatedContent className="flex flex-col md:flex-row items-center gap-4 mt-8 w-full md:w-auto" delay={0.3}>
                        <button
                            onClick={() => openModal("AI Automation — Hero")}
                            className="flex items-center justify-center gap-1.5 py-3 md:py-2.5 w-full md:w-auto px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full"
                        >
                            Get started
                            <ArrowUpRightIcon size={16} />
                        </button>
                        <a
                            href="#the-problem"
                            className="py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium text-center border border-white rounded-full"
                        >
                            See the data
                        </a>
                    </AnimatedContent>
                </div>
            </section>

            {/* The Problem */}
            <section id="the-problem" className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div className="md:sticky md:top-26 flex flex-col gap-6">
                            <AnimatedContent>
                                <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">The Problem</p>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                    Your business is open 24/7. Your team isn&apos;t.
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4">
                                    Customers don&apos;t follow business hours. They browse Instagram at 11pm. They send DMs on Sunday morning. They look up your hours at 2am before planning their weekend.
                                </p>
                                <p className="text-zinc-500 text-base/7 mt-3">
                                    When they don&apos;t hear back, they move on. This isn&apos;t a people problem — your team is doing everything right during the hours they&apos;re on. The gap is the hours they&apos;re not.
                                </p>
                            </AnimatedContent>
                            <AnimatedContent className="p-4 md:p-6 bg-purple-500 w-full rounded-xl">
                                <p className="text-base text-white">
                                    We close the gap — without adding to your headcount.
                                </p>
                                <button
                                    onClick={() => openModal("AI Automation — Problem CTA")}
                                    className="bg-white hover:bg-gray-100 transition-colors px-5 py-2 rounded-full mt-6 flex items-center gap-1 text-sm font-medium w-max"
                                >
                                    Get started
                                    <ArrowUpRightIcon size={16} />
                                </button>
                            </AnimatedContent>
                        </div>

                        <div className="flex flex-col gap-4">
                            {problemStats.map((stat, i) => (
                                <AnimatedContent key={i} delay={i * 0.1} className="border border-[#edf9f8] rounded-xl p-6 bg-[#f7fcfb]">
                                    <p className="font-urbanist font-bold text-4xl text-gray-800">
                                        <CountUp to={stat.value} duration={1.5} delay={i * 0.15} />{stat.suffix}
                                    </p>
                                    <p className="text-zinc-600 text-sm/6 mt-2">{stat.label}</p>
                                </AnimatedContent>
                            ))}
                            <p className="text-zinc-400 text-xs mt-1 px-1">
                                Sprout Social Index 2025; HubSpot Sales Response Study
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What AI Covers */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16">
                        <AnimatedContent className="text-center mb-12">
                            <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">What AI Does</p>
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                The always-on layer
                            </h2>
                            <p className="text-zinc-500 text-base/7 mt-3 max-w-md mx-auto">
                                AI doesn&apos;t replace your people — it covers the shift when no one is there.
                            </p>
                        </AnimatedContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {aiPillars.map((pillar, i) => (
                                <AnimatedContent key={i} delay={i * 0.1} className={`${pillar.cardBg} backdrop-blur-md border border-white/60 shadow-sm flex flex-col items-start p-6 rounded-xl`}>
                                    <div className={`${pillar.iconBg} p-2 text-white rounded-full w-fit`}>
                                        <pillar.icon size={18} />
                                    </div>
                                    <p className="text-base font-medium mt-4 text-gray-800">{pillar.title}</p>
                                    <p className="text-sm text-gray-600 mt-2 leading-6">{pillar.description}</p>
                                </AnimatedContent>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Voice Agent */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 border-x md:divide-x border-[#edf9f8] divide-[#edf9f8] max-w-7xl mx-auto">
                    <div>
                        <div className="p-4 pt-16 md:p-16 flex flex-col items-start md:sticky md:top-26">
                            <AnimatedContent>
                                <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">Voice Agent</p>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                    No missed calls. No voicemail.
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4 max-w-sm">
                                    When someone calls after hours, they don&apos;t want to leave a message — they want an answer. A voice agent picks up, handles the conversation, and makes sure nothing gets lost before your team is back.
                                </p>
                            </AnimatedContent>
                            <AnimatedContent className="p-4 md:p-6 bg-purple-500 w-full rounded-xl mt-8">
                                <p className="text-base text-white">
                                    Missed calls don&apos;t usually call back.
                                </p>
                                <button
                                    onClick={() => openModal("AI Automation — Voice Agent CTA")}
                                    className="bg-white hover:bg-gray-100 transition-colors px-5 py-2 rounded-full mt-6 flex items-center gap-1 text-sm font-medium w-max"
                                >
                                    Get started
                                    <ArrowUpRightIcon size={16} />
                                </button>
                            </AnimatedContent>
                        </div>
                    </div>
                    <div className="p-4 pt-16 md:p-16">
                        <AnimatedContent>
                            <p className="text-sm font-medium text-zinc-500 mb-6">What the voice agent handles overnight</p>
                        </AnimatedContent>
                        <div className="grid grid-cols-2 gap-3">
                            {voicePoints.map((point, i) => (
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

            {/* Social Media */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 border-x md:divide-x border-[#edf9f8] divide-[#edf9f8] max-w-7xl mx-auto">
                    <div className="p-4 pt-16 md:p-16">
                        <AnimatedContent>
                            <p className="text-sm font-medium text-zinc-500 mb-6">What automation handles overnight</p>
                        </AnimatedContent>
                        <div className="grid grid-cols-2 gap-3">
                            {socialPoints.map((point, i) => (
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
                    <div>
                        <div className="p-4 pt-16 md:p-16 flex flex-col items-start md:sticky md:top-26">
                            <AnimatedContent>
                                <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">Social Media</p>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                    The scheduling & engagement gap
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4 max-w-sm">
                                    Social is inconsistent not because the owner doesn&apos;t care — it&apos;s because posting requires someone to remember, sit down, write something, and hit publish. AI takes that off the plate entirely.
                                </p>
                            </AnimatedContent>
                            <AnimatedContent className="grid grid-cols-2 gap-4 mt-8 w-full">
                                {socialStats.map((s, i) => (
                                    <div key={i} className="border border-[#edf9f8] rounded-xl p-4 bg-[#f7fcfb]">
                                        <p className="font-urbanist font-bold text-3xl text-gray-800">
                                            <CountUp to={s.value} duration={1.5} delay={i * 0.15} />{s.suffix}
                                        </p>
                                        <p className="text-zinc-500 text-xs/5 mt-1">{s.label}</p>
                                    </div>
                                ))}
                                <p className="col-span-2 text-zinc-400 text-xs mt-1">
                                    Templated.io 2025; Sprout Social Index 2025
                                </p>
                            </AnimatedContent>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Service */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 border-x md:divide-x border-[#edf9f8] divide-[#edf9f8] max-w-7xl mx-auto">
                    <div>
                        <div className="p-4 pt-16 md:p-16 flex flex-col items-start md:sticky md:top-26">
                            <AnimatedContent>
                                <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">Customer Service</p>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                    Responding when no one is there
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4 max-w-sm">
                                    Unanswered messages don&apos;t just sit there — they leave. AI customer service doesn&apos;t replace your team&apos;s relationships with customers. It makes sure no one waits until Monday to hear back.
                                </p>
                            </AnimatedContent>
                            <AnimatedContent className="grid grid-cols-2 gap-4 mt-8 w-full">
                                {serviceStats.map((s, i) => (
                                    <div key={i} className="border border-[#edf9f8] rounded-xl p-4 bg-[#f7fcfb]">
                                        <p className="font-urbanist font-bold text-3xl text-gray-800">
                                            <CountUp to={s.value} duration={1.5} delay={i * 0.15} />{s.suffix}
                                        </p>
                                        <p className="text-zinc-500 text-xs/5 mt-1">{s.label}</p>
                                    </div>
                                ))}
                                <p className="col-span-2 text-zinc-400 text-xs mt-1">
                                    Freshworks AI ROI Report 2025; MDPI Case Study 2025
                                </p>
                            </AnimatedContent>
                        </div>
                    </div>
                    <div className="p-4 pt-16 md:p-16">
                        <AnimatedContent>
                            <p className="text-sm font-medium text-zinc-500 mb-6">What AI handles so your team doesn&apos;t have to</p>
                        </AnimatedContent>
                        <div className="grid grid-cols-2 gap-3">
                            {servicePoints.map((point, i) => (
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
                                Ready to cover the after-hours shift?
                            </h2>
                            <p className="text-zinc-500 text-base/7 mt-4 max-w-md mx-auto">
                                We review what&apos;s falling through the cracks, build the automation layer in 2 weeks, and hand it off — or run it for you.
                            </p>
                            <AnimatedContent className="flex flex-wrap justify-center gap-6 mt-10">
                                <div className="flex flex-col items-center gap-1">
                                    <span className="font-urbanist font-bold text-2xl text-gray-800">2 weeks</span>
                                    <span className="text-zinc-400 text-xs">to build & hand off</span>
                                </div>
                                <div className="w-px bg-[#edf9f8] hidden md:block" />
                                <div className="flex flex-col items-center gap-1">
                                    <span className="font-urbanist font-bold text-2xl text-gray-800">Week 1</span>
                                    <span className="text-zinc-400 text-xs">gap audit & scoping</span>
                                </div>
                                <div className="w-px bg-[#edf9f8] hidden md:block" />
                                <div className="flex flex-col items-center gap-1">
                                    <span className="font-urbanist font-bold text-2xl text-gray-800">Week 2</span>
                                    <span className="text-zinc-400 text-xs">build, test, hand off</span>
                                </div>
                            </AnimatedContent>
                            <div className="flex items-center justify-center mt-10">
                                <button
                                    onClick={() => openModal("AI Automation — Final CTA")}
                                    className="flex items-center justify-center gap-1.5 py-3 px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full"
                                >
                                    Get started
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
