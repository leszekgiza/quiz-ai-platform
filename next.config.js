/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Usunięto output: 'export', aby umożliwić standardowe budowanie serwera
  trailingSlash: true,
  distDir: '.next',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
