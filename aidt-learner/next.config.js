/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeholdit.imgix.net',
      },
    ],
  },
}

module.exports = nextConfig 