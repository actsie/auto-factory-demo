"use client";
import AnimatedContent from "@/components/animated-content";
import { ArrowUpRightIcon, CheckIcon, ChevronDownIcon, ChevronUpIcon, PhoneCallIcon, XIcon } from "lucide-react";
import Image from "next/image";
import CountUp from "@/components/count-number";
import { useAiModal } from "@/contexts/ai-modal-context";
import { useState } from "react";

const heroStats = [
    { value: 45, suffix: "%", label: "of estimates never get a follow-up call — the job just quietly disappears" },
    { value: 39, suffix: "%", label: "of HVAC revenue comes from repeat customers, but most shops have no system to re-engage them" },
    { value: 65, suffix: "%", label: "of new HVAC customers found their contractor through Google or a referral — and reviews drive both" },
];

const features = [
    {
        n: "01",
        title: "Estimate follow-up",
        body: "When a quote goes out, the system sends a follow-up SMS in 24 hours, then again at day 3 if no reply. No manual effort from your side.",
    },
    {
        n: "02",
        title: "Recurring reminders",
        body: "The system reaches back out to past customers on a schedule you set — a short text reminding them it's time for a tune-up, filter change, or whatever makes sense for your business.",
    },
    {
        n: "03",
        title: "Review requests",
        body: "After a completed job, the system sends a short SMS asking for a Google review. One tap for the customer. More reviews, more new jobs.",
    },
];

const comparisons = [
    {
        without: "Quote goes out. You mean to follow up.\nWeek passes. Customer went with someone else.",
        with: "Follow-up SMS sent automatically at 24h and day 3. Customer replies, job booked.",
    },
    {
        without: "A customer from last spring has no idea you still exist.",
        with: "Pre-season reminder goes out automatically. They book before they even think to search.",
    },
    {
        without: "Job finishes. No review ask. Customer forgets to leave one.",
        with: "SMS goes out same day. Customer taps once. Review posted.",
    },
];

const results = [
    { value: 35, suffix: "%", prefix: "", label: "more estimates accepted when a follow-up is sent within 24 hours vs. no follow-up" },
    { value: 22, suffix: "%", prefix: "", label: "of past customers book again when contacted with a seasonal reminder" },
    { value: 4, suffix: "x", prefix: "", label: "more Google reviews generated with an automated ask vs. hoping customers remember" },
];

const steps = [
    {
        n: "01",
        title: "We map your workflow",
        body: "Your job types, timing, what a completed job looks like, who the customer is — so the follow-up matches your business.",
    },
    {
        n: "02",
        title: "We build the sequences",
        body: "Estimate follow-up, seasonal reminders, review requests — set up once, connected to your existing tools.",
    },
    {
        n: "03",
        title: "We test it before it goes live",
        body: "You approve the messages. We make sure it works with a small batch before it runs on your full customer list.",
    },
    {
        n: "04",
        title: "It runs in the background",
        body: "Every new estimate, completed job, and past customer gets the right message at the right time. No manual effort.",
    },
];

const faqs = [
    {
        q: "Does this replace anything we're currently doing?",
        a: "No. It fills the gaps — the follow-ups that don't happen because your crew is busy. Your team still handles the actual work.",
    },
    {
        q: "What if a customer replies and needs something specific?",
        a: "The system flags it for you. Anything that needs a person gets routed to your team with context on who it is and what they said.",
    },
    {
        q: "How does setup work?",
        a: "We handle everything. We connect to your existing workflow, set up the sequences, and test it before it goes live.",
    },
    {
        q: "What channels does this use?",
        a: "Primarily SMS — it has the highest open rate and the least friction for customers to reply. We can also set up follow-ups through Facebook, Instagram, or Twitter depending on where your customers are.",
    },
];

