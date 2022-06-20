import { assert } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../lib/redis";

export default async function Download(req: NextApiRequest, res: NextApiResponse) {
  try {
    assert(req.method === "GET")

    // code
    const data = await client.get("cart");

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
}