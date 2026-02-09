"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        organization: '',
        role: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-brand-navy">
            <div className="pt-48 pb-24">
                <div className="container-editorial">
                    <div className="mb-24 text-center">
                        <span className="label-tech mb-4">GET IN TOUCH</span>
                        <h1 className="mb-8">Request a Conversation</h1>
                        <p className="text-xl md:text-2xl font-cinzel italic opacity-90 max-w-2xl mx-auto">
                            A professional exchange between peers. Not a sales discussion.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Contact Form */}
                        <div className="frosted-glass bg-brand-navy-dark/40 rounded-[2.5rem] p-10 md:p-14 transition-all duration-1000 border-white/5">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="label-tech lowercase mb-2 block">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-gold/40 focus:bg-white/[0.05] transition-all duration-500 font-light"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="label-tech lowercase mb-2 block">
                                            Organization
                                        </label>
                                        <input
                                            type="text"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-gold/40 focus:bg-white/[0.05] transition-all duration-500 font-light"
                                            placeholder="Company name"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="label-tech lowercase mb-2 block">
                                            Role / Title
                                        </label>
                                        <input
                                            type="text"
                                            name="role"
                                            value={formData.role}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-gold/40 focus:bg-white/[0.05] transition-all duration-500 font-light"
                                            placeholder="Your role"
                                        />
                                    </div>
                                    <div>
                                        <label className="label-tech lowercase mb-2 block">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-gold/40 focus:bg-white/[0.05] transition-all duration-500 font-light"
                                            placeholder="you@company.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="label-tech lowercase mb-2 block">
                                        Message
                                        label-tech
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-gold/40 focus:bg-white/[0.05] transition-all duration-500 font-light resize-none"
                                        placeholder="Tell us about the decision you're facing..."
                                    />
                                </div>

                                <Button type="submit" variant="primary" size="lg" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="frosted-glass bg-brand-navy-dark/40 rounded-[2.5rem] p-10 md:p-14 border-white/5">
                                <span className="label-tech mb-8 text-brand-gold">Direct Contact</span>
                                <div className="space-y-10 mt-8">
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-brand-gold/30 transition-colors duration-500">
                                            <Mail className="w-5 h-5 text-brand-gold" />
                                        </div>
                                        <div>
                                            <p className="label-tech mb-2 lowercase opacity-40">Email</p>
                                            <a href="mailto:joel@falconbp.com" className="text-xl md:text-2xl font-technical text-white hover:text-brand-gold transition-all duration-500">
                                                joel@falconbp.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-brand-gold/30 transition-colors duration-500">
                                            <Phone className="w-5 h-5 text-brand-gold" />
                                        </div>
                                        <div>
                                            <p className="label-tech mb-2 lowercase opacity-40">Phone</p>
                                            <a href="tel:+971527068408" className="text-xl md:text-2xl font-technical text-white hover:text-brand-gold transition-all duration-500">
                                                +971 52 706 8408
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-brand-gold/30 transition-colors duration-500">
                                            <MapPin className="w-5 h-5 text-brand-gold" />
                                        </div>
                                        <div>
                                            <p className="label-tech mb-2 lowercase opacity-40">Location</p>
                                            <p className="text-lg md:text-xl font-light text-white leading-relaxed">
                                                Amber Gem Tower<br />
                                                Sheikh Khalifa Street<br />
                                                Ajman, UAE
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="frosted-glass bg-brand-gold/10 rounded-[2.5rem] p-10 border-brand-gold/20">
                                <p className="text-white/80 italic font-cinzel text-lg leading-relaxed">
                                    All engagements are confidential and by referral or introduction only. Initial conversations are exploratory and non-binding.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
