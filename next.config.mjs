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
  };
  
  export default nextConfig;
