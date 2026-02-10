"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import heroBg from '@/assets/images/how-we-work.png';

const ContactPage: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        organization: '',
        role: '',
        decisionContext: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/submit-contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    fullName: '',
                    email: '',
                    organization: '',
                    role: '',
                    decisionContext: ''
                });
            }
        } catch (error) {
            console.error('Error submitting contact form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-brand-navy">
            <section className="relative pt-48 pb-24 overflow-hidden bg-brand-navy">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroBg}
                        alt=""
                        fill
                        className="object-cover opacity-40 grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-brand-navy via-brand-navy/40 to-brand-navy" />
                    <div className="absolute inset-0 bg-linear-to-r from-brand-navy via-transparent to-brand-navy opacity-80" />
                </div>

                <div className="container-editorial relative z-10 text-center">
                    <span className="label-tech mb-6 inline-block">REQUEST CONVERSATION</span>
                    <h1 className="mb-6">
                        What decision are you<br className="hidden md:block" />{" "}
                        <span className="text-brand-gold italic font-cinzel opacity-90">being asked to make?</span>
                    </h1>
                    <p className="text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto text-white/70">
                        We work with founders, CEOs and investors facing decisions with real consequence. If the
                        decision is active and the stakes are high, we can help.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-editorial">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-5">
                            <span className="label-tech mb-6 inline-block">CONFIDENTIAL INTAKE</span>
                            <h2 className="mb-6">Start the conversation.</h2>
                            <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                                Share only what is necessary. We do not require sensitive details at this stage.
                            </p>
                            <div className="space-y-4 text-white/55 text-sm font-light">
                                <p>We respond directly within 48 hours.</p>
                                <p>All conversations are confidential.</p>
                                <p>Engagements are selective and decision-bound.</p>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="frosted-glass rounded-[2.5rem] p-8 md:p-10">
                                {!isSubmitted ? (
                                    <form onSubmit={handleSubmit} className="space-y-5">
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
                                            <div className="space-y-2">
                                                <label className="text-[0.65rem] font-technical text-white/50 uppercase tracking-[0.15em] block">
                                                    Organisation
                                                </label>
                                                <input
                                                    name="organization"
                                                    value={formData.organization}
                                                    onChange={handleChange}
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
                                                    className="w-full rounded-lg bg-white/3 border border-white/20 px-3.5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-gold/50 focus:bg-white/6 transition-all duration-300 hover:border-white/30"
                                                    placeholder="Role or title"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2 pt-1">
                                            <label className="text-[0.65rem] font-technical text-white/50 uppercase tracking-[0.15em] block">
                                                Decision context
                                            </label>
                                            <textarea
                                                name="decisionContext"
                                                value={formData.decisionContext}
                                                onChange={handleChange}
                                                rows={4}
                                                required
                                                className="w-full rounded-lg bg-white/3 border border-white/20 px-3.5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-gold/50 focus:bg-white/6 transition-all duration-300 hover:border-white/30 resize-none"
                                                placeholder="What decision are you working through? Keep this high-level."
                                            />
                                        </div>

                                        <div className="pt-2 border-t border-white/10 flex items-center gap-4">
                                            <Button type="submit" variant="primary" size="md" icon={ArrowRight} disabled={isSubmitting}>
                                                {isSubmitting ? 'Submitting...' : 'Submit request'}
                                            </Button>
                                            <p className="text-xs text-white/40 font-light">
                                                We review each request manually.
                                            </p>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="bg-linear-to-br from-brand-gold/10 via-brand-gold/5 to-transparent border border-brand-gold/20 rounded-xl p-6 shadow-lg shadow-brand-gold/10">
                                        <h3 className="text-2xl font-technical text-white mb-3">Request received.</h3>
                                        <p className="text-sm text-white/70 leading-relaxed">
                                            Thanks for reaching out. We will respond directly within 48 hours.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;

