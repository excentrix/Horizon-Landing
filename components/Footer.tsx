'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    const footerSections = [
        {
            title: 'Product',
            links: [
                { name: 'How It Works', href: '#how-it-works' },
                { name: 'Features', href: '#features' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'Demo', href: '#demo' },
            ],
        },
        {
            title: 'Company',
            links: [
                { name: 'About Us', href: '#about' },
                { name: 'Our Mission', href: '#mission' },
                { name: 'Team', href: '#team' },
                { name: 'Careers', href: '#careers' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { name: 'Blog', href: '#blog' },
                { name: 'Research', href: '#research' },
                { name: 'Help Center', href: '#help' },
                { name: 'Contact', href: '#contact' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy Policy', href: '#privacy' },
                { name: 'Terms of Service', href: '#terms' },
                { name: 'Cookie Policy', href: '#cookies' },
                { name: 'GDPR', href: '#gdpr' },
            ],
        },
    ];

    const socialLinks = [
        { name: 'Twitter', icon: '🐦', href: '#', color: 'hover:text-blue-400' },
        { name: 'LinkedIn', icon: '💼', href: '#', color: 'hover:text-blue-600' },
        { name: 'Instagram', icon: '📸', href: '#', color: 'hover:text-pink-500' },
        { name: 'YouTube', icon: '📺', href: '#', color: 'hover:text-red-500' },
    ];

    return (
        <footer
            ref={ref}
            className={`bg-gradient-to-br from-charcoal via-gray-800 to-charcoal text-white ${className}`}
            data-oid="ex1ci6q"
        >
            <div className="container-horizon" data-oid="x95s7v7">
                {/* Main Footer Content */}
                <div className="py-20" data-oid="t99gx02">
                    <div className="grid lg:grid-cols-2 gap-16" data-oid="mwpesh4">
                        {/* Left Column - Brand & Description */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8 }}
                            data-oid="iifq.pi"
                        >
                            {/* Logo */}
                            <div className="flex items-center space-x-3" data-oid="nwhl8hp">
                                <div
                                    className="w-12 h-12 bg-gradient-to-br from-soft-orange to-orange-600 rounded-xl flex items-center justify-center"
                                    data-oid="m:g:wxv"
                                >
                                    <span className="text-2xl" data-oid="2.-tn57">
                                        🧠
                                    </span>
                                </div>
                                <div data-oid="ufr4ro2">
                                    <h3 className="text-2xl font-bold" data-oid=".4b8vo6">
                                        Project Horizon
                                    </h3>
                                    <p className="text-sm text-gray-400" data-oid="q0itnea">
                                        Your Personal AI Mentor
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <p
                                className="text-lg text-gray-300 leading-relaxed max-w-md"
                                data-oid="_c:.n5a"
                            >
                                We're solving Bloom's 2 Sigma Problem by bringing personalized AI
                                mentoring to every student. Because everyone deserves the guidance
                                that caring parents once provided.
                            </p>

                            {/* Social Links */}
                            <div className="flex space-x-4" data-oid="bwr6oey">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl hover:bg-white/20 transition-all duration-300 ${social.color}`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={
                                            isInView
                                                ? { opacity: 1, scale: 1 }
                                                : { opacity: 0, scale: 0.8 }
                                        }
                                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                        whileHover={{ y: -2, scale: 1.05 }}
                                        data-oid="z8y9sz5"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>

                            {/* Newsletter Signup */}
                            <div
                                className="bg-white/10 rounded-2xl p-6 border border-white/20"
                                data-oid="8xym1lh"
                            >
                                <h4 className="font-semibold mb-3" data-oid="xf43ebw">
                                    Stay Updated
                                </h4>
                                <p className="text-sm text-gray-400 mb-4" data-oid="pwsoflk">
                                    Get the latest updates about Project Horizon and AI education
                                </p>
                                <div className="flex space-x-2" data-oid="bg-36wl">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-soft-orange focus:border-transparent"
                                        data-oid="2bds2jo"
                                    />

                                    <button
                                        className="px-4 py-2 bg-soft-orange text-white rounded-lg hover:bg-orange-600 transition-colors duration-300"
                                        data-oid="4s44qrw"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - Footer Links */}
                        <motion.div
                            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            data-oid="bdnest7"
                        >
                            {footerSections.map((section, sectionIndex) => (
                                <div key={section.title} className="space-y-4" data-oid="hhupc63">
                                    <h4 className="font-semibold text-lg" data-oid="me45tgy">
                                        {section.title}
                                    </h4>
                                    <ul className="space-y-2" data-oid="dwi0pde">
                                        {section.links.map((link, linkIndex) => (
                                            <motion.li
                                                key={link.name}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={
                                                    isInView
                                                        ? { opacity: 1, x: 0 }
                                                        : { opacity: 0, x: -10 }
                                                }
                                                transition={{
                                                    duration: 0.4,
                                                    delay:
                                                        0.4 + sectionIndex * 0.1 + linkIndex * 0.05,
                                                }}
                                                data-oid=".csotj_"
                                            >
                                                <a
                                                    href={link.href}
                                                    className="text-gray-400 hover:text-soft-orange transition-colors duration-300 text-sm"
                                                    data-oid="307rqvk"
                                                >
                                                    {link.name}
                                                </a>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    className="border-t border-white/20 py-8"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    data-oid="uy_02qd"
                >
                    <div
                        className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
                        data-oid="si-yoid"
                    >
                        {/* Copyright */}
                        <div className="text-gray-400 text-sm" data-oid="200vu_m">
                            © 2025 Project Horizon. All rights reserved.
                        </div>

                        {/* Additional Links */}
                        <div className="flex space-x-6 text-sm" data-oid=".fa22r2">
                            <a
                                href="#privacy"
                                className="text-gray-400 hover:text-soft-orange transition-colors duration-300"
                                data-oid="7xo4fsz"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#terms"
                                className="text-gray-400 hover:text-soft-orange transition-colors duration-300"
                                data-oid="148a.c0"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#cookies"
                                className="text-gray-400 hover:text-soft-orange transition-colors duration-300"
                                data-oid="ov-cn0-"
                            >
                                Cookie Policy
                            </a>
                        </div>

                        {/* Launch Badge */}
                        <div
                            className="bg-soft-orange/20 text-soft-orange px-4 py-2 rounded-full text-sm font-medium border border-soft-orange/30"
                            data-oid="rz8.ybx"
                        >
                            🚀 Launching Q4 2025
                        </div>
                    </div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    className="py-8 border-t border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    data-oid="3g:mxkj"
                >
                    <div className="text-center" data-oid="k5_-geo">
                        <p className="text-gray-400 text-sm mb-4" data-oid="sif4-ie">
                            Trusted by students from 50+ colleges across India
                        </p>
                        <div
                            className="flex justify-center space-x-8 text-xs text-gray-500"
                            data-oid="imgn1mi"
                        >
                            <span data-oid="ric.ant">🔒 SOC 2 Compliant</span>
                            <span data-oid="cm-fykq">🛡️ GDPR Ready</span>
                            <span data-oid="9bhmbsj">⚡ 99.9% Uptime</span>
                            <span data-oid="v2sfs.f">🌍 15+ Languages</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
