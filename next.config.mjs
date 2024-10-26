/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return {
        beforeFiles: [{ source: "/rss.xml", destination: "/api/rss" }],
      };
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
    async redirects() {
      return [
        {
          source: '/blog',
          destination: '/blog/page/1',
          permanent: true,
        },
      ]
    },
    webpack: (config, { dev, isServer }) => {
      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat',
        })
      }
  
      return config
    },
  };
  
  export default nextConfig;
