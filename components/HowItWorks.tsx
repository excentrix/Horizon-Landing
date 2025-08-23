'use client';

import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface HowItWorksProps {
    className?: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            number: '01',
            title: 'Tell Us About You',
            description: 'Share your background, goals, and challenges in your preferred language',
            icon: '👤',
            color: 'from-blue-500 to-blue-600',
            details: [
                'Academic background & interests',
                'Career aspirations & goals',
                'Personal challenges & concerns',
                'Language preferences',
                'Learning style assessment',
            ],
        },
        {
            number: '02',
            title: 'AI Creates Your Mentor',
            description: 'Our AI builds a personalized mentor profile based on your unique needs',
            icon: '🤖',
            color: 'from-purple-500 to-purple-600',
            details: [
                'Personality matching algorithm',
                'Cultural context integration',
                'Subject expertise mapping',
                'Communication style adaptation',
                'Emotional intelligence calibration',
            ],
        },
        {
            number: '03',
            title: 'Start Your Journey',
            description: 'Begin conversations with your AI mentor through text, voice, or video',
            icon: '🚀',
            color: 'from-orange-500 to-orange-600',
            details: [
                'Multi-modal communication',
                '24/7 availability',
                'Context-aware responses',
                'Progressive learning paths',
                'Real-time feedback loops',
            ],
        },
        {
            number: '04',
            title: 'Grow & Evolve',
            description:
                'Your mentor learns and adapts as you progress, ensuring continuous improvement',
            icon: '📈',
            color: 'from-green-500 to-green-600',
            details: [
                'Adaptive learning algorithms',
                'Progress tracking & analytics',
                'Goal achievement milestones',
                'Continuous improvement loops',
                'Long-term relationship building',
            ],
        },
    ];

    return (
        <section
            ref={ref}
            className={`py-32 bg-white ${className}`}
            id="how-it-works"
            data-oid=".-1.b8k"
        >
            <div className="container-horizon" data-oid="vragmhm">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    data-oid="a-p2iac"
                >
                    <h2
                        className="text-4xl lg:text-5xl font-bold text-charcoal mb-6"
                        data-oid="6idtpsr"
                    >
                        How It{' '}
                        <span className="text-soft-orange" data-oid="9gvu5i1">
                            Works
                        </span>
                    </h2>
                    <p className="text-xl text-warm-gray max-w-3xl mx-auto" data-oid="lkqi:.j">
                        In just 4 simple steps, you'll have your own AI mentor who understands you
                        like a caring parent would
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-start" data-oid="u-kcx9.">
                    {/* Left Column - Step Navigation */}
                    <div className="space-y-6" data-oid="i2a4afv">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className={`relative cursor-pointer transition-all duration-300 ${
                                    activeStep === index ? 'scale-105' : 'hover:scale-102'
                                }`}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                onClick={() => setActiveStep(index)}
                                data-oid="_cl5gms"
                            >
                                <div
                                    className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                                        activeStep === index
                                            ? 'border-soft-orange bg-orange-50 shadow-lg'
                                            : 'border-soft hover:border-soft-orange/50 bg-white'
                                    }`}
                                    data-oid="c11p4rt"
                                >
                                    <div className="flex items-start space-x-4" data-oid=".1xkrst">
                                        <div
                                            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl text-white font-bold flex-shrink-0 ${
                                                activeStep === index ? 'scale-110' : ''
                                            } transition-transform duration-300`}
                                            data-oid="1sovsr3"
                                        >
                                            {step.number}
                                        </div>
                                        <div className="flex-1" data-oid="soeprt0">
                                            <h3
                                                className="text-xl font-semibold text-charcoal mb-2"
                                                data-oid="pt54ccr"
                                            >
                                                {step.title}
                                            </h3>
                                            <p
                                                className="text-warm-gray leading-relaxed"
                                                data-oid="zof9-vl"
                                            >
                                                {step.description}
                                            </p>
                                        </div>
                                        <div className="text-3xl" data-oid="m7.cvct">
                                            {step.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Active Step Indicator */}
                                {activeStep === index && (
                                    <motion.div
                                        className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-soft-orange rounded-full"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                        data-oid=":sulj4j"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column - Step Details */}
                    <motion.div
                        className="sticky top-32"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        data-oid="7rvfr5w"
                    >
                        <div
                            className="bg-gradient-to-br from-surface to-white rounded-3xl p-8 shadow-xl border border-soft"
                            data-oid="mld6212"
                        >
                            {/* Step Header */}
                            <div className="text-center mb-8" data-oid="oj6kdb7">
                                <div
                                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center text-3xl text-white mx-auto mb-4`}
                                    data-oid="1hbwn7e"
                                >
                                    {steps[activeStep].icon}
                                </div>
                                <h3
                                    className="text-2xl font-bold text-charcoal mb-2"
                                    data-oid="gj44wr5"
                                >
                                    {steps[activeStep].title}
                                </h3>
                                <p className="text-warm-gray text-lg" data-oid="b64mll-">
                                    {steps[activeStep].description}
                                </p>
                            </div>

                            {/* Step Details */}
                            <div className="space-y-4" data-oid="beeq2.z">
                                <h4
                                    className="font-semibold text-charcoal text-lg mb-4"
                                    data-oid="p3_10u5"
                                >
                                    What happens during this step:
                                </h4>
                                {steps[activeStep].details.map((detail, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center space-x-3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        data-oid="2-pakp:"
                                    >
                                        <div
                                            className="w-2 h-2 bg-soft-orange rounded-full flex-shrink-0"
                                            data-oid="d-tw231"
                                        />

                                        <span className="text-warm-gray" data-oid="dqf7:ag">
                                            {detail}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Interactive Demo Preview */}
                            <motion.div
                                className="mt-8 p-6 bg-white rounded-2xl border border-soft"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                data-oid="nuxjr7y"
                            >
                                <h4 className="font-semibold text-charcoal mb-3" data-oid="uzii9x:">
                                    Preview of this step:
                                </h4>
                                <div
                                    className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4"
                                    data-oid=":iibzkz"
                                >
                                    <div className="flex items-center space-x-3" data-oid="nn6pif9">
                                        <div
                                            className="w-3 h-3 bg-green-400 rounded-full animate-pulse"
                                            data-oid="p_cggm:"
                                        />

                                        <span className="text-sm text-warm-gray" data-oid="_-d9.l7">
                                            {activeStep === 0 &&
                                                'Student profile creation interface'}
                                            {activeStep === 1 && 'AI mentor generation process'}
                                            {activeStep === 2 && 'Chat interface with mentor'}
                                            {activeStep === 3 && 'Progress dashboard & analytics'}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    data-oid="lywjapv"
                >
                    <p className="text-xl text-warm-gray mb-6" data-oid="s2ri8o6">
                        Ready to meet your AI mentor? The journey starts with a simple conversation.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="meq__zd"
                    >
                        <button className="btn-primary" data-oid="hvm_w2l">
                            Start Your Journey
                        </button>
                        <button className="btn-outline" data-oid="hqnncn:">
                            Watch Demo Video
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
