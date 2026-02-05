import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const Contact: React.FC = () => {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <main className="bg-brand-navy min-h-screen pt-40 pb-32">
            <div className="max-w-300 mx-auto px-6">
                <header className="max-w-3xl mb-24">
                    <span className="text-brand-gold font-technical text-sm tracking-widest uppercase mb-4 block">WHERE CONVERSATIONS BEGIN</span>
                    <h1 className="text-5xl md:text-6xl font-technical mb-10 leading-tight">A professional exchange.</h1>
                    <p className="text-white/60 text-xl font-light leading-relaxed">
                        This is not a sales discussion. It is a confidential conversation to determine fit and clarify the decision at hand.
                    </p>
                    <p className="text-white/70 italic mt-6">
                        What decision are you actually being asked to make?
                    </p>
                </header>

                <div className="flex flex-col lg:flex-row gap-24">
                    <div className="flex-1">
                        {!sent ? (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[0.65rem] font-technical text-white/40 uppercase tracking-widest ml-4">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-white/3 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-gold/40 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[0.65rem] font-technical text-white/40 uppercase tracking-widest ml-4">Professional Email</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-white/3 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-gold/40 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[0.65rem] font-technical text-white/40 uppercase tracking-widest ml-4">Organizational Context</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/3 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-gold/40 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[0.65rem] font-technical text-white/40 uppercase tracking-widest ml-4">Decision Context (Description)</label>
                                    <textarea
                                        rows={5}
                                        required
                                        className="w-full bg-white/3 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-gold/40 transition-all resize-none"
                                    ></textarea>
                                </div>

                                <Button type="submit" variant="primary" size="md" icon={Send} className="w-full md:w-max">
                                    Dispatch Inquiry
                                </Button>
                            </form>
                        ) : (
                            <div className="py-20 text-center bg-white/2 border border-white/5 rounded-3xl">
                                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-gold">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-technical mb-4">Inquiry Received</h2>
                                <p className="text-white/50 max-w-sm mx-auto font-light">
                                    Your request has been dispatched to our partners. We will respond
                                    within 24 hours if there is structural alignment.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="lg:w-80 space-y-12">
                        <div className="space-y-4">
                            <h3 className="font-technical text-sm text-brand-gold uppercase tracking-widest">Global Correspondence</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <Mail className="w-5 h-5 text-white/20 mt-1" />
                                    <div>
                                        <p className="text-[0.65rem] font-technical text-white/40 uppercase mb-1">Electronic</p>
                                        <p className="text-white/80 font-light text-sm">intelligence@falconbridge.partners</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <MapPin className="w-5 h-5 text-white/20 mt-1" />
                                    <div>
                                        <p className="text-[0.65rem] font-technical text-white/40 uppercase mb-1">Primary Hubs</p>
                                        <p className="text-white/80 font-light text-sm">London / Cape Town / Singapore</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-white/2 border border-white/5 rounded-2xl">
                            <h4 className="text-xs font-technical uppercase tracking-widest text-brand-gold mb-4">Security Notice</h4>
                            <p className="text-white/30 text-xs leading-relaxed font-light">
                                All communication is treated with absolute discretion. We utilize
                                signal-grade encryption for all sensitive partner correspondence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
