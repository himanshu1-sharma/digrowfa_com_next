/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  disable: process.env.NODE_ENV === 'development'
})
const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.ctfassets.net"]
  }
})


module.exports = {
  // Allow global CSS imports from node_modules
  cssModules: {
    mode: 'global',
    allowGlobal: true,
  },
};

ssr: false
const withVideos = require('next-videos')


module.exports = nextConfig
module.exports = withVideos()

