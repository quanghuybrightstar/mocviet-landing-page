/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    loader: "default",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', 
        pathname: '/**', 
      },
      {
        protocol: 'http',
        hostname: '**', 
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;
