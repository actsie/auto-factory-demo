"use client";
import { links } from "@/data/links";
import { ILink } from "@/types";
import { MenuIcon, XIcon, ChevronDownIcon, HomeIcon, ThermometerIcon, HammerIcon, UtensilsIcon, Building2Icon, CupSodaIcon, MonitorIcon, ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import AnimatedContent from "./animated-content";
import { useModal } from "@/contexts/modal-context";
import { useAiModal } from "@/contexts/ai-modal-context";
import { useIndieModal } from "@/contexts/indie-modal-context";

const AI_ROUTES = ["/", "/ai-automation", "/contractors", "/restaurant", "/beverage"];

const solutions = [
    { name: "Website replacement", href: "/fix-your-page", icon: MonitorIcon, color: "text-purple-500", bg: "bg-purple-50", hoverColor: "#f5f3ff", iconHex: "#a855f7", desc: "Fresh site, custom code, no lock-in" },
    { name: "Property managers", href: "/review-reply", icon: Building2Icon, color: "text-blue-500", bg: "bg-blue-50", hoverColor: "#eff6ff", iconHex: "#3b82f6", desc: "Automated review replies" },
    { name: "HVAC contractors", href: "/hvac", icon: ThermometerIcon, color: "text-teal-600", bg: "bg-teal-50", hoverColor: "#f0fdfa", iconHex: "#0d9488", desc: "Estimate & job follow-ups" },
    { name: "Home service contractors", href: "/contractors", icon: HammerIcon, color: "text-orange-500", bg: "bg-orange-50", hoverColor: "#fff7ed", iconHex: "#f97316", desc: "24/7 lead capture" },
    { name: "Real estate agents", href: "/real-estate", icon: HomeIcon, color: "text-purple-500", bg: "bg-purple-50", hoverColor: "#f5f3ff", iconHex: "#a855f7", desc: "Follow-up system for every inquiry" },
    { name: "Restaurants", href: "/restaurant", icon: UtensilsIcon, color: "text-amber-600", bg: "bg-amber-50", hoverColor: "#fffbeb", iconHex: "#d97706", desc: "AI inquiry handling" },
    { name: "Beverage shops", href: "/beverage", icon: CupSodaIcon, color: "text-yellow-600", bg: "bg-yellow-50", hoverColor: "#fefce8", iconHex: "#ca8a04", desc: "Inventory management" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [industriesOpen, setSolutionsOpen] = useState(false);
    const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const pathname = usePathname();
    const { openModal } = useModal();
    const { openAiModal } = useAiModal();
    const { openIndieModal } = useIndieModal();
    const isAiPage = AI_ROUTES.some(r => r === "/" ? pathname === "/" : pathname.startsWith(r));
    const isIndiePage = pathname.startsWith("/indie-hackers");
    const isMigratePage = pathname.startsWith("/fix-your-page");
    const handleBookCall = () => isIndiePage ? openIndieModal("Indie Hackers — Navbar") : openAiModal("Navbar");
    const navbarCtaLabel = isIndiePage ? "Apply for free setup" : isMigratePage ? "Migrate my site" : "Get started for free";

    function openSolutions() {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setSolutionsOpen(true);
    }
    function closeSolutions() {
        closeTimer.current = setTimeout(() => setSolutionsOpen(false), 120);
    }

    return (
        <>
            <AnimatedContent reverse className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md border-b border-[#edf9f8]">
                <nav className='w-full px-4 md:px-16 lg:px-24 xl:px-32 py-4 transition-all duration-300'>
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <Image src="/assets/auto-factory.png" alt="Logo" width={28} height={28} className="h-7 w-7" />
                            <span className="font-urbanist font-semibold text-gray-800 text-sm">Fountain of Scale</span>
                        </Link>

                        <div className="hidden nav-wide:flex gap-1 bg-white/50 backdrop-blur border border-[#edf9f8] rounded-full px-2 py-1.5">
                            {links.filter(l => !(isIndiePage && l.name === "Pricing")).map((link: ILink) => (
                                <Link key={link.name} href={link.href} className="py-1 px-4 rounded-full hover:bg-white/70 transition-colors text-gray-700 text-sm">
                                    {link.name}
                                </Link>
                            ))}
                            <div
                                className="relative"
                                onMouseEnter={openSolutions}
                                onMouseLeave={closeSolutions}
                            >
                                <button className="flex items-center gap-1 py-1 px-4 rounded-full hover:bg-white/70 transition-colors text-gray-700 text-sm">
                                    Solutions
                                    <ChevronDownIcon size={13} className={`transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`} />
                                </button>

                                {/* Slide-down panel */}
                                <div
                                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] bg-white border border-[#edf9f8] rounded-2xl shadow-xl shadow-black/5 overflow-hidden transition-all duration-200 origin-top ${industriesOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"}`}
                                    onMouseEnter={openSolutions}
                                    onMouseLeave={closeSolutions}
                                >
                                    <style>{`
                                        @keyframes icon-spring {
                                            0%   { transform: scale(1); }
                                            30%  { transform: scale(1.35); }
                                            55%  { transform: scale(0.88); }
                                            75%  { transform: scale(1.12); }
                                            90%  { transform: scale(0.97); }
                                            100% { transform: scale(1); }
                                        }
                                        .icon-spring { animation: icon-spring 0.45s ease forwards; }
                                    `}</style>
                                    <div className="p-4 grid grid-cols-2 gap-2">
                                        {solutions.map((item) => {
                                            const isHovered = hoveredIndustry === item.href;
                                            return (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() => setSolutionsOpen(false)}
                                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors"
                                                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = item.hoverColor; setHoveredIndustry(item.href); }}
                                                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = ""; setHoveredIndustry(null); }}
                                                >
                                                    <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>
                                                        <item.icon size={16} className={`${item.color} ${isHovered ? "icon-spring" : ""}`} />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="text-sm font-medium text-gray-800 leading-none">{item.name}</p>
                                                        <p className="text-xs text-zinc-400 mt-0.5">{item.desc}</p>
                                                    </div>
                                                    <ArrowUpRightIcon
                                                        size={13}
                                                        className="ml-auto shrink-0 transition-colors"
                                                        style={{ color: isHovered ? item.iconHex : "#d1d5db" }}
                                                    />
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="nav-wide:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <MenuIcon className="size-6.5" />
                        </button>

                        {!pathname.startsWith("/review-reply") && (
                            <button onClick={handleBookCall} className="hidden nav-wide:inline-block py-2.5 px-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] bg-purple-500 text-white rounded-full text-sm">
                                {navbarCtaLabel}
                            </button>
                        )}
                    </div>
                </nav>
            </AnimatedContent>

            {/* Mobile menu */}
            <div className={`fixed top-0 right-0 z-60 w-full bg-white shadow-xl shadow-black/5 transition-all duration-300 ease-in-out ${isMenuOpen ? "h-auto overflow-hidden" : "h-0 overflow-hidden"}`}>
                <div className="flex items-center justify-between p-4">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                        <Image src="/assets/auto-factory.png" alt="Logo" width={28} height={28} className="h-7 w-7" />
                        <span className="font-urbanist font-semibold text-gray-800 text-sm">Fountain of Scale</span>
                    </Link>
                    <XIcon className="size-6.5" onClick={() => setIsMenuOpen(false)} />
                </div>
                <div className="flex flex-col gap-4 p-4 text-base">
                    {links.filter(l => !(isIndiePage && l.name === "Pricing")).map((link: ILink) => (
                        <Link key={link.name} href={link.href} className="py-1 px-3" onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </Link>
                    ))}
                    <p className="py-1 px-3 text-sm font-medium text-gray-500">Solutions</p>
                    {solutions.map(item => (
                        <Link key={item.href} href={item.href} className="flex items-center gap-2 py-1 px-3" onClick={() => setIsMenuOpen(false)}>
                            <div className={`w-6 h-6 rounded-md ${item.bg} flex items-center justify-center shrink-0`}>
                                <item.icon size={13} className={item.color} />
                            </div>
                            <span className="text-sm text-gray-700">{item.name}</span>
                        </Link>
                    ))}
                    {!pathname.startsWith("/review-reply") && (
                        <button onClick={() => { handleBookCall(); setIsMenuOpen(false); }} className="py-2.5 px-6 w-max text-sm shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] bg-linear-to-tl from-purple-600 to-purple-500 text-white rounded-full">
                            {navbarCtaLabel}
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
