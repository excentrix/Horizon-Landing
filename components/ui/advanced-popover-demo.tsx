'use client';

import React from 'react';
import AdvancedPopover from './advanced-popover';

export default function AdvancedPopoverDemo() {
    return (
        <div className="p-8 space-y-8" data-oid="lhi7u.n">
            <h1 className="text-3xl font-bold text-center mb-8" data-oid="b2il76a">
                Advanced Popover Demo
            </h1>

            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                data-oid="g4llfda"
            >
                {/* Basic Example */}
                <div className="p-4 border rounded-lg" data-oid="vccjaha">
                    <h3 className="font-semibold mb-3" data-oid="67p0adk">
                        Basic Example
                    </h3>
                    <AdvancedPopover
                        trigger={
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                data-oid="kieft1d"
                            >
                                Hover for Preview
                            </button>
                        }
                        title="Project Horizon"
                        description="Your Personal AI Mentor for Career, Academics & Mental Health"
                        url="https://projecthorizon.ai"
                        icon="🧠"
                        data-oid="pym3hy1"
                    />
                </div>

                {/* With Action Button */}
                <div className="p-4 border rounded-lg" data-oid="3t9q.hf">
                    <h3 className="font-semibold mb-3" data-oid="jjsqptq">
                        With Action Button
                    </h3>
                    <AdvancedPopover
                        trigger={
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                                data-oid=".la25jm"
                            >
                                Watch Demo
                            </button>
                        }
                        title="Project Horizon Demo"
                        description="See how our AI mentor adapts to your needs in real-time"
                        url="https://projecthorizon.ai/demo"
                        actionLabel="Play Video"
                        actionHref="https://youtube.com/watch?v=demo"
                        icon="🎥"
                        meta="5 min"
                        data-oid="q.6-cra"
                    />
                </div>

                {/* With Custom Icon */}
                <div className="p-4 border rounded-lg" data-oid="y-gcclm">
                    <h3 className="font-semibold mb-3" data-oid="s9go-o5">
                        Custom Icon
                    </h3>
                    <AdvancedPopover
                        trigger={
                            <button
                                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                                data-oid="otjlnwe"
                            >
                                Learn More
                            </button>
                        }
                        title="AI Education Platform"
                        description="Revolutionizing learning with personalized AI mentoring"
                        url="https://projecthorizon.ai/features"
                        icon="🚀"
                        meta="New"
                        data-oid="3ao3frx"
                    />
                </div>

                {/* Static Image Example */}
                <div className="p-4 border rounded-lg" data-oid="t3lcxbc">
                    <h3 className="font-semibold mb-3" data-oid="rng6s32">
                        Static Image
                    </h3>
                    <AdvancedPopover
                        trigger={
                            <button
                                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                                data-oid="y6vqgt3"
                            >
                                Static Preview
                            </button>
                        }
                        title="Custom Image"
                        description="Using a pre-defined image instead of screenshot API"
                        url="https://example.com"
                        isStatic={true}
                        imageSrc="https://via.placeholder.com/200x125/4F46E5/FFFFFF?text=Custom+Image"
                        icon="🖼️"
                        data-oid="z2n3ec1"
                    />
                </div>

                {/* Different Position */}
                <div className="p-4 border rounded-lg" data-oid="qzzcwqk">
                    <h3 className="font-semibold mb-3" data-oid="e_zci4:">
                        Right Side
                    </h3>
                    <AdvancedPopover
                        trigger={
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                                data-oid="9_4.411"
                            >
                                Right Side
                            </button>
                        }
                        title="Right Positioned"
                        description="Popover appears on the right side of the trigger"
                        url="https://projecthorizon.ai"
                        side="right"
                        icon="➡️"
                        data-oid="v_ak:ib"
                    />
                </div>

                {/* With Click Action */}
                <div className="p-4 border rounded-lg" data-oid="248fcxx">
                    <h3 className="font-semibold mb-3" data-oid="t79wyj9">
                        Click Action
                    </h3>
                    <AdvancedPopover
                        trigger={
                            <button
                                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                                data-oid="t5slnwg"
                            >
                                Click Action
                            </button>
                        }
                        title="Interactive Demo"
                        description="Click the action button to trigger a custom function"
                        url="https://projecthorizon.ai"
                        actionLabel="Try Now"
                        onActionClick={() => alert('Custom action triggered!')}
                        icon="⚡"
                        data-oid="1o8sgbm"
                    />
                </div>
            </div>

            {/* Usage Instructions */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg" data-oid="mbs1t4m">
                <h2 className="text-2xl font-bold mb-4" data-oid="9ztir1:">
                    Usage Instructions
                </h2>
                <div className="space-y-4" data-oid="lbuc8bv">
                    <div data-oid="_zmmdpu">
                        <h3 className="font-semibold" data-oid="g84qis8">
                            Basic Props:
                        </h3>
                        <ul
                            className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4"
                            data-oid="4soei3."
                        >
                            <li data-oid="l-sayjk">
                                <code data-oid="7_l38v5">trigger</code>: The element that triggers
                                the popover
                            </li>
                            <li data-oid="n4dx3bk">
                                <code data-oid="yb6cydi">title</code>: The title displayed in the
                                popover
                            </li>
                            <li data-oid="3.1qpe2">
                                <code data-oid="7.:q:2f">description</code>: Optional description
                                text
                            </li>
                            <li data-oid="ng:8:t2">
                                <code data-oid="pwrwtl9">url</code>: URL for the screenshot preview
                            </li>
                            <li data-oid="esf3:40">
                                <code data-oid="a-s2e8h">icon</code>: Optional icon (defaults to
                                YouTube icon)
                            </li>
                        </ul>
                    </div>

                    <div data-oid="63lzwin">
                        <h3 className="font-semibold" data-oid="19_xeck">
                            Image Preview Props:
                        </h3>
                        <ul
                            className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4"
                            data-oid="d9nme79"
                        >
                            <li data-oid="i7o51lg">
                                <code data-oid="8fn:j.-">width</code>: Image width (default: 200)
                            </li>
                            <li data-oid="h4v2lhx">
                                <code data-oid="p._39ma">height</code>: Image height (default: 125)
                            </li>
                            <li data-oid="s028tup">
                                <code data-oid="m2x1_e:">isStatic</code>: Use static image instead
                                of screenshot API
                            </li>
                            <li data-oid="3xh5:wq">
                                <code data-oid="_c5lgm7">imageSrc</code>: Static image URL when
                                isStatic is true
                            </li>
                        </ul>
                    </div>

                    <div data-oid="az1b:_b">
                        <h3 className="font-semibold" data-oid="fqh-zl3">
                            Action Props:
                        </h3>
                        <ul
                            className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4"
                            data-oid="003rmvd"
                        >
                            <li data-oid="jykesin">
                                <code data-oid="7..0266">actionLabel</code>: Text for the action
                                button
                            </li>
                            <li data-oid="im3xtku">
                                <code data-oid="bq4rtrm">actionHref</code>: Link for the action
                                button
                            </li>
                            <li data-oid="90u0lnp">
                                <code data-oid="drq0zl:">onActionClick</code>: Function to call when
                                action button is clicked
                            </li>
                            <li data-oid="92vg79:">
                                <code data-oid="5oyx9_e">meta</code>: Optional metadata (e.g.,
                                duration, status)
                            </li>
                        </ul>
                    </div>

                    <div data-oid="r2.lvh:">
                        <h3 className="font-semibold" data-oid="dl6-12t">
                            Positioning Props:
                        </h3>
                        <ul
                            className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4"
                            data-oid="i34.id6"
                        >
                            <li data-oid="9whxvgl">
                                <code data-oid="1muf-my">side</code>: 'top' | 'bottom' | 'left' |
                                'right' (default: 'top')
                            </li>
                            <li data-oid="rvjp4u2">
                                <code data-oid="zsbg81q">align</code>: 'start' | 'center' | 'end'
                                (default: 'center')
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
