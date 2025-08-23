import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Project Horizon Color Palette
                charcoal: {
                    50: '#F7FAFC',
                    100: '#EDF2F7',
                    200: '#E2E8F0',
                    300: '#CBD5E0',
                    400: '#A0AEC0',
                    500: '#718096',
                    600: '#4A5568',
                    700: '#2D3748',
                    800: '#1A202C',
                    900: '#171923',
                },
                'warm-gray': {
                    50: '#F7FAFC',
                    100: '#EDF2F7',
                    200: '#E2E8F0',
                    300: '#CBD5E0',
                    400: '#A0AEC0',
                    500: '#718096',
                    600: '#4A5568',
                    700: '#2D3748',
                    800: '#1A202C',
                    900: '#171923',
                },
                'soft-orange': {
                    50: '#FFFBEB',
                    100: '#FEF3C7',
                    200: '#FDE68A',
                    300: '#FCD34D',
                    400: '#FBBF24',
                    500: '#F59E0B',
                    600: '#D97706',
                    700: '#B45309',
                    800: '#92400E',
                    900: '#78350F',
                },
                cream: '#FEFEFE',
                surface: '#F7FAFC',
                border: '#E2E8F0',
                success: '#38A169',
                warning: '#E53E3E',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            spacing: {
                '18': '4.5rem', // 72px for header height
                '128': '32rem', // 512px for section spacing
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'scale-in': 'scaleIn 0.6s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};

export default config;
