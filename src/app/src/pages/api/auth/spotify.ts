import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { ffilter } from "@/lib/brands/spotify";

const secret = process.env.NEXT_AUTH_SECRET

export default async function Spotify(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req, secret });
  console.log(token.accessToken);
  console.log(await ffilter(token.accessToken));
  res.send(200);
}