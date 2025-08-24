'use client';

import * as React from 'react';
import Link from 'next/link';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { Clock, ExternalLink, Play } from 'lucide-react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react';
import { encode } from 'qss';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export interface AdvancedPopoverProps {
    trigger: React.ReactNode;
    title: string;
    description?: string;
    icon?: React.ReactNode;
    href?: string;
    actionLabel?: string;
    actionHref?: string;
    onActionClick?: () => void;
    meta?: string;
    className?: string;
    side?: 'top' | 'bottom' | 'left' | 'right';
    align?: 'start' | 'center' | 'end';
    // Image preview props
    width?: number;
    height?: number;
    quality?: number;
    layout?: string;
    isStatic?: boolean;
    imageSrc?: string;
}

export function YouTubeIcon({ className = 'h-4 w-4 fill-red-600' }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            className={className}
            role="img"
            aria-label="YouTube"
            focusable="false"
            data-oid="io6vagl"
        >
            <path
                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                data-oid="thz7red"
            />
        </svg>
    );
}

export default function AdvancedPopover({
    trigger,
    title,
    description,
    icon,
    href,
    actionLabel,
    actionHref,
    onActionClick,
    meta,
    className = '',
    side = 'top',
    align = 'center',
    // Image preview props

    width = 200,
    height = 125,
    quality = 50,
    layout = 'fixed',
    isStatic = false,
    imageSrc = '',
}: AdvancedPopoverProps) {
    const [isOpen, setOpen] = React.useState(false);
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    // Generate image source
    let src: string;
    if (!isStatic) {
        const params = encode({
            url: href,
            screenshot: true,
            meta: false,
            embed: 'screenshot.url',
            colorScheme: 'dark',
            'viewport.isMobile': true,
            'viewport.deviceScaleFactor': 1,
            'viewport.width': width * 3,
            'viewport.height': height * 3,
        });
        src = `https://api.microlink.io/?${params}`;
    } else {
        src = imageSrc;
    }

    // Spring animation for mouse movement
    const springConfig = { stiffness: 100, damping: 15 };
    const x = useMotionValue(0);
    const translateX = useSpring(x, springConfig);

    const handleMouseMove = (event: React.MouseEvent) => {
        const targetRect = event.currentTarget.getBoundingClientRect();
        const eventOffsetX = event.clientX - targetRect.left;
        const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
        x.set(offsetFromCenter);
    };

    const Title = (
        <div className="flex items-center gap-2 text-sm font-medium" data-oid="-6.z5-r">
            {icon ?? <YouTubeIcon data-oid="pdnfxs7" />}
            {href ? (
                <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                    data-oid="-t4lpe8"
                >
                    <span data-oid="-ezo.-1">{title}</span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-70" data-oid="tsuby0." />
                </Link>
            ) : (
                <span data-oid="up27oit">{title}</span>
            )}
        </div>
    );

    const Action = actionLabel ? (
        actionHref ? (
            <Link
                href={actionHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-black transition-colors hover:bg-white/90"
                data-oid="yuiv88e"
            >
                <Play className="h-3.5 w-3.5" data-oid="u:kxg29" /> {actionLabel}
            </Link>
        ) : (
            <button
                onClick={onActionClick}
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-black transition-colors hover:bg-white/90"
                type="button"
                data-oid="9my80-:"
            >
                <Play className="h-3.5 w-3.5" data-oid="1-w3_4m" /> {actionLabel}
            </button>
        )
    ) : null;

    return (
        <>
            {/* Hidden image for preloading */}
            {isMounted ? (
                <div className="hidden" data-oid="0tfbxbv">
                    <img
                        src={src}
                        width={width}
                        height={height}
                        alt="hidden image"
                        data-oid="d.a8m2."
                    />
                </div>
            ) : null}

            <HoverCardPrimitive.Root
                openDelay={50}
                closeDelay={100}
                onOpenChange={(open) => {
                    setOpen(open);
                }}
                data-oid=".iy9.wr"
            >
                <HoverCardPrimitive.Trigger
                    onMouseMove={handleMouseMove}
                    className={cn('text-black dark:text-white', className)}
                    data-oid="j8-nhtr"
                >
                    {trigger}
                </HoverCardPrimitive.Trigger>

                <HoverCardPrimitive.Content
                    className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
                    side={side}
                    align={align}
                    sideOffset={10}
                    data-oid="_2sxsfw"
                >
                    <AnimatePresence data-oid="22x85kr">
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: 'spring',
                                        stiffness: 260,
                                        damping: 20,
                                    },
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                className="shadow-xl rounded-2xl border border-white/10 bg-black text-white overflow-hidden"
                                style={{
                                    x: translateX,
                                }}
                                data-oid="bxgf.4v"
                            >
                                {/* Image Preview Section */}
                                <div
                                    className="p-1 bg-white border-2 border-transparent hover:border-neutral-200 dark:hover:border-neutral-800"
                                    data-oid="_2rq:vu"
                                >
                                    <Image
                                        src={isStatic ? imageSrc : src}
                                        width={width}
                                        height={height}
                                        className="rounded-lg"
                                        alt="preview image"
                                        data-oid="1byo-do"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="px-4 py-3" data-oid="jkq0pp-">
                                    {Title}

                                    {description && (
                                        <p
                                            className="mt-3 max-w-xs text-base leading-relaxed text-balance text-white/90"
                                            data-oid="6a56oik"
                                        >
                                            {description}
                                        </p>
                                    )}

                                    {(meta || Action) && (
                                        <div
                                            className="mt-4 flex items-center justify-between gap-3"
                                            data-oid="7bkwlq5"
                                        >
                                            {meta ? (
                                                <span
                                                    className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-white"
                                                    data-oid="6__2ipk"
                                                >
                                                    <Clock
                                                        className="h-3.5 w-3.5"
                                                        data-oid="7zwiwan"
                                                    />{' '}
                                                    {meta}
                                                </span>
                                            ) : (
                                                <span data-oid="1o0k:il" />
                                            )}
                                            {Action}
                                        </div>
                                    )}
                                </div>

                                {/* Tail */}
                                <HoverCardPrimitive.Arrow
                                    className="fill-black"
                                    data-oid="acxertd"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </HoverCardPrimitive.Content>
            </HoverCardPrimitive.Root>
        </>
    );
}
