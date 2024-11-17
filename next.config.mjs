/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "./dist", // Changes the build output directory to `./dist/`.
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: "http://16.171.252.182:8080/api/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
