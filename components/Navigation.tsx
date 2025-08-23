'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
    className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Features', href: '#features' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
            } ${className}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            data-oid="6ew8yfh"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="3br:0vo">
                <div className="flex justify-between items-center h-16" data-oid="4nyfogs">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="xnqtsf0"
                    >
                        <div
                            className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-3"
                            data-oid="o7nvqjs"
                        />

                        <span
                            className={`text-xl font-bold ${
                                isScrolled ? 'text-gray-900' : 'text-white'
                            }`}
                            data-oid="noop1n2"
                        >
                            Onlook
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8" data-oid=":xrsth6">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors duration-200 ${
                                    isScrolled
                                        ? 'text-gray-700 hover:text-blue-600'
                                        : 'text-white/90 hover:text-white'
                                }`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ y: -2 }}
                                data-oid="873dtns"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                        className={`hidden md:inline-flex items-center px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                            isScrolled
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                        }`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        data-oid="-74s5o_"
                    >
                        Get Started
                    </motion.button>

                    {/* Mobile menu button */}
                    <motion.button
                        className="md:hidden p-2 rounded-md"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileTap={{ scale: 0.95 }}
                        data-oid="lh4izj4"
                    >
                        <div
                            className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                                isScrolled ? 'text-gray-900' : 'text-white'
                            }`}
                            data-oid="j0jiduh"
                        />

                        <div
                            className={`w-6 h-0.5 bg-current transition-all duration-300 mt-1.5 ${
                                isScrolled ? 'text-gray-900' : 'text-white'
                            }`}
                            data-oid="57e76r6"
                        />

                        <div
                            className={`w-6 h-0.5 bg-current transition-all duration-300 mt-1.5 ${
                                isScrolled ? 'text-gray-900' : 'text-white'
                            }`}
                            data-oid="33-xrlm"
                        />
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence data-oid="oznup9a">
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        data-oid="knz.nm8"
                    >
                        <div className="px-4 py-6 space-y-4" data-oid=":dxg7j:">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    className="block text-gray-700 hover:text-blue-600 font-medium"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    data-oid="ubwfrpn"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                            <motion.button
                                className="w-full mt-4 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-200"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                whileTap={{ scale: 0.95 }}
                                data-oid="sj7ea2f"
                            >
                                Get Started
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navigation;
