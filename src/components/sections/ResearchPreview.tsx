"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Lock, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useRecaptcha } from '@/hooks/useRecaptcha';
import goldenLine from '@/assets/images/golden_line_in_the_dark_sky.png';

const ResearchPreview: React.FC = () => {
    const { getRecaptchaToken } = useRecaptcha();
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        fullName: '',
        organization: '',
        role: '',
        email: '',
        decisionContext: ''
    });

    const inclusions = [
        "Decision frame clarity",
        "Assumption testing",
        "Second-order implications",
        "Trade-off articulation",
        "Decision-grade synthesis",
        "Confidential delivery"
    ];

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleOpen = () => {
        setIsOpen(true);
        setIsSubmitted(false);
    };

    const handleClose = () => {
        setIsOpen(false);
        setIsSubmitted(false);
        setError(null);
        setFormData({
            fullName: '',
            organization: '',
            role: '',
            email: '',
            decisionContext: ''
        });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);
        setError(null);
        try {
            // Get reCAPTCHA token
            const recaptchaToken = await getRecaptchaToken();
            if (!recaptchaToken) {
                setError('Unable to verify request. Please try again.');
                setIsSubmitting(false);
                return;
            }

            const response = await fetch('/api/submit-research', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken
                }),
            });
            
            if (response.ok) {
                setIsSubmitted(true);
            } else {
                const data = await response.json();
                setError(data.error || 'Failed to submit form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setError('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="section-padding bg-brand-navy overflow-hidden">
            <div className="container-editorial">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1 max-w-xl">
                        <span className="label-tech mb-4">EXTERNAL SIGNAL</span>
                        <h2 className="mb-8">Decision-led research.</h2>
                        <p className="mb-10">
                            We begin with the decision frame, define what must be known and deliver insight that can be used at the point of commitment.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            {inclusions.map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
                                    <span className="text-white/70 text-sm font-light">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <Button variant="secondary" size="md" icon={Lock} onClick={handleOpen}>
                                Explore research capability
                            </Button>
                            <p className="label-tech lowercase tracking-widest ml-4">
                                Access to sample research is intentionally controlled and reviewed.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 relative group">
                        <div className="bg-brand-navy/40 frosted-glass p-12 rounded-[2rem] shadow-2xl transform rotate-2 group-hover:rotate-0 transition-all duration-1000">
                            <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
                                <div className="label-tech">STRICTLY CONFIDENTIAL // PROJECT DB-24</div>
                                <Lock className="w-3 h-3 text-brand-gold opacity-50" />
                            </div>

                            <div className="space-y-6">
                                <div className="h-4 bg-brand-gold/10 w-3/4 rounded-full" />
                                <div className="h-4 bg-white/5 w-full rounded-full" />
                                <div className="h-4 bg-white/5 w-5/6 rounded-full" />
                                <div className="h-10 bg-black/60 w-1/2 rounded-sm border border-brand-gold/20 flex items-center px-4">
                                    <span className="text-[0.5rem] text-brand-gold/60 font-mono tracking-tighter">[ REDACTED CONTENT ]</span>
                                </div>
                                <div className="h-4 bg-white/5 w-full rounded-full" />
                                <div className="h-4 bg-white/5 w-2/3 rounded-full" />
                            </div>

                            <div className="mt-16 pt-8 accent-divider">
                                <div className="flex gap-4">
                                    <div className="w-10 h-1 bg-brand-gold/20 rounded" />
                                    <div className="w-10 h-1 bg-brand-gold/20 rounded" />
                                    <div className="w-10 h-1 bg-brand-gold/40 rounded" />
                                </div>
                            </div>
                        </div>

                        <div className="absolute -inset-10 bg-brand-gold/5 blur-[100px] -z-1 opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 z-2000 flex items-center justify-center bg-black/70 backdrop-blur-md px-4 py-4 overflow-y-auto"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="research-access-title"
                >
                    <div className="absolute inset-0" onClick={handleClose} />
                    <div className="relative w-full max-w-2xl bg-linear-to-br from-brand-navy via-brand-navy to-brand-navy/95 border border-white/20 rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.5)] p-8 md:p-10 overflow-hidden">
                        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                            <Image
                                src={goldenLine}
                                alt=""
                                fill
                                className="object-cover opacity-30 mix-blend-screen"
                                aria-hidden="true"
                            />
                            <div className="absolute inset-0 bg-linear-to-br from-brand-gold/10 via-transparent to-brand-navy/80" />
                        </div>

                        <div className="relative">
                            <div className="flex items-start justify-between gap-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-brand-gold/20 to-brand-gold/5 border border-brand-gold/30 flex items-center justify-center shrink-0 shadow-lg shadow-brand-gold/10">
                                        <Lock className="w-5 h-5 text-brand-gold" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 id="research-access-title" className="mb-2">
                                            Request access to<br className="hidden md:block" />{" "}
                                            <span className="text-brand-gold italic font-cinzel opacity-90">sample research</span>
                                        </h3>
                                        <p className="text-sm">
                                            Access to sample research is intentionally limited to decision-makers and senior sponsors.
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="text-white/40 hover:text-white/80 transition-all duration-500 hover:rotate-90 shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5"
                                    aria-label="Close modal"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="accent-divider mb-8" />

                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {error && (
                                        <div className="mb-4 bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                                            <p className="text-red-200 text-sm">{error}</p>
                                        </div>
                                    )}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[0.65rem] font-technical text-white/50 uppercase tracking-[0.15em] block">
                                                Full name
                                            </label>
                                            <input
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-lg bg-white/3 border border-white/20 px-3.5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-gold/50 focus:bg-white/6 transition-all duration-300 hover:border-white/30"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[0.65rem] font-technical text-white/50 uppercase tracking-[0.15em] block">
                                                Organisation
                                            </label>
                                            <input
                                                name="organization"
                                                value={formData.organization}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-lg bg-white/3 border border-white/20 px-3.5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-gold/50 focus:bg-white/6 transition-all duration-300 hover:border-white/30"
                                                placeholder="Organisation"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[0.65rem] font-technical text-white/50 uppercase tracking-[0.15em] block">
                                                Role / title
                                            </label>
                                            <input
                                                name="role"
                                                value={formData.role}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-lg bg-white/3 border border-white/20 px-3.5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-gold/50 focus:bg-white/6 transition-all duration-300 hover:border-white/30"
                                                placeholder="Role or title"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[0.65rem] font-technical text-white/50 uppercase tracking-[0.15em] block">
                                                Work email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-lg bg-white/3 border border-white/20 px-3.5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-gold/50 focus:bg-white/6 transition-all duration-300 hover:border-white/30"
                                                placeholder="you@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2 pt-1">
                                        <label className="text-[0.65rem] font-technical text-white/50 uppercase tracking-[0.15em] block">
                                            What decision are you exploring? (optional)
                                        </label>
                                        <textarea
                                            name="decisionContext"
                                            value={formData.decisionContext}
                                            onChange={handleChange}
                                            rows={2}
                                            className="w-full rounded-lg bg-white/3 border border-white/20 px-3.5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-gold/50 focus:bg-white/6 transition-all duration-300 hover:border-white/30 resize-none"
                                            placeholder="Short note only - no confidential detail required."
                                        />
                                    </div>

                                    <div className="pt-2 border-t border-white/10">
                                        <Button type="submit" variant="primary" size="md" className="shadow-lg shadow-brand-gold/20" disabled={isSubmitting}>
                                            {isSubmitting ? 'Requesting...' : 'Request access'}
                                        </Button>
                                        <p className="text-xs text-white/40 mt-3 font-light">Access is reviewed manually.</p>
                                    </div>
                                </form>
                            ) : (
                                <div className="mt-6 bg-linear-to-br from-brand-gold/10 via-brand-gold/5 to-transparent border border-brand-gold/20 rounded-xl p-6 shadow-lg shadow-brand-gold/10">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                                            <Lock className="w-3.5 h-3.5 text-brand-gold" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-technical text-white mb-2">Request received.</h4>
                                            <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                                                Your request is being reviewed.
                                                <br />
                                                If approved, you will receive access by email.
                                                <br />
                                                <span className="text-white/50">We do not automatically release research material.</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ResearchPreview;

