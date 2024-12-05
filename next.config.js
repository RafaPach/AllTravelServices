/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ['ik.imagekit.io'], // Add your external image domain here
  },
};

module.exports = nextConfig;
