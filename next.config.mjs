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
  };
  
  export default nextConfig;
