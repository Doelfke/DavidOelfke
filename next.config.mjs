/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return {
        beforeFiles: [{ source: "/rss.xml", destination: "/api/rss" }],
      };
    },
  };
  
  export default nextConfig;
