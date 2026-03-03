"use client";
import { useAiModal } from "@/contexts/ai-modal-context";
import { XIcon } from "lucide-react";
import { useState } from "react";

const inputBase = "border bg-[#f7fcfb] rounded-lg px-3 py-2 text-sm text-gray-800 placeholder:text-zinc-400 focus:outline-none transition-colors";
const inputNormal = `${inputBase} border-[#edf9f8] focus:border-purple-300`;
const inputError = `${inputBase} border-red-300 focus:border-red-400`;

const GAP_OPTIONS = [
    "Voice / missed calls",
    "Social media DMs",
    "Customer service inquiries",
    "All of the above",
];

export default function AiModal() {
    const { open, source, closeAiModal } = useAiModal();
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState({
        name: "", email: "", business: "", website: "", gap: "", notes: "",
    });

    if (!open) return null;

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => { const next = { ...prev }; delete next[name]; return next; });
    }

    function validate() {
        const e: Record<string, string> = {};
        if (!formData.name.trim()) e.name = "Name is required";
        if (!formData.email.trim()) e.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Enter a valid email address";
        if (!formData.business.trim()) e.business = "Business name is required";
        return e;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setLoading(true);
        try {
            await fetch("/api/contact-ai", {
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
        closeAiModal();
        setTimeout(() => setSubmitted(false), 300);
    }

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleClose} />

            <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto z-10">
                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#edf9f8]">
                    <div>
                        <h2 className="font-urbanist font-semibold text-lg text-gray-800">Let&apos;s talk</h2>
                        <p className="text-zinc-500 text-sm mt-0.5">We&apos;ll review your setup and get back to you within 24 hours.</p>
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
                        <p className="text-zinc-500 text-sm mt-2 max-w-xs">We&apos;ll be in touch within 24 hours.</p>
                        <button onClick={handleClose} className="mt-6 py-2 px-6 bg-purple-500 text-white rounded-full text-sm hover:bg-purple-600 transition-colors">
                            Close
                        </button>
                        {source && <p className="absolute bottom-4 text-xs text-zinc-300">via {source}</p>}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} noValidate className="p-6 flex flex-col gap-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700">Name <span className="text-purple-500">*</span></label>
                                <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your name" className={errors.name ? inputError : inputNormal} />
                                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700">Email <span className="text-purple-500">*</span></label>
                                <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="you@yourbusiness.com" className={errors.email ? inputError : inputNormal} />
                                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">Business name <span className="text-purple-500">*</span></label>
                            <input name="business" value={formData.business} onChange={handleChange} type="text" placeholder="Your business name" className={errors.business ? inputError : inputNormal} />
                            {errors.business && <p className="text-xs text-red-500">{errors.business}</p>}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">Website <span className="text-zinc-400 font-normal">(optional)</span></label>
                            <input name="website" value={formData.website} onChange={handleChange} type="url" placeholder="https://yourbusiness.com" className={inputNormal} />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">Biggest after-hours gap <span className="text-zinc-400 font-normal">(optional)</span></label>
                            <select name="gap" value={formData.gap} onChange={handleChange} className={`${inputNormal} appearance-none`}>
                                <option value="">Select one...</option>
                                {GAP_OPTIONS.map(opt => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">Anything else? <span className="text-zinc-400 font-normal">(optional)</span></label>
                            <textarea name="notes" value={formData.notes} onChange={handleChange} rows={2} placeholder="Tell us about your current setup or what you'd like automated..." className={`${inputNormal} resize-none`} />
                        </div>

                        <button type="submit" disabled={loading} className="mt-2 w-full py-2.5 bg-purple-500 hover:bg-purple-600 disabled:opacity-60 text-white rounded-full text-sm font-medium transition-colors">
                            {loading ? "Sending..." : "Let's talk"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
