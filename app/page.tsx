'use client';

import { useState, useEffect, useRef } from 'react';
import { addToWaitlist } from '../lib/notion';
import Script from 'next/script';
import { useAnalytics } from '../lib/useAnalytics';
import Image from 'next/image';

export default function Page() {
    // Track page views for analytics
    useAnalytics();
    const [countdown, setCountdown] = useState({ days: 30, hours: 0, minutes: 0, seconds: 0 });
    const [typedText, setTypedText] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [position, setPosition] = useState(Math.floor(Math.random() * 500) + 1500);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const fullTagline = 'Where AI mentorship meets collaborative learning.';
    const heroRef = useRef(null);
    const particlesRef = useRef(null);

    // Handle mouse movement for interactive elements
    useEffect(() => {
        const handleMouseMove = (e: any) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Update 3D elements based on mouse position
            if (heroRef.current) {
                const elements = (heroRef.current as HTMLElement).querySelectorAll<HTMLElement>(
                    '.geometric-element',
                );
                elements.forEach((el: HTMLElement) => {
                    const rect = el.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;

                    const moveX = (e.clientX - centerX) / 50;
                    const moveY = (e.clientY - centerY) / 50;

                    el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotate(${moveX}deg)`;
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Typing effect
    useEffect(() => {
        if (typedText.length < fullTagline.length) {
            const timeout = setTimeout(() => {
                setTypedText(fullTagline.substring(0, typedText.length + 1));
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [typedText]);

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Particle system
    useEffect(() => {
        if (!particlesRef.current) return;
        const canvas = particlesRef.current as HTMLCanvasElement;
        const ctx = canvas.getContext('2d')!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Array<{
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            color: string;
        }> = [];
        const particleCount = 100;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speedX: Math.random() * 1 - 0.5,
                speedY: Math.random() * 1 - 0.5,
                color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.3})`,
            });
        }

        function drawParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                p.x += p.speedX;
                p.y += p.speedY;

                // Boundary check
                if (p.x > canvas.width) p.x = 0;
                else if (p.x < 0) p.x = canvas.width;
                if (p.y > canvas.height) p.y = 0;
                else if (p.y < 0) p.y = canvas.height;

                // Draw particle
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Connect particles
                for (let j = i; j < particles.length; j++) {
                    const p2 = particles[j];
                    const distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(drawParticles);
        }

        drawParticles();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!signupEmail) return;

        setIsSubmitting(true);
        setSubmitError('');

        try {
            const result = await addToWaitlist({
                email: signupEmail,
                position: position,
            });

            if (result.success) {
                setShowSuccess(true);
                setTimeout(() => {
                    setShowSuccess(false);
                }, 5000);
            } else {
                setSubmitError(result.error || 'Failed to join waitlist. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitError('An unexpected error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 select-none"
            data-oid="t6pi::j"
        >
            {/* Particle system */}
            <canvas
                ref={particlesRef}
                className="absolute inset-0 w-full h-full z-0"
                data-oid="dd-87z3"
            />

            {/* Animated background shapes */}
            <div className="absolute inset-0 z-0 opacity-30 left-0 -top-px" data-oid="t5nm0-j">
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500 blur-3xl animate-blob"
                    data-oid="7-_2-j9"
                ></div>
                <div
                    className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-orange-500 blur-3xl animate-blob animation-delay-2000"
                    data-oid="nuy286m"
                ></div>
                <div
                    className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-blue-500 blur-3xl animate-blob animation-delay-4000"
                    data-oid="pvr:62_"
                ></div>
            </div>

            {/* Geometric floating elements */}
            <div
                ref={heroRef}
                className="absolute inset-0 z-10 pointer-events-none"
                data-oid="ushz3f5"
            >
                <div
                    className="geometric-element absolute top-1/4 left-1/5 w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg transform rotate-12 opacity-70"
                    data-oid="4bh:r93"
                ></div>
                <div
                    className="geometric-element absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transform -rotate-12 opacity-70"
                    data-oid="0.03nwh"
                ></div>
                <div
                    className="geometric-element absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 transform rotate-45 opacity-70"
                    data-oid="_ml4835"
                ></div>
                <div
                    className="geometric-element absolute top-2/3 right-1/3 w-12 h-12 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-lg transform -rotate-12 opacity-70"
                    data-oid="jdo0p03"
                ></div>
            </div>

            {/* Light trails following mouse */}
            <div
                className="pointer-events-none fixed w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 mix-blend-screen blur-md z-50 opacity-50"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: 'translate(-50%, -50%)',
                    transition: 'all 0.1s ease-out',
                }}
                data-oid="i5-52ti"
            />

            {/* Main content */}
            <div
                className="relative z-20 container mx-auto px-4 py-12 min-h-screen flex flex-col"
                data-oid="_loghrq"
            >
                {/* Navigation */}
                <nav className="flex justify-between items-center" data-oid="a1lx0me">
                    <div
                        className="text-white text-2xl font-bold tracking-tight items-center flex justify-start gap-[10px]"
                        data-oid="dlu0.kj"
                    >
                        {/* <Image
              className="w-8 h-8"
              src="/images/blob2.svg"
              alt="blob_white.svg"
              data-oid="yhrruhy"
              width={32}
              height={32}
              /> */}

                        <Image
                            className="w-full h-fit hidden md:block"
                            src="/images/white_w_name.png"
                            alt="white_w_name.png"
                            width={500}
                            height={500}
                            objectFit="contain"
                            data-oid="-w.eus3"
                        />

                        {/* <span
              className="bg-clip-text text-transparent text-white"
              data-oid="qtswio3"
              >
              excentrix
              </span> */}
                    </div>

                    <div className="hidden md:flex space-x-8 text-white/80" data-oid="b:62c7k">
                        {/* <a href="#" className="hover:text-white transition-colors duration-300">
              About
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
              Features
              </a> */}
                        <a
                            href="https://chat.whatsapp.com/BfaSjvXcJhBBw7WTBEH7Vg"
                            className="hover:text-white transition-colors duration-300"
                            data-oid="djgc:bh"
                        >
                            Community
                        </a>
                        <a
                            href="https://www.excentrix.tech/#contact"
                            className="hover:text-white transition-colors duration-300"
                            data-oid="h3vpy48"
                        >
                            Contact
                        </a>
                    </div>
                </nav>

                {/* Hero section */}
                <div
                    className="flex-1 flex flex-col md:flex-row items-center justify-center gap-12 py-12"
                    data-oid="2uk13l:"
                >
                    <div className="md:w-1/2 space-y-8" data-oid="nypbk8h">
                        <h1
                            className="text-5xl md:text-7xl font-bold text-white"
                            data-oid="opztu6b"
                        >
                            <span
                                className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400 animate-gradient-x"
                                data-oid="i9muj82"
                            >
                                Horizon
                            </span>
                        </h1>

                        <div className="h-8" data-oid="p0nbx8-">
                            <p
                                className="text-xl md:text-2xl text-white/90 font-light"
                                data-oid="w_1zqec"
                            >
                                {typedText}
                                <span className="animate-blink" data-oid="nr4y_rj">
                                    |
                                </span>
                            </p>
                        </div>

                        <div className="flex items-center space-x-4" data-oid="zevdp4f">
                            <div className="relative" data-oid="mfy4ogn">
                                <div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-orange-400 to-blue-500 animate-spin-slow blur-sm"
                                    data-oid="9457ozp"
                                ></div>
                                <div
                                    className="relative px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                                    data-oid="sbm9w72"
                                >
                                    <span className="text-white font-medium" data-oid="mtnc6.b">
                                        Coming Soon
                                    </span>
                                </div>
                            </div>

                            <div className="flex space-x-2 text-white" data-oid="1ylfe:k">
                                <div className="flex flex-col items-center" data-oid="hkqc8j1">
                                    <span className="text-2xl font-bold" data-oid="wf66-3m">
                                        {countdown.days}
                                    </span>
                                    <span className="text-xs opacity-70" data-oid="d1-p3:0">
                                        Days
                                    </span>
                                </div>
                                <span className="text-2xl" data-oid="c-xr6mm">
                                    :
                                </span>
                                <div className="flex flex-col items-center" data-oid="vxxvm8.">
                                    <span className="text-2xl font-bold" data-oid="4fncdse">
                                        {countdown.hours}
                                    </span>
                                    <span className="text-xs opacity-70" data-oid="lwduapr">
                                        Hours
                                    </span>
                                </div>
                                <span className="text-2xl" data-oid="2.g3ibd">
                                    :
                                </span>
                                <div className="flex flex-col items-center" data-oid="0lvg1sc">
                                    <span className="text-2xl font-bold" data-oid="iw6o6:c">
                                        {countdown.minutes}
                                    </span>
                                    <span className="text-xs opacity-70" data-oid="d:k0u.7">
                                        Min
                                    </span>
                                </div>
                                <span className="text-2xl" data-oid="pzhqpgg">
                                    :
                                </span>
                                <div className="flex flex-col items-center" data-oid="m98ujoq">
                                    <span className="text-2xl font-bold" data-oid=".en4pif">
                                        {countdown.seconds}
                                    </span>
                                    <span className="text-xs opacity-70" data-oid="8hutr5r">
                                        Sec
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3D Isometric Illustration */}
                    <div className="md:w-1/2 relative" data-oid="8_nc_ur">
                        <div
                            className="relative w-full h-80 md:h-96 perspective-1000"
                            data-oid="xzixc4g"
                        >
                            <div
                                className="absolute inset-0 transform-style-3d rotate-x-12 rotate-y-24 transition-transform duration-700 hover:rotate-y-12 group"
                                data-oid="g0y26vi"
                            >
                                {/* AI Mentor */}
                                <div
                                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-xl transform rotate-y-45 translate-z-16 group-hover:translate-z-24 transition-transform duration-500"
                                    data-oid="5cvug6f"
                                >
                                    <div
                                        className="absolute inset-2 bg-black/30 rounded-lg flex items-center justify-center"
                                        data-oid="u6_5xlj"
                                    >
                                        <div
                                            className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"
                                            data-oid=":7s7kan"
                                        ></div>
                                    </div>
                                    <div
                                        className="absolute -bottom-12 left-0 right-0 text-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        data-oid="5ns8s3h"
                                    >
                                        AI Mentor
                                    </div>
                                </div>

                                {/* Student Community */}
                                <div
                                    className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg shadow-xl transform rotate-y-45 translate-z-8 group-hover:translate-z-16 transition-transform duration-500"
                                    data-oid="bp736ha"
                                >
                                    <div
                                        className="absolute inset-2 bg-black/30 rounded-lg flex items-center justify-center"
                                        data-oid="bk:l4zl"
                                    >
                                        <div className="relative w-20 h-20" data-oid="dm-5jpv">
                                            <div
                                                className="absolute top-0 left-0 w-8 h-8 rounded-full bg-orange-400"
                                                data-oid="6:oovaf"
                                            ></div>
                                            <div
                                                className="absolute top-4 right-0 w-8 h-8 rounded-full bg-pink-400"
                                                data-oid="c8h10i_"
                                            ></div>
                                            <div
                                                className="absolute bottom-0 left-4 w-8 h-8 rounded-full bg-red-400"
                                                data-oid="fb6aye5"
                                            ></div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute -bottom-12 left-0 right-0 text-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        data-oid="da9fuuq"
                                    >
                                        Student Community
                                    </div>
                                </div>

                                {/* Growth Journey */}
                                <div
                                    className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-xl transform rotate-y-45 translate-z-12 group-hover:translate-z-20 transition-transform duration-500"
                                    data-oid="tqehgxe"
                                >
                                    <div
                                        className="absolute inset-2 bg-black/30 rounded-lg flex items-center justify-center"
                                        data-oid="djm5e67"
                                    >
                                        <div className="w-20 h-16 relative" data-oid="5cov1a-">
                                            <div
                                                className="absolute bottom-0 left-0 w-4 h-4 bg-green-400 rounded-sm"
                                                data-oid="mr0uljv"
                                            ></div>
                                            <div
                                                className="absolute bottom-4 left-4 w-4 h-8 bg-teal-400 rounded-sm"
                                                data-oid="q5.mhsd"
                                            ></div>
                                            <div
                                                className="absolute bottom-8 left-8 w-4 h-12 bg-cyan-400 rounded-sm"
                                                data-oid="8e_y.-z"
                                            ></div>
                                            <div
                                                className="absolute bottom-12 left-12 w-4 h-16 bg-blue-400 rounded-sm"
                                                data-oid=".zq9jas"
                                            ></div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute -bottom-12 left-0 right-0 text-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        data-oid="ia4sk7n"
                                    >
                                        Growth Journey
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Waitlist Section */}
                <div className="py-12" data-oid="txcs0t0">
                    <div className="max-w-lg mx-auto relative" data-oid=":.ukvm4">
                        {/* Floating testimonial bubbles */}
                        <div
                            className="absolute -top-16 -left-8 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 transform -rotate-6 animate-float"
                            data-oid="q_1.flm"
                        >
                            <p className="text-white/90 text-sm" data-oid="2-i_225">
                                &quot;This platform changed how I learn!&quot;
                            </p>
                        </div>
                        <div
                            className="absolute -bottom-12 -right-8 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 transform rotate-3 animate-float animation-delay-1000"
                            data-oid="lhi4ufl"
                        >
                            <p className="text-white/90 text-sm" data-oid="f0kmoea">
                                &quot;The AI mentor understood exactly what I needed.&quot;
                            </p>
                        </div>

                        {/* Form container */}
                        <div
                            className="relative p-1 rounded-xl bg-gradient-to-r from-purple-500 via-orange-300 to-blue-500 animate-gradient-x"
                            data-oid="t9af-uh"
                        >
                            <div
                                className="bg-black/40 backdrop-blur-xl p-8 rounded-lg"
                                data-oid="d2qvskh"
                            >
                                <h2
                                    className="text-2xl font-bold text-white mb-6 text-center"
                                    data-oid="trmb0jq"
                                >
                                    Join the Waitlist
                                </h2>

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                    data-oid="2x6f0xh"
                                >
                                    <div data-oid="4es173_">
                                        <label
                                            htmlFor="email"
                                            className="block text-white/80 mb-2"
                                            data-oid="zpcamy2"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={signupEmail}
                                            onChange={(e) => setSignupEmail(e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                                            placeholder="you@example.com"
                                            required
                                            data-oid="33c-0ca"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        data-oid=":h-5d60"
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Secure Your Spot'}
                                    </button>

                                    <p
                                        className="text-white/60 text-sm text-center"
                                        data-oid="_cy1cb:"
                                    >
                                        Be one of the first to experience the future of learning.
                                        <br data-oid="x7lwo-y" />
                                        {/* <span className="text-white/80">
                      Current position: #{position}
                      </span> */}
                                    </p>

                                    {submitError && (
                                        <div
                                            className="mt-2 text-red-400 text-sm text-center"
                                            data-oid="dquiu04"
                                        >
                                            {submitError}
                                        </div>
                                    )}
                                </form>

                                {/* Success message */}
                                {showSuccess && (
                                    <div
                                        className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md rounded-lg z-10"
                                        data-oid="_-b4kno"
                                    >
                                        <div className="text-center p-6" data-oid="huap6lm">
                                            <div
                                                className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center"
                                                data-oid=":6db7wg"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-white"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="6y4y842"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                        data-oid="br9kjdm"
                                                    />
                                                </svg>
                                            </div>
                                            <h3
                                                className="text-xl font-bold text-white mb-2"
                                                data-oid="rojs76o"
                                            >
                                                You&apos;re In!
                                            </h3>
                                            <p className="text-white/80 mb-4" data-oid="cn80ism">
                                                You&apos;re #{position} on our waitlist.
                                            </p>
                                            <div className="animate-confetti" data-oid="0so_lz2">
                                                🎉
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="py-12" data-oid="pzsvatl">
                    <div className="max-w-4xl mx-auto" data-oid="2vv528v">
                        <h2
                            className="text-3xl font-bold text-white text-center mb-12"
                            data-oid="3lu6_ea"
                        >
                            Your Learning Transformation
                        </h2>

                        <div
                            className="relative flex justify-center items-center w-full"
                            data-oid=".c2:py2"
                        >
                            {/* Connection lines */}
                            <div
                                className="absolute inset-0 flex items-center justify-center"
                                data-oid="._1-edo"
                            >
                                <div
                                    className="bg-gradient-to-r from-purple-500 via-orange-300 to-blue-500 w-[95%] mb-[35px] h-px"
                                    data-oid="_.blvv0"
                                ></div>
                            </div>

                            {/* Milestones */}
                            <div
                                className="relative flex items-center w-full justify-between pt-0 mt-0"
                                data-oid="4_ubty6"
                            >
                                <div className="flex flex-col items-center" data-oid="r3hqfii">
                                    <div
                                        className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mb-4 z-10"
                                        data-oid="nbvqed2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="de0-j9."
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                data-oid="oreblon"
                                            />
                                        </svg>
                                    </div>
                                    <h3
                                        className="text-white font-medium text-center"
                                        data-oid="mpzbwqg"
                                    >
                                        Join
                                    </h3>
                                </div>

                                <div className="flex flex-col items-center" data-oid="w.97l7.">
                                    <div
                                        className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center mb-4 z-10"
                                        data-oid="4y7e:yu"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="mt60yt8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                                data-oid="ttd6so."
                                            />
                                        </svg>
                                    </div>
                                    <h3
                                        className="text-white font-medium text-center"
                                        data-oid="0w.fx:w"
                                    >
                                        Learn
                                    </h3>
                                </div>

                                <div className="flex flex-col items-center" data-oid="xy:m_.-">
                                    <div
                                        className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4 z-10"
                                        data-oid="j2uaul0"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="iu7.nfh"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                data-oid="2izcj8t"
                                            />
                                        </svg>
                                    </div>
                                    <h3
                                        className="text-white font-medium text-center"
                                        data-oid="tr10hk1"
                                    >
                                        Connect
                                    </h3>
                                </div>

                                <div className="flex flex-col items-center" data-oid="uh21aru">
                                    <div
                                        className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mb-4 z-10"
                                        data-oid="w1taf:u"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="n4a.sm-"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                data-oid="08u0zy6"
                                            />
                                        </svg>
                                    </div>
                                    <h3
                                        className="text-white font-medium text-center"
                                        data-oid="0kaq5hc"
                                    >
                                        Grow
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Social proof counter */}
                        <div className="mt-16 flex justify-center space-x-12" data-oid="1b:-md:">
                            <div className="text-center" data-oid="t_rcqfi">
                                <div
                                    className="text-4xl font-bold text-white mb-2 animate-count"
                                    data-oid="nj2b6j2"
                                >
                                    5000+
                                </div>
                                <p className="text-white/70" data-oid="o6d_91k">
                                    Students Waiting
                                </p>
                            </div>
                            <div className="text-center" data-oid="7b3-.sm">
                                <div
                                    className="text-4xl font-bold text-white mb-2 animate-count"
                                    data-oid="h6:74fc"
                                >
                                    24
                                </div>
                                <p className="text-white/70" data-oid="a6zrux8">
                                    AI Mentors
                                </p>
                            </div>
                            <div className="text-center" data-oid="glsemyr">
                                <div
                                    className="text-4xl font-bold text-white mb-2 animate-count"
                                    data-oid="z75tjgu"
                                >
                                    100+
                                </div>
                                <p className="text-white/70" data-oid="p577f5m">
                                    Learning Paths
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="py-8 mt-12 border-t border-white/10" data-oid="ete16p_">
                    <Image
                        className="w-fit h-fit my-20"
                        src="/images/white_w_name.png"
                        alt="white_w_name.png"
                        width={500}
                        height={500}
                        objectFit="contain"
                        data-oid="a645rkw"
                    />

                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="yzkha8y"
                    >
                        <div className="text-white/70 mb-4 md:mb-0" data-oid="t5qieuz">
                            © 2025 Excentrix. All rights reserved.
                        </div>
                        <div className="flex space-x-6" data-oid="p55bph8">
                            <a
                                href="https://www.linkedin.com/company/excentrixio/"
                                className="text-white/70 hover:text-white transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-oid="gv3ia6z"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="q.5r4oj"
                                >
                                    <path
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                        data-oid="vd_ygh6"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/excentrixio"
                                className="text-white/70 hover:text-white transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-oid="e6f_2x4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="m3z9akx"
                                >
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                        data-oid="a7urkt7"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://excentrix.tech"
                                className="text-white/70 hover:text-white transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-oid="nbyn-2p"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="maf_da-"
                                >
                                    <path
                                        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"
                                        data-oid="4pgwm65"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>

            {/* Custom CSS for animations */}
            <style jsx data-oid="v4a:39z">{`
                @keyframes blob {
                    0%,
                    100% {
                        transform: translate(0, 0) scale(1);
                    }
                    25% {
                        transform: translate(20px, -15px) scale(1.1);
                    }
                    50% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    75% {
                        transform: translate(15px, 25px) scale(1.05);
                    }
                }

                @keyframes gradient-x {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0) rotate(-6deg);
                    }
                    50% {
                        transform: translateY(-10px) rotate(-2deg);
                    }
                }

                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes blink {
                    0%,
                    100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0;
                    }
                }

                @keyframes count {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes confetti {
                    0% {
                        transform: translateY(0) rotate(0);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-50px) rotate(360deg);
                        opacity: 0;
                    }
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }

                .animate-gradient-x {
                    animation: gradient-x 15s ease infinite;
                    background-size: 200% 200%;
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }

                .animate-blink {
                    animation: blink 1s step-end infinite;
                }

                .animate-count {
                    animation: count 2s ease-out forwards;
                }

                .animate-confetti {
                    animation: confetti 1s ease-out forwards;
                }

                .perspective-1000 {
                    perspective: 1000px;
                }

                .transform-style-3d {
                    transform-style: preserve-3d;
                }

                .rotate-x-12 {
                    transform: rotateX(12deg);
                }

                .rotate-y-24 {
                    transform: rotateY(24deg);
                }

                .rotate-y-45 {
                    transform: rotateY(45deg);
                }

                .rotate-y-12 {
                    transform: rotateY(12deg);
                }

                .translate-z-8 {
                    transform: translateZ(8px);
                }

                .translate-z-12 {
                    transform: translateZ(12px);
                }

                .translate-z-16 {
                    transform: translateZ(16px);
                }

                .translate-z-20 {
                    transform: translateZ(20px);
                }

                .translate-z-24 {
                    transform: translateZ(24px);
                }
            `}</style>
        </div>
    );
}
