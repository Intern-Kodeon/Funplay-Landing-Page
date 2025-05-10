/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'images.unsplash.com'
          },
          {
              protocol: 'https',
              hostname: 'funplaysystems.com'
          },
          {
              protocol: 'https',
              hostname: 'img.freepik.com'
          }
      ]
  }
};

export default nextConfig;