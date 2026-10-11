import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // saare <Image> par apply: koi bhi website ka link chalega
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },
};

export default nextConfig;