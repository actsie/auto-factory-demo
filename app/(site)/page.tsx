"use client";
import AnimatedContent from "@/components/animated-content";
import { ArrowUpRightIcon, CheckIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, FacebookIcon, InstagramIcon, MessageSquareIcon, PhoneCallIcon, XIcon } from "lucide-react";
import Image from "next/image";
import CountUp from "@/components/count-number";
import { useAiModal } from "@/contexts/ai-modal-context";
import { useState, useEffect, useRef } from "react";


type PilotMessage = { from: string; text: string; time?: string; ticks?: string; name?: string; avatar?: string; avatarColor?: string; };
type PilotChat = { platform: string; chatBg: string; incomingBg?: string; outgoingBg?: string; header?: { bg: string; name: string }; channel?: string; messages: PilotMessage[]; };

const pilotChats: PilotChat[] = [
    {
        platform: "Telegram",
        chatBg: "#f0f2f5",
        incomingBg: "#ffffff",
        outgoingBg: "#e9e4ff",
        messages: [
            { from: "guest", text: "Do you have a table for 8 tomorrow night?", time: "9:07 PM" },
            { from: "ai", text: "Yes! We have availability at 7pm and 8:30pm. Which works better for your group?", time: "9:07 PM" },
            { from: "guest", text: "7pm please, it's a birthday dinner", time: "9:08 PM" },
            { from: "ai", text: "Perfect. What name should I put the reservation under?", time: "9:08 PM" },
            { from: "guest", text: "Sarah Chen", time: "9:09 PM" },
            { from: "ai", text: "Done! Table for 8 at 7pm tomorrow under Sarah Chen. We'll see you then 🎉", time: "9:09 PM" },
        ],
    },
    {
        platform: "WhatsApp",
        chatBg: "#ECE5DD",
        incomingBg: "#ffffff",
        outgoingBg: "#e9e4ff",
        header: { bg: "#6c5dd3", name: "Fountain of Scale" },
        messages: [
            { from: "guest", text: "Still open? We're nearby and starving 😅", time: "10:34 PM" },
            { from: "ai", text: "Yes open until 10pm tonight! How many in your group?", time: "10:34 PM", ticks: "✓✓" },
            { from: "guest", text: "Just 2 of us", time: "10:35 PM" },
            { from: "ai", text: "Come on in, we have tables available. Should take you about 5 mins to get seated.", time: "10:35 PM", ticks: "✓✓" },
            { from: "guest", text: "Amazing, on our way!", time: "10:35 PM" },
            { from: "ai", text: "See you soon 🙌", time: "10:36 PM", ticks: "✓✓" },
        ],
    },
    {
        platform: "Slack",
        chatBg: "#ffffff",
        channel: "#inquiries",
        messages: [
            { from: "guest", name: "James", avatar: "J", avatarColor: "#E01E5A", text: "Hi, planning a team lunch for about 20 people next Friday", time: "11:02 AM" },
            { from: "ai", name: "AI Assistant", avatar: "AI", avatarColor: "#6c5dd3", text: "Hey James! We would love to host. Are you thinking private dining or open floor?", time: "11:02 AM" },
            { from: "guest", name: "James", avatar: "J", avatarColor: "#E01E5A", text: "Private would be great if you have it", time: "11:03 AM" },
            { from: "ai", name: "AI Assistant", avatar: "AI", avatarColor: "#6c5dd3", text: "We do! Private room fits up to 25. Do you have a budget per head in mind?", time: "11:03 AM" },
            { from: "guest", name: "James", avatar: "J", avatarColor: "#E01E5A", text: "Around $60 per person works", time: "11:04 AM" },
            { from: "ai", name: "AI Assistant", avatar: "AI", avatarColor: "#6c5dd3", text: "That works well with our lunch menu. I'll flag this for the team to follow up with a full proposal today.", time: "11:04 AM" },
        ],
    },
];

