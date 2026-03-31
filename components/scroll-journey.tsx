"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "next/image";
import { ChevronUpIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const beats = [
    { text: "Your reviews are working against you.", col: 1, dark: true },
    { text: "93% of renters read Google reviews before deciding.", col: 3, dark: true },
    { text: "Properties that respond get chosen 88% of the time.", col: 1, dark: false },
    { text: "Properties that don't? Just 47%.", col: 3, dark: false },
    { text: "Every unanswered review is a missed tenant.", col: 1, dark: false },
    { text: "The system checks for new reviews automatically — no manual work needed.", col: 3, dark: false },
    { text: "Positive reviews get a reply. Concerning ones get flagged and de-escalated before they cost you a tenant.", col: 1, dark: false },
    { text: "Free to start. No contracts.", col: 3, dark: false },
];

export default function ScrollJourney() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const indicatorRef = useRef<HTMLDivElement>(null);
    const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const logo = logoRef.current;
        if (!wrapper || !logo) return;

        const rx = window.innerWidth < 1000 ? window.innerWidth / 1200 : 1;
        const ry = window.innerHeight < 700 ? window.innerHeight / 1200 : 1;

        const path = [
            { x: 800, y: 200 }, { x: 900, y: 20 },  { x: 1100, y: 100 },
            { x: 1000, y: 200 }, { x: 900, y: 20 },  { x: 10,   y: 500 },
            { x: 100, y: 300 },  { x: 500, y: 400 }, { x: 1000, y: 200 },
            { x: 1100, y: 300 }, { x: 400, y: 400 }, { x: 200,  y: 250 },
            { x: 100, y: 300 },  { x: 500, y: 450 }, { x: 1100, y: 500 },
        ].map(({ x, y }) => ({ x: x * rx, y: y * ry }));

        // logo moves along path, scrubbed by scroll
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5,
            },
        });

        tl.to(logo, {
            motionPath: {
                path,
                align: "self",
                alignOrigin: [0.5, 0.5],
                autoRotate: false,
            },
            duration: 10,
            immediateRender: true,
        });

        if (indicatorRef.current) {
            tl.to(indicatorRef.current, { opacity: 0 }, 0);
        }

        // fade each beat text in and out
        textRefs.current.forEach((p) => {
            if (!p) return;
            gsap.set(p, { opacity: 0, y: 20 });

            const section = p.closest(".journey-section");
            if (!section) return;

            ScrollTrigger.create({
                trigger: section,
                start: "top 60%",
                end: "bottom 40%",
                onEnter: () => gsap.to(p, { opacity: 1, y: 0, duration: 0.8 }),
                onLeave: () => gsap.to(p, { opacity: 0, y: -20, duration: 0.6 }),
                onEnterBack: () => gsap.to(p, { opacity: 1, y: 0, duration: 0.8 }),
                onLeaveBack: () => gsap.to(p, { opacity: 0, y: 20, duration: 0.6 }),
            });
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="relative"
            style={{
                background: "linear-gradient(to bottom, #ffffff, #f3eeff, #6b21a8, #3b0764, #000000)",
            }}
        >
            {/* fixed-within-wrapper logo */}
            <div
                style={{
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    pointerEvents: "none", // re-enabled on button itself
                    overflow: "hidden",
                    marginBottom: "-100vh",
                    zIndex: 2,
                    maskImage: "linear-gradient(180deg, rgba(0,0,0,0.9) 60%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,0.9) 60%, transparent 100%)",
                }}
            >
                <div ref={logoRef} style={{ position: "absolute", width: 72, height: 72 }}>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        aria-label="Scroll to top"
                        className="relative w-full h-full cursor-pointer"
                        style={{ pointerEvents: "all" }}
                    >
                        <Image
                            src="/assets/auto-factory.png"
                            alt=""
                            fill
                            style={{ objectFit: "contain" }}
                        />
                        <ChevronUpIcon size={16} strokeWidth={3} className="absolute inset-0 m-auto text-white" />
                    </button>
                </div>
            </div>

            {/* scroll indicator */}
            <div
                ref={indicatorRef}
                className="sticky top-[90vh] z-10 flex flex-col items-center text-white/60 text-sm pb-4"
                style={{ marginBottom: "-100vh" }}
            >
                <span>Scroll</span>
                <span className="animate-bounce">↓</span>
            </div>

            {/* story beats */}
            <div style={{ paddingTop: "100vh", paddingBottom: "30vh" }}>
                {beats.map((beat, i) => (
                    <div
                        key={i}
                        className="journey-section"
                        style={{ height: "100vh", width: "100%", position: "relative" }}
                    >
                        <div
                            className="sticky top-0 h-screen grid items-center px-8 md:px-16"
                            style={{
                                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                            }}
                        >
                            <p
                                ref={(el) => { textRefs.current[i] = el; }}
                                className={`font-urbanist font-semibold text-2xl md:text-4xl text-balance ${beat.dark ? "text-gray-800" : "text-white"}`}
                                style={{ gridColumn: beat.col }}
                            >
                                {beat.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
