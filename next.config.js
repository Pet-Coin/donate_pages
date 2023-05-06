/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'cdn.shopify.com',
      'tokens.1inch.io',
      'placeimg.com',
      'cdn.shopify.com',
      'cdn.logoworks.com',
      'petslovecdn.s3.amazonaws.com',
      'cloudfront.net',
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
