'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    ease?: string;
    splitType?: 'chars' | 'words' | 'lines';
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    threshold?: number;
    rootMargin?: string;
    textAlign?: 'left' | 'center' | 'right';
    onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
    text,
    className = '',
    delay = 100,
    duration = 0.6,
    ease = 'power3.out',
    splitType = 'chars',
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'center',
    onLetterAnimationComplete,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const charsRef = useRef<HTMLSpanElement[]>([]);

    const splitText = useCallback(() => {
        if (!textRef.current) return;

        const textContent = textRef.current.textContent || '';
        textRef.current.innerHTML = '';

        if (splitType === 'chars') {
            textContent.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.display = 'inline-block';
                span.style.whiteSpace = 'pre';
                span.style.opacity = '0';
                span.style.transform = 'translateY(40px)';
                textRef.current?.appendChild(span);
                charsRef.current[index] = span;
            });
        } else if (splitType === 'words') {
            textContent.split(' ').forEach((word, index) => {
                const span = document.createElement('span');
                span.textContent = word;
                span.style.display = 'inline-block';
                span.style.marginRight = '0.5em';
                span.style.opacity = '0';
                span.style.transform = 'translateY(40px)';
                textRef.current?.appendChild(span);
                charsRef.current[index] = span;
            });
        } else if (splitType === 'lines') {
            const lines = textContent.split('\n');
            lines.forEach((line, index) => {
                const span = document.createElement('span');
                span.textContent = line;
                span.style.display = 'block';
                span.style.opacity = '0';
                span.style.transform = 'translateY(40px)';
                textRef.current?.appendChild(span);
                charsRef.current[index] = span;
            });
        }
    }, [splitType, text]);

    const animateText = useCallback(() => {
        if (charsRef.current.length === 0) return;

        const tl = gsap.timeline({
            onComplete: onLetterAnimationComplete,
        });

        charsRef.current.forEach((char, index) => {
            tl.to(
                char,
                {
                    ...to,
                    duration,
                    ease,
                    delay: index * (delay / 1000),
                },
                index * (delay / 1000),
            );
        });
    }, [delay, duration, ease, to, onLetterAnimationComplete]);

    useEffect(() => {
        splitText();
    }, [splitText]);

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateText();
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold,
                rootMargin,
            },
        );

        observer.observe(containerRef.current);

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [animateText, threshold, rootMargin]);

    return (
        <div ref={containerRef} className={`${className}`} style={{ textAlign }} data-oid="f_x7ctp">
            <div ref={textRef} className="inline-block" data-oid="gekbcu0">
                {text}
            </div>
        </div>
    );
};

export default SplitText;
