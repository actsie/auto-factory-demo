"use client";
import AnimatedContent from "@/components/animated-content";
import FypModal from "@/components/fyp-modal";
import MiniWebsiteDiagram from "@/components/mini-website-diagram";
import { ArrowUpRightIcon, CheckIcon, ChevronUpIcon, ClipboardIcon, LinkedinIcon, PencilIcon, RocketIcon } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/contexts/modal-context";
import { useEffect, useRef, useState } from "react";


const whatsIncluded = [
    "A small edit takes minutes — not a ticket, not a dev, not three days",
    "No more breaking changes — it's your code, it does exactly what you tell it",
    "Same design, same URLs — your SEO and your visitors stay untouched",
    "No platform lock-in — the code is yours, so you're never stuck",
];

const steps = [
    {
        icon: ClipboardIcon,
        title: "Share your site",
        description: "Send us the URL. We take a look and let you know if it's a good fit.",
        iconBg: "bg-purple-500",
        cardBg: "bg-[#dbd2ff]/40",
    },
    {
        icon: PencilIcon,
        title: "We rebuild it",
        description: "Same look, same URLs. Clean custom code — no platform in the middle.",
        iconBg: "bg-[#5bbfba]",
        cardBg: "bg-[#edf9f8]/40",
    },
    {
        icon: RocketIcon,
        title: "You own it",
        description: "We hand over the files or host it under your domain for $20/mo. Either way, the code is yours.",
        iconBg: "bg-[#c98dc0]",
        cardBg: "bg-[#ede8f6]/40",
    },
];

