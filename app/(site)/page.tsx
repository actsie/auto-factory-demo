"use client";
import AnimatedContent from "@/components/animated-content";
import { ArrowUpRightIcon, HomeIcon, ThermometerIcon, HammerIcon, UtensilsIcon, Building2Icon, CupSodaIcon, MonitorIcon } from "lucide-react";
import MiniWebsiteDiagram from "@/components/mini-website-diagram";
import { useAiModal } from "@/contexts/ai-modal-context";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import OurTeamSection from "@/sections/our-team";

const verticals = [
    { industry: "Website replacement", href: "/fix-your-page", emoji: "🖥️", cta: "Site rebuild you own forever" },
    { industry: "Property managers", href: "/review-reply", emoji: "🏢", cta: "Automated review replies" },
    { industry: "HVAC contractors", href: "/hvac", emoji: "🔧", cta: "Estimate & job follow-ups" },
    { industry: "Home service contractors", href: "/contractors", emoji: "🏠", cta: "24/7 lead capture" },
    { industry: "Real estate agents", href: "/real-estate", emoji: "🏡", cta: "Follow-up system for agents" },
    { industry: "Restaurants", href: "/restaurant", emoji: "🍽️", cta: "AI inquiry handling" },
    { industry: "Beverage shops", href: "/beverage", emoji: "☕", cta: "Inventory management" },
];

