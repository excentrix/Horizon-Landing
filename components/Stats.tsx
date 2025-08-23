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
            data-oid="dn:47on"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="_a8.oeb">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    data-oid="ghzr201"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" data-oid="p__k1kc">
                        Trusted by Millions
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto" data-oid="jr8xn0v">
                        Our platform powers digital experiences for businesses of all sizes, from
                        startups to Fortune 500 companies.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                    data-oid="b5.juf8"
                >
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            className="text-center group"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            data-oid="9-vxx:i"
                        >
                            {/* Icon */}
                            <motion.div
                                className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                data-oid="m5ctqb0"
                            >
                                <span className="text-3xl" data-oid="ig.q1:q">
                                    {stat.icon}
                                </span>
                            </motion.div>

                            {/* Counter */}
                            <div className="mb-4" data-oid="-w51.:f">
                                <Counter
                                    value={stat.number}
                                    fontSize={48}
                                    textColor="white"
                                    fontWeight={900}
                                    duration={2.5}
                                    delay={index * 0.2}
                                    data-oid="jwezw7z"
                                />

                                {stat.suffix && (
                                    <span className="text-4xl font-bold ml-1" data-oid="kgpb7sh">
                                        {stat.suffix}
                                    </span>
                                )}
                            </div>

                            {/* Label */}
                            <h3
                                className="text-xl font-bold mb-2 group-hover:text-blue-200 transition-colors duration-200"
                                data-oid="032ievq"
                            >
                                {stat.label}
                            </h3>

                            {/* Description */}
                            <p
                                className="text-blue-100 text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-200"
                                data-oid="g9pf8k6"
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
                    data-oid="lp9rkoy"
                >
                    <div
                        className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
                        data-oid="jpuem5m"
                    >
                        <h3 className="text-3xl font-bold mb-8" data-oid="9d0izp.">
                            Performance That Speaks for Itself
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="a5wjz_i">
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
                                    data-oid="x7r73p-"
                                >
                                    <div
                                        className="text-4xl font-bold text-blue-200 mb-2"
                                        data-oid="qtfca-:"
                                    >
                                        {item.metric}
                                    </div>
                                    <div className="text-lg font-semibold mb-2" data-oid="yso50ig">
                                        {item.label}
                                    </div>
                                    <div
                                        className="text-blue-100 text-sm opacity-80"
                                        data-oid="2wpsd5b"
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
                    data-oid="hu3cnmb"
                >
                    <h3 className="text-2xl font-bold mb-8" data-oid="i-thsyc">
                        Trusted by Industry Leaders
                    </h3>

                    <div
                        className="flex flex-wrap justify-center gap-8 opacity-60"
                        data-oid="9hpb7nf"
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
                                data-oid="lzmjjcz"
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
