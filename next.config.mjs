import path from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['api.microlink.io'],
    },
};
export default nextConfig;
