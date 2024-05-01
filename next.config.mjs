/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.licdn.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 's3-alpha-sig.figma.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'm.media-amazon.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
