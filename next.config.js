import withServerlessCloud from "@serverless/cloud/nextjs";
import { withContentlayer } from "next-contentlayer";
import nextTranspileModules from "next-transpile-modules";

const withTM = nextTranspileModules([
  "fetchp",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // swcMinify: false,

  pageExtensions: [
    "page.tsx",
    "page.ts",
    "page.jsx",
    "page.js",
    "api.tsx",
    "api.ts",
    "api.jsx",
    "api.js",
  ],

  trailingSlash: true,

  experimental: {
    esmExternals: true,
    images: { allowFutureImage: true, unoptimized: true },
  },

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/en/",
      },
    ];
  },
};

let withMiddlewares = withTM(withContentlayer(nextConfig));

if (process.env.NO_CLOUD !== "1") {
  withMiddlewares = withServerlessCloud(withMiddlewares);
}

export default withMiddlewares;
