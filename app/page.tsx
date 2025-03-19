'use client';

import { useState, useEffect, useRef } from 'react';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (signupEmail) {
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
            }, 5000);
        }
    };

    return (
        <div
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900"
            data-oid="4zwk.nv"
        >
            {/* Particle system */}
            <canvas
                ref={particlesRef}
                className="absolute inset-0 w-full h-full z-0"
                data-oid="_1-4ku8"
            />

            {/* Animated background shapes */}
            <div className="absolute inset-0 z-0 opacity-30" data-oid="t0:gflc">
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500 blur-3xl animate-blob"
                    data-oid="cbrbz.q"
                ></div>
                <div
                    className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-orange-500 blur-3xl animate-blob animation-delay-2000"
                    data-oid="n76u-04"
                ></div>
                <div
                    className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-blue-500 blur-3xl animate-blob animation-delay-4000"
                    data-oid="io.9q5s"
                ></div>
            </div>

            {/* Geometric floating elements */}
            <div
                ref={heroRef}
                className="absolute inset-0 z-10 pointer-events-none"
                data-oid="e9oablw"
            >
                <div
                    className="geometric-element absolute top-1/4 left-1/5 w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg transform rotate-12 opacity-70"
                    data-oid="_hzhwil"
                ></div>
                <div
                    className="geometric-element absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transform -rotate-12 opacity-70"
                    data-oid="o.2kgxb"
                ></div>
                <div
                    className="geometric-element absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 transform rotate-45 opacity-70"
                    data-oid="xhj2s0q"
                ></div>
                <div
                    className="geometric-element absolute top-2/3 right-1/3 w-12 h-12 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-lg transform -rotate-12 opacity-70"
                    data-oid="v-fxceg"
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
                data-oid="nx5n:2-"
            />

            {/* Main content */}
            <div
                className="relative z-20 container mx-auto px-4 py-12 min-h-screen flex flex-col"
                data-oid="p6gfycc"
            >
                {/* Navigation */}
                <nav className="flex justify-between items-center py-4" data-oid="e4:v1jy">
                    <div
                        className="text-white text-2xl font-bold tracking-tight items-center gap-[10px]"
                        data-oid="7ktlgkz"
                        key="olk-as7-"
                    >
                        <img
                            className="h-[100px] w-[40px]"
                            src="/images/blob_white.png"
                            alt="blob_white.png"
                            data-oid="h1q7.a7"
                            key="olk-xmax"
                        />

                        <span
                            className="bg-clip-text text-transparent from-purple-400 via-orange-300 to-blue-400 animate-gradient-x bg-none bg-[#ADADAD]"
                            data-oid="pe1gi52"
                            key="olk-Z_CC"
                        >
                            excentrix
                        </span>
                    </div>

                    <div
                        className="hidden md:flex space-x-8 text-white/80"
                        data-oid="4b0f.t3"
                        key="olk-tQ_s"
                    >
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                            data-oid="3ra-_qt"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                            data-oid="w1c5xef"
                        >
                            Features
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                            data-oid="i6wo7ap"
                        >
                            Community
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                            data-oid="5bjdtp-"
                        >
                            Contact
                        </a>
                    </div>
                </nav>

                {/* Hero section */}
                <div
                    className="flex-1 flex flex-col md:flex-row items-center justify-center gap-12 py-12"
                    data-oid="emev63j"
                >
                    <div className="md:w-1/2 space-y-8" data-oid="34d7x_0">
                        <h1
                            className="text-5xl md:text-7xl font-bold text-white"
                            data-oid="olwnwqw"
                        >
                            <span
                                className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400 animate-gradient-x"
                                data-oid="35c_:bu"
                            >
                                Horizon
                            </span>
                        </h1>

                        <div className="h-8" data-oid="v9wujnr">
                            <p
                                className="text-xl md:text-2xl text-white/90 font-light"
                                data-oid="s02vsu7"
                            >
                                {typedText}
                                <span className="animate-blink" data-oid="-ul8ms4">
                                    |
                                </span>
                            </p>
                        </div>

                        <div className="flex items-center space-x-4" data-oid="7ar30jh">
                            <div className="relative" data-oid="rt1o36g">
                                <div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-orange-400 to-blue-500 animate-spin-slow blur-sm"
                                    data-oid="n.5p_k5"
                                ></div>
                                <div
                                    className="relative px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                                    data-oid="wr-:quf"
                                >
                                    <span className="text-white font-medium" data-oid="ysccl:.">
                                        Coming Soon
                                    </span>
                                </div>
                            </div>

                            <div className="flex space-x-2 text-white" data-oid="42bwu2t">
                                <div className="flex flex-col items-center" data-oid=".qi50w3">
                                    <span className="text-2xl font-bold" data-oid="4gu-l3-">
                                        {countdown.days}
                                    </span>
                                    <span className="text-xs opacity-70" data-oid="lytcc_p">
                                        Days
                                    </span>
                                </div>
                                <span className="text-2xl" data-oid="ruyalmr">
                                    :
                                </span>
                                <div className="flex flex-col items-center" data-oid="ur29qpo">
                                    <span className="text-2xl font-bold" data-oid="z.pguot">
                                        {countdown.hours}
                                    </span>
                                    <span className="text-xs opacity-70" data-oid="jlqp.5a">
                                        Hours
                                    </span>
                                </div>
                                <span className="text-2xl" data-oid="d24mjz5">
                                    :
                                </span>
                                <div className="flex flex-col items-center" data-oid="_6js_-b">
                                    <span className="text-2xl font-bold" data-oid="o6t0zl5">
                                        {countdown.minutes}
                                    </span>
                                    <span className="text-xs opacity-70" data-oid="p0xun.r">
                                        Min
                                    </span>
                                </div>
                                <span className="text-2xl" data-oid="ava500x">
                                    :
                                </span>
                                <div className="flex flex-col items-center" data-oid="h270g51">
                                    <span className="text-2xl font-bold" data-oid="y_o:d8s">
                                        {countdown.seconds}
                                    </span>
                                    <span className="text-xs opacity-70" data-oid="zuq_ta3">
                                        Sec
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3D Isometric Illustration */}
                    <div className="md:w-1/2 relative" data-oid="z1xke9k">
                        <div
                            className="relative w-full h-80 md:h-96 perspective-1000"
                            data-oid="::osuhx"
                        >
                            <div
                                className="absolute inset-0 transform-style-3d rotate-x-12 rotate-y-24 transition-transform duration-700 hover:rotate-y-12 group"
                                data-oid="bilt0i7"
                            >
                                {/* AI Mentor */}
                                <div
                                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-xl transform rotate-y-45 translate-z-16 group-hover:translate-z-24 transition-transform duration-500"
                                    data-oid="_v5t583"
                                >
                                    <div
                                        className="absolute inset-2 bg-black/30 rounded-lg flex items-center justify-center"
                                        data-oid="nr3u8.z"
                                    >
                                        <div
                                            className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"
                                            data-oid="onm7wog"
                                        ></div>
                                    </div>
                                    <div
                                        className="absolute -bottom-12 left-0 right-0 text-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        data-oid="fuquvm9"
                                    >
                                        AI Mentor
                                    </div>
                                </div>

                                {/* Student Community */}
                                <div
                                    className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg shadow-xl transform rotate-y-45 translate-z-8 group-hover:translate-z-16 transition-transform duration-500"
                                    data-oid="488zaao"
                                >
                                    <div
                                        className="absolute inset-2 bg-black/30 rounded-lg flex items-center justify-center"
                                        data-oid="1db1ler"
                                    >
                                        <div className="relative w-20 h-20" data-oid="tocxc7j">
                                            <div
                                                className="absolute top-0 left-0 w-8 h-8 rounded-full bg-orange-400"
                                                data-oid="0_ooeh2"
                                            ></div>
                                            <div
                                                className="absolute top-4 right-0 w-8 h-8 rounded-full bg-pink-400"
                                                data-oid=":skzeq_"
                                            ></div>
                                            <div
                                                className="absolute bottom-0 left-4 w-8 h-8 rounded-full bg-red-400"
                                                data-oid="0wqdnd7"
                                            ></div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute -bottom-12 left-0 right-0 text-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        data-oid="6h7usgi"
                                    >
                                        Student Community
                                    </div>
                                </div>

                                {/* Growth Journey */}
                                <div
                                    className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-xl transform rotate-y-45 translate-z-12 group-hover:translate-z-20 transition-transform duration-500"
                                    data-oid="e7z:.9l"
                                >
                                    <div
                                        className="absolute inset-2 bg-black/30 rounded-lg flex items-center justify-center"
                                        data-oid="s6gje76"
                                    >
                                        <div className="w-20 h-16 relative" data-oid="d-20x34">
                                            <div
                                                className="absolute bottom-0 left-0 w-4 h-4 bg-green-400 rounded-sm"
                                                data-oid="n5lqgzj"
                                            ></div>
                                            <div
                                                className="absolute bottom-4 left-4 w-4 h-8 bg-teal-400 rounded-sm"
                                                data-oid="yakzyje"
                                            ></div>
                                            <div
                                                className="absolute bottom-8 left-8 w-4 h-12 bg-cyan-400 rounded-sm"
                                                data-oid="trcxym2"
                                            ></div>
                                            <div
                                                className="absolute bottom-12 left-12 w-4 h-16 bg-blue-400 rounded-sm"
                                                data-oid="b7-o566"
                                            ></div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute -bottom-12 left-0 right-0 text-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        data-oid="066xa38"
                                    >
                                        Growth Journey
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Waitlist Section */}
                <div className="py-12" data-oid="5_p7yna">
                    <div className="max-w-lg mx-auto relative" data-oid="t6_kz1e">
                        {/* Floating testimonial bubbles */}
                        <div
                            className="absolute -top-16 -left-8 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 transform -rotate-6 animate-float"
                            data-oid="fokf_e5"
                        >
                            <p className="text-white/90 text-sm" data-oid="4wnn:xe">
                                "This platform changed how I learn!"
                            </p>
                        </div>
                        <div
                            className="absolute -bottom-12 -right-8 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 transform rotate-3 animate-float animation-delay-1000"
                            data-oid="70rymzy"
                        >
                            <p className="text-white/90 text-sm" data-oid="x1whdy7">
                                "The AI mentor understood exactly what I needed."
                            </p>
                        </div>

                        {/* Form container */}
                        <div
                            className="relative p-1 rounded-xl bg-gradient-to-r from-purple-500 via-orange-300 to-blue-500 animate-gradient-x"
                            data-oid="nw0crsg"
                        >
                            <div
                                className="bg-black/40 backdrop-blur-xl p-8 rounded-lg"
                                data-oid="lbh1i7v"
                            >
                                <h2
                                    className="text-2xl font-bold text-white mb-6 text-center"
                                    data-oid="s9momja"
                                >
                                    Join the Waitlist
                                </h2>

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                    data-oid="mvt8lbp"
                                >
                                    <div data-oid="8gc6g0:">
                                        <label
                                            htmlFor="email"
                                            className="block text-white/80 mb-2"
                                            data-oid="822b2x1"
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
                                            data-oid="t9y8d57"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105"
                                        data-oid="hiee:--"
                                    >
                                        Secure Your Spot
                                    </button>

                                    <p
                                        className="text-white/60 text-sm text-center"
                                        data-oid="a80ap67"
                                    >
                                        Be one of the first to experience the future of learning.
                                        <br data-oid="5szvcxv" />
                                        <span className="text-white/80" data-oid="8:1s.-3">
                                            Current position: #{position}
                                        </span>
                                    </p>
                                </form>

                                {/* Success message */}
                                {showSuccess && (
                                    <div
                                        className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md rounded-lg z-10"
                                        data-oid="y:zl.94"
                                    >
                                        <div className="text-center p-6" data-oid="w4z19bl">
                                            <div
                                                className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center"
                                                data-oid="vm0xueg"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-white"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="jjnec.m"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                        data-oid="zl0hc9b"
                                                    />
                                                </svg>
                                            </div>
                                            <h3
                                                className="text-xl font-bold text-white mb-2"
                                                data-oid="51wg28a"
                                            >
                                                You're In!
                                            </h3>
                                            <p className="text-white/80 mb-4" data-oid="vm7rb61">
                                                You're #{position} on our waitlist.
                                            </p>
                                            <div className="animate-confetti" data-oid="537.owk">
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
                <div className="py-12" data-oid="md.9b_l">
                    <div className="max-w-4xl mx-auto" data-oid="0k1ikgm">
                        <h2
                            className="text-3xl font-bold text-white text-center mb-12"
                            data-oid="d58xz96"
                        >
                            Your Learning Transformation
                        </h2>

                        <div
                            className="relative flex justify-center items-center w-full"
                            data-oid="fs7.-us"
                        >
                            {/* Connection lines */}
                            <div
                                className="absolute inset-0 flex items-center justify-center"
                                data-oid="uyrx46n"
                            >
                                <div
                                    className="bg-gradient-to-r from-purple-500 via-orange-300 to-blue-500 w-[95%] mb-[35px] h-px"
                                    data-oid="dbnlj:m"
                                ></div>
                            </div>

                            {/* Milestones */}
                            <div
                                className="relative flex items-center w-full justify-between pt-0 mt-0"
                                data-oid="fxghlfx"
                            >
                                <div className="flex flex-col items-center" data-oid="givojq0">
                                    <div
                                        className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mb-4 z-10"
                                        data-oid="24i9d.u"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="tk_k8zh"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                data-oid="exq0q0m"
                                            />
                                        </svg>
                                    </div>
                                    <h3
                                        className="text-white font-medium text-center"
                                        data-oid="-u6kd1u"
                                    >
                                        Join
                                    </h3>
                                </div>

                                <div className="flex flex-col items-center" data-oid="40u8d5l">
                                    <div
                                        className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center mb-4 z-10"
                                        data-oid="omfn8hy"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="ci0qctv"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                                data-oid="tuegq7n"
                                            />
                                        </svg>
                                    </div>
                                    <h3
                                        className="text-white font-medium text-center"
                                        data-oid="htvp_p6"
                                    >
                                        Learn
                                    </h3>
                                </div>

                                <div className="flex flex-col items-center" data-oid="6bgt5.2">
                                    <div
                                        className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4 z-10"
                                        data-oid="7fk8rbj"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="fuqw5:f"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                data-oid="jzssfq-"
                                            />
                                        </svg>
                                    </div>
                                    <h3
                                        className="text-white font-medium text-center"
                                        data-oid="r7c:b_r"
                                    >
                                        Connect
                                    </h3>
                                </div>

                                <div className="flex flex-col items-center" data-oid="9es58wz">
                                    <div
                                        className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mb-4 z-10"
                                        data-oid="b8sh9xr"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="vlb1uvu"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                data-oid="i3l.59t"
                                            />
                                        </svg>
                                    </div>
                                    <h3
                                        className="text-white font-medium text-center"
                                        data-oid="z96r49j"
                                    >
                                        Grow
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Social proof counter */}
                        <div className="mt-16 flex justify-center space-x-12" data-oid="s8nlbjt">
                            <div className="text-center" data-oid="2e4ecj0">
                                <div
                                    className="text-4xl font-bold text-white mb-2 animate-count"
                                    data-oid="pxb5en7"
                                >
                                    5000+
                                </div>
                                <p className="text-white/70" data-oid="npokxr5">
                                    Students Waiting
                                </p>
                            </div>
                            <div className="text-center" data-oid="9ef5oy1">
                                <div
                                    className="text-4xl font-bold text-white mb-2 animate-count"
                                    data-oid="n5d8kp5"
                                >
                                    24
                                </div>
                                <p className="text-white/70" data-oid="q6pfu2w">
                                    AI Mentors
                                </p>
                            </div>
                            <div className="text-center" data-oid="qah25b3">
                                <div
                                    className="text-4xl font-bold text-white mb-2 animate-count"
                                    data-oid="nrismtx"
                                >
                                    100+
                                </div>
                                <p className="text-white/70" data-oid="js2lwey">
                                    Learning Paths
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="py-8 mt-12 border-t border-white/10" data-oid="a.q2.u4">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="3og.x63"
                    >
                        <div className="text-white/70 mb-4 md:mb-0" data-oid="-4pj9bg">
                            © 2023 Horizon. All rights reserved.
                        </div>
                        <div className="flex space-x-6" data-oid="8zyta48">
                            <a
                                href="#"
                                className="text-white/70 hover:text-white transition-colors duration-300"
                                data-oid=":2-9zij"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="6295k:q"
                                >
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                        data-oid="dwwexhl"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-white/70 hover:text-white transition-colors duration-300"
                                data-oid="r9c97va"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid=":wj:ood"
                                >
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                        data-oid="xrb32wd"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-white/70 hover:text-white transition-colors duration-300"
                                data-oid="g741549"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="ska:_rx"
                                >
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                                        data-oid="sobblvo"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>

            {/* Custom CSS for animations */}
            <style jsx data-oid="lfgjb66">{`
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
