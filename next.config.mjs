/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    apiBaseUrl: "http://localhost:8000/api",
    imgBase: "http://localhost:8000/api/image",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
