'use client';

import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface WaitlistProps {
    className?: string;
}

const Waitlist: React.FC<WaitlistProps> = ({ className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        college: '',
        interests: [] as string[],
        language: 'English',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const interestOptions = [
        'Career Guidance',
        'Academic Support',
        'Mental Health',
        'Skill Development',
        'Language Learning',
        'Personal Growth',
    ];

    const languageOptions = [
        'English',
        'हिंदी (Hindi)',
        'தமிழ் (Tamil)',
        'తెలుగు (Telugu)',
        'বাংলা (Bengali)',
        'मराठी (Marathi)',
        'ગુજરાતી (Gujarati)',
        'ಕನ್ನಡ (Kannada)',
        'മലയാളം (Malayalam)',
        'ਪੰਜਾਬੀ (Punjabi)',
    ];

    const handleInterestToggle = (interest: string) => {
        setFormData((prev) => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter((i) => i !== interest)
                : [...prev.interests, interest],
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setSubmitted(true);
        setIsSubmitting(false);
    };

    const waitlistStats = {
        totalJoined: 23847,
        targetGoal: 50000,
        currentProgress: (23847 / 50000) * 100,
    };

    const recentJoiners = [
        { name: 'Priya S.', college: 'IIT Delhi', time: '2 min ago' },
        { name: 'Arjun M.', college: 'BITS Pilani', time: '5 min ago' },
        { name: 'Zara K.', college: 'NIT Trichy', time: '8 min ago' },
        { name: 'Rahul P.', college: 'VIT Vellore', time: '12 min ago' },
    ];

    return (
        <section
            ref={ref}
            className={`py-32 bg-gradient-to-br from-charcoal via-gray-800 to-charcoal text-white ${className}`}
            id="waitlist"
            data-oid="ut_myki"
        >
            <div className="container-horizon" data-oid="d247ae3">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    data-oid="6s1t6zl"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-oid="y-c_8eo">
                        Join the{' '}
                        <span className="text-soft-orange" data-oid="_zpk9t6">
                            Revolution
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-oid="vcdg:40">
                        Be among the first to experience the future of personalized AI mentoring.
                        Join our exclusive waitlist and get early access when we launch.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start" data-oid="kegeekw">
                    {/* Left Column - Waitlist Form */}
                    <motion.div
                        className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        data-oid="om3-_k2"
                    >
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6" data-oid="-l2e:e4">
                                <div data-oid="qoibwbe">
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        data-oid="_rgb87e"
                                    >
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                name: e.target.value,
                                            }))
                                        }
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-soft-orange focus:border-transparent"
                                        placeholder="Enter your full name"
                                        data-oid="gc-pqh5"
                                    />
                                </div>

                                <div data-oid="54o2:16">
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        data-oid="2:7_uve"
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                email: e.target.value,
                                            }))
                                        }
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-soft-orange focus:border-transparent"
                                        placeholder="your.email@college.edu"
                                        data-oid="fv.nftq"
                                    />
                                </div>

                                <div data-oid="80_o9ka">
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        data-oid=".bc_bce"
                                    >
                                        College/University *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.college}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                college: e.target.value,
                                            }))
                                        }
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-soft-orange focus:border-transparent"
                                        placeholder="Your college or university name"
                                        data-oid="o11pr_w"
                                    />
                                </div>

                                <div data-oid="kk9pi-h">
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-3"
                                        data-oid="8:a-fq6"
                                    >
                                        What interests you most? (Select all that apply)
                                    </label>
                                    <div className="grid grid-cols-2 gap-3" data-oid="ow094gd">
                                        {interestOptions.map((interest) => (
                                            <label
                                                key={interest}
                                                className="flex items-center space-x-2 cursor-pointer"
                                                data-oid="vxt0d.3"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={formData.interests.includes(interest)}
                                                    onChange={() => handleInterestToggle(interest)}
                                                    className="w-4 h-4 text-soft-orange bg-white/10 border-white/20 rounded focus:ring-soft-orange focus:ring-2"
                                                    data-oid="q_go.36"
                                                />

                                                <span
                                                    className="text-sm text-gray-300"
                                                    data-oid="n6ze3_b"
                                                >
                                                    {interest}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div data-oid="4yy5o8d">
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        data-oid="i-:657f"
                                    >
                                        Preferred Language
                                    </label>
                                    <select
                                        value={formData.language}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                language: e.target.value,
                                            }))
                                        }
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-soft-orange focus:border-transparent"
                                        data-oid="7cd6ziw"
                                    >
                                        {languageOptions.map((language) => (
                                            <option
                                                key={language}
                                                value={language}
                                                className="bg-charcoal text-white"
                                                data-oid="y6q0dmj"
                                            >
                                                {language}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-soft-orange to-orange-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                    data-oid="d9.urpv"
                                >
                                    {isSubmitting ? 'Joining Waitlist...' : 'Join Waitlist'}
                                </button>

                                <p className="text-xs text-gray-400 text-center" data-oid="d8yrsbb">
                                    By joining, you agree to receive updates about Project Horizon.
                                    We respect your privacy and will never share your information.
                                </p>
                            </form>
                        ) : (
                            <div className="text-center py-8" data-oid="sqm90yb">
                                <div
                                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                                    data-oid="zwupg4:"
                                >
                                    <span className="text-3xl text-white" data-oid="3m.oy.k">
                                        ✓
                                    </span>
                                </div>
                                <h3
                                    className="text-2xl font-bold text-white mb-4"
                                    data-oid="x-2avka"
                                >
                                    Welcome to Project Horizon!
                                </h3>
                                <p className="text-gray-300 mb-6" data-oid="zs922xs">
                                    You've successfully joined our waitlist. We'll notify you as
                                    soon as we launch and give you early access.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="bg-white/10 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-colors duration-300"
                                    data-oid="1glpu1z"
                                >
                                    Join Another Email
                                </button>
                            </div>
                        )}
                    </motion.div>

                    {/* Right Column - Stats & Social Proof */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        data-oid="jjelp2u"
                    >
                        {/* Waitlist Progress */}
                        <div
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                            data-oid="629l2x-"
                        >
                            <h3 className="text-xl font-bold mb-4" data-oid="dhag5sg">
                                Waitlist Progress
                            </h3>
                            <div className="space-y-4" data-oid="myj016k">
                                <div className="flex justify-between text-sm" data-oid="04:.vxe">
                                    <span className="text-gray-300" data-oid="g0znc1n">
                                        Students Joined
                                    </span>
                                    <span className="text-soft-orange font-bold" data-oid="ab1zuse">
                                        {waitlistStats.totalJoined.toLocaleString()}
                                    </span>
                                </div>
                                <div
                                    className="w-full bg-white/20 rounded-full h-3"
                                    data-oid="72_khvy"
                                >
                                    <motion.div
                                        className="bg-gradient-to-r from-soft-orange to-orange-600 h-3 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={
                                            isInView
                                                ? { width: `${waitlistStats.currentProgress}%` }
                                                : { width: 0 }
                                        }
                                        transition={{ duration: 1.5, delay: 0.8 }}
                                        data-oid="ujmq_zv"
                                    />
                                </div>
                                <div className="flex justify-between text-sm" data-oid="oa5tgxy">
                                    <span className="text-gray-300" data-oid="dbazyiy">
                                        Goal
                                    </span>
                                    <span className="text-gray-300" data-oid=".g1k3hh">
                                        {waitlistStats.targetGoal.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Recent Joiners */}
                        <div
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                            data-oid="c8jmblb"
                        >
                            <h3 className="text-xl font-bold mb-4" data-oid="o::qd..">
                                Recent Joiners
                            </h3>
                            <div className="space-y-3" data-oid="jun4ghm">
                                {recentJoiners.map((joiner, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center justify-between"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={
                                            isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                                        }
                                        transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                                        data-oid="xw4mbtk"
                                    >
                                        <div
                                            className="flex items-center space-x-3"
                                            data-oid="2jn_up4"
                                        >
                                            <div
                                                className="w-8 h-8 bg-gradient-to-br from-soft-orange to-orange-600 rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="jyym6-3"
                                            >
                                                {joiner.name.charAt(0)}
                                            </div>
                                            <div data-oid="cj4_8em">
                                                <p
                                                    className="text-white font-medium"
                                                    data-oid=".mrs8uh"
                                                >
                                                    {joiner.name}
                                                </p>
                                                <p
                                                    className="text-gray-400 text-sm"
                                                    data-oid="119:uan"
                                                >
                                                    {joiner.college}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-gray-400 text-xs" data-oid="bdca34z">
                                            {joiner.time}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        <div
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                            data-oid="cdh_0im"
                        >
                            <h3 className="text-xl font-bold mb-4" data-oid="wjes.eb">
                                What You'll Get
                            </h3>
                            <div className="space-y-3" data-oid="86n-3s3">
                                {[
                                    'Early access to the platform',
                                    'Exclusive founding member benefits',
                                    'Priority support and updates',
                                    'Special pricing for early adopters',
                                ].map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center space-x-3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={
                                            isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                                        }
                                        transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                                        data-oid="405dosg"
                                    >
                                        <div
                                            className="w-2 h-2 bg-soft-orange rounded-full flex-shrink-0"
                                            data-oid="8nq6qz."
                                        />

                                        <span className="text-gray-300" data-oid="t7ua.:-">
                                            {benefit}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    data-oid="ssei6h0"
                >
                    <p className="text-xl text-gray-300 mb-6" data-oid="po:smbt">
                        Don't miss out on the future of personalized learning
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid=".oyn.3b"
                    >
                        <button
                            className="bg-white text-charcoal font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                            data-oid="mcm.dq:"
                        >
                            Share with Friends
                        </button>
                        <button
                            className="border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-colors duration-300"
                            data-oid="f7acq9v"
                        >
                            Learn More
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Waitlist;
