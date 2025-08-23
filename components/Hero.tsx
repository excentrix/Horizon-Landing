'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface HeroProps {
    className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const [currentResponse, setCurrentResponse] = useState(0);
    const [showResponse, setShowResponse] = useState(false);

    const responses = [
        "Yes, I can't sleep properly",
        "I don't know where to start studying",
        "I'm worried I'm not good enough",
    ];

    const aiResponses = [
        "I understand how overwhelming exams can be. Let's start with a simple breathing exercise to help you relax. Can you take 3 deep breaths with me?",
        "That's a common feeling! Let me help you break it down. What subject are you most worried about? We can create a simple study plan together.",
        'You are absolutely good enough. Every student feels this way sometimes. Let me share a story about how I helped another student who felt the same...',
    ];

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                setShowResponse(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isInView]);

    useEffect(() => {
        if (showResponse) {
            const interval = setInterval(() => {
                setCurrentResponse((prev) => (prev + 1) % responses.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [showResponse]);

    return (
        <section
            ref={ref}
            className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal via-gray-800 to-charcoal ${className}`}
            id="home"
            data-oid="t.6cod."
        >
            {/* Background Elements */}
            <div className="absolute inset-0" data-oid="yqj3tha">
                <div className="absolute inset-0 bg-pattern-dots opacity-10" data-oid="mvsz.ad" />
                <div
                    className="absolute top-20 left-20 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse"
                    data-oid="ubzwosq"
                />

                <div
                    className="absolute top-40 right-32 w-24 h-24 bg-orange-400/20 rounded-full blur-xl animate-pulse"
                    style={{ animationDelay: '1s' }}
                    data-oid="ifbx4a7"
                />

                <div
                    className="absolute bottom-40 left-32 w-20 h-20 bg-orange-300/20 rounded-full blur-xl animate-pulse"
                    style={{ animationDelay: '2s' }}
                    data-oid="ucb-pj6"
                />
            </div>

            {/* Content */}
            <div className="container-horizon relative z-10" data-oid="19b6q19">
                <div className="grid lg:grid-cols-2 gap-16 items-center" data-oid="_x1wkup">
                    {/* Left Column - Main Content */}
                    <motion.div
                        className="text-center lg:text-left space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                        data-oid="d-9cjfo"
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            data-oid="jknwijj"
                        >
                            <span
                                className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium"
                                data-oid="sw79b1-"
                            >
                                Solving Bloom's 2 Sigma Problem
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            data-oid="lk0da6i"
                        >
                            Your Personal AI Mentor,
                            <span className="block gradient-text" data-oid="zlyb-th">
                                Just Like Your Parents Once Were
                            </span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl lg:max-w-none"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            data-oid="o4l1hku"
                        >
                            Get personalized guidance for career, academics, and mental health in
                            your language - because everyone deserves that personal touch in
                            learning
                        </motion.p>

                        {/* Value Props Grid */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl lg:max-w-none"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            data-oid="s:aie3-"
                        >
                            {[
                                { icon: '🎯', text: 'Career Guidance' },
                                { icon: '📚', text: 'Academic Support' },
                                { icon: '💚', text: 'Mental Wellness' },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center lg:items-start space-y-2"
                                    data-oid="9hi97a8"
                                >
                                    <span className="text-2xl" data-oid="9g:rvh:">
                                        {item.icon}
                                    </span>
                                    <span
                                        className="text-sm text-gray-300 font-medium"
                                        data-oid="v-9inq."
                                    >
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                            data-oid=".8x68co"
                        >
                            <button className="btn-primary" data-oid="kss722k">
                                Get Your AI Mentor
                            </button>
                            <button className="btn-outline" data-oid="ltzyzta">
                                See How It Works
                            </button>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            className="text-center lg:text-left"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            data-oid="5bs1irl"
                        >
                            <p className="text-gray-300 text-sm" data-oid="d6a65qw">
                                Trusted by students from{' '}
                                <span className="text-orange-400 font-semibold" data-oid="vk.wr5j">
                                    50+ colleges
                                </span>
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Interactive Chat Preview */}
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        data-oid="fy00tm-"
                    >
                        <div className="w-full max-w-md" data-oid="19:iol:">
                            <MentorChatPreview
                                currentResponse={currentResponse}
                                showResponse={showResponse}
                                responses={responses}
                                aiResponses={aiResponses}
                                data-oid="_sm3s.s"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                data-oid="4zrse_r"
            >
                <motion.div
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    data-oid="t-:8f7n"
                >
                    <motion.div
                        className="w-1 h-3 bg-white/60 rounded-full mt-2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        data-oid="khv_zi5"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

// Interactive Chat Preview Component
interface MentorChatPreviewProps {
    currentResponse: number;
    showResponse: boolean;
    responses: string[];
    aiResponses: string[];
}

const MentorChatPreview: React.FC<MentorChatPreviewProps> = ({
    currentResponse,
    showResponse,
    responses,
    aiResponses,
}) => {
    return (
        <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-sm mx-auto" data-oid="n7hzvr4">
            {/* Chat Header */}
            <div className="flex items-center space-x-3 mb-6" data-oid=":pdsfou">
                <div
                    className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center"
                    data-oid="ic:q:9i"
                >
                    <span className="text-lg text-white" data-oid="31jgjyp">
                        🤖
                    </span>
                </div>
                <div data-oid="0ood:._">
                    <h3 className="font-semibold text-charcoal" data-oid="vnx67z.">
                        Your AI Mentor
                    </h3>
                    <p className="text-sm text-warm-gray" data-oid="u6bvcxd">
                        Always here to help
                    </p>
                </div>
            </div>

            {/* Chat Messages */}
            <div className="space-y-4 mb-6" data-oid="63vn_ur">
                {/* AI Message */}
                <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    data-oid="oa4yff0"
                >
                    <div
                        className="bg-gray-100 rounded-2xl rounded-tl-md px-4 py-3 max-w-xs"
                        data-oid="mo6bsh:"
                    >
                        <p className="text-sm text-charcoal" data-oid="d-n7-p2">
                            Hey! I noticed you're stressed about your upcoming exams. Want to talk
                            about it?
                        </p>
                    </div>
                </motion.div>

                {/* Interactive Response Options */}
                <div className="space-y-2" data-oid="032rj6m">
                    {responses.map((response, index) => (
                        <motion.button
                            key={index}
                            className={`w-full text-left px-4 py-3 rounded-2xl rounded-tr-md text-sm transition-all duration-300 ${
                                index === currentResponse && showResponse
                                    ? 'bg-orange-100 text-orange-600 border-2 border-orange-200'
                                    : 'bg-gray-50 text-charcoal hover:bg-gray-100'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            data-oid="23dkbvi"
                        >
                            {response}
                        </motion.button>
                    ))}
                </div>

                {/* AI Response */}
                {showResponse && (
                    <motion.div
                        className="flex justify-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        data-oid="fhvs-f3"
                    >
                        <div
                            className="bg-orange-100 rounded-2xl rounded-tl-md px-4 py-3 max-w-xs"
                            data-oid="bcmmrhn"
                        >
                            <p className="text-sm text-charcoal" data-oid="5u:hfkc">
                                {aiResponses[currentResponse]}
                            </p>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Typing Indicator */}
            {showResponse && (
                <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    data-oid="m0cij5y"
                >
                    <div
                        className="bg-gray-100 rounded-2xl rounded-tl-md px-4 py-3"
                        data-oid="_e4fg:u"
                    >
                        <div className="flex space-x-1" data-oid="0.5:6b.">
                            <div
                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                data-oid="401v_ef"
                            />

                            <div
                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                style={{ animationDelay: '0.1s' }}
                                data-oid="fgg_5-1"
                            />

                            <div
                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                style={{ animationDelay: '0.2s' }}
                                data-oid=":aacxnn"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Hero;
