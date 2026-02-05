import React from 'react';
import { Linkedin, Mail, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import joelImage from '@/assets/images/joel-arcus.png';
import quincyImage from '@/assets/images/quincy-beukes.png';

const founders = {
    "joel-arcus": {
        name: "Joel Arcus",
        role: "Co-Founder and Managing Partner",
        image: joelImage,
        bio: "Joel Arcus is Co-Founder and Managing Partner. His work focuses on sharpening judgement, reducing distortion, and helping leaders think clearly under pressure.",
        philosophy: "When responsibility cannot be delegated, clarity cannot be outsourced.",
        expertise: ["Executive judgement", "Decision clarity", "Leadership under pressure", "Accountability"],
        focus: [
            "Decision framing under pressure",
            "Clarity that preserves authority",
            "Commitment and execution alignment"
        ]
    },
    "quincy-beukes": {
        name: "Quincy Beukes",
        role: "Co-Founder and Research Partner",
        image: quincyImage,
        bio: "Quincy Beukes is Co-Founder and Research Partner. His work focuses on transforming complex external signal into decision-grade clarity used at the point of commitment.",
        philosophy: "Research informs judgement; it does not replace it.",
        expertise: ["External signal", "Decision-led research", "Second-order effects", "Strategic clarity"],
        focus: [
            "Decision-grade insight",
            "Signal integration",
            "Trade-off clarity"
        ]
    }
};

const FoundersBio: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const founder = founders[id as keyof typeof founders] || founders["joel-arcus"];

    return (
        <main className="bg-brand-navy min-h-screen pt-40 pb-32">
            <div className="max-w-300 mx-auto px-6">
                <Link to="/" className="inline-flex items-center gap-2 text-brand-gold/60 hover:text-brand-gold mb-20 transition-colors uppercase tracking-widest text-xs font-technical">
                    <ArrowLeft className="w-3 h-3" />
                    Back to Partnership
                </Link>

                <div className="flex flex-col lg:flex-row gap-24">
                    <div className="lg:w-1/3">
                        <div className="aspect-3/4 bg-white/5 rounded-3xl border border-white/10 overflow-hidden mb-8 relative group">
                            <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/40 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <h1 className="text-3xl font-technical text-white mb-2">{founder.name}</h1>
                                <p className="text-brand-gold font-technical text-sm uppercase tracking-widest">{founder.role}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 space-y-16">
                        <section>
                            <h2 className="text-white/30 text-xs font-technical uppercase tracking-widest mb-8">Professional Mandate</h2>
                            <p className="text-2xl text-white/80 font-light leading-relaxed">
                                {founder.bio}
                            </p>
                        </section>

                        <section className="p-12 bg-white/2 border border-white/5 rounded-3xl">
                            <h2 className="text-white/30 text-xs font-technical uppercase tracking-widest mb-8">Executive Philosophy</h2>
                            <p className="text-2xl font-technical italic text-brand-gold/80 leading-relaxed">
                                "{founder.philosophy}"
                            </p>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <section>
                                <h2 className="text-white/30 text-xs font-technical uppercase tracking-widest mb-8">Domain Expertise</h2>
                                <div className="flex flex-wrap gap-3">
                                    {founder.expertise.map((exp, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/50 text-[0.7rem] font-technical uppercase tracking-widest">
                                            {exp}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="text-white/30 text-xs font-technical uppercase tracking-widest mb-8">Key Focus Areas</h2>
                                <ul className="space-y-6">
                                    {founder.focus.map((item, i) => (
                                        <li key={i} className="group flex items-start justify-between gap-4">
                                            <span className="text-white/70 group-hover:text-brand-gold transition-colors font-light leading-snug">{item}</span>
                                            <ExternalLink className="w-4 h-4 text-white/10 group-hover:text-brand-gold transition-colors shrink-0" />
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FoundersBio;
