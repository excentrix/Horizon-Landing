'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
    rating: number;
}

interface TestimonialsProps {
    className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Product Manager',
            company: 'TechCorp',
            content:
                "Onlook has transformed how we approach digital experiences. The platform's intuitive design and powerful features have significantly improved our user engagement metrics.",
            avatar: '👩‍💼',
            rating: 5,
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Frontend Developer',
            company: 'InnovateLab',
            content:
                "As a developer, I appreciate the clean code architecture and comprehensive documentation. It's made our development process much more efficient.",
            avatar: '👨‍💻',
            rating: 5,
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'UX Designer',
            company: 'DesignStudio',
            content:
                "The design system is incredibly well-thought-out. It's helped us maintain consistency across all our products while saving countless design hours.",
            avatar: '👩‍🎨',
            rating: 5,
        },
        {
            id: 4,
            name: 'David Kim',
            role: 'CTO',
            company: 'StartupXYZ',
            content:
                "We've seen a 40% improvement in our conversion rates since implementing Onlook. The ROI has been incredible for our business.",
            avatar: '👨‍💼',
            rating: 5,
        },
        {
            id: 5,
            name: 'Lisa Thompson',
            role: 'Marketing Director',
            company: 'GrowthCo',
            content:
                "The analytics and insights provided by Onlook have given us unprecedented visibility into user behavior. It's been a game-changer for our marketing strategy.",
            avatar: '👩‍💼',
            rating: 5,
        },
        {
            id: 6,
            name: 'Alex Turner',
            role: 'Senior Developer',
            company: 'CodeCraft',
            content:
                "The performance optimization features are outstanding. Our page load times improved by 60% after implementing Onlook's recommendations.",
            avatar: '👨‍💻',
            rating: 5,
        },
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <span
                key={index}
                className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                data-oid="5cb:yq9"
            >
                ⭐
            </span>
        ));
    };

    return (
        <section
            ref={ref}
            className={`py-20 bg-gradient-to-br from-gray-50 to-gray-100 ${className}`}
            id="testimonials"
            data-oid="rxk7bbr"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="26omx0j">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    data-oid="kvb2zjy"
                >
                    <h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        data-oid="2ybruwv"
                    >
                        What Our Customers Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-oid="3mseut2">
                        Join thousands of satisfied customers who have transformed their digital
                        experiences with Onlook.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    data-oid="za1m9dk"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            whileHover={{ y: -5 }}
                            data-oid="9d4:l6p"
                        >
                            {/* Rating */}
                            <div className="flex mb-4" data-oid="hakm8bg">
                                {renderStars(testimonial.rating)}
                            </div>

                            {/* Content */}
                            <blockquote
                                className="text-gray-700 text-lg leading-relaxed mb-6 italic"
                                data-oid="8uw:kj9"
                            >
                                &quot;{testimonial.content}&quot;
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center" data-oid="_8g6-vq">
                                <div
                                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl mr-4"
                                    data-oid="hzx13xi"
                                >
                                    {testimonial.avatar}
                                </div>
                                <div data-oid="n:h2unb">
                                    <div className="font-semibold text-gray-900" data-oid="-4u.kry">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-gray-600" data-oid="v0l_n8p">
                                        {testimonial.role} at {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    data-oid="1.64r::"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4" data-oid="jq7_3f_">
                        Ready to join them?
                    </h3>
                    <p className="text-gray-600 mb-8" data-oid="epgv7h9">
                        Start your journey with Onlook today and see the difference for yourself.
                    </p>
                    <motion.button
                        className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        data-oid="jyai:07"
                    >
                        Get Started Free
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
