import type { NextApiRequest, NextApiResponse } from "next";
import * as contentful from "contentful";
import BlogPost from "@/types/blogPost";

export interface BlogPosts {
  total: number;
  limit: number;
  skip: number;

  items: BlogPost[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const posts = (await client.getEntries()) as unknown as BlogPosts;

  res.end(JSON.stringify(posts));
}
