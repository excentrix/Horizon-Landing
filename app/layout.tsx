import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Horizon | Where AI mentorship meets collaborative learning',
    description:
        'Join Horizon to experience the future of learning with AI mentors and a collaborative community. Sign up for our waitlist today.',
    keywords: [
        'AI mentorship',
        'collaborative learning',
        'education platform',
        'AI tutoring',
        'learning community',
    ],

    authors: [{ name: 'Excentrix Team' }],
    creator: 'Excentrix',
    publisher: 'Excentrix',
    formatDetection: {
        email: false,
        telephone: false,
    },
    metadataBase: new URL('https://horizon.excentrix.tech'), // Replace with your actual domain
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Horizon | Where AI mentorship meets collaborative learning',
        description:
            'Join Horizon to experience the future of learning with AI mentors and a collaborative community. Sign up for our waitlist today.',
        url: 'https://horizon.excentrix.tech', // Replace with your actual domain
        siteName: 'Horizon',
        images: [
            {
                url: 'https://horizon.excentrix.tech/images/og-horizon.png', // Replace with your actual OG image
                width: 1280,
                height: 720,
                alt: 'Horizon - AI mentorship platform',
            },
        ],

        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Horizon | Where AI mentorship meets collaborative learning',
        description:
            'Join Horizon to experience the future of learning with AI mentors and a collaborative community. Sign up for our waitlist today.',
        images: ['https://horizon.excentrix.tech/images/og-horizon.png'], // Replace with your actual Twitter image
        creator: '@excentrix', // Replace with your actual Twitter handle
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code', // Replace with your Google verification code
        yandex: 'your-yandex-verification-code', // Replace with your Yandex verification code if needed
    },
    icons: {
        icon: '/images/blob2.svg',
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="rlbe8ah">
            <head data-oid="-xy4tel">
                {/* Google Analytics */}
                <Script
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=G-JCJ88LN2LC`} // Replace with your actual GA ID
                    data-oid="lc2c3y0"
                />

                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-JCJ88LN2LC'); // Replace with your actual GA ID
                        `,
                    }}
                    data-oid="fgm6c:h"
                />
            </head>
            <body className={inter.className} data-oid="anlmr-:">
                {children}
            </body>
        </html>
    );
}
