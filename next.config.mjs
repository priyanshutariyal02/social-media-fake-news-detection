/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/upload", // This is the endpoint in your Next.js app
        destination:
          "https://fake-news-detection-feature-for-social.onrender.com/upload", // This is the external API URL
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
