'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
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
            data-oid="g:m23f6"
        >
            <div className="container-horizon" data-oid="696.gh2">
                <div className="flex justify-between items-center h-18" data-oid="mu_p1a1">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-3"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="-h6b48v"
                    >
                        <div
                            className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center"
                            data-oid="9:ll9bi"
                        >
                            <span className="text-2xl text-white" data-oid="2y58lnd">
                                🧠
                            </span>
                        </div>
                        <div className="flex flex-col" data-oid="mkil-oc">
                            <span className="text-xl font-bold text-charcoal" data-oid=":vn04.y">
                                Project Horizon
                            </span>
                            <div className="flex items-center space-x-2" data-oid="0z3r2nh">
                                <span
                                    className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-medium"
                                    data-oid="ed8v20r"
                                >
                                    Launching Q4 2025
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8" data-oid="qseh79u">
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
                                data-oid="0l:q6ww"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4" data-oid="y_ik9r3">
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
                            data-oid="_k7gg2n"
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
                            data-oid="p6i:_td"
                        >
                            <span
                                className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                                data-oid="o3_85re"
                            ></span>
                            <span data-oid="9ineak2">{waitlistCount.toLocaleString()} joined</span>
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="lg:hidden p-2 rounded-lg"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                            data-oid="60jtpzg"
                        >
                            <div
                                className="w-6 h-6 flex flex-col justify-center items-center"
                                data-oid="rsklh:8"
                            >
                                <div
                                    className={`w-5 h-0.5 bg-current transition-all duration-300 ${
                                        isScrolled ? 'text-charcoal' : 'text-white'
                                    } ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}
                                    data-oid="aa9z.95"
                                />

                                <div
                                    className={`w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${
                                        isScrolled ? 'text-charcoal' : 'text-white'
                                    } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
                                    data-oid="ybkm17v"
                                />

                                <div
                                    className={`w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${
                                        isScrolled ? 'text-charcoal' : 'text-white'
                                    } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}
                                    data-oid="ebeitg7"
                                />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence data-oid="sirqsxg">
                {isMobileMenuOpen && (
                    <motion.div
                        className="lg:hidden bg-white/95 backdrop-blur-md border-t border-soft"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        data-oid="bxobjr-"
                    >
                        <div className="container-horizon py-6 space-y-4" data-oid="6n.00_x">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    className="block text-charcoal hover:text-soft-orange font-medium py-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    data-oid="5759c-b"
                                >
                                    {item.name}
                                </motion.a>
                            ))}

                            {/* Mobile Waitlist Counter */}
                            <div className="pt-4 border-t border-soft" data-oid="h0fqn30">
                                <div
                                    className="flex items-center justify-between"
                                    data-oid="k-0x7u8"
                                >
                                    <span className="text-sm text-warm-gray" data-oid="u.nw21m">
                                        Students joined:
                                    </span>
                                    <span
                                        className="text-lg font-bold text-soft-orange"
                                        data-oid="9bvth:5"
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

export default Header;
