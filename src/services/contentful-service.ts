import BlogPost from '@/types/blogPost';
import { loadEnvConfig } from '@next/env';
import * as contentful from 'contentful';

interface BlogPosts {
  total: number;
  limit: number;
  skip: number;

  items: BlogPost[];
}

const getClient = () => {
  loadEnvConfig(process.cwd());

  return contentful.createClient({
    space: process.env.CONTENTFUL_SPACE as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
  });
};

const getPosts = async () => {
  const client = getClient();

  const posts = (await client.getEntries({
    content_type: 'blogPost',
    select: ['fields.title', 'fields.subtitle', 'sys.id', 'sys.createdAt']
  })) as unknown as BlogPosts;

  return posts;
};

const getPost = async (id: string) => {
  const client = getClient();

  const post = (await client.getEntry(id)) as unknown as BlogPost;

  return post;
};

export const contentfulService = {
  getPosts,
  getPost
};