const missedCases = [
    {
        time: "Fri 9:58 pm",
        channel: "SMS",
        channelType: "sms" as const,
        inquiry: "Still open? Can we walk in?",
        missed: "→ No reply",
        outcome: "They go elsewhere",
    },
    {
        time: "Sat 7:42 pm",
        channel: "Phone call",
        channelType: "phone" as const,
        inquiry: "Do you have a table for 6 tonight?",
        missed: "→ No one can pick up",
        outcome: "Booked elsewhere",
    },
    {
        time: "Sat 10:55 pm",
        channel: "X DM",
        channelType: "twitter" as const,
        inquiry: "Still doing brunch tomorrow?",
        missed: "→ No reply",
        outcome: "Made other plans",
    },
    {
        time: "Sun 10:12 am",
        channel: "Instagram DM",
        channelType: "instagram" as const,
        inquiry: "Do you do private dining for 12?",
        missed: "→ Seen later",
        outcome: "Inquiry lost",
    },
    {
        time: "Sun 4:45 pm",
        channel: "Facebook DM",
        channelType: "facebook" as const,
        inquiry: "Do you accommodate birthdays? Party of 8",
        missed: "→ No reply",
        outcome: "Booked elsewhere",
    },
];

const telegramSummaries = [
    {
        icon: "📸",
        title: "Instagram Activity",
        date: "Monday, March 2",
        entries: [
            { time: "8:12 AM", handle: "@saffronkitchensf", type: "💬 comment+like", text: "that marbling is everything. come see what we're pulling out this weekend 🔥" },
            { time: "11:34 AM", handle: "@saltandboardsf", type: "💬 comment+like", text: "ok that plating is genuinely inspiring us rn. serious date night energy" },
            { time: "1:06 PM", handle: "@harborvieweats", type: "💬 comment+like", text: "a good dough pull never gets old. we respect it" },
            { time: "3:48 PM", handle: "@theolive_branch", type: "💬 comment+like", text: "outdoor season is fully here. see you out there 🌿" },
            { time: "6:22 PM", handle: "@elmaliarestaurant", type: "💬 comment+like", text: "the torching on that meringue is satisfying. tart people understand" },
        ],
        totals: [
            { label: "Comments posted", value: "5" },
            { label: "Accounts engaged", value: "5" },
            { label: "Like-only sessions", value: "0" },
            { label: "Flagged for follow-up", value: "none" },
            { label: "Next session", value: "Tue 8:00 AM" },
        ],
    },
    {
        icon: "📞",
        title: "Phone Activity",
        date: "Monday, March 2",
        entries: [
            { time: "7:42 PM", handle: "Inbound call", type: "🗓 reservation", text: "Party of 4, Saturday 7pm. → Confirmed via booking link." },
            { time: "9:18 PM", handle: "Inbound call", type: "❓ hours", text: "Asked about Sunday brunch hours. → Answered automatically." },
            { time: "10:03 PM", handle: "Inbound call", type: "🎉 private dining", text: "Event for ~30 guests. → Name + email captured. Flagged for follow-up." },
        ],
        totals: [
            { label: "Calls handled", value: "3" },
            { label: "Reservations confirmed", value: "1" },
            { label: "Auto-answered", value: "1" },
            { label: "Leads captured", value: "1" },
            { label: "Follow-up needed", value: "1 — private dining inquiry" },
        ],
    },
    {
        icon: "💬",
        title: "DM Summary",
        date: "Monday, March 2",
        entries: [
            { time: "10:22 AM", handle: "@roverstreetdiner", type: "📩 DM", text: "do you do private events? looking for a venue for ~30 people → Auto-replied with info + booking link." },
            { time: "2:45 PM", handle: "@citybistrofoodies", type: "📩 DM", text: "are you open on easter? do you take walk-ins? → Auto-replied with hours + walk-in policy." },
            { time: "8:30 PM", handle: "@tableforthreepdx", type: "📩 DM", text: "what's the corkage fee if we bring our own wine? → Auto-replied with policy details." },
        ],
        totals: [
            { label: "DMs handled", value: "3" },
            { label: "Auto-replied", value: "3" },
            { label: "Missed", value: "0" },
            { label: "Leads captured", value: "1" },
            { label: "Follow-up needed", value: "1 — private event inquiry" },
        ],
    },
];

const comparisons = [
    {
        without: "Calls go to voicemail during rush.\nDiner books elsewhere.",
        with: "Call answered instantly. Details captured automatically.",
    },
    {
        without: "DMs sit overnight. Event inquiries arrive when nobody's watching.",
        with: "Instant reply with the basics. Important ones routed to your team.",
    },
    {
        without: "Large party and private dining inquiries slip through.",
        with: "Captured and flagged. Your team sees only what needs a personal touch.",
    },
];

