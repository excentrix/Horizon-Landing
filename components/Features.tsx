'use client';

import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FeaturesProps {
    className?: string;
}

const Features: React.FC<FeaturesProps> = ({ className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

    const features = [
        {
            icon: '🧠',
            title: 'Personalized Learning Paths',
            description:
                'AI creates custom learning journeys based on your unique needs, goals, and learning style',
            benefits: [
                'Adaptive curriculum',
                'Progress tracking',
                'Goal alignment',
                'Learning style optimization',
            ],

            color: 'from-blue-500 to-blue-600',
            delay: 0.1,
        },
        {
            icon: '🌍',
            title: 'Multi-Language Support',
            description:
                'Communicate in your preferred language with cultural context and local relevance',
            benefits: [
                '15+ languages',
                'Cultural adaptation',
                'Local context',
                'Accent recognition',
            ],

            color: 'from-green-500 to-green-600',
            delay: 0.2,
        },
        {
            icon: '💬',
            title: '24/7 Emotional Support',
            description:
                'Get mental health guidance and emotional support whenever you need it, day or night',
            benefits: [
                'Crisis intervention',
                'Stress management',
                'Anxiety support',
                'Wellness coaching',
            ],

            color: 'from-purple-500 to-purple-600',
            delay: 0.3,
        },
        {
            icon: '🎯',
            title: 'Career Guidance',
            description:
                'Expert career advice tailored to your interests, skills, and market opportunities',
            benefits: ['Skill assessment', 'Market analysis', 'Resume building', 'Interview prep'],
            color: 'from-orange-500 to-orange-600',
            delay: 0.4,
        },
        {
            icon: '📊',
            title: 'Progress Analytics',
            description:
                'Track your growth with detailed insights and personalized recommendations',
            benefits: [
                'Performance metrics',
                'Learning analytics',
                'Improvement suggestions',
                'Achievement tracking',
            ],

            color: 'from-red-500 to-red-600',
            delay: 0.5,
        },
        {
            icon: '🔒',
            title: 'Privacy & Security',
            description: 'Enterprise-grade security with complete data privacy and confidentiality',
            benefits: [
                'End-to-end encryption',
                'GDPR compliance',
                'Data anonymization',
                'Secure infrastructure',
            ],

            color: 'from-indigo-500 to-indigo-600',
            delay: 0.6,
        },
    ];

    return (
        <section
            ref={ref}
            className={`py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-surface to-cream ${className}`}
            id="features"
            data-oid=".f15m7:"
        >
            <div className="container-horizon" data-oid="ys14wp9">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    data-oid="p2v7h9x"
                >
                    <h2
                        className="text-responsive-h2 font-bold text-dark mb-4 sm:mb-6"
                        data-oid="j052iow"
                    >
                        Why Choose{' '}
                        <span className="text-soft-orange" data-oid="j44rs0_">
                            Project Horizon
                        </span>
                    </h2>
                    <p
                        className="text-responsive-body text-medium max-w-3xl mx-auto px-4"
                        data-oid="xswk3y3"
                    >
                        Our AI mentors combine cutting-edge technology with the warmth and
                        understanding of a caring parent
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20"
                    data-oid="yt5vw.c"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: feature.delay }}
                            onHoverStart={() => setHoveredFeature(index)}
                            onHoverEnd={() => setHoveredFeature(null)}
                            data-oid="ol88til"
                        >
                            <div className="feature-card group-hover:shadow-2xl" data-oid="0a0om2y">
                                {/* Feature Icon */}
                                <div className="mb-6 relative z-10" data-oid="8.080lh">
                                    <motion.div
                                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                                        whileHover={{ rotate: 5 }}
                                        data-oid="0fer11p"
                                    >
                                        {feature.icon}
                                    </motion.div>
                                    <h3
                                        className="text-xl font-bold text-dark mb-3 group-hover:text-soft-orange transition-colors duration-300"
                                        data-oid="64i.oma"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        className="text-medium leading-relaxed group-hover:text-dark transition-colors duration-300"
                                        data-oid="tz.1yq_"
                                    >
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Feature Benefits */}
                                <div className="space-y-2 relative z-10" data-oid="7fhd:h5">
                                    {feature.benefits.map((benefit, benefitIndex) => (
                                        <motion.div
                                            key={benefitIndex}
                                            className="flex items-center space-x-2"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={
                                                isInView
                                                    ? { opacity: 1, x: 0 }
                                                    : { opacity: 0, x: -10 }
                                            }
                                            transition={{
                                                duration: 0.4,
                                                delay: feature.delay + benefitIndex * 0.1,
                                            }}
                                            data-oid="39j2bzu"
                                        >
                                            <motion.div
                                                className="w-1.5 h-1.5 bg-soft-orange rounded-full flex-shrink-0"
                                                whileHover={{ scale: 1.5 }}
                                                transition={{ duration: 0.2 }}
                                                data-oid="o1i87-:"
                                            />

                                            <span
                                                className="text-sm text-medium group-hover:text-dark transition-colors duration-300"
                                                data-oid="kgv:y:b"
                                            >
                                                {benefit}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Hover Effect Overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-orange-50/80 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredFeature === index ? 1 : 0 }}
                                    data-oid="t:fzm7r"
                                />

                                {/* Floating Elements on Hover */}
                                <motion.div
                                    className="absolute -top-2 -right-2 w-16 h-16 bg-soft-orange/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    data-oid="nrby2xo"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Demo Section */}
                <motion.div
                    className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-soft hover:shadow-2xl transition-all duration-500"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    whileHover={{ y: -5 }}
                    data-oid="aqcs7td"
                >
                    <div
                        className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                        data-oid="hy:xpz2"
                    >
                        {/* Left Column - Demo Content */}
                        <div className="space-y-4 sm:space-y-6" data-oid="evv5j5j">
                            <h3
                                className="text-2xl sm:text-3xl font-bold text-dark"
                                data-oid="kvzrlpr"
                            >
                                See It In Action
                            </h3>
                            <p className="text-lg text-medium leading-relaxed" data-oid="2nt8flp">
                                Experience how our AI mentor adapts to your needs in real-time.
                                Watch as it learns your preferences and provides personalized
                                guidance.
                            </p>

                            <div className="space-y-3 sm:space-y-4" data-oid="uzwqtyp">
                                {[
                                    'Real-time language adaptation',
                                    'Context-aware responses',
                                    'Emotional intelligence',
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center space-x-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={
                                            isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                                        }
                                        transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                                        data-oid="z0:8pkn"
                                    >
                                        <motion.div
                                            className="w-2 h-2 bg-soft-orange rounded-full flex-shrink-0"
                                            whileHover={{ scale: 1.5 }}
                                            transition={{ duration: 0.2 }}
                                            data-oid="4qlfc3i"
                                        />

                                        <span
                                            className="text-medium group-hover:text-dark transition-colors duration-300"
                                            data-oid="hn0kv0h"
                                        >
                                            {item}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.button
                                className="btn-primary w-full sm:w-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                data-oid="xrzjt1d"
                            >
                                Try Interactive Demo
                            </motion.button>
                        </div>

                        {/* Right Column - Demo Interface */}
                        <div className="relative" data-oid="6.8jedy">
                            <div
                                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 sm:p-6 border border-soft"
                                data-oid="xkegc6n"
                            >
                                <div className="space-y-3 sm:space-y-4" data-oid="qb-.ri.">
                                    {/* Demo Chat Messages */}
                                    <motion.div
                                        className="flex justify-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={
                                            isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                                        }
                                        transition={{ duration: 0.5, delay: 1.2 }}
                                        data-oid="0hn0hp7"
                                    >
                                        <div
                                            className="bg-white rounded-2xl rounded-tl-md px-3 sm:px-4 py-2 sm:py-3 max-w-xs shadow-sm"
                                            data-oid="16fhyrk"
                                        >
                                            <p className="text-sm text-dark" data-oid="anzdae.">
                                                Hi! I&apos;m here to help you with your studies.
                                                What would you like to work on today?
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="flex justify-end"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={
                                            isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                                        }
                                        transition={{ duration: 0.5, delay: 1.4 }}
                                        data-oid="g0mwv-s"
                                    >
                                        <div
                                            className="bg-soft-orange text-white rounded-2xl rounded-tr-md px-3 sm:px-4 py-2 sm:py-3 max-w-xs"
                                            data-oid="678c-:6"
                                        >
                                            <p className="text-sm" data-oid="-79ygdv">
                                                I&apos;m struggling with math. Can you help me
                                                understand calculus?
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="flex justify-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={
                                            isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                                        }
                                        transition={{ duration: 0.5, delay: 1.6 }}
                                        data-oid="8c4w5nh"
                                    >
                                        <div
                                            className="bg-white rounded-2xl rounded-tl-md px-3 sm:px-4 py-2 sm:py-3 max-w-xs shadow-sm"
                                            data-oid=".cggfzk"
                                        >
                                            <p className="text-sm text-dark" data-oid="t2dmsdq">
                                                Of course! I&apos;ll create a personalized learning
                                                plan for you. Let&apos;s start with the basics...
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Typing Indicator */}
                                <motion.div
                                    className="flex justify-start mt-3 sm:mt-4"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 1.8 }}
                                    data-oid="k47hkap"
                                >
                                    <div
                                        className="bg-white rounded-2xl rounded-tl-md px-3 sm:px-4 py-2 sm:py-3"
                                        data-oid="i0vc5o-"
                                    >
                                        <div className="flex space-x-1" data-oid="ihz.pme">
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
                                                    data-oid="qcpooid"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                className="absolute -top-2 -right-2 w-12 h-12 sm:w-16 sm:h-16 bg-soft-orange/20 rounded-full blur-xl"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                data-oid="p9bcbkq"
                            />

                            <motion.div
                                className="absolute -bottom-2 -left-2 w-8 h-8 sm:w-12 sm:h-12 bg-charcoal/20 rounded-full blur-xl"
                                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                data-oid="smiqtl-"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-12 sm:mt-16 lg:mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    data-oid="ka8ura9"
                >
                    <p
                        className="text-lg sm:text-xl text-medium mb-4 sm:mb-6 px-4"
                        data-oid="mnp9pp2"
                    >
                        Ready to experience the future of personalized learning?
                    </p>
                    <motion.button
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        data-oid="91ltbge"
                    >
                        Get Started Today
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
