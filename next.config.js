/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})


const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

// module.exports = nextConfig;
module.exports = withPWA(
  nextConfig
)