const results = [
    { value: 3, suffix: "%", label: "missed call rate after AI — down from 36% across SF restaurants" },
    { value: 1237, suffix: "", label: "hours/year saved per restaurant on phone handling" },
    { value: 141, suffix: "%", label: "increase in over-the-phone covers after deploying an AI concierge" },
];

const steps = [
    {
        n: "01",
        title: "We map your workflow",
        body: "Common questions, booking flow, policies, private dining, catering, edge cases.",
    },
    {
        n: "02",
        title: "We set up your dedicated AI assistant",
        body: "Dedicated configuration tuned to your menu, hours, and operations.",
    },
    {
        n: "03",
        title: "We launch the first set of automations",
        body: "Calls, DMs, inquiries, follow-ups — starting small and useful.",
    },
    {
        n: "04",
        title: "We maintain and improve it",
        body: "We monitor, update, and add capabilities over time.",
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
    const { openAiModal } = useAiModal();
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [carouselHovered, setCarouselHovered] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const mainScrollRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (carouselHovered) return;
        intervalRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % telegramSummaries.length);
        }, 6000);
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [carouselHovered]);

    useEffect(() => {
        mainScrollRefs.current.forEach((el, i) => {
            if (i !== currentSlide && el) el.scrollTop = 0;
        });
        const el = mainScrollRefs.current[currentSlide];
        if (!el) return;
        const timer = setTimeout(() => {
            el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
        }, 3000);
        return () => clearTimeout(timer);
    }, [currentSlide]);

    const [offerSlide, setOfferSlide] = useState(0);
    const [offerHovered, setOfferHovered] = useState(false);
    const offerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const offerScrollRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (offerHovered) return;
        offerIntervalRef.current = setInterval(() => {
            setOfferSlide(prev => (prev + 1) % pilotChats.length);
        }, 6000);
        return () => { if (offerIntervalRef.current) clearInterval(offerIntervalRef.current); };
    }, [offerHovered]);

    useEffect(() => {
        // Reset non-active slides to top
        offerScrollRefs.current.forEach((el, i) => {
            if (i !== offerSlide && el) el.scrollTop = 0;
        });
        // Smooth scroll active slide to bottom after a short pause
        const el = offerScrollRefs.current[offerSlide];
        if (!el) return;
        const timer = setTimeout(() => {
            el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
        }, 3000);
        return () => clearTimeout(timer);
    }, [offerSlide]);
    const [faqForm, setFaqForm] = useState({ name: "", email: "", business: "", website: "", gap: "", notes: "" });
    const [faqErrors, setFaqErrors] = useState<Record<string, string>>({});
    const [faqLoading, setFaqLoading] = useState(false);
    const [faqSubmitted, setFaqSubmitted] = useState(false);

    const GAP_OPTIONS = ["Voice / missed calls", "Social media DMs", "Customer service inquiries", "All of the above"];
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
                body: JSON.stringify({ ...faqForm, source: "Restaurant — FAQ form" }),
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
                        Free pilot · 1 SF restaurant
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.1}>
                        <h1 className="text-center font-urbanist text-5xl/15 md:text-6xl/18 mt-4 font-bold max-w-3xl">
                            <span className="text-gray-800">A dedicated AI assistant for your restaurant.</span>
                        </h1>
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.2}>
                        <p className="text-center text-base/7 text-zinc-500 max-w-xl mt-3">
                            Set up for your workflow. Maintained by us. Starts with the tasks that steal time and bookings.
                        </p>
                    </AnimatedContent>

                    <AnimatedContent className="flex flex-col md:flex-row items-center gap-4 mt-8 w-full md:w-auto" delay={0.3}>
                        <button
                            onClick={() => openAiModal("Restaurant — Hero")}
                            className="flex items-center justify-center gap-1.5 py-3 md:py-2.5 w-full md:w-auto px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full"
                        >
                            Apply for the free pilot
                            <ArrowUpRightIcon size={16} />
                        </button>
                        <a
                            href="#handles"
                            className="py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium text-center border border-white rounded-full"
                        >
                            See what it would handle first
                        </a>
                    </AnimatedContent>
                    <AnimatedContent distance={30} delay={0.4}>
                        <p className="text-center text-xs text-zinc-400 mt-3">
                            Free setup and free during the pilot. We&apos;re looking for 1 SF restaurant to partner with.
                        </p>
                    </AnimatedContent>
                </div>
            </section>

            {/* Offer */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:divide-x divide-[#edf9f8] items-center">

                        {/* Left — chat carousel */}
                        <div className="p-8 md:p-16 pt-8 md:pt-16"
                            onMouseEnter={() => setOfferHovered(true)}
                            onMouseLeave={() => setOfferHovered(false)}
                        >
                            <p className="text-sm font-medium text-zinc-500 mb-6">Compatible with</p>
                            <AnimatedContent className="relative h-[480px]">
                                {pilotChats.map((chat, idx) => (
                                    <div key={idx} className={`absolute inset-0 transition-opacity duration-300 ${idx === offerSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                                        <div className="rounded-2xl overflow-hidden shadow-xl border border-zinc-200 flex flex-col h-full" style={{ background: chat.chatBg }}>

                                            {/* macOS chrome */}
                                            <div className="relative flex items-center px-4 py-3 bg-white border-b border-zinc-100 shrink-0">
                                                <div className="flex gap-1.5">
                                                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                                    <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
                                                </div>
                                                <p className="absolute inset-0 flex items-center justify-center text-zinc-500 text-xs pointer-events-none">{chat.platform}</p>
                                            </div>

                                            {/* WhatsApp contact header */}
                                            {chat.platform === "WhatsApp" && chat.header && (
                                                <div className="flex items-center gap-3 px-4 py-2.5 shrink-0" style={{ background: chat.header.bg }}>
                                                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-[10px] font-bold shrink-0">F</div>
                                                    <div>
                                                        <p className="text-white text-xs font-semibold leading-none">{chat.header.name}</p>
                                                        <p className="text-white/70 text-[10px] mt-0.5">online</p>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Slack channel header */}
                                            {chat.platform === "Slack" && (
                                                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-100 shrink-0">
                                                    <span className="text-xs font-semibold text-zinc-800">{chat.channel}</span>
                                                    <span className="text-zinc-300 text-xs">·</span>
                                                    <span className="text-zinc-400 text-xs">Restaurant inquiries</span>
                                                </div>
                                            )}

                                            {/* Messages */}
                                            <div ref={(el) => { offerScrollRefs.current[idx] = el; }} className={`px-4 py-4 space-y-3 flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full ${chat.platform === "Slack" ? "scrollbar-dark" : "[&::-webkit-scrollbar-thumb]:bg-white/60"}`} style={{ scrollbarWidth: "thin", scrollbarColor: chat.platform === "Slack" ? "rgba(0,0,0,0.15) transparent" : "rgba(255,255,255,0.6) transparent" }}>
                                                {chat.platform === "Slack" ? (
                                                    // Slack flat message style
                                                    chat.messages.map((msg, i) => (
                                                        <div key={i} className="flex items-start gap-2.5">
                                                            <div className="w-7 h-7 rounded-md flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5" style={{ background: msg.avatarColor }}>
                                                                {msg.avatar}
                                                            </div>
                                                            <div>
                                                                <div className="flex items-baseline gap-1.5">
                                                                    <span className="text-xs font-semibold text-zinc-800">{msg.name}</span>
                                                                    <span className="text-[10px] text-zinc-400">Today {msg.time}</span>
                                                                </div>
                                                                <p className="text-zinc-700 text-xs leading-relaxed mt-0.5">{msg.text}</p>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    // Telegram / WhatsApp bubble style
                                                    chat.messages.map((msg, i) => (
                                                        msg.from === "guest" ? (
                                                            <div key={i} className="flex items-end max-w-[82%]">
                                                                <div className="shadow-sm rounded-2xl rounded-tl-sm px-3.5 py-2" style={{ background: chat.incomingBg }}>
                                                                    <p className="text-zinc-700 text-xs leading-relaxed">{msg.text}</p>
                                                                    {msg.time && <p className="text-[10px] text-zinc-400 text-right mt-0.5">{msg.time}</p>}
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div key={i} className="flex justify-end">
                                                                <div className="rounded-2xl rounded-tr-sm px-3.5 py-2 max-w-[82%]" style={{ background: chat.outgoingBg }}>
                                                                    <p className="text-zinc-700 text-xs leading-relaxed">{msg.text}</p>
                                                                    <div className="flex items-center justify-end gap-1 mt-0.5">
                                                                        {msg.time && <span className="text-[10px] text-zinc-400">{msg.time}</span>}
                                                                        {msg.ticks && <span className="text-[10px] text-purple-400">{msg.ticks}</span>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    ))
                                                )}
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
                            </AnimatedContent>

                            {/* Navigation */}
                            <div className="flex items-center justify-between mt-4">
                                <button onClick={() => setOfferSlide(prev => (prev - 1 + pilotChats.length) % pilotChats.length)} className="p-1.5 rounded-full border border-[#edf9f8] text-zinc-400 hover:text-zinc-600 transition-colors">
                                    <ChevronLeftIcon size={16} />
                                </button>
                                <div className="flex gap-1.5">
                                    {pilotChats.map((_, i) => (
                                        <button key={i} onClick={() => setOfferSlide(i)} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === offerSlide ? "bg-purple-500" : "bg-zinc-200"}`} />
                                    ))}
                                </div>
                                <button onClick={() => setOfferSlide(prev => (prev + 1) % pilotChats.length)} className="p-1.5 rounded-full border border-[#edf9f8] text-zinc-400 hover:text-zinc-600 transition-colors">
                                    <ChevronRightIcon size={16} />
                                </button>
                            </div>
                            <div className="mt-6 overflow-hidden marquee-fade">
                                <div className="flex gap-2 animate-marquee-loop">
                                    {["Discord", "WhatsApp", "Twitch", "Slack", "Telegram", "Line", "Google Chat", "Discord", "WhatsApp", "Twitch", "Slack", "Telegram", "Line", "Google Chat"].map((app, i) => (
                                        <span key={i} className="text-xs bg-[#f7fcfb] border border-[#edf9f8] text-zinc-500 px-3 py-1 rounded-full shrink-0">{app}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right — offer content */}
                        <div className="p-8 md:p-16">
                            <AnimatedContent>
                                <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">Free Pilot</p>
                                <h2 className="font-urbanist font-semibold text-2xl md:text-3xl text-gray-800">
                                    We&apos;ll set up a dedicated AI assistant for your restaurant for free.
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4">In exchange, we ask for:</p>
                                <ul className="mt-3 space-y-2">
                                    {[
                                        "Feedback as we tune it",
                                        "Time to understand your workflow",
                                        "Permission to use results in future pitches (we can anonymize)",
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-zinc-600">
                                            <CheckIcon className="h-4 w-4 shrink-0 text-purple-500 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-zinc-400 text-sm mt-5">Keep it low pressure. We&apos;re learning as much as you are.</p>
                            </AnimatedContent>
                            <AnimatedContent delay={0.1} className="mt-6">
                                <button
                                    onClick={() => openAiModal("Restaurant — Offer")}
                                    className="flex items-center gap-1.5 py-2.5 px-7 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full text-sm font-medium"
                                >
                                    Apply for the free pilot
                                    <ArrowUpRightIcon size={15} />
                                </button>
                            </AnimatedContent>
                        </div>

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
                                    The problem isn&apos;t effort. It&apos;s timing.
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4">
                                    Calls and messages come in while your team is slammed or you&apos;re closed. So even good restaurants miss inquiries — especially for large parties, events, and simple questions.
                                </p>
                                <p className="text-zinc-500 text-base/7 mt-3">
                                    A dedicated AI assistant covers the gap and sends you a clean summary. We handle the buildout. You don&apos;t change how you work.
                                </p>
                                <div className="flex gap-8 mt-6 pt-6 border-t border-[#edf9f8]">
                                    <div>
                                        <p className="font-urbanist font-bold text-3xl text-gray-800"><CountUp to={43} duration={1.5} />%</p>
                                        <p className="text-xs text-zinc-500 mt-1 max-w-[120px]">of restaurant calls go unanswered on average</p>
                                    </div>
                                    <div>
                                        <p className="font-urbanist font-bold text-3xl text-gray-800"><CountUp to={69} duration={1.5} delay={0.1} />%</p>
                                        <p className="text-xs text-zinc-500 mt-1 max-w-[120px]">of those diners won&apos;t try the restaurant again</p>
                                    </div>
                                    <div>
                                        <p className="font-urbanist font-bold text-3xl text-gray-800"><CountUp to={60} duration={1.5} delay={0.2} />%</p>
                                        <p className="text-xs text-zinc-500 mt-1 max-w-[120px]">won&apos;t call back at all</p>
                                    </div>
                                </div>
                                <p className="text-[11px] text-zinc-400 mt-3">Sources: Hostie AI · ReachifyAI · industry research</p>
                            </AnimatedContent>
                            <AnimatedContent className="p-4 md:p-6 bg-purple-500 w-full rounded-xl">
                                <p className="text-base text-white">
                                    We handle the buildout. You don&apos;t change how you work.
                                </p>
                                <button
                                    onClick={() => openAiModal("Restaurant — Problem CTA")}
                                    className="bg-white hover:bg-gray-100 transition-colors px-5 py-2 rounded-full mt-6 flex items-center gap-1 text-sm font-medium w-max"
                                >
                                    See what it would handle first
                                    <ArrowUpRightIcon size={16} />
                                </button>
                            </AnimatedContent>
                        </div>

                        <div className="flex flex-col gap-4">
                            {missedCases.map((c, i) => (
                                <AnimatedContent key={i} delay={i * 0.1} className="border border-gray-200/60 rounded-xl p-5 bg-gray-50/80 backdrop-blur-sm">
                                    <div className="grid grid-cols-[1fr_2fr_1fr] items-center">
                                        <div className="flex flex-col gap-1 pr-4">
                                            <div className="flex items-center gap-1.5">
                                                {c.channelType === "phone" && <PhoneCallIcon size={12} className="text-zinc-400" />}
                                                {c.channelType === "instagram" && <InstagramIcon size={12} className="text-zinc-400" />}
                                                {c.channelType === "sms" && <MessageSquareIcon size={12} className="text-zinc-400" />}
                                                {c.channelType === "facebook" && <FacebookIcon size={12} className="text-zinc-400" />}
                                                {c.channelType === "twitter" && (
                                                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className="text-zinc-400 shrink-0">
                                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                    </svg>
                                                )}
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
                            <AnimatedContent delay={0.35}>
                                <p className="text-sm text-zinc-400 px-1">It&apos;s not staff effort. It&apos;s timing. People decide when you&apos;re not at the phone.</p>
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
                                        <div ref={(el) => { mainScrollRefs.current[idx] = el; }} className="px-4 py-4 space-y-2.5 flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white [&::-webkit-scrollbar-thumb]:rounded-full" style={{ scrollbarWidth: "thin", scrollbarColor: "#ffffff transparent" }}>
                                            {/* Date pill */}
                                            <div className="flex justify-center mb-3">
                                                <span className="text-zinc-400 text-[10px] bg-zinc-200/70 px-3 py-1 rounded-full">
                                                    {summary.icon} {summary.title} — {summary.date}
                                                </span>
                                            </div>

                                            {/* Message bubbles */}
                                            {summary.entries.map((entry, i) => (
                                                <div key={i} className="flex items-end gap-2 max-w-[88%]">
                                                    <div className="bg-white shadow-sm rounded-2xl rounded-tl-sm px-3.5 py-2.5 w-full">
                                                        <p className="text-zinc-400 text-[10px] font-mono mb-1">
                                                            {entry.handle.startsWith("@")
                                                                ? <span className="blur-[3px] select-none">{entry.handle}</span>
                                                                : <span>{entry.handle}</span>
                                                            } · {entry.type}
                                                        </p>
                                                        <p className="text-zinc-700 text-xs leading-relaxed">{entry.text}</p>
                                                        <p className="text-zinc-400 text-[10px] text-right mt-0.5">{entry.time}</p>
                                                    </div>
                                                </div>
                                            ))}

                                            {/* Totals bubble */}
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
                                <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">What Your Dedicated AI Assistant Handles</p>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                    Covers the shift when nobody can answer
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4 max-w-sm">
                                    It doesn&apos;t replace your staff. It handles what falls through when your team is in service or offline.
                                </p>
                                <ul className="mt-6 space-y-3">
                                    {[
                                        "Answers common calls (hours, location, parking, policies)",
                                        "Captures reservation requests and large party inquiries",
                                        "Collects details for private dining and catering leads",
                                        "Replies to DMs with the basics + routes the important ones",
                                        "Sends a daily summary (bookings captured, leads captured, follow-ups needed)",
                                        "You manage it through Telegram, WhatsApp, Slack, or any chat app you already use",
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-zinc-600">
                                            <CheckIcon className="h-4 w-4 shrink-0 text-purple-500 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedContent>
                            <AnimatedContent delay={0.1} className="mt-8 flex items-center justify-between gap-5 p-6 bg-[#5bbfba] w-full rounded-xl">
                                <h3 className="text-base text-white text-balance">
                                    What your team gets — confirmed bookings, captured leads, and only the messages that need a human.
                                </h3>
                                <button
                                    onClick={() => openAiModal("Restaurant — What AI Handles CTA")}
                                    className="bg-white hover:bg-gray-100 transition-colors px-5 py-2 rounded-full text-sm font-medium w-max shrink-0"
                                >
                                    Get started
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
                            <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">Before & After</p>
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">What changes when you have a dedicated AI assistant</h2>
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

                            {/* With AI — dark, elevated, right */}
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
                                    onClick={() => openAiModal("Restaurant — Before & After CTA")}
                                    className="mt-10 w-full rounded-full bg-purple-500 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-purple-400 transition-colors"
                                >
                                    Apply for the free pilot
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
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">Numbers from restaurants that have deployed AI phone and booking tools</h2>
                        </AnimatedContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {results.map((stat, i) => (
                                <AnimatedContent key={i} delay={i * 0.1} className="border border-[#edf9f8] rounded-xl p-6 bg-[#f7fcfb] text-center">
                                    <p className="font-urbanist font-bold text-5xl text-gray-800">
                                        <CountUp to={stat.value} duration={1.5} delay={i * 0.15} />{stat.suffix}
                                    </p>
                                    <p className="text-zinc-500 text-sm/6 mt-3">{stat.label}</p>
                                </AnimatedContent>
                            ))}
                        </div>
                        <p className="text-zinc-400 text-xs mt-6">
                            Sources: Hostie AI 500k-call study (2024–2025), Slang.ai 50-restaurant study, Hostie AI Burma Food Group case study. Published figures from third-party tools — not a guarantee of results.
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
                                    A simple setup, then it runs quietly in the background
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
                                    onClick={() => openAiModal("Restaurant — How It Works CTA")}
                                    className="bg-white hover:bg-gray-100 transition-colors px-5 py-2 rounded-full mt-6 flex items-center gap-1 text-sm font-medium w-max"
                                >
                                    Apply for the free pilot
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
                                            <input name="email" value={faqForm.email} onChange={handleFaqFormChange} type="email" placeholder="you@yourbusiness.com" className={faqErrors.email ? inputError : inputNormal} />
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
                                        <input name="website" value={faqForm.website} onChange={handleFaqFormChange} type="url" placeholder="https://yourrestaurant.com" className={inputNormal} />
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
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">Want to see what we&apos;d set up for your restaurant?</h2>
                        </AnimatedContent>
                        <AnimatedContent delay={0.1} className="flex flex-col sm:flex-row items-center gap-3 mt-8 text-sm text-zinc-500">
                            <span>We&apos;ll map what&apos;s falling through</span>
                            <span className="hidden sm:inline text-zinc-300">·</span>
                            <span>Show you what we&apos;d handle first</span>
                            <span className="hidden sm:inline text-zinc-300">·</span>
                            <span>No pressure</span>
                        </AnimatedContent>
                        <AnimatedContent delay={0.15} className="mt-8">
                            <button
                                onClick={() => openAiModal("Restaurant — Scoping Call")}
                                className="flex items-center gap-1.5 py-2.5 px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full text-sm font-medium"
                            >
                                See if your restaurant is a fit
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
                            <p className="text-zinc-500 text-base/7 mt-3 max-w-md mx-auto">You&apos;ll have direct access to the people building it.</p>
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
                            <h2 className="font-urbanist font-bold text-4xl md:text-5xl text-gray-800 max-w-xl">
                                Someone&apos;s calling right now. Nobody&apos;s there.
                            </h2>
                            <p className="text-zinc-500 text-base/7 mt-4 max-w-md mx-auto">
                                We&apos;re looking for 1 SF restaurant to run a free pilot with. Free setup and free during the pilot. In exchange, we&apos;ll learn your workflow and use the results to shape the next version.
                            </p>
                            <div className="flex flex-col items-center gap-3 mt-10">
                                <button
                                    onClick={() => openAiModal("Restaurant — Final CTA")}
                                    className="flex items-center justify-center gap-1.5 py-3 px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full"
                                >
                                    Apply for the free pilot
                                    <ArrowUpRightIcon size={16} />
                                </button>
                                <p className="text-xs text-zinc-400">No pressure. If it&apos;s not useful, you can stop anytime.</p>
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