export default function FixYourPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalSource, setModalSource] = useState("");
    const [modalQrMenu, setModalQrMenu] = useState(false);
    const [lightboxCol, setLightboxCol] = useState<number | null>(null);
    const [lightboxIdx, setLightboxIdx] = useState(0);
    const [hoveredCol, setHoveredCol] = useState<number | null>(null);
    const colTrackRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);
    const colWrapperRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);

    const galleryRestaurantImgs = [
        "/assets/gallery/resto-sample-hero.jpg",
        "/assets/gallery/resto-sample-hero2.jpg",
        "/assets/gallery/resto-sample-about-us.jpg",
        "/assets/gallery/resto-sample-menu.jpg",
        "/assets/gallery/resto-sample-testimonials.jpg",
        "/assets/gallery/resto-sample-form.jpg",
    ];
    const galleryBeautyImgs = [
        "/assets/gallery/beauty-salon-sample-hero.jpg",
        "/assets/gallery/beauty-salon-sample-service.jpg",
        "/assets/gallery/beauty-salon-sample-gallery.jpg",
        "/assets/gallery/beauty-salon-sample-why-us.jpg",
        "/assets/gallery/beauty-salon-sample-testimonials.jpg",
        "/assets/gallery/beauty-salon-sample-about-us.jpg",
        "/assets/gallery/beauty-salon-sample-menu.jpg",
        "/assets/gallery/beauty-salon-sample-form.jpg",
        "/assets/gallery/beauty-salon-sample-cta.jpg",
        "/assets/gallery/beauty-salon-sample-footer.jpg",
    ];
    const galleryHomeImgs = [
        "/assets/gallery/home-svc-sample-hero.jpg",
        "/assets/gallery/home-svc-sample-svcs.jpg",
        "/assets/gallery/home-svc-sample-why-us.jpg",
        "/assets/gallery/home-svc-sample-team.jpg",
        "/assets/gallery/home-svc-sample-testimonials.jpg",
        "/assets/gallery/home-svc-sample-form.jpg",
        "/assets/gallery/home-svc-sample-footer.jpg",
    ];
    const galleryCols = [
        { images: galleryRestaurantImgs, label: "Harvest Table", url: "/sample", color: "#b45309" },
        { images: galleryBeautyImgs, label: "Lume Studio", url: "/sample/beauty-salon", color: "#D9A299" },
        { images: galleryHomeImgs, label: "AllPro Services", url: "/sample/home-services", color: "#ea580c" },
    ];

    useEffect(() => {
        const style = document.createElement("style");
        style.textContent = `
            @keyframes gallery-scroll {
                from { transform: skewY(-6deg) translateY(0); }
                to { transform: skewY(-6deg) translateY(-50%); }
            }
        `;
        document.head.appendChild(style);

        const id = setTimeout(() => {
            colTrackRefs.current.forEach((el, i) => {
                if (!el) return;
                const half = el.scrollHeight / 2;
                const duration = (half / 72) * 1000;
                el.style.animation = `gallery-scroll ${duration}ms linear infinite`;
            });
        }, 100);

        return () => {
            clearTimeout(id);
            document.head.removeChild(style);
        };
    }, []);

    useEffect(() => {
        colTrackRefs.current.forEach((el, i) => {
            if (!el) return;
            el.style.animationPlayState = hoveredCol === i ? "paused" : "running";
        });
    }, [hoveredCol]);

    useEffect(() => {
        if (lightboxCol === null) return;
        const len = galleryCols[lightboxCol].images.length;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") setLightboxIdx(i => (i + 1) % len);
            else if (e.key === "ArrowLeft") setLightboxIdx(i => (i - 1 + len) % len);
            else if (e.key === "Escape") setLightboxCol(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [lightboxCol]);


const { open: navbarModalOpen, closeModal: closeNavbarModal } = useModal();

    useEffect(() => {
        if (navbarModalOpen) {
            closeNavbarModal();
            openModal("Navbar — Fix Your Page");
        }
    }, [navbarModalOpen]);

    function openModal(source: string, withQr = false) {
        setModalSource(source);
        setModalQrMenu(withQr);
        setModalOpen(true);
    }

    return (
        <>
            <FypModal open={modalOpen} source={modalSource} initialQrMenu={modalQrMenu} onClose={() => setModalOpen(false)} />
            <main>
                {/* Hero */}
                <section className="bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32">
                    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-screen">
                        <AnimatedContent distance={30} delay={0.1}>
                            <h1 className="text-center font-urbanist text-5xl/15 md:text-6xl/18 mt-4 font-bold max-w-2xl">
                                <span style={{ color: "#eef9f8" }}>A fresh site.</span>
                                <br />
                                <span className="text-gray-800">Without the <span className="underline decoration-2 underline-offset-4">headache.</span></span>
                            </h1>
                        </AnimatedContent>

                        <AnimatedContent distance={30} delay={0.2}>
                            <p className="text-center text-base/7 text-zinc-700 max-w-xl mt-4">
                                Most site owners tell us the same thing: every update is a headache, and the bill keeps going up. We migrate your site to custom code — same design, same URLs, no platform in the middle.
                            </p>
                        </AnimatedContent>

                        <AnimatedContent className="flex flex-col md:flex-row items-center gap-4 mt-8 w-full md:w-auto" delay={0.3}>
                            <button
                                onClick={() => openModal("Fix Your Page — Hero")}
                                className="flex items-center justify-center gap-1.5 py-3 md:py-2.5 w-full md:w-auto px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full"
                            >
                                Migrate my site
                                <ArrowUpRightIcon size={16} />
                            </button>
                            <a
                                href="#how-it-works"
                                className="py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium text-center border border-white rounded-full"
                            >
                                See how it works
                            </a>
                        </AnimatedContent>
                    </div>
                </section>

                {/* What's included */}
                <section className="border-y border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                    <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                        <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <AnimatedContent>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                    The same site. None of the baggage.
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4">
                                    Your visitors see the same page. You stop dreading every time something needs to change.
                                </p>
                            </AnimatedContent>
                            <AnimatedContent className="flex flex-col gap-4">
                                {whatsIncluded.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="p-1 rounded-full bg-purple-500 mt-0.5 shrink-0">
                                            <CheckIcon size={12} className="text-white" strokeWidth={3} />
                                        </div>
                                        <p className="text-zinc-700 text-sm/6">{item}</p>
                                    </div>
                                ))}
                            </AnimatedContent>
                        </div>
                    </div>
                </section>

                {/* Gallery */}
                <section className="border-b border-[#edf9f8] overflow-hidden bg-white">
                    <div className="text-center pt-14 pb-10 px-6">
                        <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">Our Work</p>
                        <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">Pages we&apos;ve built</h2>
                        <p className="text-zinc-500 text-base mt-3 max-w-sm mx-auto leading-relaxed">
                            A few examples across different industries — same design, custom code.
                        </p>
                    </div>

                    <div style={{ overflow: "hidden", height: "540px", maskImage: "linear-gradient(to bottom, transparent 0%, white 20%, white 88%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, white 20%, white 88%, transparent 100%)" }}>
                        <div style={{ display: "flex", gap: "12px", height: "100%" }}>
                            {galleryCols.map((col, colIdx) => (
                                <div key={colIdx}
                                    ref={el => { colWrapperRefs.current[colIdx] = el; }}
                                    style={{ flex: 1, overflow: "hidden" }}
                                    onMouseEnter={() => setHoveredCol(colIdx)}
                                    onMouseLeave={() => setHoveredCol(null)}>
                                    <div ref={el => { colTrackRefs.current[colIdx] = el; }}
                                        style={{ display: "flex", flexDirection: "column" }}>
                                        {[...col.images, ...col.images, ...col.images, ...col.images].map((src, i) => (
                                            <div key={i} onClick={() => { setLightboxCol(colIdx); setLightboxIdx(i % col.images.length); }}
                                                style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "10px", overflow: "hidden", cursor: "zoom-in", flexShrink: 0, marginBottom: "12px" }}>
                                                <Image src={src} alt={col.label} fill className="object-cover transition-transform duration-200 hover:scale-105" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center pb-14 pt-8 flex flex-col items-center gap-4">
                        <p className="text-zinc-400 text-xs">Hover to pause · Click any image to view</p>
                        <p className="text-zinc-600 font-medium">Want a page like these?</p>
                        <button
                            onClick={() => openModal("Fix Your Page — Gallery CTA")}
                            className="flex items-center gap-1.5 py-2.5 px-7 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full text-sm"
                        >
                            Fix my page
                            <ArrowUpRightIcon size={14} />
                        </button>
                    </div>
                </section>

                {lightboxCol !== null && (() => {
                    const imgs = galleryCols[lightboxCol].images;
                    const label = galleryCols[lightboxCol].label;
                    const url = galleryCols[lightboxCol].url;
                    const themeColor = galleryCols[lightboxCol].color;
                    const len = imgs.length;
                    return (
                        <div onClick={() => setLightboxCol(null)}
                            style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }} />

                            {/* Image + Live Preview button */}
                            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}
                                onClick={e => e.stopPropagation()}>
                                <a href={url} target="_blank" rel="noopener noreferrer"
                                    style={{ backgroundColor: themeColor, color: "#fff", fontSize: "12px", fontWeight: 600, padding: "6px 14px", borderRadius: "16px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                                    Live preview
                                    <ArrowUpRightIcon size={12} />
                                </a>
                                <div style={{ position: "relative", width: "min(90vw, 1000px)", aspectRatio: "16/9", borderRadius: "16px", overflow: "hidden" }}>
                                    <Image src={imgs[lightboxIdx]} alt={label} fill className="object-cover" />
                                </div>
                            </div>

                            {/* Prev */}
                            <button onClick={e => { e.stopPropagation(); setLightboxIdx(i => (i - 1 + len) % len); }}
                                style={{ position: "absolute", left: "24px", zIndex: 2, background: "rgba(255,255,255,0.12)", border: "none", color: "#fff", width: "48px", height: "48px", borderRadius: "50%", cursor: "pointer", fontSize: "22px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                ‹
                            </button>

                            {/* Next */}
                            <button onClick={e => { e.stopPropagation(); setLightboxIdx(i => (i + 1) % len); }}
                                style={{ position: "absolute", right: "24px", zIndex: 2, background: "rgba(255,255,255,0.12)", border: "none", color: "#fff", width: "48px", height: "48px", borderRadius: "50%", cursor: "pointer", fontSize: "22px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                ›
                            </button>

                            {/* Close */}
                            <button onClick={() => setLightboxCol(null)}
                                style={{ position: "absolute", top: "24px", right: "28px", zIndex: 2, background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer", fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                ×
                            </button>

                            {/* Counter + dots */}
                            <div style={{ position: "absolute", bottom: "28px", left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", zIndex: 2 }}
                                onClick={e => e.stopPropagation()}>
                                <div style={{ display: "flex", gap: "6px" }}>
                                    {imgs.map((_, i) => (
                                        <button key={i} onClick={() => setLightboxIdx(i)}
                                            style={{ width: i === lightboxIdx ? "20px" : "7px", height: "7px", borderRadius: "4px", border: "none", cursor: "pointer", backgroundColor: i === lightboxIdx ? "#fff" : "rgba(255,255,255,0.3)", transition: "all .25s", padding: 0 }} />
                                    ))}
                                </div>
                                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", margin: 0 }}>{label} · {lightboxIdx + 1} / {len}</p>
                            </div>
                        </div>
                    );
                })()}

                {/* How it works */}
                <section id="how-it-works" className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 border-x md:divide-x border-[#edf9f8] divide-[#edf9f8] max-w-7xl mx-auto">
                        <div>
                            <div className="p-4 pt-16 md:p-16 flex flex-col items-start md:sticky md:top-26">
                                <AnimatedContent>
                                    <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">How it works</h2>
                                    <p className="text-zinc-500 text-base/7 mt-3 max-w-xs">Simple sites. Straightforward process.</p>
                                </AnimatedContent>
                                <AnimatedContent className="p-4 md:p-6 bg-purple-500 w-full rounded-xl mt-12">
                                    <p className="text-lg text-white">
                                        If it&apos;s been a while since your site got any love, that&apos;s usually a sign it&apos;s ready.
                                    </p>
                                    <a
                                        href="#pricing"
                                        className="bg-white hover:bg-gray-100 transition-colors px-5 py-2 rounded-full mt-6 flex items-center gap-1 text-sm font-medium w-max"
                                    >
                                        See pricing
                                        <ArrowUpRightIcon size={16} />
                                    </a>
                                </AnimatedContent>
                            </div>
                        </div>
                        <div className="p-4 pt-16 md:p-16 space-y-6">
                            {steps.map((step, i) => (
                                <AnimatedContent key={i} className={`${step.cardBg} backdrop-blur-md border border-white/60 shadow-sm flex flex-col items-start p-6 rounded-xl w-full md:sticky md:top-26`}>
                                    <div className={`${step.iconBg} p-2 text-white rounded-full w-fit`}>
                                        <step.icon size={18} />
                                    </div>
                                    <p className="text-base font-medium mt-4">
                                        <span className="text-gray-400 mr-2">{String(i + 1).padStart(2, "0")}</span>
                                        {step.title}
                                    </p>
                                    <p className="text-sm text-gray-600 mt-2">{step.description}</p>
                                </AnimatedContent>
                            ))}
                        </div>
                    </div>
                </section>

                {/* AI update tool */}
                <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                    <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                        <div className="p-8 md:p-16">
                            <AnimatedContent className="text-center mb-12">
                                <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">After migration</p>
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">Update anything. Just say what you want.</h2>
                                <p className="text-zinc-500 text-base/7 mt-3 max-w-lg mx-auto">Your migrated site comes with an AI that handles updates for you. No developer, no platform editor, no waiting. You describe the change, it makes it.</p>
                            </AnimatedContent>
                            <AnimatedContent className="max-w-4xl mx-auto mb-4 rounded-xl border border-[#edf9f8] bg-[#f9fafb] p-6 flex items-center justify-center">
                                    <MiniWebsiteDiagram />
                                </AnimatedContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                                {[
                                    {
                                        prompt: "The 'Contact us' button isn't getting clicks. Change it to something more specific to what they'll get",
                                        result: "Button text changed from 'Contact us' to 'Get a free quote' in the hero and nav",
                                    },
                                    {
                                        prompt: "Add a new section after the services section showing our top 3 most recent projects with photos",
                                        result: "New 'Recent Projects' section added below Services with a 3-column photo grid",
                                    },
                                    {
                                        prompt: "We just added a new service — commercial cleaning. Add it to the services section with the same style as the others",
                                        result: "'Commercial Cleaning' added to Services section matching existing card layout and styling",
                                    },
                                ].map((ex, i) => (
                                    <AnimatedContent key={i} delay={i * 0.1} className="flex flex-col rounded-xl border border-[#edf9f8] bg-white overflow-hidden shadow-sm">
                                        {/* Header */}
                                        <div className="flex items-center gap-2.5 px-4 py-3 border-b border-[#edf9f8] bg-[#f9fafb]">
                                            <div className="w-6 h-6 rounded-md bg-[#e8e8e8] shrink-0" />
                                            <div>
                                                <div className="w-20 h-2 bg-[#ddd] rounded-full mb-1" />
                                                <div className="w-14 h-1.5 bg-[#eee] rounded-full" />
                                            </div>
                                        </div>
                                        {/* You say */}
                                        <div className="px-4 pt-3 pb-2 flex flex-col items-end">
                                            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2 self-start">You say</p>
                                            <div className="bg-[#edf9f8] rounded-2xl rounded-br-none px-3 py-2.5 max-w-[90%]">
                                                <p className="text-sm text-zinc-700 leading-6">{ex.prompt}</p>
                                            </div>
                                        </div>
                                        <div className="h-px bg-[#edf9f8] mx-4" />
                                        {/* Result */}
                                        <div className="px-4 py-3 flex-1">
                                            <div className="flex items-center gap-1.5 mb-1.5">
                                                <div className="p-0.5 rounded-full bg-teal-500 shrink-0">
                                                    <CheckIcon size={10} className="text-white" strokeWidth={3} />
                                                </div>
                                                <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Result</p>
                                            </div>
                                            <p className="text-sm text-zinc-600 leading-6">{ex.result}</p>
                                        </div>
                                        {/* Input bar */}
                                        <div className="flex items-center gap-2 px-3 py-2.5 border-t border-[#edf9f8] bg-[#f9fafb]">
                                            <div className="flex-1 bg-white border border-[#e8e8e8] rounded-lg px-3 py-1.5 text-xs text-zinc-500 truncate">
                                                &ldquo;{ex.prompt}&rdquo;
                                            </div>
                                            <div className="w-7 h-7 rounded-lg bg-zinc-300 flex items-center justify-center shrink-0">
                                                <svg width="12" height="12" viewBox="0 0 10 10" fill="none"><path d="M2 5h6M6 3l2 2-2 2" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                            </div>
                                        </div>
                                    </AnimatedContent>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section id="pricing" className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                    <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                        <div className="p-8 md:p-16">
                            <AnimatedContent className="text-center mb-12">
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">Simple pricing</h2>
                                <p className="text-zinc-500 text-base/7 mt-3 max-w-md mx-auto">Pay once to get off the platform — or let us host it too.</p>
                            </AnimatedContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                                {/* One-time */}
                                <AnimatedContent className="flex flex-col border border-[#edf9f8] rounded-xl p-8 bg-[#f7fcfb]">
                                    <p className="text-sm font-medium text-zinc-500 uppercase tracking-wide">The Fix</p>
                                    <div className="mt-4 flex items-end gap-1">
                                        <span className="font-urbanist font-bold text-4xl text-gray-800">$150</span>
                                        <span className="text-zinc-400 text-sm mb-1.5">one-time</span>
                                    </div>
                                    <p className="text-zinc-500 text-sm/6 mt-3">We migrate your site to custom code and hand you the files. You point your domain — we walk you through it. Takes about 10 minutes.</p>
                                    <ul className="mt-6 flex flex-col gap-3 flex-1">
                                        {["Same-day delivery", "Hosted on a fast, reliable server", "Clear path to booking", "Mobile-friendly"].map((f, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                                                <div className="p-0.5 rounded-full bg-purple-500 shrink-0">
                                                    <CheckIcon size={10} className="text-white" strokeWidth={3} />
                                                </div>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => openModal("Fix Your Page — The Fix ($150)")}
                                        className="flex items-center justify-center gap-1.5 mt-8 py-2.5 px-6 border border-[#edf9f8] bg-white text-zinc-700 rounded-full hover:bg-gray-50 transition-colors text-sm"
                                    >
                                        Get started
                                        <ArrowUpRightIcon size={14} />
                                    </button>
                                </AnimatedContent>

                                {/* Hosted */}
                                <AnimatedContent className="flex flex-col border border-purple-200 rounded-xl p-8 bg-purple-500 text-white">
                                    <p className="text-sm font-medium text-purple-200 uppercase tracking-wide">The Fix + Host</p>
                                    <div className="mt-4 flex items-end gap-1">
                                        <span className="font-urbanist font-bold text-4xl">$150</span>
                                        <span className="text-purple-200 text-sm mb-1.5">+ $20/mo</span>
                                    </div>
                                    <p className="text-purple-100 text-sm/6 mt-3">We migrate it, host it, and keep it running under your domain. Need a change? Just message us — no tickets, no platform editor.</p>
                                    <ul className="mt-6 flex flex-col gap-3 flex-1">
                                        {["Everything in The Fix", "Hosted under your domain", "Small updates included", "We handle the tech, you run your business"].map((f, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-purple-100">
                                                <div className="p-0.5 rounded-full bg-white/30 shrink-0">
                                                    <CheckIcon size={10} className="text-white" strokeWidth={3} />
                                                </div>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => openModal("Fix Your Page — The Fix + Host ($150 + $20/mo)")}
                                        className="flex items-center justify-center gap-1.5 mt-8 py-2.5 px-6 bg-white text-purple-600 rounded-full hover:bg-purple-50 transition-colors text-sm font-medium"
                                    >
                                        Get started
                                        <ArrowUpRightIcon size={14} />
                                    </button>
                                </AnimatedContent>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who's building it */}
                <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                    <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                        <div className="p-8 md:p-16">
                            <AnimatedContent className="text-center mb-16">
                                <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">You&apos;re working with us directly</h2>
                                <p className="text-zinc-500 text-base/7 mt-3 max-w-md mx-auto">No account managers. No handoffs. We build your page and we&apos;re the ones you text when something needs updating.</p>
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
                                    {
                                        name: "Stacy",
                                        image: "/assets/stacy.jpg",
                                        role: "Head of Marketing & Customer Success",
                                        linkedin: "https://www.linkedin.com/in/stacydonnaj/",
                                        bio: "Stacy began her career in Customer Success and quickly rose through the ranks to become CS Manager, then expanded her scope to social media and marketing. Her talent and work ethic propelled her to Head of Marketing at a Silicon Valley startup, where she drove growth and brand presence across multiple channels.",
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
                                    Still fighting your platform for every small change?
                                </h2>
                                <p className="text-zinc-500 text-base/7 mt-4 max-w-md mx-auto">
                                    One rebuild. The code is yours. No platform lock-in.
                                </p>
                                <div className="flex items-center justify-center mt-8">
                                    <button
                                        onClick={() => openModal("Fix Your Page — Final CTA")}
                                        className="flex items-center justify-center gap-1.5 py-3 px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full"
                                    >
                                        Migrate my site
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
        </>
    );
}
