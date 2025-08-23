import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProblemStatement from '../components/ProblemStatement';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import ResearchSafety from '../components/ResearchSafety';
import Waitlist from '../components/Waitlist';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen" data-oid="lou:cxr">
            <Header data-oid="w6h:8vk" />
            <Hero data-oid="2imspxv" />
            <ProblemStatement data-oid="wjafwuw" />
            <HowItWorks data-oid="-799c-c" />
            <Features data-oid="gk5sh2d" />
            <ResearchSafety data-oid="hok.scs" />
            <Waitlist data-oid="7jn1kpp" />
            <Footer data-oid="9v46a0f" />
        </main>
    );
}
