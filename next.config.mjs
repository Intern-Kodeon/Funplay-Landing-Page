/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // Commented out as per your current config
    trailingSlash: true, // or false, depending on your preference
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://maps.googleapis.com https://www.google.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.google.com https://*.googleapis.com; font-src 'self'; connect-src 'self' https://maps.googleapis.com https://*.google.com; frame-src 'self' https://www.google.com https://maps.google.com; frame-ancestors 'self';",
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
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