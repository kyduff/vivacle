import { assert } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../lib/redis";

export default async function Upload(req: NextApiRequest, res: NextApiResponse) {
  try {
    assert(req.method === "POST")

    const { data } = JSON.parse(req.body);
    const value = JSON.stringify(data);

    await client.set("cart", value);

    res.status(200).json({ data })
  } catch (error) {
    res.status(500).json({ error });
  }
}