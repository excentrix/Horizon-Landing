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
            data-oid="g27md--"
        >
            <div className="container-horizon" data-oid="r.6cxop">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    data-oid="58_iljt"
                >
                    <h2
                        className="text-4xl lg:text-5xl font-bold text-charcoal mb-6"
                        data-oid=":5zot:x"
                    >
                        Backed by{' '}
                        <span className="text-soft-orange" data-oid="3bwp-z4">
                            Research
                        </span>
                        , Built for{' '}
                        <span className="text-soft-orange" data-oid=".l9elhw">
                            Safety
                        </span>
                    </h2>
                    <p className="text-xl text-warm-gray max-w-3xl mx-auto" data-oid="8t5io_k">
                        Our approach is grounded in decades of educational research and built with
                        enterprise-grade security
                    </p>
                </motion.div>

                {/* Research Backing */}
                <div className="mb-24" data-oid="32fb2m6">
                    <motion.h3
                        className="text-3xl font-bold text-charcoal text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        data-oid="p.-jaf:"
                    >
                        The Science Behind Our Success
                    </motion.h3>

                    <div className="grid lg:grid-cols-3 gap-8" data-oid="rv3ml7g">
                        {researchPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-surface to-white rounded-2xl p-8 shadow-lg border border-soft"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                data-oid="wfs1nsp"
                            >
                                <h4
                                    className="text-xl font-bold text-charcoal mb-4"
                                    data-oid="oi:o8gp"
                                >
                                    {point.title}
                                </h4>
                                <p
                                    className="text-warm-gray mb-4 leading-relaxed"
                                    data-oid="4hqxo:m"
                                >
                                    {point.description}
                                </p>
                                <div className="space-y-2" data-oid="8wrkxi0">
                                    <p
                                        className="text-sm text-soft-orange font-medium"
                                        data-oid="uvnk1bm"
                                    >
                                        Source: {point.source}
                                    </p>
                                    <p
                                        className="text-lg font-bold text-charcoal"
                                        data-oid="unn9npo"
                                    >
                                        Impact: {point.impact}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Safety Measures */}
                <div className="mb-24" data-oid="_g1utjs">
                    <motion.h3
                        className="text-3xl font-bold text-charcoal text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        data-oid="my.2swi"
                    >
                        Your Safety is Our Priority
                    </motion.h3>

                    <div className="grid lg:grid-cols-2 gap-8" data-oid="_yv_j0y">
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
                                data-oid="rk64g1p"
                            >
                                <div className="flex items-start space-x-4" data-oid="zl.6ma:">
                                    <div
                                        className="w-16 h-16 bg-gradient-to-br from-soft-orange to-orange-600 rounded-xl flex items-center justify-center text-2xl text-white flex-shrink-0"
                                        data-oid="i8wb7n9"
                                    >
                                        {measure.icon}
                                    </div>
                                    <div className="flex-1" data-oid="_meaf04">
                                        <h4
                                            className="text-xl font-bold text-charcoal mb-3"
                                            data-oid="qc4omgz"
                                        >
                                            {measure.title}
                                        </h4>
                                        <p
                                            className="text-warm-gray mb-4 leading-relaxed"
                                            data-oid="21slk.s"
                                        >
                                            {measure.description}
                                        </p>
                                        <div className="space-y-2" data-oid="_jwr1-s">
                                            {measure.details.map((detail, detailIndex) => (
                                                <div
                                                    key={detailIndex}
                                                    className="flex items-center space-x-2"
                                                    data-oid="r6.jyh-"
                                                >
                                                    <div
                                                        className="w-1.5 h-1.5 bg-soft-orange rounded-full flex-shrink-0"
                                                        data-oid="8wt:1rr"
                                                    />

                                                    <span
                                                        className="text-sm text-warm-gray"
                                                        data-oid="-xchjs-"
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
                    data-oid="gyssri5"
                >
                    <h3 className="text-3xl font-bold mb-8" data-oid="43u93v_">
                        Trusted by Students Worldwide
                    </h3>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8" data-oid="d85mrae">
                        {trustIndicators.map((indicator, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={
                                    isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                                }
                                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                                data-oid="bijeye_"
                            >
                                <div
                                    className="text-4xl lg:text-5xl font-bold text-soft-orange mb-2"
                                    data-oid="-l1m8hi"
                                >
                                    {indicator.number}
                                </div>
                                <div className="text-lg text-gray-300" data-oid="lxg00wc">
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
                    data-oid="zpe6:ju"
                >
                    <p className="text-xl text-warm-gray mb-6" data-oid="e46e:.i">
                        Join thousands of students who trust us with their learning journey
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid=".6aad1l"
                    >
                        <button className="btn-primary" data-oid="z2sn.dy">
                            Join Waitlist
                        </button>
                        <button className="btn-outline" data-oid="jp7lolb">
                            Read Our Research
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ResearchSafety;
