"use client";
import { XIcon } from "lucide-react";
import { useState } from "react";

const inputBase = "border bg-[#f7fcfb] rounded-lg px-3 py-2 text-sm text-gray-800 placeholder:text-zinc-400 focus:outline-none transition-colors";
const inputNormal = `${inputBase} border-[#edf9f8] focus:border-purple-300`;
const inputError = `${inputBase} border-red-300 focus:border-red-400`;

const TIMELINE_OPTIONS = ["Within 1–2 weeks", "Within 1 month", "1–3 months", "Just exploring for now"];

type Props = {
    open: boolean;
    source: string;
    onClose: () => void;
    initialQrMenu?: boolean;
};

export default function FypModal({ open, source, onClose }: Props) {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState({
        email: "",
        website: "",
        frustration: "",
        timeline: "",
    });

    if (!open) return null;

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => { const next = { ...prev }; delete next[name]; return next; });
    }

    function validate() {
        const e: Record<string, string> = {};
        if (!formData.email.trim()) e.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Enter a valid email";
        if (!formData.website.trim()) e.website = "Website URL is required";
        return e;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setLoading(true);
        try {
            await fetch("/api/contact-fyp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, source }),
            });
            setSubmitted(true);
        } finally {
            setLoading(false);
        }
    }

    function handleClose() {
        onClose();
        setTimeout(() => setSubmitted(false), 300);
    }

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleClose} />

            <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto z-10">
                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#edf9f8]">
                    <div>
                        <h2 className="font-urbanist font-semibold text-lg text-gray-800">Migrate my site</h2>
                        <p className="text-zinc-500 text-sm mt-0.5">Takes 2 minutes. We&apos;ll be in touch within 24 hours.</p>
                    </div>
                    <button onClick={handleClose} className="text-zinc-400 hover:text-zinc-600 transition-colors">
                        <XIcon size={20} />
                    </button>
                </div>

                {submitted ? (
                    <div className="relative flex flex-col items-center justify-center py-16 pb-10 px-6 text-center">
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <h3 className="font-urbanist font-semibold text-xl text-gray-800">We got it.</h3>
                        <p className="text-zinc-500 text-sm mt-2 max-w-xs">We&apos;ll take a look at your site and reach out within 24 hours.</p>
                        <button onClick={handleClose} className="mt-6 py-2 px-6 bg-purple-500 text-white rounded-full text-sm hover:bg-purple-600 transition-colors">
                            Close
                        </button>
                        {source && <p className="absolute bottom-4 text-xs text-zinc-300">via {source}</p>}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} noValidate className="p-6 flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">Email <span className="text-purple-500">*</span></label>
                            <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="you@yourbusiness.com" className={errors.email ? inputError : inputNormal} />
                            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">Current website <span className="text-purple-500">*</span></label>
                            <input name="website" value={formData.website} onChange={handleChange} type="url" placeholder="https://yoursite.com" className={errors.website ? inputError : inputNormal} />
                            {errors.website && <p className="text-xs text-red-500">{errors.website}</p>}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">Biggest frustration with your current setup? <span className="text-zinc-400 font-normal">(optional)</span></label>
                            <textarea name="frustration" value={formData.frustration} onChange={handleChange} rows={3} placeholder="e.g. takes forever to make small changes, platform keeps getting more expensive..." className={`${inputNormal} resize-none`} />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">Ideal timeline <span className="text-zinc-400 font-normal">(optional)</span></label>
                            <div className="grid grid-cols-2 gap-2">
                                {TIMELINE_OPTIONS.map(opt => (
                                    <button
                                        key={opt}
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, timeline: opt }))}
                                        className={`text-xs px-3 py-2 rounded-lg border text-left transition-colors ${formData.timeline === opt ? "border-purple-300 bg-purple-50 text-purple-700" : "border-[#edf9f8] bg-[#f7fcfb] text-zinc-600 hover:border-purple-200"}`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button type="submit" disabled={loading} className="mt-1 w-full py-2.5 bg-purple-500 hover:bg-purple-600 disabled:opacity-60 text-white rounded-full text-sm font-medium transition-colors">
                            {loading ? "Sending..." : "Migrate my site"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
