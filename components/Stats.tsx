'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Counter from './Counter';

interface StatsProps {
    className?: string;
}

const Stats: React.FC<StatsProps> = ({ className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    const statsData = [
        {
            id: 1,
            number: 1000000,
            label: 'Users Worldwide',
            description: 'Active users across the globe',
            icon: '🌍',
        },
        {
            id: 2,
            number: 99.9,
            label: 'Uptime',
            description: 'Reliable service guarantee',
            icon: '⚡',
            suffix: '%',
            decimal: 1,
        },
        {
            id: 3,
            number: 500,
            label: 'Enterprise Clients',
            description: 'Trusted by leading companies',
            icon: '🏢',
        },
        {
            id: 4,
            number: 24,
            label: 'Hours Support',
            description: 'Round-the-clock assistance',
            icon: '🛠️',
            suffix: '/7',
        },
    ];

    return (
        <section
            ref={ref}
            className={`py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white ${className}`}
            id="stats"
            data-oid="bvu7t8n"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="3w7-ofy">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    data-oid="i1rd91."
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" data-oid="jk.tq85">
                        Trusted by Millions
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto" data-oid="fviwzcn">
                        Our platform powers digital experiences for businesses of all sizes, from
                        startups to Fortune 500 companies.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                    data-oid="j-u5n_m"
                >
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            className="text-center group"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            data-oid="cm_vcfo"
                        >
                            {/* Icon */}
                            <motion.div
                                className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                data-oid="s.-c_up"
                            >
                                <span className="text-3xl" data-oid="v3dkiy5">
                                    {stat.icon}
                                </span>
                            </motion.div>

                            {/* Counter */}
                            <div className="mb-4" data-oid="-jvsc53">
                                <Counter
                                    value={stat.number}
                                    fontSize={48}
                                    textColor="white"
                                    fontWeight={900}
                                    duration={2.5}
                                    delay={index * 0.2}
                                    data-oid="myl-_mk"
                                />

                                {stat.suffix && (
                                    <span className="text-4xl font-bold ml-1" data-oid="g0d4vv1">
                                        {stat.suffix}
                                    </span>
                                )}
                            </div>

                            {/* Label */}
                            <h3
                                className="text-xl font-bold mb-2 group-hover:text-blue-200 transition-colors duration-200"
                                data-oid="vk18615"
                            >
                                {stat.label}
                            </h3>

                            {/* Description */}
                            <p
                                className="text-blue-100 text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-200"
                                data-oid="f5gtipk"
                            >
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Metrics */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    data-oid="d8x40.:"
                >
                    <div
                        className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
                        data-oid="9yxdjfs"
                    >
                        <h3 className="text-3xl font-bold mb-8" data-oid="4xjcnqu">
                            Performance That Speaks for Itself
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="3avruhx">
                            {[
                                {
                                    metric: '2.5x',
                                    label: 'Faster Load Times',
                                    description: 'Compared to industry average',
                                },
                                {
                                    metric: '40%',
                                    label: 'Conversion Increase',
                                    description: 'Average improvement for clients',
                                },
                                {
                                    metric: '150ms',
                                    label: 'Response Time',
                                    description: 'Global average response time',
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={
                                        isInView
                                            ? { opacity: 1, scale: 1 }
                                            : { opacity: 0, scale: 0.8 }
                                    }
                                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                    data-oid="wzyw9nb"
                                >
                                    <div
                                        className="text-4xl font-bold text-blue-200 mb-2"
                                        data-oid="vl1btxg"
                                    >
                                        {item.metric}
                                    </div>
                                    <div className="text-lg font-semibold mb-2" data-oid="1l1-6w6">
                                        {item.label}
                                    </div>
                                    <div
                                        className="text-blue-100 text-sm opacity-80"
                                        data-oid="j9l7shb"
                                    >
                                        {item.description}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    data-oid="r:qv9q2"
                >
                    <h3 className="text-2xl font-bold mb-8" data-oid="b83pwrl">
                        Trusted by Industry Leaders
                    </h3>

                    <div
                        className="flex flex-wrap justify-center gap-8 opacity-60"
                        data-oid="_67mdq2"
                    >
                        {[
                            '🏢 Microsoft',
                            '🍎 Apple',
                            '🔍 Google',
                            '📘 Meta',
                            '🐦 Twitter',
                            '💼 LinkedIn',
                        ].map((company, index) => (
                            <motion.div
                                key={index}
                                className="text-lg font-medium"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                                data-oid="uj1-oh5"
                            >
                                {company}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
