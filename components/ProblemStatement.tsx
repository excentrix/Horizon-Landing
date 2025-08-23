'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProblemStatementProps {
    className?: string;
}

const ProblemStatement: React.FC<ProblemStatementProps> = ({ className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    const problems = [
        'One-size-fits-all classrooms',
        "Generic care that doesn't understand you",
        'No emotional support when you need it most',
        "Learning at someone else's pace",
        'Feeling lost in the crowd',
        'No one to guide your personal growth',
    ];

    const solutions = [
        'Personalized learning paths',
        'AI that understands your unique needs',
        '24/7 emotional support',
        'Learn at your own pace',
        'Individual attention and guidance',
        'Personal growth mentorship',
    ];

    return (
        <section
            ref={ref}
            className={`py-16 sm:py-20 lg:py-32 bg-white ${className}`}
            id="problem"
            data-oid="ex8hl4m"
        >
            <div className="container-horizon" data-oid="mi.nzv3">
                <div
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                    data-oid="o5q-bwh"
                >
                    {/* Left Column - The Problem */}
                    <motion.div
                        className="space-y-6 sm:space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                        data-oid="4mkec43"
                    >
                        {/* Section Badge */}
                        <motion.div
                            className="inline-block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            data-oid="u4iw.k."
                        >
                            <span
                                className="bg-red-100 text-red-600 px-3 sm:px-4 py-2 rounded-full text-sm font-medium border border-red-200"
                                data-oid="-_1um.v"
                            >
                                ❌ The Problem
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h2
                            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-dark leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            data-oid="ohkk0na"
                        >
                            Why Traditional Learning{' '}
                            <span className="text-red-500" data-oid="ht0z312">
                                Fails You
                            </span>
                        </motion.h2>

                        {/* Story */}
                        <motion.p
                            className="text-lg sm:text-xl text-medium leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            data-oid="pi3mg_v"
                        >
                            Remember how your parents taught you to walk? Personalized. Patient.
                            Understanding your pace. But somewhere along the way, education became
                            impersonal and generic.
                        </motion.p>

                        {/* Problems List */}
                        <motion.div
                            className="space-y-3 sm:space-y-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            data-oid="7yhhauc"
                        >
                            <h3
                                className="text-lg sm:text-xl font-semibold text-dark mb-4"
                                data-oid="9t3:z5x"
                            >
                                What you're experiencing:
                            </h3>
                            <div className="grid gap-3 sm:gap-4" data-oid="0gflcoz">
                                {problems.map((problem, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start space-x-3 group"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={
                                            isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                                        }
                                        transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                        data-oid="x3e46hv"
                                    >
                                        <motion.div
                                            className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"
                                            whileHover={{ scale: 1.5 }}
                                            data-oid="53-k.x6"
                                        />

                                        <span
                                            className="text-medium group-hover:text-dark transition-colors duration-200"
                                            data-oid="q0x95i2"
                                        >
                                            {problem}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                            data-oid="lb8yd49"
                        >
                            <motion.button
                                className="btn-primary w-full sm:w-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                data-oid="5q2.ax:"
                            >
                                See How We Fix This
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Visual Storytelling */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        data-oid=":zu55tk"
                    >
                        {/* Main Illustration */}
                        <div className="relative" data-oid="y8z4yjr">
                            {/* Background Circle */}
                            <motion.div
                                className="absolute inset-0 w-full h-full bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl"
                                animate={{ rotate: [0, 5, 0] }}
                                transition={{ duration: 8, repeat: Infinity }}
                                data-oid="hd5sy_z"
                            />

                            {/* Student Figure */}
                            <div
                                className="relative z-10 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200"
                                data-oid="u460u:a"
                            >
                                <div className="text-center space-y-4" data-oid="93ogq_d">
                                    {/* Student Icon */}
                                    <motion.div
                                        className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.3 }}
                                        data-oid="p80foz4"
                                    >
                                        <span className="text-3xl" data-oid="y9gy765">
                                            👨‍🎓
                                        </span>
                                    </motion.div>

                                    {/* Student Name */}
                                    <h3
                                        className="text-xl font-semibold text-dark"
                                        data-oid="ux9ddt2"
                                    >
                                        Rahul, 19
                                    </h3>
                                    <p className="text-medium" data-oid="chqql3k">
                                        Engineering Student
                                    </p>

                                    {/* Problem Indicators */}
                                    <div className="space-y-3" data-oid="xegjc2k">
                                        {[
                                            {
                                                icon: '😰',
                                                text: 'Stressed about exams',
                                                color: 'bg-red-100 text-red-600',
                                            },
                                            {
                                                icon: '😕',
                                                text: 'Confused about career',
                                                color: 'bg-yellow-100 text-yellow-600',
                                            },
                                            {
                                                icon: '😞',
                                                text: 'Feeling overwhelmed',
                                                color: 'bg-blue-100 text-blue-600',
                                            },
                                        ].map((item, index) => (
                                            <motion.div
                                                key={index}
                                                className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${item.color}`}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={
                                                    isInView
                                                        ? { opacity: 1, x: 0 }
                                                        : { opacity: 0, x: -20 }
                                                }
                                                transition={{
                                                    duration: 0.4,
                                                    delay: 1.2 + index * 0.1,
                                                }}
                                                whileHover={{ scale: 1.02 }}
                                                data-oid="1g1z7o6"
                                            >
                                                <span className="text-lg" data-oid="ryxfh2j">
                                                    {item.icon}
                                                </span>
                                                <span
                                                    className="text-sm font-medium"
                                                    data-oid="vve7b2-"
                                                >
                                                    {item.text}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <motion.div
                                        className="bg-gray-50 rounded-xl p-4 border-l-4 border-red-400"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={
                                            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                                        }
                                        transition={{ duration: 0.6, delay: 1.8 }}
                                        data-oid="hii1qx_"
                                    >
                                        <p
                                            className="text-sm text-medium italic"
                                            data-oid="_-4ff_l"
                                        >
                                            "I feel like I'm just another number in the system. No
                                            one really understands what I'm going through."
                                        </p>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-16 h-16 bg-red-200/50 rounded-full blur-xl"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                data-oid=".co8g1v"
                            />

                            <motion.div
                                className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-200/50 rounded-full blur-xl"
                                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                                data-oid="wayuunx"
                            />
                        </div>

                        {/* Solution Preview */}
                        <motion.div
                            className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg border border-green-200 max-w-xs"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                            }
                            transition={{ duration: 0.6, delay: 2.0 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            data-oid=":l.3tmf"
                        >
                            <div className="flex items-center space-x-2 mb-2" data-oid="m6-flkj">
                                <span className="text-lg" data-oid="6l550rd">
                                    ✨
                                </span>
                                <span
                                    className="text-sm font-semibold text-green-600"
                                    data-oid="hdilr79"
                                >
                                    AI Solution
                                </span>
                            </div>
                            <p className="text-xs text-medium" data-oid="r_fvlkn">
                                Personalized guidance that understands your unique challenges and
                                provides emotional support.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom Section - Transition to Solution */}
                <motion.div
                    className="mt-16 sm:mt-20 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    data-oid=":1-8992"
                >
                    <div
                        className="bg-gradient-to-r from-red-50 via-orange-50 to-green-50 rounded-2xl p-6 sm:p-8 border border-gray-200"
                        data-oid="5jxp5ui"
                    >
                        <h3
                            className="text-xl sm:text-2xl font-bold text-dark mb-4"
                            data-oid="kf.l0td"
                        >
                            But What If Learning Could Be Different?
                        </h3>
                        <p className="text-medium max-w-2xl mx-auto mb-6" data-oid="-os4yy5">
                            Imagine having a mentor who knows you personally, understands your
                            struggles, and guides you with the patience and care your parents once
                            provided.
                        </p>
                        <motion.button
                            className="btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            data-oid="8gnc.f8"
                        >
                            Discover the Solution
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemStatement;
