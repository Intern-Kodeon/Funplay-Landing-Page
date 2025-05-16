/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Add custom headers
    async headers() {
        return [
            {
                // Apply these headers to all routes
                source: '/:path*',
                headers: [
                    // Content-Security-Policy Header
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'self';",
                    },
                    // X-Content-Type-Options Header
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    // Referrer-Policy Header
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    // X-Frame-Options Header
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;