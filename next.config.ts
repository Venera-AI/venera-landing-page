import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
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
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
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

export default withNextIntl(nextConfig);
