import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
    title: 'Project Horizon - Your Personal AI Mentor for Career, Academics & Mental Health',
    description:
        "Get personalized guidance for career, academics, and mental health in your language. Your AI mentor designed like a caring parent, solving Bloom's 2 Sigma Problem.",
    keywords:
        'AI mentor, personalized learning, career guidance, academic support, mental health, student success, India education',
    authors: [
        {
            name: 'Project Horizon Team',
        },
    ],

    openGraph: {
        title: 'Project Horizon - Your Personal AI Mentor',
        description:
            'Get personalized guidance for career, academics, and mental health in your language.',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Project Horizon - Your Personal AI Mentor',
        description:
            'Get personalized guidance for career, academics, and mental health in your language.',
    },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="scroll-smooth" data-oid="boef5q5">
            <body className="antialiased bg-cream" data-oid=".f.:o0:">
                {children}
            </body>
        </html>
    );
}
