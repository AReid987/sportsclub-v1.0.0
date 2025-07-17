/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@sportsclub/ui'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
