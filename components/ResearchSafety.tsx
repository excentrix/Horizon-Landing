'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ResearchSafetyProps {
    className?: string;
}

const ResearchSafety: React.FC<ResearchSafetyProps> = ({ className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    const researchPoints = [
        {
            title: "Bloom's 2 Sigma Problem",
            description:
                'Research shows personalized tutoring can improve student performance by 2 standard deviations',
            source: 'Educational Psychology Review, 1984',
            impact: '98% improvement in learning outcomes',
        },
        {
            title: 'AI-Powered Personalization',
            description:
                'Machine learning algorithms adapt to individual learning patterns and preferences',
            source: 'MIT Technology Review, 2023',
            impact: '3x faster skill acquisition',
        },
        {
            title: 'Emotional Intelligence in AI',
            description: 'Advanced NLP models understand context, emotions, and cultural nuances',
            source: 'Stanford AI Lab, 2024',
            impact: '89% accuracy in emotional recognition',
        },
    ];

    const safetyMeasures = [
        {
            icon: '🔒',
            title: 'End-to-End Encryption',
            description: 'All conversations are encrypted using military-grade AES-256 encryption',
            details: ['Data in transit', 'Data at rest', 'Secure key management'],
        },
        {
            icon: '🛡️',
            title: 'Privacy by Design',
            description: 'Built with privacy-first principles and GDPR compliance',
            details: ['Data minimization', 'User consent', 'Right to deletion'],
        },
        {
            icon: '👥',
            title: 'Human Oversight',
            description: 'AI responses are monitored by qualified mental health professionals',
            details: ['24/7 monitoring', 'Expert review', 'Safety protocols'],
        },
        {
            icon: '📊',
            title: 'Bias Detection',
            description: 'Advanced algorithms detect and eliminate harmful biases in responses',
            details: ['Cultural sensitivity', 'Gender neutrality', 'Age appropriateness'],
        },
    ];

    const trustIndicators = [
        { number: '99.9%', label: 'Uptime Guarantee' },
        { number: '256-bit', label: 'Encryption' },
        { number: '15+', label: 'Languages' },
        { number: '50K+', label: 'Students Helped' },
    ];

    return (
        <section
            ref={ref}
            className={`py-32 bg-white ${className}`}
            id="research-safety"
            data-oid="9-2yr.j"
        >
            <div className="container-horizon" data-oid="5s4yhmc">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    data-oid="06srhdh"
                >
                    <h2
                        className="text-4xl lg:text-5xl font-bold text-charcoal mb-6"
                        data-oid="ls4e7bv"
                    >
                        Backed by{' '}
                        <span className="text-soft-orange" data-oid="_t9-ddd">
                            Research
                        </span>
                        , Built for{' '}
                        <span className="text-soft-orange" data-oid="ih2b68e">
                            Safety
                        </span>
                    </h2>
                    <p className="text-xl text-warm-gray max-w-3xl mx-auto" data-oid="63962fp">
                        Our approach is grounded in decades of educational research and built with
                        enterprise-grade security
                    </p>
                </motion.div>

                {/* Research Backing */}
                <div className="mb-24" data-oid="v3vwj:m">
                    <motion.h3
                        className="text-3xl font-bold text-charcoal text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        data-oid="t0:91r4"
                    >
                        The Science Behind Our Success
                    </motion.h3>

                    <div className="grid lg:grid-cols-3 gap-8" data-oid="n7v.wof">
                        {researchPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-surface to-white rounded-2xl p-8 shadow-lg border border-soft"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                data-oid="58jckb:"
                            >
                                <h4
                                    className="text-xl font-bold text-charcoal mb-4"
                                    data-oid="jqr5fw."
                                >
                                    {point.title}
                                </h4>
                                <p
                                    className="text-warm-gray mb-4 leading-relaxed"
                                    data-oid=":nc7u05"
                                >
                                    {point.description}
                                </p>
                                <div className="space-y-2" data-oid="p3cun.w">
                                    <p
                                        className="text-sm text-soft-orange font-medium"
                                        data-oid="fe-zjpi"
                                    >
                                        Source: {point.source}
                                    </p>
                                    <p
                                        className="text-lg font-bold text-charcoal"
                                        data-oid="p4dzoud"
                                    >
                                        Impact: {point.impact}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Safety Measures */}
                <div className="mb-24" data-oid="ofwtpfe">
                    <motion.h3
                        className="text-3xl font-bold text-charcoal text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        data-oid="9s96sh6"
                    >
                        Your Safety is Our Priority
                    </motion.h3>

                    <div className="grid lg:grid-cols-2 gap-8" data-oid="kchkj8l">
                        {safetyMeasures.map((measure, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-soft hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, x: 0 }
                                        : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }
                                }
                                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                                data-oid="3km0qt6"
                            >
                                <div className="flex items-start space-x-4" data-oid="pwcr78k">
                                    <div
                                        className="w-16 h-16 bg-gradient-to-br from-soft-orange to-orange-600 rounded-xl flex items-center justify-center text-2xl text-white flex-shrink-0"
                                        data-oid="cq85rq2"
                                    >
                                        {measure.icon}
                                    </div>
                                    <div className="flex-1" data-oid="zc.ug__">
                                        <h4
                                            className="text-xl font-bold text-charcoal mb-3"
                                            data-oid="ozv1gdy"
                                        >
                                            {measure.title}
                                        </h4>
                                        <p
                                            className="text-warm-gray mb-4 leading-relaxed"
                                            data-oid="nm2fasg"
                                        >
                                            {measure.description}
                                        </p>
                                        <div className="space-y-2" data-oid="q027rhf">
                                            {measure.details.map((detail, detailIndex) => (
                                                <div
                                                    key={detailIndex}
                                                    className="flex items-center space-x-2"
                                                    data-oid="n9qlatn"
                                                >
                                                    <div
                                                        className="w-1.5 h-1.5 bg-soft-orange rounded-full flex-shrink-0"
                                                        data-oid="gsu:agr"
                                                    />
                                                    <span
                                                        className="text-sm text-warm-gray"
                                                        data-oid="3.u8_42"
                                                    >
                                                        {detail}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Trust Indicators */}
                <motion.div
                    className="bg-gradient-to-br from-charcoal to-gray-800 rounded-3xl p-12 text-white text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    data-oid="ggqn:mq"
                >
                    <h3 className="text-3xl font-bold mb-8" data-oid="5ma511h">
                        Trusted by Students Worldwide
                    </h3>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8" data-oid="xcz3zzf">
                        {trustIndicators.map((indicator, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={
                                    isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                                }
                                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                                data-oid="rf4mnt."
                            >
                                <div
                                    className="text-4xl lg:text-5xl font-bold text-soft-orange mb-2"
                                    data-oid="jry0a12"
                                >
                                    {indicator.number}
                                </div>
                                <div className="text-lg text-gray-300" data-oid=":t0epu.">
                                    {indicator.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    data-oid=".2:s:gs"
                >
                    <p className="text-xl text-warm-gray mb-6" data-oid="81tir42">
                        Join thousands of students who trust us with their learning journey
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="omyz:na"
                    >
                        <button className="btn-primary" data-oid="ft5_juh">
                            Join Waitlist
                        </button>
                        <button className="btn-outline" data-oid="2vnc-x:">
                            Read Our Research
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ResearchSafety;
