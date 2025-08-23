'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import TiltedCard from './TiltedCard';
import MagicBento from './MagicBento';

interface ShowcaseProps {
    className?: string;
}

const Showcase: React.FC<ShowcaseProps> = ({ className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    const showcaseItems = [
        {
            id: 1,
            title: 'Interactive Dashboard',
            description: 'Real-time analytics and insights',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop',
            category: 'Analytics',
        },
        {
            id: 2,
            title: 'Mobile App Design',
            description: 'Responsive and intuitive interfaces',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=500&fit=crop',
            category: 'Design',
        },
        {
            id: 3,
            title: 'E-commerce Platform',
            description: 'Scalable online shopping solutions',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=500&fit=crop',
            category: 'E-commerce',
        },
    ];

    return (
        <section
            ref={ref}
            className={`py-20 bg-gradient-to-br from-gray-50 to-gray-100 ${className}`}
            id="showcase"
            data-oid=".2-mp3:"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="v2-og-l">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    data-oid="wnirf-y"
                >
                    <h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        data-oid="9stv-v."
                    >
                        See Onlook in Action
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-oid="_:y0q6d">
                        Explore real-world examples of how our platform transforms digital
                        experiences and drives business results.
                    </p>
                </motion.div>

                {/* Interactive Showcase */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    data-oid="_zpjo-:"
                >
                    <MagicBento
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={true}
                        enableMagnetism={true}
                        clickEffect={true}
                        spotlightRadius={400}
                        particleCount={15}
                        glowColor="59, 130, 246"
                        data-oid="uk157lj"
                    />
                </motion.div>

                {/* Project Showcase */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    data-oid="q8uub6k"
                >
                    <h3
                        className="text-3xl font-bold text-gray-900 text-center mb-12"
                        data-oid="o0f5luz"
                    >
                        Featured Projects
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="d40.ijj">
                        {showcaseItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                data-oid="g1tv8z_"
                            >
                                <TiltedCard
                                    imageSrc={item.image}
                                    altText={item.title}
                                    captionText={item.title}
                                    containerHeight="300px"
                                    containerWidth="100%"
                                    imageHeight="300px"
                                    imageWidth="100%"
                                    rotateAmplitude={8}
                                    scaleOnHover={1.05}
                                    showTooltip={true}
                                    overlayContent={
                                        <div data-oid="9m_nvd5">
                                            <p
                                                className="text-sm opacity-90 mb-2"
                                                data-oid="dpngf:7"
                                            >
                                                {item.description}
                                            </p>
                                            <span
                                                className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-medium"
                                                data-oid="lke-eb:"
                                            >
                                                {item.category}
                                            </span>
                                        </div>
                                    }
                                    data-oid="44md0i:"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Technology Stack */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    data-oid="x1.:f8-"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-8" data-oid="7_:day7">
                        Built with Modern Technologies
                    </h3>

                    <div className="flex flex-wrap justify-center gap-8" data-oid="4l.2c_l">
                        {[
                            { name: 'React', icon: '⚛️' },
                            { name: 'TypeScript', icon: '📘' },
                            { name: 'Next.js', icon: '⚡' },
                            { name: 'Tailwind CSS', icon: '🎨' },
                            { name: 'Framer Motion', icon: '🎭' },
                            { name: 'GSAP', icon: '🚀' },
                        ].map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                className="flex flex-col items-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={
                                    isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                                }
                                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                data-oid="2-qgqpw"
                            >
                                <div className="text-4xl mb-2" data-oid="8_yip_:">
                                    {tech.icon}
                                </div>
                                <span className="text-gray-700 font-medium" data-oid="::tmp0i">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    data-oid="k78ta0f"
                >
                    <div
                        className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100"
                        data-oid="dhnb-dj"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 mb-4" data-oid="a0djem9">
                            Ready to Build Something Amazing?
                        </h3>
                        <p
                            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
                            data-oid="y8vb9p6"
                        >
                            Join thousands of developers and designers who are already creating
                            incredible digital experiences with Onlook.
                        </p>
                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            data-oid="wlnifuv"
                        >
                            <motion.button
                                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                data-oid="9_y-ppt"
                            >
                                Start Building Now
                            </motion.button>
                            <motion.button
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400 transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                data-oid="esktg9f"
                            >
                                View Documentation
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Showcase;
