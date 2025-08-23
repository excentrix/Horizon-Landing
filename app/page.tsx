import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProblemStatement from '../components/ProblemStatement';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import ResearchSafety from '../components/ResearchSafety';
import Waitlist from '../components/Waitlist';
import Footer from '../components/Footer';
import Header2 from '@/components/Header2';

export default function Home() {
    return (
        <main className="min-h-screen" data-oid="krex876">
            {/* <Header data-oid="bwudy.0" /> */}
            <Header2 data-oid="ln0mi0z" />

            <Hero data-oid="_sy_6yz" />
            <ProblemStatement data-oid="otaji7n" />
            <HowItWorks data-oid="tiw0y2:" />
            <Features data-oid="woj9ufa" />
            <ResearchSafety data-oid="5nlopir" />
            <Waitlist data-oid="c_.apsa" />
            <Footer data-oid="4x95y0." />
        </main>
    );
}