export default function HomePage() {
    const { openAiModal } = useAiModal();

    const g1Ref = useRef<HTMLDivElement>(null);
    const g2Ref = useRef<HTMLDivElement>(null);
    const g3Ref = useRef<HTMLDivElement>(null);
    const g4Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (g1Ref.current) {
            const r1 = g1Ref.current.querySelector(".od-g1-ring-1");
            const r2 = g1Ref.current.querySelector(".od-g1-ring-2");
            const r3 = g1Ref.current.querySelector(".od-g1-ring-3");
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });
            tl.set([r1,r2,r3],{xPercent:-50,yPercent:-50,left:"50%",top:"50%",rotateY:117})
              .set(r2,{x:-80},0).set(r1,{x:80},0).set(r3,{x:0},0)
              .to([r2,r1],{x:0,duration:0.6,ease:"expo.in"},0.2)
              .to([r1,r2,r3],{rotateY:0,duration:0.5,ease:"expo.in"},0.5)
              .to([r1,r2,r3],{rotateY:117,duration:0.5,ease:"expo"},1)
              .to(r2,{x:-80,duration:1,ease:"elastic.out(1,0.25)"},1.3)
              .to(r1,{x:80,duration:1,ease:"elastic.out(1,0.25)"},1.3);
        }
        if (g2Ref.current) {
            const wrap = g2Ref.current.querySelector(".od-g2-inner-wrap");
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });
            tl.to(wrap,{rotate:360,duration:2.5,ease:"expo.inOut"},0.3);
        }
        if (g3Ref.current) {
            const s2 = g3Ref.current.querySelector(".od-g3-shape-2");
            const s3 = g3Ref.current.querySelector(".od-g3-shape-3");
            gsap.set(s2,{scale:1});gsap.set(s3,{rotation:0});
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });
            tl.to(s3,{rotation:45,duration:0.9,ease:"power2.inOut"},0.3)
              .to(s2,{scale:0.75,duration:1,ease:"power2.inOut"},0.4)
              .to(s3,{rotation:0,duration:1,ease:"elastic.out(1,0.25)"},1.4)
              .to(s2,{scale:1,duration:1,ease:"elastic.out(1,0.25)"},1.4);
        }
        if (g4Ref.current) {
            const outer = g4Ref.current.querySelector(".od-g4-outer");
            const left  = g4Ref.current.querySelector(".od-g4-left");
            const center= g4Ref.current.querySelector(".od-g4-center");
            const right = g4Ref.current.querySelector(".od-g4-right");
            const size  = 180;
            gsap.set([outer,left,center,right],{xPercent:-50,yPercent:-50,left:"50%",top:"50%",width:size,height:size});
            gsap.set(left,{rotateY:60});gsap.set(center,{rotateY:75});gsap.set(right,{rotateY:40});
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });
            tl.to([center,left,right],{rotateY:"+=360",duration:3,ease:"expo.inOut",stagger:0.3});
        }
    }, []);

    return (
        <main>
            {/* Hero */}
            <section className="bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-screen text-center">
                    <AnimatedContent distance={30} delay={0.1}>
                        <h1 className="font-urbanist font-bold text-5xl/14 md:text-6xl/18 text-gray-800 max-w-3xl">
                            Automate the work that costs you revenue.
                        </h1>
                    </AnimatedContent>
                    <AnimatedContent distance={30} delay={0.2}>
                        <p className="text-zinc-500 text-base/7 mt-5 max-w-lg">
                            Fountain of Scale builds and runs done-for-you automation systems for small businesses: follow-ups, lead capture, review replies, appointment reminders, and more.
                        </p>
                    </AnimatedContent>
                    <AnimatedContent className="flex flex-col md:flex-row items-center gap-4 mt-8 w-full md:w-auto" delay={0.3}>
                        <button
                            onClick={() => openAiModal("Homepage — Hero")}
                            className="flex items-center justify-center gap-1.5 py-3 md:py-2.5 w-full md:w-auto px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full"
                        >
                            Get started for free
                            <ArrowUpRightIcon size={16} />
                        </button>
                        <a
                            href="#who-we-help"
                            className="py-3 md:py-2.5 w-full md:w-auto px-8 bg-white/50 text-gray-600 font-medium text-center border border-white rounded-full"
                        >
                            Explore
                        </a>
                    </AnimatedContent>
                </div>
            </section>

            {/* What we do */}
            <section className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="relative p-8 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div ref={g1Ref} className="pointer-events-none absolute -left-16 top-1/2 -translate-y-1/2 w-[260px] h-[260px] opacity-[0.18]" style={{zIndex:0,overflow:"hidden"}}>
                            <div className="od-g1-ring od-g1-ring-1" style={{position:"absolute",width:200,height:200,borderRadius:"50%",border:"3px dashed #5bbfba"}} />
                            <div className="od-g1-ring od-g1-ring-2" style={{position:"absolute",width:200,height:200,borderRadius:"50%",border:"3px solid #5bbfba"}} />
                            <div className="od-g1-ring od-g1-ring-3" style={{position:"absolute",width:200,height:200,borderRadius:"50%",border:"3px solid #7c3aed"}} />
                        </div>
                        {[
                            { title: "We build it", body: "No templates, no platform to log into. We build the system from scratch, tailored to how your business actually works." },
                            { title: "We run it", body: "Leads get responses. Follow-ups go out. Reviews get replied to. It runs in the background while you do the actual work." },
                            { title: "We maintain it", body: "If something breaks or needs adjusting, we fix it." },
                        ].map((item, i) => (
                            <AnimatedContent key={i} delay={i * 0.1} className="border border-[#edf9f8] rounded-xl p-6 bg-[#f7fcfb]">
                                <p className="font-urbanist font-semibold text-gray-800 text-lg mb-2">{item.title}</p>
                                <p className="text-zinc-500 text-sm/6">{item.body}</p>
                            </AnimatedContent>
                        ))}
                    </div>
                </div>
            </section>

            {/* Verticals — bento grid */}
            <section id="who-we-help" className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="relative p-8 md:p-16">
                        <div ref={g3Ref} className="pointer-events-none absolute -right-8 -top-8 w-[240px] h-[240px] opacity-[0.18]" style={{zIndex:0,overflow:"hidden"}}>
                            <div className="od-g3-shape-1" style={{position:"absolute",width:150,height:150,border:"1.5px solid #5bbfba",left:35,top:50}} />
                            <div className="od-g3-shape-2" style={{position:"absolute",width:150,height:150,borderRadius:"50%",border:"1.5px solid #7c3aed",left:35,top:50}} />
                            <div className="od-g3-shape-3" style={{position:"absolute",width:150,height:150,borderRadius:"50%",border:"2px dashed #5bbfba",left:100,top:10}} />
                        </div>
                        <AnimatedContent className="mb-10 relative" style={{zIndex:1}}>
                            <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">What we build</p>
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                Solutions
                            </h2>
                            <p className="text-zinc-500 text-base/7 mt-3 max-w-md">
                                Pick yours to see exactly what we do.
                            </p>
                        </AnimatedContent>

                        <style>{`
                            @property --angle {
                                syntax: '<angle>';
                                initial-value: 0deg;
                                inherits: false;
                            }
                            @keyframes border-spin {
                                to { --angle: 360deg; }
                            }
                            .bento-card {
                                border-radius: 1rem;
                                padding: 1.5px;
                                background: conic-gradient(from var(--angle), transparent 70%, #d4d4d4 83%, #f0f0f0 88%, transparent 94%);
                                animation: border-spin 6s linear infinite;
                                height: 100%;
                            }
                            .bento-card-inner {
                                border: none !important;
                                border-radius: calc(1rem - 1.5px) !important;
                                height: 100%;
                                position: relative;
                            }
                            .bento-card:hover { animation-duration: 3s !important; }
                            .bento-purple:hover  { background: conic-gradient(from var(--angle), transparent 65%, #a78bfa 79%, #ddd6fe 86%, transparent 93%); }
                            .bento-teal:hover    { background: conic-gradient(from var(--angle), transparent 65%, #2dd4bf 79%, #99f6e4 86%, transparent 93%); }
                            .bento-orange:hover  { background: conic-gradient(from var(--angle), transparent 65%, #fb923c 79%, #fed7aa 86%, transparent 93%); }
                            .bento-amber:hover   { background: conic-gradient(from var(--angle), transparent 65%, #fbbf24 79%, #fde68a 86%, transparent 93%); }
                            .bento-blue:hover    { background: conic-gradient(from var(--angle), transparent 65%, #60a5fa 79%, #bfdbfe 86%, transparent 93%); }
                            .bento-yellow:hover  { background: conic-gradient(from var(--angle), transparent 65%, #facc15 79%, #fef08a 86%, transparent 93%); }
                            .bento-green:hover   { background: conic-gradient(from var(--angle), transparent 65%, #4ade80 79%, #bbf7d0 86%, transparent 93%); }
                            @keyframes icon-spring {
                                0%   { transform: scale(1); }
                                30%  { transform: scale(1.35); }
                                55%  { transform: scale(0.88); }
                                75%  { transform: scale(1.12); }
                                90%  { transform: scale(0.97); }
                                100% { transform: scale(1); }
                            }
                            .bento-card-inner:hover .bento-icon {
                                animation: icon-spring 0.45s ease forwards;
                            }
                        `}</style>

                        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] gap-3">
                            <AnimatedContent delay={0} className="col-span-2 row-span-2">
                                <div className="bento-card bento-purple" style={{ animationDuration: "14s" }}>
                                    <Link href="/fix-your-page" className="bento-card-inner group flex flex-col gap-3 p-6 bg-[#f9fafb] hover:bg-purple-50 transition-all">
                                        <div className="flex items-start justify-between">
                                            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center"><MonitorIcon size={20} className="text-purple-500 bento-icon" /></div>
                                            <ArrowUpRightIcon size={16} className="text-zinc-300 group-hover:text-purple-500 transition-colors" />
                                        </div>
                                        <MiniWebsiteDiagram />
                                        <div>
                                            <p className="font-urbanist font-bold text-gray-800 text-xl">Website replacement</p>
                                            <p className="text-zinc-500 text-sm/6 mt-1">Your site rebuilt from scratch. Same design, same URLs — code you own, no platform lock-in.</p>
                                        </div>
                                    </Link>
                                </div>
                            </AnimatedContent>
                            <AnimatedContent delay={0.05} className="col-span-2 row-span-1">
                                <div className="bento-card bento-teal" style={{ animationDuration: "20s", animationDelay: "-7s" }}>
                                    <Link href="/review-reply" className="bento-card-inner group flex items-center gap-4 px-6 py-5 bg-[#f9fafb] hover:bg-teal-50 transition-all">
                                        <ArrowUpRightIcon size={16} className="absolute top-4 right-4 text-zinc-300 group-hover:text-teal-600 transition-colors" />
                                        <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center shrink-0"><Building2Icon size={20} className="text-teal-600 bento-icon" /></div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-urbanist font-semibold text-gray-800">Property managers</p>
                                            <p className="text-zinc-500 text-xs mt-0.5 leading-relaxed">Automated review replies that keep your rating up and renewals coming.</p>
                                        </div>
                                    </Link>
                                </div>
                            </AnimatedContent>
                            <AnimatedContent delay={0.1} className="col-span-1 row-span-1">
                                <div className="bento-card bento-orange" style={{ animationDuration: "17s", animationDelay: "-4s" }}>
                                    <Link href="/hvac" className="bento-card-inner group flex flex-col justify-between p-3 md:p-5 bg-[#f9fafb] hover:bg-orange-50 transition-all">
                                        <div className="flex items-start justify-between">
                                            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center"><ThermometerIcon size={20} className="text-orange-500 bento-icon" /></div>
                                            <ArrowUpRightIcon size={16} className="text-zinc-300 group-hover:text-orange-500 transition-colors" />
                                        </div>
                                        <div>
                                            <p className="font-urbanist font-semibold text-gray-800 text-sm">HVAC contractors</p>
                                            <p className="text-zinc-500 text-xs mt-0.5 leading-relaxed">Every missed call followed up before they call someone else.</p>
                                        </div>
                                    </Link>
                                </div>
                            </AnimatedContent>
                            <AnimatedContent delay={0.15} className="col-span-1 row-span-1">
                                <div className="bento-card bento-amber" style={{ animationDuration: "23s", animationDelay: "-12s" }}>
                                    <Link href="/contractors" className="bento-card-inner group flex flex-col justify-between p-3 md:p-5 bg-[#f9fafb] hover:bg-amber-50 transition-all">
                                        <div className="flex items-start justify-between">
                                            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center"><HammerIcon size={20} className="text-amber-600 bento-icon" /></div>
                                            <ArrowUpRightIcon size={16} className="text-zinc-300 group-hover:text-amber-600 transition-colors" />
                                        </div>
                                        <div>
                                            <p className="font-urbanist font-semibold text-gray-800 text-sm">Home service</p>
                                            <p className="text-zinc-500 text-xs mt-0.5 leading-relaxed">24/7 lead capture so no job goes to a competitor.</p>
                                        </div>
                                    </Link>
                                </div>
                            </AnimatedContent>
                            <AnimatedContent delay={0.2} className="col-span-2 row-span-1">
                                <div className="bento-card bento-blue" style={{ animationDuration: "18s", animationDelay: "-9s" }}>
                                    <Link href="/real-estate" className="bento-card-inner group flex items-center gap-4 px-6 py-5 bg-[#f9fafb] hover:bg-blue-50 transition-all">
                                        <ArrowUpRightIcon size={16} className="absolute top-4 right-4 text-zinc-300 group-hover:text-blue-500 transition-colors" />
                                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0"><HomeIcon size={20} className="text-blue-500 bento-icon" /></div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-urbanist font-semibold text-gray-800">Real estate agents</p>
                                            <p className="text-zinc-500 text-xs mt-0.5 leading-relaxed">Every inquiry answered, every viewing confirmed — without lifting a finger.</p>
                                        </div>
                                    </Link>
                                </div>
                            </AnimatedContent>
                            <AnimatedContent delay={0.25} className="col-span-1 row-span-1">
                                <div className="bento-card bento-yellow" style={{ animationDuration: "25s", animationDelay: "-3s" }}>
                                    <Link href="/restaurant" className="bento-card-inner group flex flex-col justify-between p-3 md:p-5 bg-[#f9fafb] hover:bg-yellow-50 transition-all">
                                        <div className="flex items-start justify-between">
                                            <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center"><UtensilsIcon size={20} className="text-yellow-600 bento-icon" /></div>
                                            <ArrowUpRightIcon size={16} className="text-zinc-300 group-hover:text-yellow-600 transition-colors" />
                                        </div>
                                        <div>
                                            <p className="font-urbanist font-semibold text-gray-800 text-sm">Restaurants</p>
                                            <p className="text-zinc-500 text-xs mt-0.5 leading-relaxed">Inquiries handled automatically while you run the floor.</p>
                                        </div>
                                    </Link>
                                </div>
                            </AnimatedContent>
                            <AnimatedContent delay={0.3} className="col-span-1 row-span-1">
                                <div className="bento-card bento-green" style={{ animationDuration: "21s", animationDelay: "-16s" }}>
                                    <Link href="/beverage" className="bento-card-inner group flex flex-col justify-between p-3 md:p-5 bg-[#f9fafb] hover:bg-green-50 transition-all">
                                        <div className="flex items-start justify-between">
                                            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center"><CupSodaIcon size={20} className="text-green-600 bento-icon" /></div>
                                            <ArrowUpRightIcon size={16} className="text-zinc-300 group-hover:text-green-600 transition-colors" />
                                        </div>
                                        <div>
                                            <p className="font-urbanist font-semibold text-gray-800 text-sm">Beverage shops</p>
                                            <p className="text-zinc-500 text-xs mt-0.5 leading-relaxed">Inventory tracked automatically. No spreadsheets, no surprises.</p>
                                        </div>
                                    </Link>
                                </div>
                            </AnimatedContent>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why us */}
            <section id="how-it-works" className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8]">
                    <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <AnimatedContent className="relative">
                            <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">Why Fountain of Scale</p>
                            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-800">
                                Not a platform. Not a chatbot.
                            </h2>
                            <div className="mt-6 flex flex-col gap-4">
                                <div className="border-l-2 border-purple-200 pl-4">
                                    <p className="text-zinc-500 text-base/7">Most tools hand you something to set up yourself. We treat your business like a client — we design the system, run it, and keep it running.</p>
                                </div>
                                <div className="border-l-2 border-purple-200 pl-4">
                                    <p className="text-zinc-500 text-base/7">Free to start. We ask for feedback if it works. That&apos;s it.</p>
                                </div>
                            </div>
                            <p className="text-zinc-400 text-xs mt-3">*Limited spots for first few partners</p>
                            <button
                                onClick={() => openAiModal("Homepage — Why us CTA")}
                                className="relative z-10 mt-8 flex items-center gap-1.5 py-2.5 px-6 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full text-sm w-max"
                            >
                                Get started — it&apos;s free <ArrowUpRightIcon size={14} />
                            </button>
                            <div ref={g2Ref} className="pointer-events-none absolute -bottom-16 -right-8 w-[200px] h-[200px] opacity-[0.18]" style={{zIndex:0,overflow:"hidden"}}>
                                <div style={{position:"absolute",top:"50%",left:"50%",width:160,height:160,borderRadius:"50%",border:"2px solid #5bbfba",transform:"translate(-50%,-50%)"}} />
                                <div className="od-g2-inner-wrap" style={{position:"absolute",width:160,height:160,top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
                                    <div style={{position:"absolute",width:100,height:100,top:"50%",left:0,transform:"translateY(-50%)",borderRadius:"50%",border:"2px dashed #5bbfba"}} />
                                    <div style={{position:"absolute",width:100,height:100,top:"50%",right:0,transform:"translateY(-50%)",borderRadius:"50%",border:"2px solid #7c3aed"}} />
                                </div>
                            </div>
                        </AnimatedContent>
                        <AnimatedContent delay={0.1} className="flex flex-col gap-4">
                            {[
                                { label: "Free to start", desc: "No credit card, no contract. We build it first." },
                                { label: "Built for your business", desc: "Everything is custom — your tone, your channels, your workflow." },
                                { label: "We handle updates", desc: "When things change, you tell us. We update it." },
                                { label: "You get a summary", desc: "Weekly or daily — you see exactly what the system did." },
                            ].map((item, i) => (
                                <div key={i} className="border border-[#edf9f8] rounded-xl p-5 bg-[#f7fcfb]">
                                    <p className="font-medium text-gray-800 text-sm">{item.label}</p>
                                    <p className="text-zinc-500 text-sm/6 mt-0.5">{item.desc}</p>
                                </div>
                            ))}
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            <div className="relative overflow-hidden">
                <div ref={g4Ref} className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 w-[200px] h-[200px] opacity-[0.18]" style={{zIndex:0,overflow:"hidden"}}>
                    <div className="od-g4-outer" style={{position:"absolute",width:180,height:180,borderRadius:"50%",border:"1.5px solid #5bbfba"}} />
                    <div className="od-g4-left"   style={{position:"absolute",width:180,height:180,borderRadius:"50%",border:"3px dashed #d1d5db"}} />
                    <div className="od-g4-center" style={{position:"absolute",width:180,height:180,borderRadius:"50%",border:"3px solid #7c3aed"}} />
                    <div className="od-g4-right"  style={{position:"absolute",width:180,height:180,borderRadius:"50%",border:"3px dashed #d1d5db"}} />
                </div>
                <OurTeamSection />
            </div>

            {/* Final CTA */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-24">
                <div className="max-w-7xl mx-auto">
                    <AnimatedContent className="text-center flex flex-col items-center">
                        <h2 className="font-urbanist font-bold text-4xl md:text-5xl text-gray-800 max-w-2xl text-balance">
                            Ready to stop doing this manually?
                        </h2>
                        <p className="text-zinc-500 text-base/7 mt-4 max-w-md">
                            Free to start. We build it, you approve it, it runs.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 mt-8">
                            <button
                                onClick={() => openAiModal("Homepage — Final CTA")}
                                className="flex items-center justify-center gap-1.5 py-3 px-8 border border-purple-200 bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full"
                            >
                                Get started for free <ArrowUpRightIcon size={16} />
                            </button>
                            <a href="#who-we-help" className="flex items-center justify-center py-3 px-8 bg-white border border-[#edf9f8] text-gray-600 rounded-full">
                                Browse industries
                            </a>
                        </div>
                    </AnimatedContent>
                </div>
            </section>
        </main>
    );
}
