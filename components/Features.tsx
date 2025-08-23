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
            className={`py-32 bg-gradient-to-br from-surface to-cream ${className}`}
            id="features"
            data-oid="au.v8j6"
        >
            <div className="container-horizon" data-oid="a4-uop:">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    data-oid="bxrptx3"
                >
                    <h2
                        className="text-4xl lg:text-5xl font-bold text-charcoal mb-6"
                        data-oid="8kmrm50"
                    >
                        Why Choose{' '}
                        <span className="text-soft-orange" data-oid="iwseia_">
                            Project Horizon
                        </span>
                    </h2>
                    <p className="text-xl text-warm-gray max-w-3xl mx-auto" data-oid="_jywxp_">
                        Our AI mentors combine cutting-edge technology with the warmth and
                        understanding of a caring parent
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20" data-oid="yh6e_uk">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: feature.delay }}
                            onHoverStart={() => setHoveredFeature(index)}
                            onHoverEnd={() => setHoveredFeature(null)}
                            data-oid="hmojc.5"
                        >
                            <div
                                className="bg-white rounded-2xl p-8 shadow-lg border border-soft hover:shadow-xl transition-all duration-300 h-full"
                                data-oid="wqr1-b2"
                            >
                                {/* Feature Icon */}
                                <div className="mb-6" data-oid="3byw04.">
                                    <div
                                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                                        data-oid="w-pacyd"
                                    >
                                        {feature.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-charcoal mb-3"
                                        data-oid="9saomls"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        className="text-warm-gray leading-relaxed"
                                        data-oid="-jxrm96"
                                    >
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Feature Benefits */}
                                <div className="space-y-2" data-oid="e7gax50">
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
                                            data-oid="1-0o2-v"
                                        >
                                            <div
                                                className="w-1.5 h-1.5 bg-soft-orange rounded-full flex-shrink-0"
                                                data-oid="5v25c4u"
                                            />

                                            <span
                                                className="text-sm text-warm-gray"
                                                data-oid="gfonfz2"
                                            >
                                                {benefit}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Hover Effect Overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-soft-orange/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredFeature === index ? 1 : 0 }}
                                    data-oid="o7lhbn5"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Demo Section */}
                <motion.div
                    className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-soft"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    data-oid="_a2qr6j"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center" data-oid="biq5qoz">
                        {/* Left Column - Demo Content */}
                        <div className="space-y-6" data-oid="o2nh.xe">
                            <h3 className="text-3xl font-bold text-charcoal" data-oid="vu:qo2_">
                                See It In Action
                            </h3>
                            <p
                                className="text-lg text-warm-gray leading-relaxed"
                                data-oid="a2k2f68"
                            >
                                Experience how our AI mentor adapts to your needs in real-time.
                                Watch as it learns your preferences and provides personalized
                                guidance.
                            </p>

                            <div className="space-y-4" data-oid="69wi2f0">
                                <div className="flex items-center space-x-3" data-oid="wd.s2sc">
                                    <div
                                        className="w-2 h-2 bg-soft-orange rounded-full"
                                        data-oid="ec0uwbt"
                                    />

                                    <span className="text-warm-gray" data-oid="meai-5z">
                                        Real-time language adaptation
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3" data-oid="vwrzpz8">
                                    <div
                                        className="w-2 h-2 bg-soft-orange rounded-full"
                                        data-oid="3vl8n-9"
                                    />

                                    <span className="text-warm-gray" data-oid="l2f64jv">
                                        Context-aware responses
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3" data-oid="ttqckru">
                                    <div
                                        className="w-2 h-2 bg-soft-orange rounded-full"
                                        data-oid="z1kboor"
                                    />

                                    <span className="text-warm-gray" data-oid="3_bj1pv">
                                        Emotional intelligence
                                    </span>
                                </div>
                            </div>

                            <button className="btn-primary" data-oid="te:xf82">
                                Try Interactive Demo
                            </button>
                        </div>

                        {/* Right Column - Demo Interface */}
                        <div className="relative" data-oid="vh:a1pd">
                            <div
                                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-soft"
                                data-oid="aw2gq.o"
                            >
                                <div className="space-y-4" data-oid="34z:c7f">
                                    {/* Demo Chat Messages */}
                                    <div className="flex justify-start" data-oid="u0uw76y">
                                        <div
                                            className="bg-white rounded-2xl rounded-tl-md px-4 py-3 max-w-xs shadow-sm"
                                            data-oid="xpzuluj"
                                        >
                                            <p className="text-sm text-charcoal" data-oid="v:otg7b">
                                                Hi! I'm here to help you with your studies. What
                                                would you like to work on today?
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-end" data-oid="hq6l-vl">
                                        <div
                                            className="bg-soft-orange text-white rounded-2xl rounded-tr-md px-4 py-3 max-w-xs"
                                            data-oid="46c3mt:"
                                        >
                                            <p className="text-sm" data-oid="wjojehc">
                                                I'm struggling with math. Can you help me understand
                                                calculus?
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-start" data-oid="u-bdjqv">
                                        <div
                                            className="bg-white rounded-2xl rounded-tl-md px-4 py-3 max-w-xs shadow-sm"
                                            data-oid=".yo72q:"
                                        >
                                            <p className="text-sm text-charcoal" data-oid="vuwn1hh">
                                                Of course! I'll create a personalized learning plan
                                                for you. Let's start with the basics...
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Typing Indicator */}
                                <div className="flex justify-start mt-4" data-oid="56v1oh6">
                                    <div
                                        className="bg-white rounded-2xl rounded-tl-md px-4 py-3"
                                        data-oid="7ukafqv"
                                    >
                                        <div className="flex space-x-1" data-oid="e:kb-d_">
                                            <div
                                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                data-oid=":xh7vnt"
                                            />

                                            <div
                                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                style={{ animationDelay: '0.1s' }}
                                                data-oid="lruq9e2"
                                            />

                                            <div
                                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                style={{ animationDelay: '0.2s' }}
                                                data-oid="c1xomd3"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-16 h-16 bg-soft-orange/20 rounded-full blur-xl"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                data-oid="eklwr1b"
                            />

                            <motion.div
                                className="absolute -bottom-4 -left-4 w-12 h-12 bg-charcoal/20 rounded-full blur-xl"
                                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                data-oid="n1pkv1-"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    data-oid="fxmv:z7"
                >
                    <p className="text-xl text-warm-gray mb-6" data-oid="57rjk40">
                        Ready to experience the future of personalized learning?
                    </p>
                    <button className="btn-primary" data-oid="9690in5">
                        Get Started Today
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
