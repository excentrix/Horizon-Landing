'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
    className?: string;
}

const Header2: React.FC<HeaderProps> = ({ className = '' }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [waitlistCount, setWaitlistCount] = useState(23847);
    const [currentLanguage, setCurrentLanguage] = useState<'EN' | 'हिंदी'>('EN');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Features', href: '#features' },
        { name: 'For Institutions', href: '#institutions' },
        { name: 'Join Waitlist', href: '#waitlist' },
    ];

    const toggleLanguage = () => {
        setCurrentLanguage(currentLanguage === 'EN' ? 'हिंदी' : 'EN');
    };

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-soft'
                    : 'bg-transparent'
            } ${className}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            data-oid="6l6_mkm"
        >
            <div className="container-horizon" data-oid="o4bxitg">
                <div className="flex justify-between items-center h-18" data-oid="bekox6_">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-3"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="u62u24p"
                    >
                        <div
                            className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center"
                            data-oid="4a__njv"
                        >
                            <span className="text-2xl text-white" data-oid="ngjx473">
                                🧠
                            </span>
                        </div>
                        <div className="flex flex-col" data-oid=":3m7.xu">
                            <span
                                className={`text-xl font-bold ${
                                    isScrolled ? 'text-charcoal' : 'text-white'
                                }`}
                                data-oid="fivread"
                            >
                                Project Horizon
                            </span>

                            <div
                                className="flex items-center space-x-2 bg-orange-100 rounded-full px-2 py-1"
                                data-oid="x7ad017"
                            >
                                <motion.div
                                    className="w-2 h-2 bg-soft-orange rounded-full"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    data-oid="8f0wia2"
                                />

                                <span
                                    className="text-xs  text-orange-600   font-medium"
                                    data-oid="uspxphi"
                                >
                                    Launching Q4 2025
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8" data-oid="xyuic:5">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors duration-200 ${
                                    isScrolled
                                        ? 'text-charcoal hover:text-soft-orange'
                                        : 'text-white hover:text-orange-200'
                                }`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ y: -2 }}
                                data-oid="029ah49"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4" data-oid="38n1n1v">
                        {/* Language Toggle */}
                        <motion.button
                            onClick={toggleLanguage}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                isScrolled
                                    ? 'text-charcoal hover:bg-orange-50'
                                    : 'text-white hover:bg-white/10'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            data-oid="tor8q6v"
                        >
                            {currentLanguage}
                        </motion.button>

                        {/* Waitlist Counter */}
                        <motion.div
                            className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium ${
                                isScrolled
                                    ? 'bg-orange-50 text-orange-600'
                                    : 'bg-white/20 text-white backdrop-blur-sm'
                            }`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                            data-oid="cfctu:r"
                        >
                            <span
                                className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                                data-oid="1ulcd8y"
                            ></span>
                            <span data-oid="14vp0u9">{waitlistCount.toLocaleString()} joined</span>
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="lg:hidden p-2 rounded-lg"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                            data-oid="u6awowq"
                        >
                            <div
                                className="w-6 h-6 flex flex-col justify-center items-center"
                                data-oid="7wc2w3."
                            >
                                <div
                                    className={`w-5 h-0.5 bg-current transition-all duration-300 ${
                                        isScrolled ? 'text-charcoal' : 'text-white'
                                    } ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}
                                    data-oid="xwrr9:s"
                                />

                                <div
                                    className={`w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${
                                        isScrolled ? 'text-charcoal' : 'text-white'
                                    } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
                                    data-oid="nlh8crb"
                                />

                                <div
                                    className={`w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${
                                        isScrolled ? 'text-charcoal' : 'text-white'
                                    } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}
                                    data-oid="gqixjmj"
                                />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence data-oid=".n:nplt">
                {isMobileMenuOpen && (
                    <motion.div
                        className="lg:hidden bg-white/95 backdrop-blur-md border-t border-soft"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        data-oid="kg1kifp"
                    >
                        <div className="container-horizon py-6 space-y-4" data-oid="m18t47c">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    className="block text-charcoal hover:text-soft-orange font-medium py-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    data-oid="c9h18ex"
                                >
                                    {item.name}
                                </motion.a>
                            ))}

                            {/* Mobile Waitlist Counter */}
                            <div className="pt-4 border-t border-soft" data-oid="s04ca.k">
                                <div
                                    className="flex items-center justify-between"
                                    data-oid="ae6s736"
                                >
                                    <span className="text-sm text-warm-gray" data-oid="el5yw27">
                                        Students joined:
                                    </span>
                                    <span
                                        className="text-lg font-bold text-soft-orange"
                                        data-oid="na6:56-"
                                    >
                                        {waitlistCount.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header2;
