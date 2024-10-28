import type { NextApiRequest, NextApiResponse } from 'next';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const jsonfeedToRSS = require('jsonfeed-to-rss');
import { blogUtils } from '@/utils/blogUtils';
import { contentfulService } from '@/services/contentful-service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const posts = await contentfulService.getPosts();

  const data = {
    version: 'https://jsonfeed.org/version/1',
    title: 'DavidOelfke.dev',
    home_page_url: 'https://davidoelfke.dev',
    feed_url: 'https://davidoelfke.dev/rss.xml',
    description: 'All things software',
    author: {
      name: 'David Oelfke',
      url: 'https://davidoelfke.dev'
    },
    items: posts.items.map((post) => {
      const postLink = blogUtils.generateUrl(post.sys.id, post.fields.title);

      return {
        id: post.sys.id,
        title: post.fields.title,
        date_published: post.sys.createdAt,
        url: 'https://davidoelfke.dev' + postLink
      };
    })
  };
  const rss = jsonfeedToRSS(data);

  res.appendHeader('content-type', 'text/xml');

  res.status(200).send(rss);
}
