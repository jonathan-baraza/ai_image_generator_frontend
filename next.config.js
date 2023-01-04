/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["oaidalleapiprodscus.blob.core.windows.net"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "oaidalleapiprodscus.blob.core.windows.net",
    //     port: "",
    //     pathname: "/*",
    //   },
    // ],
  },
};

module.exports = nextConfig;
