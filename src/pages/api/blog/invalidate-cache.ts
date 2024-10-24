import { Redis } from "@upstash/redis";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const key = req.query.key;

  if (!key || key !== process.env.CACHE_INVALIDATION_KEY) {
    res.status(401).end();
    return;
  }

  const redis = Redis.fromEnv();
  await redis.del("posts");

  res.status(200).end();
}
