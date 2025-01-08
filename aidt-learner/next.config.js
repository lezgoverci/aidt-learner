/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.jp',
      },
    ],
    domains: ['placehold.jp', 'picsum.photos'],
  },
}

module.exports = nextConfig 