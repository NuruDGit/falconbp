import React from 'react';
import Image from 'next/image';
import PricingCalculator from '../PricingCalculator';
import worldMap from '@/assets/images/world_map.svg';

const EngagementDiscipline: React.FC = () => {
    return (
        <section className="section-padding bg-brand-navy relative overflow-hidden">
            <div className="container-editorial relative z-10">
                <div className="mb-16 text-center">
                    <span className="label-tech mb-10 inline-block">PRICING</span>
                    <h2 className="mb-10">
                        Pricing as a signal of seriousness.
                    </h2>

                    <div className="max-w-2xl mx-auto mb-16">
                        <p>
                            You are not purchasing time. You are purchasing judgement support delivered with discretion and discipline.
                        </p>
                    </div>
                </div>

                <div className="mb-16">
                    <PricingCalculator />
                </div>

            </div>
        </section>
    );
};

export default EngagementDiscipline;
