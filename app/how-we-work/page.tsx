import React from 'react';
import WorkHero from '@/components/sections/WorkHero';
import DecisionSystemOverview from '@/components/sections/DecisionSystemOverview';
import ThreeDimensions from '@/components/sections/ThreeDimensions';
import CoachingMoments from '@/components/sections/CoachingMoments';
import EngagementFlow from '@/components/sections/EngagementFlow';
import WhoWeAreNot from '@/components/sections/WhoWeAreNot';
import Confidentiality from '@/components/sections/Confidentiality';
import WorkFinalCTA from '@/components/sections/WorkFinalCTA';

export default function HowWeWorkPage() {
    return (
        <div className="min-h-screen bg-brand-navy">
            <WorkHero />
            <DecisionSystemOverview />
            <ThreeDimensions />
            <CoachingMoments />
            <EngagementFlow />
            <WhoWeAreNot />
            <Confidentiality />
            <WorkFinalCTA />
        </div>
    );
}
