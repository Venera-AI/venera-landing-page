import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // To make image component work with static export
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: {
        mode: ["react-component", "html", "body", "meta"],
      },
    });

    return config;
  },
  experimental: {
    turbo: {
      rules: {
        "*.md": {
          as: "*.js",
          loaders: [
            {
              loader: "frontmatter-markdown-loader",
              options: {
                mode: ["react-component", "html", "body", "meta"],
              },
            },
          ],
        },
      },
    },
  },
};

export default nextConfig;
