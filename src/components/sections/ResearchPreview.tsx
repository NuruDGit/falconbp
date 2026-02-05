import React from 'react';
import { FileText, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const ResearchPreview: React.FC = () => {
    const inclusions = [
        "Decision frame clarity",
        "Assumption testing",
        "Second-order implications",
        "Trade-off articulation",
        "Decision-grade synthesis",
        "Confidential delivery"
    ];

    return (
        <section className="py-32 bg-brand-navy overflow-hidden">
            <div className="max-w-300 mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1 max-w-xl">
                        <span className="text-brand-gold font-technical text-sm tracking-widest uppercase mb-4 block">EXTERNAL SIGNAL</span>
                        <h2 className="text-4xl md:text-5xl font-technical mb-8 leading-tight">Decision-led research.</h2>
                        <p className="text-white/60 text-lg font-light leading-relaxed mb-10">
                            We begin with the decision frame, define what must be known, and deliver insight that can be used at the point of commitment.
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
                            <Button href="/research" variant="secondary" size="md" icon={Lock}>
                                Explore Research Capability
                            </Button>
                            <p className="text-[0.65rem] font-technical text-white/30 uppercase tracking-widest ml-4">
                                Access to sample research is intentionally controlled.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 relative group">
                        {/* Redacted Document Mockup */}
                        <div className="bg-white/3 border border-white/10 p-12 rounded-lg shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-700">
                            <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
                                <div className="text-[0.6rem] font-technical text-white/40 tracking-widest">STRICTLY CONFIDENTIAL // PROJECT DB-24</div>
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

                            <div className="mt-16 pt-8 border-t border-white/10">
                                <div className="flex gap-4">
                                    <div className="w-10 h-1 bg-brand-gold/20 rounded" />
                                    <div className="w-10 h-1 bg-brand-gold/20 rounded" />
                                    <div className="w-10 h-1 bg-brand-gold/40 rounded" />
                                </div>
                            </div>
                        </div>

                        {/* Decorative Blur Background */}
                        <div className="absolute -inset-10 bg-brand-gold/5 blur-[100px] -z-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default ResearchPreview;
