"use client";
import { useIndieModal } from "@/contexts/indie-modal-context";
import { XIcon } from "lucide-react";
import { useState } from "react";

const inputBase = "border bg-[#f7fcfb] rounded-lg px-3 py-2 text-sm text-gray-800 placeholder:text-zinc-400 focus:outline-none transition-colors";
const inputNormal = `${inputBase} border-[#edf9f8] focus:border-purple-300`;
const inputError = `${inputBase} border-red-300 focus:border-red-400`;

export default function IndieModal() {
    const { open, source, closeIndieModal } = useIndieModal();
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState({
        name: "", email: "", business: "", website: "", linkedin: "", notes: "",
    });

    if (!open) return null;

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => { const next = { ...prev }; delete next[name]; return next; });
    }

    function validate() {
        const e: Record<string, string> = {};
        if (!formData.name.trim()) e.name = "Name is required";
        if (!formData.email.trim()) e.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Enter a valid email address";
        if (!formData.business.trim()) e.business = "Required";
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
        closeIndieModal();
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
                        <h2 className="font-urbanist font-semibold text-lg text-gray-800">Apply for free setup</h2>
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
                                <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="you@example.com" className={errors.email ? inputError : inputNormal} />
                                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">What are you building? <span className="text-purple-500">*</span></label>
                            <input name="business" value={formData.business} onChange={handleChange} type="text" placeholder="e.g. SaaS tool for devs, newsletter, open source project" className={errors.business ? inputError : inputNormal} />
                            {errors.business && <p className="text-xs text-red-500">{errors.business}</p>}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className="text-gray-700"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                    handle <span className="text-zinc-400 font-normal">(optional)</span>
                                </label>
                                <input name="website" value={formData.website} onChange={handleChange} type="text" placeholder="@yourhandle" className={inputNormal} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className="text-gray-700"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    LinkedIn <span className="text-zinc-400 font-normal">(optional)</span>
                                </label>
                                <input name="linkedin" value={formData.linkedin} onChange={handleChange} type="text" placeholder="linkedin.com/in/yourname" className={inputNormal} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">Anything else? <span className="text-zinc-400 font-normal">(optional)</span></label>
                            <textarea name="notes" value={formData.notes} onChange={handleChange} rows={2} placeholder="Current follower count, platforms you're active on, what's slipping..." className={`${inputNormal} resize-none`} />
                        </div>

                        <button type="submit" disabled={loading} className="mt-2 w-full py-2.5 bg-purple-500 hover:bg-purple-600 disabled:opacity-60 text-white rounded-full text-sm font-medium transition-colors">
                            {loading ? "Sending..." : "Apply for free setup"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
