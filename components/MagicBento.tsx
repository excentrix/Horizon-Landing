'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface MagicBentoProps {
    textAutoHide?: boolean;
    enableStars?: boolean;
    enableSpotlight?: boolean;
    enableBorderGlow?: boolean;
    enableTilt?: boolean;
    enableMagnetism?: boolean;
    clickEffect?: boolean;
    spotlightRadius?: number;
    particleCount?: number;
    glowColor?: string;
    className?: string;
}

interface BentoItem {
    id: number;
    title: string;
    description: string;
    icon: string;
    color: string;
    size: 'small' | 'medium' | 'large';
}

const MagicBento: React.FC<MagicBentoProps> = ({
    textAutoHide = true,
    enableStars = true,
    enableSpotlight = true,
    enableBorderGlow = true,
    enableTilt = true,
    enableMagnetism = true,
    clickEffect = true,
    spotlightRadius = 300,
    particleCount = 12,
    glowColor = '132, 0, 255',
    className = '',
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const bentoItems: BentoItem[] = [
        {
            id: 1,
            title: 'Innovation',
            description: 'Cutting-edge solutions',
            icon: '🚀',
            color: 'from-blue-500 to-purple-600',
            size: 'large',
        },
        {
            id: 2,
            title: 'Design',
            description: 'Beautiful interfaces',
            icon: '🎨',
            color: 'from-pink-500 to-red-500',
            size: 'medium',
        },
        {
            id: 3,
            title: 'Technology',
            description: 'Modern stack',
            icon: '⚡',
            color: 'from-green-500 to-blue-500',
            size: 'medium',
        },
        {
            id: 4,
            title: 'Growth',
            description: 'Scalable solutions',
            icon: '📈',
            color: 'from-yellow-500 to-orange-500',
            size: 'small',
        },
        {
            id: 5,
            title: 'Quality',
            description: 'Reliable performance',
            icon: '✨',
            color: 'from-purple-500 to-pink-500',
            size: 'small',
        },
        {
            id: 6,
            title: 'Support',
            description: '24/7 assistance',
            icon: '🛠️',
            color: 'from-indigo-500 to-purple-500',
            size: 'small',
        },
    ];

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleItemHover = (itemId: number) => {
        setHoveredItem(itemId);

        if (enableMagnetism && containerRef.current) {
            const item = containerRef.current.querySelector(`[data-item-id="${itemId}"]`);
            if (item) {
                gsap.to(item, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            }
        }
    };

    const handleItemLeave = (itemId: number) => {
        setHoveredItem(null);

        if (enableMagnetism && containerRef.current) {
            const item = containerRef.current.querySelector(`[data-item-id="${itemId}"]`);
            if (item) {
                gsap.to(item, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            }
        }
    };

    const handleItemClick = (itemId: number) => {
        if (!clickEffect) return;

        const item = containerRef.current?.querySelector(`[data-item-id="${itemId}"]`);
        if (item) {
            gsap.to(item, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut',
            });
        }
    };

    const getItemSizeClasses = (size: string) => {
        switch (size) {
            case 'large':
                return 'col-span-2 row-span-2';
            case 'medium':
                return 'col-span-2 row-span-1';
            case 'small':
                return 'col-span-1 row-span-1';
            default:
                return 'col-span-1 row-span-1';
        }
    };

    return (
        <div
            ref={containerRef}
            className={`relative w-full max-w-6xl mx-auto p-6 ${className}`}
            data-oid="m_ms_19"
        >
            {/* Spotlight effect */}
            {enableSpotlight && (
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle ${spotlightRadius}px at ${mousePosition.x}px ${mousePosition.y}px, rgba(${glowColor}, 0.1) 0%, transparent 50%)`,
                    }}
                    data-oid="voz01ea"
                />
            )}

            {/* Grid container */}
            <div className="grid grid-cols-4 gap-4 auto-rows-fr" data-oid="319qjtj">
                {bentoItems.map((item) => (
                    <div
                        key={item.id}
                        data-item-id={item.id}
                        className={`
              relative group cursor-pointer transition-all duration-300 ease-out
              ${getItemSizeClasses(item.size)}
              ${enableTilt ? 'transform-gpu' : ''}
              ${enableBorderGlow ? 'hover:shadow-2xl' : ''}
            `}
                        onMouseEnter={() => handleItemHover(item.id)}
                        onMouseLeave={() => handleItemLeave(item.id)}
                        onClick={() => handleItemClick(item.id)}
                        style={{
                            transform:
                                enableTilt && hoveredItem === item.id
                                    ? `perspective(1000px) rotateX(${(mousePosition.y - 200) * 0.01}deg) rotateY(${(mousePosition.x - 200) * 0.01}deg)`
                                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                        }}
                        data-oid="5zw7nk:"
                    >
                        {/* Background gradient */}
                        <div
                            className={`
                absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color}
                transition-all duration-300 group-hover:scale-105
              `}
                            data-oid="792t6c6"
                        />

                        {/* Content */}
                        <div
                            className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-white"
                            data-oid="spzyzk-"
                        >
                            <div
                                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                                data-oid="wqm667n"
                            >
                                {item.icon}
                            </div>

                            <h3
                                className="text-xl font-bold mb-2 text-center group-hover:scale-105 transition-transform duration-300"
                                data-oid="4nk53dv"
                            >
                                {item.title}
                            </h3>

                            <p
                                className="text-sm text-center opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                data-oid="zd0.xee"
                            >
                                {item.description}
                            </p>
                        </div>

                        {/* Border glow effect */}
                        {enableBorderGlow && (
                            <div
                                className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  ${hoveredItem === item.id ? 'ring-2 ring-white ring-opacity-50' : ''}
                `}
                                style={{
                                    boxShadow:
                                        hoveredItem === item.id
                                            ? `0 0 20px rgba(${glowColor}, 0.5)`
                                            : 'none',
                                }}
                                data-oid="c:ag2b:"
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Floating stars effect */}
            {enableStars && (
                <div
                    className="absolute inset-0 pointer-events-none overflow-hidden"
                    data-oid="6u._dyx"
                >
                    {Array.from({ length: particleCount }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${2 + Math.random() * 2}s`,
                            }}
                            data-oid="8xazv9f"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MagicBento;
