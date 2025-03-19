'use client';

import { useState, useEffect, useRef } from 'react';
import { addToWaitlist } from '../lib/notion';

export default function Page() {
    const [countdown, setCountdown] = useState({ days: 30, hours: 0, minutes: 0, seconds: 0 });
    const [typedText, setTypedText] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [position, setPosition] = useState(Math.floor(Math.random() * 500) + 1500);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const fullTagline = 'Where AI mentorship meets collaborative learning';
    const heroRef = useRef(null);
    const particlesRef = useRef(null);

    // Handle mouse movement for interactive elements
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Update 3D elements based on mouse position
            if (heroRef.current) {
                const elements = heroRef.current.querySelectorAll('.geometric-element');
                elements.forEach((el) => {
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

        const canvas = particlesRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
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

    const handleSubmit = async (e) => {
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
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900">
            {/* Particle system */}
            <canvas ref={particlesRef} className="absolute inset-0 w-full h-full z-0" />

            {/* Animated background shapes */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500 blur-3xl animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-orange-500 blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-blue-500 blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            {/* Geometric floating elements */}
            <div ref={heroRef} className="absolute inset-0 z-10 pointer-events-none">
                <div className="geometric-element absolute top-1/4 left-1/5 w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg transform rotate-12 opacity-70"></div>
                <div className="geometric-element absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transform -rotate-12 opacity-70"></div>
                <div className="geometric-element absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 transform rotate-45 opacity-70"></div>
                <div className="geometric-element absolute top-2/3 right-1/3 w-12 h-12 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-lg transform -rotate-12 opacity-70"></div>
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
            />

            {/* Main content */}
            <div className="relative z-20 container mx-auto px-4 py-12 min-h-screen flex flex-col">
                {/* Navigation */}
                <nav className="flex justify-between items-center py-4">
                    <div className="text-white text-2xl font-bold tracking-tight items-center flex justify-start gap-[10px]">
                        <img className="w-8 h-8" src="/images/blob2.svg" alt="blob_white.svg" />

                        <span className="bg-clip-text text-transparent text-white">excentrix</span>
                    </div>

                    <div className="hidden md:flex space-x-8 text-white/80">
                        {/* <a href="#" className="hover:text-white transition-colors duration-300">
                            About
                        </a>
                        <a href="#" className="hover:text-white transition-colors duration-300">
                            Features
                        </a> */}
                        <a
                            href="https://chat.whatsapp.com/BfaSjvXcJhBBw7WTBEH7Vg"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Community
                        </a>
                        <a
                            href="https://www.excentrix.tech/#contact"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Contact
                        </a>
                    </div>
                </nav>

                {/* Hero section */}
                <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-12 py-12">
                    <div className="md:w-1/2 space-y-8">
                        <h1 className="text-5xl md:text-7xl font-bold text-white">
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400 animate-gradient-x">
                                Horizon
                            </span>
                        </h1>

                        <div className="h-8">
                            <p className="text-xl md:text-2xl text-white/90 font-light">
                                {typedText}
                                <span className="animate-blink">|</span>
                            </p>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-orange-400 to-blue-500 animate-spin-slow blur-sm"></div>
                                <div className="relative px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                    <span className="text-white font-medium">Coming Soon</span>
                                </div>
                            </div>

                            <div className="flex space-x-2 text-white">
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-bold">{countdown.days}</span>
                                    <span className="text-xs opacity-70">Days</span>
                                </div>
                                <span className="text-2xl">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-bold">{countdown.hours}</span>
                                    <span className="text-xs opacity-70">Hours</span>
                                </div>
                                <span className="text-2xl">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-bold">{countdown.minutes}</span>
                                    <span className="text-xs opacity-70">Min</span>
                                </div>
                                <span className="text-2xl">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-bold">{countdown.seconds}</span>
                                    <span className="text-xs opacity-70">Sec</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3D Isometric Illustration */}
                    <div className="md:w-1/2 relative">
                        <div className="relative w-full h-80 md:h-96 perspective-1000">
                            <div className="absolute inset-0 transform-style-3d rotate-x-12 rotate-y-24 transition-transform duration-700 hover:rotate-y-12 group">
                                {/* AI Mentor */}
                                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-xl transform rotate-y-45 translate-z-16 group-hover:translate-z-24 transition-transform duration-500">
                                    <div className="absolute inset-2 bg-black/30 rounded-lg flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>
                                    </div>
                                    <div className="absolute -bottom-12 left-0 right-0 text-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        AI Mentor
                                    </div>
                                </div>

                                {/* Student Community */}
                                <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg shadow-xl transform rotate-y-45 translate-z-8 group-hover:translate-z-16 transition-transform duration-500">
                                    <div className="absolute inset-2 bg-black/30 rounded-lg flex items-center justify-center">
                                        <div className="relative w-20 h-20">
                                            <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-orange-400"></div>
                                            <div className="absolute top-4 right-0 w-8 h-8 rounded-full bg-pink-400"></div>
                                            <div className="absolute bottom-0 left-4 w-8 h-8 rounded-full bg-red-400"></div>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-12 left-0 right-0 text-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Student Community
                                    </div>
                                </div>

                                {/* Growth Journey */}
                                <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-xl transform rotate-y-45 translate-z-12 group-hover:translate-z-20 transition-transform duration-500">
                                    <div className="absolute inset-2 bg-black/30 rounded-lg flex items-center justify-center">
                                        <div className="w-20 h-16 relative">
                                            <div className="absolute bottom-0 left-0 w-4 h-4 bg-green-400 rounded-sm"></div>
                                            <div className="absolute bottom-4 left-4 w-4 h-8 bg-teal-400 rounded-sm"></div>
                                            <div className="absolute bottom-8 left-8 w-4 h-12 bg-cyan-400 rounded-sm"></div>
                                            <div className="absolute bottom-12 left-12 w-4 h-16 bg-blue-400 rounded-sm"></div>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-12 left-0 right-0 text-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Growth Journey
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Waitlist Section */}
                <div className="py-12">
                    <div className="max-w-lg mx-auto relative">
                        {/* Floating testimonial bubbles */}
                        <div className="absolute -top-16 -left-8 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 transform -rotate-6 animate-float">
                            <p className="text-white/90 text-sm">
                                "This platform changed how I learn!"
                            </p>
                        </div>
                        <div className="absolute -bottom-12 -right-8 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 transform rotate-3 animate-float animation-delay-1000">
                            <p className="text-white/90 text-sm">
                                "The AI mentor understood exactly what I needed."
                            </p>
                        </div>

                        {/* Form container */}
                        <div className="relative p-1 rounded-xl bg-gradient-to-r from-purple-500 via-orange-300 to-blue-500 animate-gradient-x">
                            <div className="bg-black/40 backdrop-blur-xl p-8 rounded-lg">
                                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                                    Join the Waitlist
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="email" className="block text-white/80 mb-2">
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
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Secure Your Spot'}
                                    </button>

                                    <p className="text-white/60 text-sm text-center">
                                        Be one of the first to experience the future of learning.
                                        <br />
                                        {/* <span className="text-white/80">
                                            Current position: #{position}
                                        </span> */}
                                    </p>

                                    {submitError && (
                                        <div className="mt-2 text-red-400 text-sm text-center">
                                            {submitError}
                                        </div>
                                    )}
                                </form>

                                {/* Success message */}
                                {showSuccess && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md rounded-lg z-10">
                                        <div className="text-center p-6">
                                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-white"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                You're In!
                                            </h3>
                                            <p className="text-white/80 mb-4">
                                                You're #{position} on our waitlist.
                                            </p>
                                            <div className="animate-confetti">🎉</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="py-12">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">
                            Your Learning Transformation
                        </h2>

                        <div className="relative flex justify-center items-center w-full">
                            {/* Connection lines */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-gradient-to-r from-purple-500 via-orange-300 to-blue-500 w-[95%] mb-[35px] h-px"></div>
                            </div>

                            {/* Milestones */}
                            <div className="relative flex items-center w-full justify-between pt-0 mt-0">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mb-4 z-10">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-white font-medium text-center">Join</h3>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center mb-4 z-10">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-white font-medium text-center">Learn</h3>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4 z-10">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-white font-medium text-center">Connect</h3>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mb-4 z-10">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-white font-medium text-center">Grow</h3>
                                </div>
                            </div>
                        </div>

                        {/* Social proof counter */}
                        <div className="mt-16 flex justify-center space-x-12">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-white mb-2 animate-count">
                                    5000+
                                </div>
                                <p className="text-white/70">Students Waiting</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-white mb-2 animate-count">
                                    24
                                </div>
                                <p className="text-white/70">AI Mentors</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-white mb-2 animate-count">
                                    100+
                                </div>
                                <p className="text-white/70">Learning Paths</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="py-8 mt-12 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-white/70 mb-4 md:mb-0">
                            © 2025 Excentrix. All rights reserved.
                        </div>
                        <div className="flex space-x-6">
                            <a
                                href="#"
                                className="text-white/70 hover:text-white transition-colors duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-white/70 hover:text-white transition-colors duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-white/70 hover:text-white transition-colors duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
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