export default function Contractors() {
    const { openAiModal } = useAiModal();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const [faqForm, setFaqForm] = useState({ name: "", company: "", phone: "", email: "", system: "" });
    const [faqErrors, setFaqErrors] = useState<Record<string, string>>({});
    const [faqLoading, setFaqLoading] = useState(false);
    const [faqSubmitted, setFaqSubmitted] = useState(false);

    const SYSTEM_OPTIONS = ["ServiceTitan", "Square", "None / manual", "Other"];
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
        if (!faqForm.company.trim()) errs.company = "Company name is required";
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
                        Free setup · No contract
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.1}>
                        <h1 className="text-center font-urbanist text-5xl/15 md:text-6xl/18 mt-4 font-bold max-w-3xl">
                            <span className="text-gray-800">The follow-up system for HVAC contractors.</span>
                        </h1>
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.2}>
                        <p className="text-center text-base/7 text-zinc-500 max-w-xl mt-3">
                            More revenue from the jobs you&apos;re already doing.
                        </p>
                    </AnimatedContent>

                    <AnimatedContent className="flex flex-col md:flex-row items-center gap-4 mt-8 w-full md:w-auto" delay={0.3}>
                        <button
                            onClick={() => openAiModal("Contractor — Hero")}
                            className="flex items-center justify-center gap-1.5 py-3 md:py-2.5 w-full md:w-auto px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full"
                        >
                            Get free setup
                            <ArrowUpRightIcon size={16} />
                        </button>
                        <a
                            href="#what-we-do"
                            className="py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium text-center border border-white rounded-full"
                        >
                            See what it does
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
                                <p className="text-zinc-600 text-sm/6 mt-2 min-h-[4.5rem]">{stat.label}</p>
                            </AnimatedContent>
                        ))}
                    </div>
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
                                    Most of the revenue you&apos;re leaving behind isn&apos;t from new leads. It&apos;s from the ones you already talked to.
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4">
                                    An estimate goes out. You mean to follow up. The week gets busy. The customer moves on. A past customer needs a tune-up but doesn&apos;t think to call you. A completed job leaves a happy homeowner who never leaves a review because nobody asked.
                                </p>
                                <p className="text-zinc-500 text-base/7 mt-3">
                                    Manual tracking works on slow days. It doesn&apos;t hold up when you&apos;re running a full crew.
                                </p>
                            </AnimatedContent>
                            <AnimatedContent className="p-4 md:p-6 bg-purple-500 w-full rounded-xl">
                                <p className="text-base text-white">
                                    We set this up for you and it runs automatically. You don&apos;t change how you work.
                                </p>
                                <button
                                    onClick={() => openAiModal("Contractor — Problem CTA")}
                                    className="bg-white hover:bg-gray-100 transition-colors px-5 py-2 rounded-full mt-6 flex items-center gap-1 text-sm font-medium w-max"
                                >
                                    Get free setup
                                    <ArrowUpRightIcon size={16} />
                                </button>
                            </AnimatedContent>
                        </div>

                        <AnimatedContent delay={0.1} className="rounded-2xl overflow-hidden border border-[#edf9f8] bg-black">
                            <video
                                src="/assets/HVACDemo.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* What we do */}
            <section id="what-we-do" className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 border-x md:divide-x border-[#edf9f8] divide-[#edf9f8] max-w-7xl mx-auto">
                    <div className="p-4 pt-16 md:p-16 flex flex-col gap-4">
                        {features.map((feature, i) => (
                            <AnimatedContent key={i} delay={i * 0.1} className="border border-[#edf9f8] rounded-xl p-6 bg-[#f7fcfb]">
                                <p className="text-purple-500 text-xs font-semibold tracking-widest mb-2">{feature.n}</p>
                                <p className="font-medium text-gray-800">{feature.title}</p>
                                <p className="text-zinc-500 text-sm/6 mt-2">{feature.body}</p>
                            </AnimatedContent>
                        ))}
                    </div>
                    <div>
                        <div className="p-4 pt-16 md:p-16 flex flex-col items-start md:sticky md:top-26">
                            <AnimatedContent>
                                <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">What We Do</p>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                    Three things that run automatically after every job
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4 max-w-sm">
                                    We build it once, connect it to your existing workflow, and it handles the follow-up from there. No new software to learn.
                                </p>
                            </AnimatedContent>
                            <AnimatedContent delay={0.1} className="mt-8 flex items-center justify-between gap-5 p-6 bg-[#5bbfba] w-full rounded-xl">
                                <h3 className="text-base text-white text-balance">
                                    We set this up free. You see it working before you pay anything.
                                </h3>
                                <button
                                    onClick={() => openAiModal("Contractor — What We Do CTA")}
                                    className="bg-white hover:bg-gray-100 transition-colors px-5 py-2 rounded-full text-sm font-medium w-max shrink-0"
                                >
                                    Get free setup
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
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">What happens when follow-up actually gets done</h2>
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
                            Sources: ServiceTitan HVAC Benchmark Report 2024, Broadly Review Automation Study 2023, Hatch Follow-Up Conversion Data 2024
                        </p>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section id="how-it-works" className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 border-x md:divide-x border-[#edf9f8] divide-[#edf9f8] max-w-7xl mx-auto">
                    <div>
                        <div className="p-4 pt-16 md:p-16 flex flex-col items-start md:sticky md:top-26">
                            <AnimatedContent>
                                <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">How It Works</p>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                    One setup. Runs automatically from there.
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4 max-w-sm">
                                    We handle the buildout. Your team doesn&apos;t need to learn new software or change how they work.
                                </p>
                            </AnimatedContent>
                            <AnimatedContent delay={0.1} className="p-4 md:p-6 bg-purple-500 w-full rounded-xl mt-8">
                                <p className="text-base text-white">
                                    Free setup. You don&apos;t pay until it&apos;s working.
                                </p>
                                <button
                                    onClick={() => openAiModal("Contractor — How It Works CTA")}
                                    className="bg-white hover:bg-gray-100 transition-colors px-5 py-2 rounded-full mt-6 flex items-center gap-1 text-sm font-medium w-max"
                                >
                                    Get free setup
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
                                <h2 className="font-urbanist font-semibold text-2xl text-gray-800">Get free setup</h2>
                                <p className="text-zinc-500 text-sm/6 mt-2">We&apos;re working with a handful of HVAC shops to start. We set everything up free — you see it working before you pay anything.</p>
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
                                            <label className="text-sm font-medium text-gray-700">Company <span className="text-purple-500">*</span></label>
                                            <input name="company" value={faqForm.company} onChange={handleFaqFormChange} type="text" placeholder="Your company name" className={faqErrors.company ? inputError : inputNormal} />
                                            {faqErrors.company && <p className="text-xs text-red-500">{faqErrors.company}</p>}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-medium text-gray-700">Phone</label>
                                            <input name="phone" value={faqForm.phone} onChange={handleFaqFormChange} type="tel" placeholder="Your phone number" className={inputNormal} />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-medium text-gray-700">Email <span className="text-purple-500">*</span></label>
                                            <input name="email" value={faqForm.email} onChange={handleFaqFormChange} type="email" placeholder="you@yourcompany.com" className={faqErrors.email ? inputError : inputNormal} />
                                            {faqErrors.email && <p className="text-xs text-red-500">{faqErrors.email}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-gray-700">Current system <span className="text-zinc-400 font-normal">(optional)</span></label>
                                        <select name="system" value={faqForm.system} onChange={handleFaqFormChange} className={`${inputNormal} appearance-none`}>
                                            <option value="">Select one...</option>
                                            {SYSTEM_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                    </div>
                                    <button type="submit" disabled={faqLoading} className="mt-2 w-full py-2.5 bg-purple-500 hover:bg-purple-600 disabled:opacity-60 text-white rounded-full text-sm font-medium transition-colors">
                                        {faqLoading ? "Sending..." : "Get free setup"}
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
                            <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">No contract</p>
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">We set this up free for your shop.</h2>
                        </AnimatedContent>
                        <AnimatedContent delay={0.1} className="flex flex-col sm:flex-row items-center gap-3 mt-8 text-sm text-zinc-500">
                            <span>We build the follow-up system</span>
                            <span className="hidden sm:inline text-zinc-300">·</span>
                            <span>Connect it to your existing workflow</span>
                            <span className="hidden sm:inline text-zinc-300">·</span>
                            <span>You see it working before you pay anything</span>
                        </AnimatedContent>
                        <AnimatedContent delay={0.15} className="mt-8">
                            <button
                                onClick={() => openAiModal("Contractor — Scoping Call")}
                                className="flex items-center gap-1.5 py-2.5 px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full text-sm font-medium"
                            >
                                Get free setup
                                <ArrowUpRightIcon size={14} />
                            </button>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section id="team" className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
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
                                    x: "https://x.com/mai_on_chain",
                                    bio: "At Gusto, she built the internal tool that let non-technical marketers ship landing pages in days instead of a month — the same problem she's solving here, just directly for small businesses. She later founded HeyMint, growing it to over a million users before it was acquired. She's a software engineer who knows how to make pages that convert, not just look good.",
                                },
                                {
                                    name: "Ben",
                                    image: "/assets/ben.jpeg",
                                    role: "Co-founder",
                                    linkedin: "https://www.linkedin.com/in/intenex/",
                                    x: "https://x.com/intenex",
                                    bio: "Thiel Fellow, Harvard dropout, and co-founder of Stream, which raised $20M from investors including Pantera Capital. He's spent years as a backend and full-stack engineer at YC-backed startups before moving into operations — he brings both technical depth and practical business judgment to what a company needs online.",
                                },
                                {
                                    name: "Stacy",
                                    image: "/assets/stacy.jpg",
                                    role: "Head of Marketing & Customer Success",
                                    linkedin: "https://www.linkedin.com/in/stacydonnaj/",
                                    x: "https://x.com/stacydj0x",
                                    bio: "Stacy began her career in Customer Success and quickly rose through the ranks to become CS Manager, then expanded her scope to social media and marketing. Her talent and work ethic propelled her to Head of Marketing at a Silicon Valley startup, where she drove growth and brand presence across multiple channels.",
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
                            <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-gray-800 max-w-xl">
                                You did the job. Don&apos;t leave the revenue on the table.
                            </h2>
                            <p className="text-zinc-500 text-base/7 mt-4 max-w-md mx-auto">
                                We set up the follow-up system and run it for you.<br />Free to start, no obligations.
                            </p>
                            <AnimatedContent className="flex flex-wrap justify-center gap-6 mt-10">
                                <div className="flex flex-col items-center gap-1">
                                    <span className="font-urbanist font-bold text-2xl text-gray-800">Free setup</span>
                                    <span className="text-zinc-400 text-xs">we build it for you</span>
                                </div>
                                <div className="w-px bg-[#edf9f8] hidden md:block" />
                                <div className="flex flex-col items-center gap-1">
                                    <span className="font-urbanist font-bold text-2xl text-gray-800">No contract</span>
                                    <span className="text-zinc-400 text-xs">cancel anytime</span>
                                </div>
                                <div className="w-px bg-[#edf9f8] hidden md:block" />
                                <div className="flex flex-col items-center gap-1">
                                    <span className="font-urbanist font-bold text-2xl text-gray-800">SMS-based</span>
                                    <span className="text-zinc-400 text-xs">highest open rate of any channel</span>
                                </div>
                            </AnimatedContent>
                            <div className="flex items-center justify-center mt-10">
                                <button
                                    onClick={() => openAiModal("Contractor — Final CTA")}
                                    className="flex items-center justify-center gap-1.5 py-3 px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full"
                                >
                                    Get free setup
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
