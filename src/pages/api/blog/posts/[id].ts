import type { NextApiRequest, NextApiResponse } from "next";
import * as contentful from "contentful";
import BlogPost from "@/types/blogPost";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const post = (await client.getEntry(
    req.query.id as string
  )) as unknown as BlogPost;

  res.end(JSON.stringify(post));
}
