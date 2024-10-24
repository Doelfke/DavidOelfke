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
