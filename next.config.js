/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // IMPORTANT: Do NOT set `output: 'export'` (that would force static export).
  // Leave `output` undefined so SSR is allowed.
  // output: 'export', // ❌ don't do this
};

module.exports = nextConfig;
