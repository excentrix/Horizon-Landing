'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import RichTooltip from './smoothui/richPopover';
import { FaWikipediaW } from 'react-icons/fa';
import { Particles } from './magicui/particles';
import { LinkPreview } from './ui/link-preview';

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
            data-oid="epi5zk:"
        >
            {/* Background Elements */}
            <div className="absolute inset-0" data-oid="ty_-36:">
                <div className="absolute inset-0 bg-pattern-dots opacity-10" data-oid="eil.xz7" />
                <Particles quantity={200} data-oid="agked_z" />{' '}
                <motion.div
                    className="absolute top-20 left-20 w-24 h-24 sm:w-32 sm:h-32 bg-orange-500/20 rounded-full blur-xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    data-oid="uj::sk7"
                />
                <motion.div
                    className="absolute top-40 right-20 sm:right-32 w-16 h-16 sm:w-24 sm:h-24 bg-orange-400/20 rounded-full blur-xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    data-oid="0ozwd8r"
                />
                <motion.div
                    className="absolute bottom-40 left-20 sm:left-32 w-12 h-12 sm:w-20 sm:h-20 bg-orange-300/20 rounded-full blur-xl"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                    data-oid="3k1_2by"
                />
            </div>
            {/* Content */}
            <div className="container-horizon relative z-10" data-oid="595p-yu">
                <div
                    className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                    data-oid="mn44fig"
                >
                    {/* Left Column - Main Content */}
                    <motion.div
                        className="text-center lg:text-left space-y-6 sm:space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                        data-oid="b2:f1cd"
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            data-oid="flv8a6n"
                        >
                            <RichTooltip
                                trigger={
                                    <div
                                        className="flex items-center gap-2 bg-orange-100 text-orange-600 px-3 sm:px-4 py-2 rounded-full text-sm font-medium "
                                        data-oid="j_9pvfb"
                                    >
                                        <span data-oid="xng.hv8">
                                            <FaWikipediaW
                                                className="h-6 w-6 bg-white rounded-full p-1"
                                                data-oid="9566bw6"
                                            />
                                        </span>
                                        <span data-oid="l_cldk8">
                                            Solving Bloom's 2 Sigma Problem
                                        </span>
                                    </div>
                                }
                                title="Solving Bloom's 2 Sigma Problem"
                                description="Bloom's 2 sigma problem refers to the educational phenomenon that the average student tutored one-to-one using mastery learning techniques performed two standard deviations better than students educated in a classroom environment."
                                icon={<FaWikipediaW className="h-6 w-6 " data-oid="i3xkonf" />}
                                href="https://en.wikipedia.org/wiki/Bloom%27s_2_sigma_problem"
                                actionLabel="Read Article"
                                meta="2 min read"
                                actionHref="https://en.wikipedia.org/wiki/Bloom%27s_2_sigma_problem"
                                data-oid="nd2q.n4"
                            />
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            data-oid="nzh49a_"
                        >
                            Your Personal AI Mentor,
                            <span className="block gradient-text mt-2" data-oid="4f762-w">
                                Just Like Your Parents Once Were
                            </span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl lg:max-w-none px-4 lg:px-0"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            data-oid="pzxtjrs"
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
                            data-oid="cw56cep"
                        >
                            {[
                                { icon: '🎯', text: 'Career Guidance' },
                                { icon: '📚', text: 'Academic Support' },
                                { icon: '💚', text: 'Mental Wellness' },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center lg:items-start space-y-2 group"
                                    whileHover={{ y: -2 }}
                                    transition={{ duration: 0.2 }}
                                    data-oid="o8eiv-e"
                                >
                                    <motion.span
                                        className="text-2xl group-hover:scale-110 transition-transform duration-200"
                                        whileHover={{ rotate: 5 }}
                                        data-oid="r89.ql5"
                                    >
                                        {item.icon}
                                    </motion.span>
                                    <span
                                        className="text-sm text-gray-300 font-medium group-hover:text-orange-300 transition-colors duration-200"
                                        data-oid="g4u3z22"
                                    >
                                        {item.text}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                            data-oid="n8m.149"
                        >
                            <motion.button
                                className="btn-primary w-full sm:w-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                data-oid="w00wyy_"
                            >
                                Get Your AI Mentor
                            </motion.button>
                            <motion.button
                                className="btn-outline w-full sm:w-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                data-oid="ruaiux3"
                            >
                                See How It Works
                            </motion.button>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            className="text-center lg:text-left"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            data-oid="9n0de1w"
                        >
                            <p className="text-gray-300 text-sm" data-oid="1wy9boa">
                                Trusted by students from{' '}
                                <span className="text-orange-400 font-semibold" data-oid="k61bwu0">
                                    50+ colleges
                                </span>
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Interactive Chat Preview */}
                    <motion.div
                        className="flex justify-center lg:justify-end px-4 lg:px-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        data-oid="9xbu1g3"
                    >
                        <div className="w-full max-w-sm sm:max-w-md" data-oid="5kh0m4g">
                            <MentorChatPreview
                                currentResponse={currentResponse}
                                showResponse={showResponse}
                                responses={responses}
                                aiResponses={aiResponses}
                                data-oid="qs5esic"
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
                data-oid="_86z1x8"
            >
                <motion.div
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer group"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    whileHover={{ scale: 1.1, borderColor: 'rgba(255,255,255,0.6)' }}
                    data-oid="pkk03ml"
                >
                    <motion.div
                        className="w-1 h-3 bg-white/60 rounded-full mt-2 group-hover:bg-white/80 transition-colors duration-200"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        data-oid="3op18i9"
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
        <motion.div
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 max-w-sm mx-auto"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            data-oid="k4vaclg"
        >
            {/* Chat Header */}
            <div className="flex items-center space-x-3 mb-4 sm:mb-6" data-oid="i62c49p">
                <motion.div
                    className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.2 }}
                    data-oid="fmyr-wt"
                >
                    <span className="text-lg text-white" data-oid="czxbbol">
                        🤖
                    </span>
                </motion.div>
                <div data-oid="4ygklsm">
                    <h3 className="font-semibold text-dark" data-oid="du4nu-v">
                        Your AI Mentor
                    </h3>
                    <p className="text-sm text-medium" data-oid=".fpt4sc">
                        Always here to help
                    </p>
                </div>
            </div>

            {/* Chat Messages */}
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6" data-oid="_1jm3nh">
                {/* AI Message */}
                <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    data-oid="_9oiv7o"
                >
                    <div
                        className="bg-gray-100 rounded-2xl rounded-tl-md px-3 sm:px-4 py-2 sm:py-3 max-w-xs"
                        data-oid="_zl3pt4"
                    >
                        <p className="text-sm text-dark" data-oid="zpo2x42">
                            Hey! I noticed you're stressed about your upcoming exams. Want to talk
                            about it?
                        </p>
                    </div>
                </motion.div>

                {/* Interactive Response Options */}
                <div className="space-y-2" data-oid="ojg1tm9">
                    {responses.map((response, index) => (
                        <motion.button
                            key={index}
                            className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-2xl rounded-tr-md text-sm transition-all duration-300 ${
                                index === currentResponse && showResponse
                                    ? 'bg-orange-100 text-orange-600 border-2 border-orange-200'
                                    : 'bg-gray-50 text-dark hover:bg-gray-100'
                            }`}
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            data-oid="aq:d730"
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
                        data-oid="05wk33z"
                    >
                        <div
                            className="bg-orange-100 rounded-2xl rounded-tl-md px-3 sm:px-4 py-2 sm:py-3 max-w-xs"
                            data-oid="nctmnov"
                        >
                            <p className="text-sm text-dark" data-oid="aodc3md">
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
                    data-oid="6f0.eh3"
                >
                    <div
                        className="bg-gray-100 rounded-2xl rounded-tl-md px-3 sm:px-4 py-2 sm:py-3"
                        data-oid="7i2.6-8"
                    >
                        <div className="flex space-x-1" data-oid="jm7r0iw">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 bg-gray-400 rounded-full"
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{
                                        duration: 0.6,
                                        repeat: Infinity,
                                        delay: i * 0.1,
                                    }}
                                    data-oid="qbvcdyh"
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Hero;
