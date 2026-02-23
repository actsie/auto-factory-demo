"use client";
import { useModal } from "@/contexts/modal-context";
import { XIcon } from "lucide-react";
import { useState } from "react";

const inputBase = "border bg-[#f7fcfb] rounded-lg px-3 py-2 text-sm text-gray-800 placeholder:text-zinc-400 focus:outline-none transition-colors";
const inputNormal = `${inputBase} border-[#edf9f8] focus:border-purple-300`;
const inputError = `${inputBase} border-red-300 focus:border-red-400`;

export default function ContactModal() {
    const { open, source, closeModal } = useModal();
    const [jdMode, setJdMode] = useState<"url" | "paste">("url");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState({
        name: "", email: "", company: "", website: "", linkedin: "",
        jdUrl: "", jdText: "", techStack: "", notes: "",
    });

    if (!open) return null;

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => { const next = { ...prev }; delete next[name]; return next; });
    }

    function isValidUrl(val: string) {
        try { new URL(val); return true; } catch { return false; }
    }

    function validate() {
        const e: Record<string, string> = {};
        if (!formData.name.trim()) e.name = "Name is required";
        if (!formData.email.trim()) e.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Enter a valid email address";
        if (!formData.company.trim()) e.company = "Company name is required";
        if (formData.website.trim() && !isValidUrl(formData.website)) e.website = "Enter a valid URL";
        if (formData.linkedin.trim() && !isValidUrl(formData.linkedin)) e.linkedin = "Enter a valid URL";
        if (jdMode === "url" && !formData.jdUrl.trim()) e.jdUrl = "Paste the job posting URL";
        else if (jdMode === "url" && formData.jdUrl.trim() && !isValidUrl(formData.jdUrl)) e.jdUrl = "Enter a valid URL";
        if (jdMode === "paste" && !formData.jdText.trim()) e.jdText = "Paste the job description";
        return e;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setLoading(true);
        try {
            await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, jdMode, source }),
            });
            setSubmitted(true);
        } finally {
            setLoading(false);
        }
    }

    function handleClose() {
        closeModal();
        setTimeout(() => setSubmitted(false), 300);
    }

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleClose} />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto z-10">
                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#edf9f8]">
                    <div>
                        <h2 className="font-urbanist font-semibold text-lg text-gray-800">Book a scoping call</h2>
                        <p className="text-zinc-500 text-sm mt-0.5">We&apos;ll review and get back to you within 24 hours.</p>
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
                        <p className="text-zinc-500 text-sm mt-2 max-w-xs">We&apos;ll review your submission and reach out within 24 hours.</p>
                        <button onClick={handleClose} className="mt-6 py-2 px-6 bg-purple-500 text-white rounded-full text-sm hover:bg-purple-600 transition-colors">
                            Close
                        </button>
                        {source && <p className="absolute bottom-4 text-xs text-zinc-300">via {source}</p>}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} noValidate className="p-6 flex flex-col gap-4">
                        {/* Name + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700">Name <span className="text-purple-500">*</span></label>
                                <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your name" className={errors.name ? inputError : inputNormal} />
                                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700">Email <span className="text-purple-500">*</span></label>
                                <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="you@company.com" className={errors.email ? inputError : inputNormal} />
                                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700">Company name <span className="text-purple-500">*</span></label>
                                <input name="company" value={formData.company} onChange={handleChange} type="text" placeholder="Acme Corp" className={errors.company ? inputError : inputNormal} />
                                {errors.company && <p className="text-xs text-red-500">{errors.company}</p>}
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700">Company website</label>
                                <input name="website" value={formData.website} onChange={handleChange} type="url" placeholder="https://acmecorp.com" className={errors.website ? inputError : inputNormal} />
                                {errors.website && <p className="text-xs text-red-500">{errors.website}</p>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">Company LinkedIn</label>
                            <input name="linkedin" value={formData.linkedin} onChange={handleChange} type="url" placeholder="https://linkedin.com/company/acmecorp" className={errors.linkedin ? inputError : inputNormal} />
                            {errors.linkedin && <p className="text-xs text-red-500">{errors.linkedin}</p>}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700">Job description <span className="text-purple-500">*</span></label>
                                <div className="flex items-center gap-1 bg-[#f7fcfb] border border-[#edf9f8] rounded-full p-0.5">
                                    <button type="button" onClick={() => setJdMode("url")} className={`text-xs px-3 py-1 rounded-full transition-colors ${jdMode === "url" ? "bg-white shadow-sm text-gray-800" : "text-zinc-400"}`}>URL</button>
                                    <button type="button" onClick={() => setJdMode("paste")} className={`text-xs px-3 py-1 rounded-full transition-colors ${jdMode === "paste" ? "bg-white shadow-sm text-gray-800" : "text-zinc-400"}`}>Paste</button>
                                </div>
                            </div>
                            {jdMode === "url" ? (
                                <input name="jdUrl" value={formData.jdUrl} onChange={handleChange} type="url" placeholder="https://ashbyhq.com/jobs/..." className={errors.jdUrl ? inputError : inputNormal} />
                            ) : (
                                <textarea name="jdText" value={formData.jdText} onChange={handleChange} rows={4} placeholder="Paste the job description here..." className={`${errors.jdText ? inputError : inputNormal} resize-none`} />
                            )}
                            {errors.jdUrl && <p className="text-xs text-red-500">{errors.jdUrl}</p>}
                            {errors.jdText && <p className="text-xs text-red-500">{errors.jdText}</p>}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">Tech stack / tools <span className="text-zinc-400 font-normal">(CRM, email, ops tools)</span></label>
                            <textarea name="techStack" value={formData.techStack} onChange={handleChange} rows={2} placeholder="e.g. Salesforce, Outreach, Notion, Zapier..." className={`${inputNormal} resize-none`} />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">Anything else we should know? <span className="text-zinc-400 font-normal">(optional)</span></label>
                            <textarea name="notes" value={formData.notes} onChange={handleChange} rows={2} placeholder="Context, timeline, specific challenges..." className={`${inputNormal} resize-none`} />
                        </div>

                        <button type="submit" disabled={loading} className="mt-2 w-full py-2.5 bg-purple-500 hover:bg-purple-600 disabled:opacity-60 text-white rounded-full text-sm font-medium transition-colors">
                            {loading ? "Sending..." : "Send it over"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
