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
            data-oid="c7t92ba"
        >
            <div className="container-horizon" data-oid="1sj.-w2">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    data-oid="_41di68"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-oid="b7vu6zm">
                        Join the{' '}
                        <span className="text-soft-orange" data-oid="7-in2_s">
                            Revolution
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-oid="98qgmlz">
                        Be among the first to experience the future of personalized AI mentoring.
                        Join our exclusive waitlist and get early access when we launch.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start" data-oid="lcozfxc">
                    {/* Left Column - Waitlist Form */}
                    <motion.div
                        className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        data-oid="h057e:k"
                    >
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6" data-oid="ybc5ywz">
                                <div data-oid="n1ws-rs">
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        data-oid="_qokjdg"
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
                                        data-oid="v:m.b1l"
                                    />
                                </div>

                                <div data-oid="bj99km9">
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        data-oid="ra-nrlg"
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
                                        data-oid="fg-:t7_"
                                    />
                                </div>

                                <div data-oid="7nu_hrl">
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        data-oid="3i6x5au"
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
                                        data-oid="5g6g3ln"
                                    />
                                </div>

                                <div data-oid="m-8gi9j">
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-3"
                                        data-oid="6rhiw49"
                                    >
                                        What interests you most? (Select all that apply)
                                    </label>
                                    <div className="grid grid-cols-2 gap-3" data-oid="vp3:-of">
                                        {interestOptions.map((interest) => (
                                            <label
                                                key={interest}
                                                className="flex items-center space-x-2 cursor-pointer"
                                                data-oid="ju_isyx"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={formData.interests.includes(interest)}
                                                    onChange={() => handleInterestToggle(interest)}
                                                    className="w-4 h-4 text-soft-orange bg-white/10 border-white/20 rounded focus:ring-soft-orange focus:ring-2"
                                                    data-oid="ltjsi.3"
                                                />

                                                <span
                                                    className="text-sm text-gray-300"
                                                    data-oid="i9x_6st"
                                                >
                                                    {interest}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div data-oid="6t.xcez">
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        data-oid="x9_t60-"
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
                                        data-oid="d8h:mah"
                                    >
                                        {languageOptions.map((language) => (
                                            <option
                                                key={language}
                                                value={language}
                                                className="bg-charcoal text-white"
                                                data-oid=".y:.676"
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
                                    data-oid="f43v6dw"
                                >
                                    {isSubmitting ? 'Joining Waitlist...' : 'Join Waitlist'}
                                </button>

                                <p className="text-xs text-gray-400 text-center" data-oid="crffk:_">
                                    By joining, you agree to receive updates about Project Horizon.
                                    We respect your privacy and will never share your information.
                                </p>
                            </form>
                        ) : (
                            <div className="text-center py-8" data-oid="9c::y5m">
                                <div
                                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                                    data-oid="mryv71l"
                                >
                                    <span className="text-3xl text-white" data-oid="m1ikdqf">
                                        ✓
                                    </span>
                                </div>
                                <h3
                                    className="text-2xl font-bold text-white mb-4"
                                    data-oid="pveu:-0"
                                >
                                    Welcome to Project Horizon!
                                </h3>
                                <p className="text-gray-300 mb-6" data-oid="6y1g0aq">
                                    You've successfully joined our waitlist. We'll notify you as
                                    soon as we launch and give you early access.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="bg-white/10 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-colors duration-300"
                                    data-oid="n:r.r9w"
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
                        data-oid="tj5yql1"
                    >
                        {/* Waitlist Progress */}
                        <div
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                            data-oid="3nh413r"
                        >
                            <h3 className="text-xl font-bold mb-4" data-oid="829ukah">
                                Waitlist Progress
                            </h3>
                            <div className="space-y-4" data-oid="v-4_t8a">
                                <div className="flex justify-between text-sm" data-oid="1wqg:ja">
                                    <span className="text-gray-300" data-oid="b-lbw0r">
                                        Students Joined
                                    </span>
                                    <span className="text-soft-orange font-bold" data-oid="rgrcbxd">
                                        {waitlistStats.totalJoined.toLocaleString()}
                                    </span>
                                </div>
                                <div
                                    className="w-full bg-white/20 rounded-full h-3"
                                    data-oid="2whoa76"
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
                                        data-oid="gexn6om"
                                    />
                                </div>
                                <div className="flex justify-between text-sm" data-oid="9fvx0xh">
                                    <span className="text-gray-300" data-oid="v-x-kiu">
                                        Goal
                                    </span>
                                    <span className="text-gray-300" data-oid="d1ye.f.">
                                        {waitlistStats.targetGoal.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Recent Joiners */}
                        <div
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                            data-oid="fz0scwk"
                        >
                            <h3 className="text-xl font-bold mb-4" data-oid="7:6uplh">
                                Recent Joiners
                            </h3>
                            <div className="space-y-3" data-oid="03lt:1t">
                                {recentJoiners.map((joiner, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center justify-between"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={
                                            isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                                        }
                                        transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                                        data-oid="h42tdco"
                                    >
                                        <div
                                            className="flex items-center space-x-3"
                                            data-oid="qwvu2_2"
                                        >
                                            <div
                                                className="w-8 h-8 bg-gradient-to-br from-soft-orange to-orange-600 rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="35vk6n2"
                                            >
                                                {joiner.name.charAt(0)}
                                            </div>
                                            <div data-oid="s:oyhqz">
                                                <p
                                                    className="text-white font-medium"
                                                    data-oid="19__buu"
                                                >
                                                    {joiner.name}
                                                </p>
                                                <p
                                                    className="text-gray-400 text-sm"
                                                    data-oid="iyzelf1"
                                                >
                                                    {joiner.college}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-gray-400 text-xs" data-oid="qkrv2:f">
                                            {joiner.time}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        <div
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                            data-oid="9cgtyqm"
                        >
                            <h3 className="text-xl font-bold mb-4" data-oid="jni3b_y">
                                What You'll Get
                            </h3>
                            <div className="space-y-3" data-oid="bgyh1k9">
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
                                        data-oid="53buv4l"
                                    >
                                        <div
                                            className="w-2 h-2 bg-soft-orange rounded-full flex-shrink-0"
                                            data-oid=".nt2bn9"
                                        />
                                        <span className="text-gray-300" data-oid="rc52tnx">
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
                    data-oid="5xkfyi5"
                >
                    <p className="text-xl text-gray-300 mb-6" data-oid="ebp7016">
                        Don't miss out on the future of personalized learning
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="015q0g:"
                    >
                        <button
                            className="bg-white text-charcoal font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                            data-oid="l2mql7j"
                        >
                            Share with Friends
                        </button>
                        <button
                            className="border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-colors duration-300"
                            data-oid="p7e5eq1"
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
