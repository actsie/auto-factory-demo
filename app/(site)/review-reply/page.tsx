"use client";
import AnimatedContent from "@/components/animated-content";
import { ArrowUpRightIcon, CheckIcon } from "lucide-react";
import { useState } from "react";

export default function ReviewReply() {
    const [form, setForm] = useState({ email: "", mapsUrl: "" });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const inputBase = "border bg-[#f7fcfb] rounded-lg px-3 py-2 text-sm text-gray-800 placeholder:text-zinc-400 focus:outline-none transition-colors";
    const inputNormal = `${inputBase} border-[#edf9f8] focus:border-purple-300`;
    const inputError = `${inputBase} border-red-300 focus:border-red-400`;

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => { const next = { ...prev }; delete next[name]; return next; });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const errs: Record<string, string> = {};
        if (!form.email.trim()) errs.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
        if (!form.mapsUrl.trim()) errs.mapsUrl = "Google Maps URL is required";
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setLoading(true);
        try {
            await fetch("/api/contact-reviewreply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, source: "Review Reply — Pilot Form" }),
            });
            setSubmitted(true);
        } finally {
            setLoading(false);
        }
    }

    const bullets = [
        "AI-written replies that sound human and on-brand",
        "Every review answered within 24 hours",
        "Cancel anytime — no worries if it's not useful",
    ];

    return (
        <main>
            <section className="bg-[url('/assets/hero-gradient-bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-16 lg:px-24 xl:px-32 min-h-screen">
                <div className="max-w-2xl mx-auto py-32 flex flex-col items-center text-center">
                    <AnimatedContent reverse distance={30} className="flex items-center gap-2 bg-white/50 backdrop-blur px-4 py-1.5 rounded-full text-sm text-gray-600 mb-6">
                        <span className="size-2 rounded-full bg-green-500 inline-block animate-pulse" />
                        Free pilot — limited spots
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.1}>
                        <h1 className="font-urbanist font-bold text-4xl md:text-5xl text-gray-800 text-balance">
                            Your Google reviews are costing you tenants
                        </h1>
                    </AnimatedContent>

                    <AnimatedContent distance={30} delay={0.2}>
                        <p className="text-zinc-500 text-base/7 mt-4 max-w-lg">
                            93% of apartment seekers read Google reviews before deciding — and properties that respond to reviews are chosen by 88% of renters vs 47% for ones that don&apos;t.<br /><br />We&apos;re looking for a few property managers to try our automated review response service — free during our pilot.
                        </p>
                    </AnimatedContent>

                    <AnimatedContent delay={0.3} className="mt-8 flex flex-col gap-3 w-full max-w-sm text-left">
                        {bullets.map((b, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                                <CheckIcon size={15} className="text-purple-500 mt-0.5 shrink-0" />
                                <span className="text-zinc-600 text-sm/6">{b}</span>
                            </div>
                        ))}
                    </AnimatedContent>

                    <AnimatedContent delay={0.4} className="mt-10 w-full max-w-sm">
                        {submitted ? (
                            <div className="flex flex-col items-center py-10 text-center">
                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h3 className="font-urbanist font-semibold text-xl text-gray-800">You&apos;re in.</h3>
                                <p className="text-zinc-500 text-sm mt-2">We&apos;ll be in touch within 24 hours to get you set up.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 bg-white border border-[#edf9f8] rounded-2xl p-6 shadow-sm text-left">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-gray-700">Email <span className="text-purple-500">*</span></label>
                                    <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="you@email.com" className={errors.email ? inputError : inputNormal} />
                                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-gray-700">Google Maps listing URL <span className="text-purple-500">*</span></label>
                                    <input name="mapsUrl" value={form.mapsUrl} onChange={handleChange} type="url" placeholder="https://maps.google.com/..." className={errors.mapsUrl ? inputError : inputNormal} />
                                    {errors.mapsUrl && <p className="text-xs text-red-500">{errors.mapsUrl}</p>}
                                </div>
                                <button type="submit" disabled={loading} className="mt-1 w-full py-2.5 flex items-center justify-center gap-1.5 bg-purple-500 hover:bg-purple-600 disabled:opacity-60 text-white rounded-full text-sm font-medium transition-colors">
                                    {loading ? "Sending..." : <>Apply for free pilot access <ArrowUpRightIcon size={14} /></>}
                                </button>
                                <p className="text-xs text-zinc-400 text-center leading-relaxed">
                                    By submitting you authorize Fountain of Scale to post review replies on your behalf.
                                </p>
                            </form>
                        )}
                    </AnimatedContent>
                </div>
            </section>
        </main>
    );
}
