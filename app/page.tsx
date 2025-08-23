'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);
    const [alphaCount, setAlphaCount] = useState(487);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleAlphaSignup = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Alpha signup:', { email, name, status });
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 font-inter" data-oid="u75_o:l">
            {/* Header Navigation */}
            <nav
                className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4"
                data-oid="hfv201r"
            >
                <div
                    className="max-w-6xl mx-auto flex justify-between items-center"
                    data-oid="7ju9dvx"
                >
                    <div className="text-2xl font-semibold text-gray-900" data-oid=".jh96lx">
                        Project Horizon
                    </div>
                    <div className="hidden md:flex items-center space-x-8" data-oid="1y8e0vd">
                        <a
                            href="#about"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                            data-oid="9ltfblh"
                        >
                            About
                        </a>
                        <a
                            href="#partnerships"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                            data-oid="y:-oe.8"
                        >
                            Partnerships
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                            data-oid=":i1pz3t"
                        >
                            Contact
                        </a>
                        <button
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                            data-oid="dbhlvce"
                        >
                            Join Alpha
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                className="min-h-[70vh] flex items-center justify-center px-6 py-16"
                data-oid="r2pqobv"
            >
                <div className="max-w-6xl mx-auto text-center" data-oid="4ai6ybu">
                    <h1
                        className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                        data-oid="8n_2oq0"
                    >
                        Transform Your Education into Employment
                    </h1>
                    <h2
                        className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
                        data-oid="kyg_cw9"
                    >
                        India's first AI-powered mentorship platform that turns graduates into
                        job-ready professionals through personalized guidance and
                        blockchain-verified portfolios
                    </h2>

                    <div
                        className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
                        data-oid="jhiccxl"
                    >
                        <div
                            className="flex items-center justify-center space-x-3"
                            data-oid="7p0i:9u"
                        >
                            <div
                                className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                                data-oid="l_pfey6"
                            >
                                <span className="text-white text-sm" data-oid="zqq.n4o">
                                    ✓
                                </span>
                            </div>
                            <span className="text-gray-700" data-oid="z7fn6i2">
                                AI Mentor in your language
                            </span>
                        </div>
                        <div
                            className="flex items-center justify-center space-x-3"
                            data-oid=".tga2r9"
                        >
                            <div
                                className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                                data-oid="xj.u2q9"
                            >
                                <span className="text-white text-sm" data-oid="72onslx">
                                    ✓
                                </span>
                            </div>
                            <span className="text-gray-700" data-oid="nwecg62">
                                Build verifiable work portfolios
                            </span>
                        </div>
                        <div
                            className="flex items-center justify-center space-x-3"
                            data-oid="twvy_na"
                        >
                            <div
                                className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                                data-oid="kn0i.sg"
                            >
                                <span className="text-white text-sm" data-oid="gnc8v_5">
                                    ✓
                                </span>
                            </div>
                            <span className="text-gray-700" data-oid="qeek.vt">
                                Connect directly to employers
                            </span>
                        </div>
                    </div>

                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                        data-oid="owvp8t3"
                    >
                        <button
                            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                            data-oid="q7fl8a7"
                        >
                            Join Alpha Program
                        </button>
                        <a
                            href="#partnerships"
                            className="text-blue-600 px-8 py-4 text-lg hover:text-blue-700 transition-colors"
                            data-oid="qsolg92"
                        >
                            For Institutions →
                        </a>
                    </div>

                    <p className="text-gray-500" data-oid="9nxv-_v">
                        Backed by Leading Investors | Partnering with 10+ colleges
                    </p>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-16 px-6 bg-gray-50" data-oid="824kjro">
                <div className="max-w-6xl mx-auto" data-oid="t:7-h7t">
                    <h2 className="text-4xl font-bold text-center mb-16" data-oid="b7u-r45">
                        The Graduate Employment Crisis
                    </h2>

                    <div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
                        data-oid="3g_vaes"
                    >
                        <div
                            className="bg-white p-8 rounded-xl text-center shadow-sm"
                            data-oid="lpqtuoj"
                        >
                            <div
                                className="text-3xl font-bold text-blue-600 mb-2"
                                data-oid="kl7rmsc"
                            >
                                10M+
                            </div>
                            <div className="text-gray-600" data-oid="p.7zh4c">
                                graduates produced annually
                            </div>
                        </div>
                        <div
                            className="bg-white p-8 rounded-xl text-center shadow-sm"
                            data-oid="q5na:zr"
                        >
                            <div
                                className="text-3xl font-bold text-red-600 mb-2"
                                data-oid="xawj0rt"
                            >
                                8.25%
                            </div>
                            <div className="text-gray-600" data-oid=".9i2w.4">
                                get matching jobs
                            </div>
                        </div>
                        <div
                            className="bg-white p-8 rounded-xl text-center shadow-sm"
                            data-oid="8pw-9i2"
                        >
                            <div
                                className="text-3xl font-bold text-orange-600 mb-2"
                                data-oid="mosaf94"
                            >
                                50%
                            </div>
                            <div className="text-gray-600" data-oid="p0lje_f">
                                work in lower-skilled roles
                            </div>
                        </div>
                        <div
                            className="bg-white p-8 rounded-xl text-center shadow-sm"
                            data-oid="d5i3ie3"
                        >
                            <div
                                className="text-3xl font-bold text-purple-600 mb-2"
                                data-oid="z4v:2_a"
                            >
                                88%
                            </div>
                            <div className="text-gray-600" data-oid="amivxe.">
                                stuck in low-competency jobs
                            </div>
                        </div>
                    </div>

                    <div className="text-center" data-oid="432j700">
                        <p className="text-lg text-gray-600 mb-4" data-oid="su_s6wl">
                            The skills mismatch between education and industry needs is creating a
                            massive employment gap.
                        </p>
                        <p className="text-blue-600 font-medium" data-oid="_edbk07">
                            Supported by NEP 2020 & Skill India Mission
                        </p>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-16 px-6" data-oid="ozrww35">
                <div className="max-w-6xl mx-auto" data-oid="6kof7da">
                    <h2 className="text-4xl font-bold text-center mb-16" data-oid="rw32:7l">
                        Your Pocket Mentor for Success
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12" data-oid="h4ieqgj">
                        <div className="text-center" data-oid="updi:p2">
                            <div
                                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
                                data-oid="nsp-n8c"
                            >
                                <div
                                    className="w-8 h-8 bg-blue-600 rounded"
                                    data-oid="a5bid9i"
                                ></div>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4" data-oid="vct7txp">
                                Socratic AI Mentor
                            </h3>
                            <p className="text-gray-600 leading-relaxed" data-oid="pw8kzuw">
                                Get personalized guidance in English & Hindi through conversations
                                that build critical thinking
                            </p>
                        </div>

                        <div className="text-center" data-oid="-h.gc.-">
                            <div
                                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                                data-oid="fhf4pfd"
                            >
                                <div
                                    className="w-8 h-8 bg-green-600 rounded"
                                    data-oid="-b2i.7f"
                                ></div>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4" data-oid="ehsroq3">
                                Outcome Ledger
                            </h3>
                            <p className="text-gray-600 leading-relaxed" data-oid="1r:0tzb">
                                Create tamper-proof portfolios that employers trust with blockchain
                                verification
                            </p>
                        </div>

                        <div className="text-center" data-oid="bhr:6ub">
                            <div
                                className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6"
                                data-oid="f3h5_am"
                            >
                                <div
                                    className="w-8 h-8 bg-purple-600 rounded"
                                    data-oid="s82he4x"
                                ></div>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4" data-oid="6ssj429">
                                Direct Connections
                            </h3>
                            <p className="text-gray-600 leading-relaxed" data-oid="b9ylu_x">
                                Get matched to relevant opportunities through our network of 200+
                                hiring partners
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 px-6 bg-gray-50" data-oid="-18t9l9">
                <div className="max-w-6xl mx-auto" data-oid="cff:5a-">
                    <h2 className="text-4xl font-bold text-center mb-16" data-oid="e-8gmet">
                        Simple 3-Step Process
                    </h2>

                    <div
                        className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12"
                        data-oid="-b2did9"
                    >
                        <div className="text-center" data-oid="avuajgy">
                            <div
                                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                                data-oid="j0t5z22"
                            >
                                1
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="mluwogb">
                                Chat with AI Mentor
                            </h3>
                        </div>

                        <div className="hidden md:block text-gray-400 text-2xl" data-oid="7z2_s-v">
                            →
                        </div>

                        <div className="text-center" data-oid="d4dii30">
                            <div
                                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                                data-oid=":gxizmb"
                            >
                                2
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="3t:m:hu">
                                Build Your Portfolio
                            </h3>
                        </div>

                        <div className="hidden md:block text-gray-400 text-2xl" data-oid="u6p8y09">
                            →
                        </div>

                        <div className="text-center" data-oid="98w0lua">
                            <div
                                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                                data-oid="o4ocjd_"
                            >
                                3
                            </div>
                            <h3 className="text-xl font-semibold mb-2" data-oid="t.k3u6h">
                                Get Job Matches
                            </h3>
                        </div>
                    </div>

                    <div className="text-center mt-12" data-oid="j0zu-.n">
                        <button
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                            data-oid="lr38olv"
                        >
                            Start Your Journey
                        </button>
                    </div>
                </div>
            </section>

            {/* Market Validation */}
            <section className="py-16 px-6" data-oid="gxih48f">
                <div className="max-w-6xl mx-auto" data-oid="k4fg-j3">
                    <h2 className="text-4xl font-bold text-center mb-16" data-oid="fvwnm1q">
                        Massive Market Opportunity
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="xxpmcli">
                        <div data-oid="4d58:wd">
                            <div className="space-y-8" data-oid="d-zxmf6">
                                <div data-oid="g7v6zzw">
                                    <div
                                        className="text-3xl font-bold text-blue-600 mb-2"
                                        data-oid="_.odfgr"
                                    >
                                        ₹33,000 Cr
                                    </div>
                                    <div className="text-gray-600" data-oid=":cr6yvx">
                                        Indian EdTech market by 2033
                                    </div>
                                </div>
                                <div data-oid="m9vcp2k">
                                    <div
                                        className="text-3xl font-bold text-green-600 mb-2"
                                        data-oid="5ib:ajb"
                                    >
                                        28.7%
                                    </div>
                                    <div className="text-gray-600" data-oid="m:_-g5f">
                                        annual growth rate
                                    </div>
                                </div>
                                <div data-oid=":p-aca:">
                                    <div
                                        className="text-lg font-semibold text-gray-900 mb-2"
                                        data-oid="5rufqhq"
                                    >
                                        Government Backing
                                    </div>
                                    <div className="text-gray-600" data-oid=":.8igc9">
                                        through NEP 2020
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-gray-100 h-64 rounded-xl flex items-center justify-center"
                            data-oid="3zqgtan"
                        >
                            <div className="text-gray-500" data-oid="-ytjn73">
                                Growth Chart Visualization
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Early Access Section */}
            <section className="py-16 px-6 bg-blue-50" data-oid="ugzon8b">
                <div className="max-w-4xl mx-auto" data-oid="15qyc85">
                    <div
                        className="bg-white rounded-2xl p-12 text-center shadow-lg"
                        data-oid="04ev1ug"
                    >
                        <h2 className="text-4xl font-bold mb-6" data-oid="gzm_dwh">
                            Be Among the First 1,000 Alpha Users
                        </h2>

                        <div
                            className="grid md:grid-cols-2 gap-6 mb-8 text-left"
                            data-oid="3tyoox3"
                        >
                            <div className="space-y-4" data-oid="6p0efk.">
                                <div className="flex items-center space-x-3" data-oid="9:uf:_e">
                                    <div
                                        className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                        data-oid="2d34v2l"
                                    >
                                        <span className="text-white text-xs" data-oid="n996fze">
                                            ✓
                                        </span>
                                    </div>
                                    <span data-oid="0b-5rpf">
                                        Free lifetime access to core features
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3" data-oid="waopk-x">
                                    <div
                                        className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                        data-oid="z2px2pt"
                                    >
                                        <span className="text-white text-xs" data-oid="q9gzxxg">
                                            ✓
                                        </span>
                                    </div>
                                    <span data-oid="3i:2m6t">Priority job matching</span>
                                </div>
                            </div>
                            <div className="space-y-4" data-oid="fg77-rx">
                                <div className="flex items-center space-x-3" data-oid="5tex-ew">
                                    <div
                                        className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                        data-oid=":w3rxm2"
                                    >
                                        <span className="text-white text-xs" data-oid="j8t2-bz">
                                            ✓
                                        </span>
                                    </div>
                                    <span data-oid="ilwp0_d">
                                        Direct feedback channel to founders
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3" data-oid="q_wkywm">
                                    <div
                                        className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                                        data-oid="c9d1g4u"
                                    >
                                        <span className="text-white text-xs" data-oid="7ic_h7_">
                                            ✓
                                        </span>
                                    </div>
                                    <span data-oid="ook8gr0">Exclusive early user community</span>
                                </div>
                            </div>
                        </div>

                        <form
                            onSubmit={handleAlphaSignup}
                            className="space-y-4 max-w-md mx-auto"
                            data-oid="jgv5w_g"
                        >
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                                data-oid="qahr2sj"
                            />

                            <input
                                type="text"
                                placeholder="Your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                                data-oid=":g.rzea"
                            />

                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                                data-oid="7a84oac"
                            >
                                <option value="" data-oid="1ifnkh0">
                                    Select your current status
                                </option>
                                <option value="student" data-oid="rljomg7">
                                    Current Student
                                </option>
                                <option value="graduate" data-oid=":835iee">
                                    Recent Graduate
                                </option>
                                <option value="job-seeker" data-oid="vx72z-_">
                                    Job Seeker
                                </option>
                                <option value="working" data-oid="ws306kt">
                                    Currently Working
                                </option>
                            </select>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                                data-oid="rzmokco"
                            >
                                Join Alpha Program
                            </button>
                        </form>

                        <p className="text-sm text-gray-500 mt-4" data-oid="gcix8fk">
                            We respect your privacy. No spam, ever.
                        </p>
                        <p className="text-blue-600 font-medium mt-2" data-oid="hlur137">
                            {alphaCount} students already joined
                        </p>
                    </div>
                </div>
            </section>

            {/* Partnership Section */}
            <section className="py-16 px-6" data-oid="f44_65u">
                <div className="max-w-6xl mx-auto" data-oid="1wq6tjp">
                    <h2 className="text-4xl font-bold text-center mb-16" data-oid="i9uck1x">
                        Partner with Us
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12" data-oid="wmx_.zz">
                        <div className="bg-gray-50 p-8 rounded-xl" data-oid="a_9qhoj">
                            <h3 className="text-2xl font-semibold mb-6" data-oid="yq.xaq9">
                                Educational Institutions
                            </h3>
                            <ul className="space-y-4 mb-8" data-oid="0twkgj7">
                                <li className="flex items-start space-x-3" data-oid="i.yzoay">
                                    <span className="text-blue-600 mt-1" data-oid="p4.jz3b">
                                        •
                                    </span>
                                    <span data-oid="491_scg">
                                        White-label platform for your students
                                    </span>
                                </li>
                                <li className="flex items-start space-x-3" data-oid="lwi68lg">
                                    <span className="text-blue-600 mt-1" data-oid="nfx9hh9">
                                        •
                                    </span>
                                    <span data-oid="mpd9:yx">Improve placement rates by 40%+</span>
                                </li>
                                <li className="flex items-start space-x-3" data-oid="a6ahc8c">
                                    <span className="text-blue-600 mt-1" data-oid="zmzt:r5">
                                        •
                                    </span>
                                    <span data-oid="g77t7f_">Custom branding and analytics</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl" data-oid="b60_:ue">
                            <h3 className="text-2xl font-semibold mb-6" data-oid="2db4bwg">
                                Employers & HR Teams
                            </h3>
                            <ul className="space-y-4 mb-8" data-oid="0qdmz-y">
                                <li className="flex items-start space-x-3" data-oid="tx0n:y0">
                                    <span className="text-green-600 mt-1" data-oid="_knqv70">
                                        •
                                    </span>
                                    <span data-oid="ubno2e0">
                                        Access pre-vetted, skilled candidates
                                    </span>
                                </li>
                                <li className="flex items-start space-x-3" data-oid="p6432e3">
                                    <span className="text-green-600 mt-1" data-oid="w_.rmk:">
                                        •
                                    </span>
                                    <span data-oid="46wlnbn">Reduce hiring time by 60%</span>
                                </li>
                                <li className="flex items-start space-x-3" data-oid="blstsku">
                                    <span className="text-green-600 mt-1" data-oid="gp4ter_">
                                        •
                                    </span>
                                    <span data-oid="3e4w04d">Portfolio-based recruitment</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-12" data-oid="_04q8y_">
                        <button
                            className="bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
                            data-oid="dvw10b2"
                        >
                            Schedule Partnership Call
                        </button>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-16 px-6 bg-gray-50" data-oid="3rs_:zh">
                <div className="max-w-4xl mx-auto text-center" data-oid="j4a3jv8">
                    <h2 className="text-4xl font-bold mb-8" data-oid="s1p6abf">
                        Built by Educators & Technologists
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-oid="4ochcr4">
                        Our team combines deep expertise in education, technology, and career
                        development to create meaningful solutions for India's graduate employment
                        challenge.
                    </p>
                    <p className="text-lg font-medium text-blue-600" data-oid="pcrn5y1">
                        "Making quality mentorship accessible to every Indian graduate"
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-6" data-oid="8atln2d">
                <div className="max-w-6xl mx-auto" data-oid="316g4nx">
                    <div className="grid md:grid-cols-4 gap-8 mb-8" data-oid="-pxdr6o">
                        <div data-oid="ojowgqw">
                            <div className="text-2xl font-semibold mb-4" data-oid="xvwvqnv">
                                Project Horizon
                            </div>
                            <p className="text-gray-400" data-oid="cd-_9sf">
                                Transforming education into employment through AI-powered
                                mentorship.
                            </p>
                        </div>
                        <div data-oid="0j7e80q">
                            <h4 className="font-semibold mb-4" data-oid="tyfp8a8">
                                Company
                            </h4>
                            <ul className="space-y-2 text-gray-400" data-oid="pdxfopu">
                                <li data-oid="2c:v_9a">
                                    <a
                                        href="#about"
                                        className="hover:text-white transition-colors"
                                        data-oid="p15l12s"
                                    >
                                        About
                                    </a>
                                </li>
                                <li data-oid="retyem:">
                                    <a
                                        href="#partnerships"
                                        className="hover:text-white transition-colors"
                                        data-oid="eho-af0"
                                    >
                                        Partnerships
                                    </a>
                                </li>
                                <li data-oid="7g1f1ox">
                                    <a
                                        href="#contact"
                                        className="hover:text-white transition-colors"
                                        data-oid="d6j65h."
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="jr59:_h">
                            <h4 className="font-semibold mb-4" data-oid="mra9a2q">
                                Legal
                            </h4>
                            <ul className="space-y-2 text-gray-400" data-oid="drk0.qz">
                                <li data-oid="hw237jr">
                                    <a
                                        href="#privacy"
                                        className="hover:text-white transition-colors"
                                        data-oid="jrh9i3y"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li data-oid="sv4l1br">
                                    <a
                                        href="#terms"
                                        className="hover:text-white transition-colors"
                                        data-oid="u_7w008"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="._7ggll">
                            <h4 className="font-semibold mb-4" data-oid="ohvczqc">
                                Connect
                            </h4>
                            <ul className="space-y-2 text-gray-400" data-oid="c8tq8le">
                                <li data-oid="s64fb91">
                                    <a
                                        href="#linkedin"
                                        className="hover:text-white transition-colors"
                                        data-oid="s1t3eew"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li data-oid="6z9a3au">
                                    <a
                                        href="#twitter"
                                        className="hover:text-white transition-colors"
                                        data-oid="9c37id7"
                                    >
                                        Twitter
                                    </a>
                                </li>
                                <li data-oid="p.2s:b5">
                                    <a
                                        href="mailto:hello@projecthorizon.in"
                                        className="hover:text-white transition-colors"
                                        data-oid="mxc1_cd"
                                    >
                                        Email
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="border-t border-gray-800 pt-8 text-center text-gray-400"
                        data-oid="s27ju97"
                    >
                        <p data-oid="amsj-0z">
                            &copy; 2024 Project Horizon. All rights reserved. | Registered in India
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
