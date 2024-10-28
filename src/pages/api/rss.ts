import type { NextApiRequest, NextApiResponse } from 'next';
import * as jsonfeedToRSS from 'jsonfeed-to-rss';
import * as contentful from 'contentful';
import BlogPost from '@/types/blogPost';
import { blogUtils } from '@/utils/blogUtils';
import { loadEnvConfig } from '@next/env';

interface BlogPosts {
  total: number;
  limit: number;
  skip: number;

  items: BlogPost[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  loadEnvConfig(process.cwd());

  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
  });

  const posts = (await client.getEntries()) as unknown as BlogPosts;

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
