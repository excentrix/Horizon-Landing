'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterProps {
    value: number;
    places?: number[];
    fontSize?: number;
    padding?: number;
    gap?: number;
    textColor?: string;
    fontWeight?: number;
    duration?: number;
    delay?: number;
    className?: string;
}

const Counter: React.FC<CounterProps> = ({
    value,
    places = [100, 10, 1],
    fontSize = 80,
    padding = 5,
    gap = 10,
    textColor = 'white',
    fontWeight = 900,
    duration = 2,
    delay = 0,
    className = '',
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const startTime = Date.now();
            const endTime = startTime + duration * 1000;

            const updateCount = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / (duration * 1000), 1);

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentCount = Math.floor(value * easeOutQuart);

                setCount(currentCount);

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                }
            };

            // Add delay before starting
            setTimeout(() => {
                requestAnimationFrame(updateCount);
            }, delay * 1000);
        }
    }, [isInView, value, duration, delay]);

    const formatNumber = (num: number): string => {
        return num.toString().padStart(places.length, '0');
    };

    const renderDigits = (num: number) => {
        const digits = formatNumber(num).split('');

        return (
            <div className="flex items-center justify-center" data-oid="r._lxni">
                {digits.map((digit, index) => (
                    <motion.div
                        key={index}
                        className="relative"
                        style={{
                            fontSize: `${fontSize}px`,
                            padding: `${padding}px`,
                            marginRight: index < digits.length - 1 ? `${gap}px` : '0',
                            color: textColor,
                            fontWeight,
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{
                            duration: 0.5,
                            delay: delay + index * 0.1,
                            ease: 'easeOut',
                        }}
                        data-oid="x:fj-21"
                    >
                        {digit}
                        {/* Subtle shadow effect */}
                        <div
                            className="absolute inset-0 -z-10"
                            style={{
                                textShadow: `2px 2px 4px rgba(0,0,0,0.3)`,
                                opacity: 0.5,
                            }}
                            data-oid="boc_8k9"
                        >
                            {digit}
                        </div>
                    </motion.div>
                ))}
            </div>
        );
    };

    return (
        <div
            ref={ref}
            className={`flex items-center justify-center ${className}`}
            style={{
                minHeight: `${fontSize + padding * 2}px`,
            }}
            data-oid="2v5brom"
        >
            {renderDigits(count)}
        </div>
    );
};

export default Counter;
