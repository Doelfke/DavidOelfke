import { contentfulService } from '@/services/contentful-service';
import { blogUtils } from '@/utils/blogUtils';
import type { IncomingMessage, ServerResponse } from 'http';

function generateSiteMap(urls: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
         <loc>https://davidoelfke.dev</loc>
       </url>
       <url>
         <loc>https://davidoelfke.dev/about-me</loc>
       </url>
       <url>
         <loc>https://davidoelfke.dev/blog</loc>
       </url>
       <url>
         <loc>https://davidoelfke.dev/blog/page/1</loc>
       </url>
       <url>
         <loc>https://davidoelfke.dev/my-work</loc>
       </url>
       ${urls
         .map((url) => {
           return `
         <url>
             <loc>${`${url}`}</loc>
         </url>`;
         })
         .join('')}
     </urlset>
   `;
}
function SiteMap() {}

export async function getServerSideProps(r: { res: ServerResponse<IncomingMessage> }) {
  const posts = await contentfulService.getPosts();

  const pages = posts.items.map((post) => {
    return 'https://davidoelfke.dev' + blogUtils.generateUrl(post.sys.id, post.fields.title);
  });

  const sitemap = generateSiteMap(pages);

  r.res.setHeader('Content-Type', 'text/xml');
  r.res.write(sitemap);
  r.res.end();

  return {
    props: {}
  };
}

export default SiteMap;
