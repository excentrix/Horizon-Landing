import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Horizon',
    description: 'Horizon - Your personal Ai Mentor!',
    icons: {
        icon: '/images/blob2.svg',
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="mu_.2t6">
            <body className={inter.className} data-oid="in0c0te">
                {children}
            </body>
        </html>
    );
}
