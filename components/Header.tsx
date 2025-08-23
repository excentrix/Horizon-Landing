'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('EN');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        setCurrentLanguage(currentLanguage === 'EN' ? 'हिंदी' : 'EN');
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const navigationItems = [
        { name: 'How It Works', href: 'how-it-works' },
        { name: 'Features', href: 'features' },
        { name: 'For Institutions', href: 'institutions' },
    ];

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
                    : 'bg-white/80 backdrop-blur-sm'
            } ${className}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            data-oid="42s6f3-"
        >
            <div className="container-horizon" data-oid="ywm1bvq">
                <div className="flex items-center justify-between h-18" data-oid="te5c_en">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-3 cursor-pointer group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => scrollToSection('home')}
                        data-oid="egj6y_b"
                    >
                        <div
                            className="w-10 h-10 bg-gradient-to-br from-soft-orange to-orange-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300"
                            data-oid="8t::fka"
                        >
                            <span className="text-xl text-white" data-oid="40nqwew">
                                🧠
                            </span>
                        </div>
                        <div data-oid="g-j1493">
                            <h1
                                className="text-xl font-bold text-dark group-hover:text-soft-orange transition-colors duration-300"
                                data-oid="k7-tsg_"
                            >
                                Project Horizon
                            </h1>
                            <div className="flex items-center space-x-2" data-oid="fgikv4m">
                                <span className="text-xs text-medium" data-oid="da.36gx">
                                    Launching Q4 2025
                                </span>
                                <motion.div
                                    className="w-2 h-2 bg-soft-orange rounded-full"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    data-oid="-ewjjfo"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8" data-oid="4tw_ylb">
                        {navigationItems.map((item, index) => (
                            <motion.button
                                key={item.name}
                                className="text-medium hover:text-dark transition-colors duration-200 font-medium relative group"
                                onClick={() => scrollToSection(item.href)}
                                whileHover={{ y: -2 }}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                data-oid="a0h.rfq"
                            >
                                {item.name}
                                <motion.div
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-soft-orange group-hover:w-full transition-all duration-300"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: '100%' }}
                                    data-oid="m0_jyn."
                                />
                            </motion.button>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="hidden lg:flex items-center space-x-6" data-oid="9hjgpgz">
                        {/* Language Toggle */}
                        <motion.button
                            className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                            onClick={toggleLanguage}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            data-oid="yutgbjs"
                        >
                            <span
                                className="text-sm font-medium text-medium group-hover:text-dark"
                                data-oid="zcmx1ti"
                            >
                                {currentLanguage}
                            </span>
                            <motion.div
                                className="w-4 h-4 text-medium group-hover:text-dark"
                                animate={{ rotate: currentLanguage === 'EN' ? 0 : 180 }}
                                transition={{ duration: 0.3 }}
                                data-oid=".t2qa4v"
                            >
                                🔄
                            </motion.div>
                        </motion.button>

                        {/* Waitlist Counter */}
                        <motion.div
                            className="flex items-center space-x-2 px-4 py-2 bg-orange-50 rounded-lg border border-orange-200"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            data-oid="-yyjgy:"
                        >
                            <span
                                className="text-sm font-medium text-orange-700"
                                data-oid="vse1oxb"
                            >
                                🚀 23,847 joined
                            </span>
                        </motion.div>

                        {/* Join Waitlist Button */}
                        <motion.button
                            className="btn-primary text-sm px-6 py-2"
                            onClick={() => scrollToSection('waitlist')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            data-oid="o2ga5-e"
                        >
                            Join Waitlist
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        onClick={toggleMobileMenu}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        data-oid="af_mcei"
                    >
                        <div
                            className="w-6 h-6 flex flex-col justify-center items-center space-y-1"
                            data-oid="_jd:ek0"
                        >
                            <motion.span
                                className="w-5 h-0.5 bg-dark rounded-full"
                                animate={{
                                    rotate: isMobileMenuOpen ? 45 : 0,
                                    y: isMobileMenuOpen ? 6 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                data-oid="n:4.z2n"
                            />

                            <motion.span
                                className="w-5 h-0.5 bg-dark rounded-full"
                                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                                transition={{ duration: 0.3 }}
                                data-oid="24f.:jp"
                            />

                            <motion.span
                                className="w-5 h-0.5 bg-dark rounded-full"
                                animate={{
                                    rotate: isMobileMenuOpen ? -45 : 0,
                                    y: isMobileMenuOpen ? -6 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                data-oid="whlayks"
                            />
                        </div>
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence data-oid="d:ks831">
                    {isMobileMenuOpen && (
                        <motion.div
                            className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            data-oid="1vel7dw"
                        >
                            <div className="py-4 space-y-4" data-oid="v2_3x8y">
                                {/* Mobile Navigation */}
                                {navigationItems.map((item, index) => (
                                    <motion.button
                                        key={item.name}
                                        className="block w-full text-left px-4 py-3 text-medium hover:text-dark hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                                        onClick={() => scrollToSection(item.href)}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        data-oid="curw:c-"
                                    >
                                        {item.name}
                                    </motion.button>
                                ))}

                                {/* Mobile Language Toggle */}
                                <div className="px-4 py-3" data-oid="v75o.tl">
                                    <motion.button
                                        className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                        onClick={toggleLanguage}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        data-oid="gbg39u9"
                                    >
                                        <span
                                            className="text-medium font-medium"
                                            data-oid="m9m3uz6"
                                        >
                                            Language
                                        </span>
                                        <span className="text-dark font-medium" data-oid="4tpegyz">
                                            {currentLanguage}
                                        </span>
                                    </motion.button>
                                </div>

                                {/* Mobile Waitlist Counter */}
                                <div className="px-4" data-oid=".yhkjpa">
                                    <div
                                        className="bg-orange-50 rounded-lg border border-orange-200 px-4 py-3"
                                        data-oid="4jwsi7j"
                                    >
                                        <span
                                            className="text-sm font-medium text-orange-700"
                                            data-oid="7a8qu_8"
                                        >
                                            🚀 23,847 students have joined the waitlist
                                        </span>
                                    </div>
                                </div>

                                {/* Mobile Join Waitlist Button */}
                                <div className="px-4" data-oid="brkmkc7">
                                    <motion.button
                                        className="w-full btn-primary text-sm py-3"
                                        onClick={() => scrollToSection('waitlist')}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        data-oid="6zifgsg"
                                    >
                                        Join Waitlist
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Header;
