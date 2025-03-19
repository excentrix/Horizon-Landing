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
    metadataBase: new URL('https://yourdomain.com'), // Replace with your actual domain
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Horizon | Where AI mentorship meets collaborative learning',
        description:
            'Join Horizon to experience the future of learning with AI mentors and a collaborative community. Sign up for our waitlist today.',
        url: 'https://yourdomain.com', // Replace with your actual domain
        siteName: 'Horizon',
        images: [
            {
                url: 'https://yourdomain.com/images/og-image.jpg', // Replace with your actual OG image
                width: 1200,
                height: 630,
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
        images: ['https://yourdomain.com/images/twitter-image.jpg'], // Replace with your actual Twitter image
        creator: '@horizonlearning', // Replace with your actual Twitter handle
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
        <html lang="en" data-oid="tgjfw0_">
            <head data-oid="w3dnscj">
                {/* Google Analytics */}
                <Script
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} // Replace with your actual GA ID
                    data-oid="f:byyxw"
                />

                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-XXXXXXXXXX'); // Replace with your actual GA ID
                        `,
                    }}
                    data-oid="njz-qdx"
                />
            </head>
            <body className={inter.className} data-oid="8dky9lj">
                {children}
            </body>
        </html>
    );
}
