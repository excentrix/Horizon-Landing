'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface TiltedCardProps {
    imageSrc?: string;
    altText?: string;
    captionText?: string;
    containerHeight?: string;
    containerWidth?: string;
    imageHeight?: string;
    imageWidth?: string;
    rotateAmplitude?: number;
    scaleOnHover?: number;
    showMobileWarning?: boolean;
    showTooltip?: boolean;
    displayOverlayContent?: boolean;
    overlayContent?: React.ReactNode;
    className?: string;
}

const TiltedCard: React.FC<TiltedCardProps> = ({
    imageSrc = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
    altText = 'Beautiful landscape',
    captionText = 'Amazing view',
    containerHeight = '300px',
    containerWidth = '300px',
    imageHeight = '300px',
    imageWidth = '300px',
    rotateAmplitude = 12,
    scaleOnHover = 1.2,
    showMobileWarning = false,
    showTooltip = false,
    displayOverlayContent = true,
    overlayContent,
    className = '',
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    // Motion values for smooth animations
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useTransform(mouseY, [-1, 1], [rotateAmplitude, -rotateAmplitude]);
    const rotateY = useTransform(mouseX, [-1, 1], [-rotateAmplitude, rotateAmplitude]);
    const scale = useSpring(isHovered ? scaleOnHover : 1, { stiffness: 300, damping: 20 });

    // Smooth spring animations for rotation
    const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
    const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || isMobile) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseXFromCenter = e.clientX - centerX;
        const mouseYFromCenter = e.clientY - centerY;

        // Normalize to -1 to 1 range
        const normalizedX = mouseXFromCenter / (rect.width / 2);
        const normalizedY = mouseYFromCenter / (rect.height / 2);

        mouseX.set(normalizedX);
        mouseY.set(normalizedY);
        setMousePosition({ x: normalizedX, y: normalizedY });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    if (isMobile && showMobileWarning) {
        return (
            <div className="text-center p-4 text-gray-500" data-oid="r8ip28.">
                <p data-oid="kgpv2vj">3D tilt effect is not available on mobile devices.</p>
            </div>
        );
    }

    return (
        <div className={`relative ${className}`} data-oid="5-9ohws">
            <motion.div
                ref={cardRef}
                className="relative cursor-pointer"
                style={{
                    height: containerHeight,
                    width: containerWidth,
                    transformStyle: 'preserve-3d',
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                whileHover={{ scale: isMobile ? 1 : scaleOnHover }}
                transition={{ duration: 0.3 }}
                data-oid="7o_6fu."
            >
                {/* Main card container */}
                <motion.div
                    className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                        transform: isMobile ? 'none' : 'perspective(1000px)',
                        rotateX: isMobile ? 0 : springRotateX,
                        rotateY: isMobile ? 0 : springRotateY,
                        scale,
                    }}
                    data-oid="bmv.exk"
                >
                    {/* Background image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${imageSrc})`,
                            height: imageHeight,
                            width: imageWidth,
                        }}
                        data-oid="vyu-0x9"
                    />

                    {/* Overlay gradient */}
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                        data-oid="s_ng66n"
                    />

                    {/* Content overlay */}
                    {displayOverlayContent && (
                        <div
                            className="absolute bottom-0 left-0 right-0 p-6 text-white"
                            data-oid="2t:xrn."
                        >
                            <h3 className="text-xl font-bold mb-2" data-oid="y9xyady">
                                {captionText}
                            </h3>
                            {overlayContent && (
                                <div className="text-sm opacity-90" data-oid="qdvvi3m">
                                    {overlayContent}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Glare effect */}
                    {isHovered && !isMobile && (
                        <div
                            className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{
                                background: `linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.8) 45%, rgba(255,255,255,0.6) 50%, transparent 54%)`,
                                transform: `translateX(${mousePosition.x * 100}px) translateY(${mousePosition.y * 100}px)`,
                            }}
                            data-oid="cc2almz"
                        />
                    )}

                    {/* Border glow effect */}
                    {isHovered && (
                        <div
                            className="absolute inset-0 rounded-2xl ring-2 ring-white/20 ring-opacity-50"
                            data-oid="lz6kloo"
                        />
                    )}
                </motion.div>

                {/* Tooltip */}
                {showTooltip && isHovered && (
                    <motion.div
                        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap z-50"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        data-oid="498loku"
                    >
                        {captionText}
                        <div
                            className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"
                            data-oid="74e1486"
                        />
                    </motion.div>
                )}
            </motion.div>

            {/* Alt text for accessibility */}
            {altText && (
                <div className="sr-only" data-oid="k5e:_uv">
                    {altText}
                </div>
            )}
        </div>
    );
};

export default TiltedCard;
