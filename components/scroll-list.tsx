"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
    "review replies.",
    "estimate follow-ups.",
    "seasonal reminders.",
    "renewal notifications.",
    "maintenance check-ins.",
    "social media replies.",
    "appointment confirmations.",
    "re-engagement messages.",
    "review requests.",
    "job check-ins.",
];

export default function ScrollList() {
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const list = listRef.current;
        if (!list) return;

        const els = gsap.utils.toArray<HTMLElement>(list.querySelectorAll("li"));
        if (!els.length) return;

        gsap.set(els, { opacity: (i) => (i !== 0 ? 0.15 : 1) });

        const dimmer = gsap.timeline()
            .to(els.slice(1), { opacity: 1, stagger: 0.5 })
            .to(els.slice(0, els.length - 1), { opacity: 0.15, stagger: 0.5 }, 0);

        const st = ScrollTrigger.create({
            trigger: els[0],
            endTrigger: els[els.length - 1],
            start: "center center",
            end: "center center",
            animation: dimmer,
            scrub: 0.2,
        });

        return () => { st.kill(); dimmer.kill(); };
    }, []);

    return (
        <>
            <style>{`
                .scroll-list-section {
                    --start: 200;
                    --end: 340;
                    --step: calc((var(--end) - var(--start)) / ${items.length - 1});
                }
                .scroll-list-section li {
                    color: oklch(70% 0.22 calc(var(--start) + (var(--step) * var(--i))));
                }
            `}</style>

            <section className="scroll-list-section border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8] px-8 md:px-16">
                    {/* heading */}
                    <p className="font-urbanist font-bold text-4xl md:text-5xl text-gray-800 pt-24 pb-12 text-center">
                        built for anyone.
                    </p>

                    {/* sticky label + scrolling list */}
                    <div
                        className="flex gap-8 md:gap-16 pb-[50vh]"
                    >
                        {/* sticky "automate" — stays at viewport center */}
                        <div
                            className="hidden sm:block shrink-0 sticky self-start"
                            style={{ top: 0, height: "100vh", display: "flex", alignItems: "center" }}
                        >
                            <p className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-300">
                                automate
                            </p>
                        </div>

                        {/* list — scrolls naturally, active item aligns with sticky label */}
                        <ul
                            ref={listRef}
                            className="flex flex-col list-none p-0 m-0"
                            style={{ ["--count" as string]: items.length }}
                        >
                            {items.map((item, i) => (
                                <li
                                    key={i}
                                    className="font-urbanist font-semibold text-3xl md:text-4xl py-5"
                                    style={{ ["--i" as string]: i }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
