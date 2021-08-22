const withPlugins = require("next-compose-plugins");
const bundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  webpack: (config) => {
    // modify the `config` here
    config.plugins = config.plugins || [];
    return config;
  },
  trailingSlash: true,
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
  async headers() {
    return [
      {
        source: "/(.*?)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubdomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "same-origin",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

module.exports = withPlugins([bundleAnalyzer], nextConfig);
