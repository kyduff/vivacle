import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXT_AUTH_SECRET

export default async function Spotify(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req, secret });
  console.log(token.accessToken);
  const ret = await fetch('https://youtube.googleapis.com/youtube/v3/subscriptions?mine=true&pageToken=0&maxResults=50&part=snippet', {
    method: "GET",
    headers: {
      Content: "application/json",
      Authorization: `Bearer ${token.accessToken}`
    }
  })
  console.log(await ret.json());
  res.send(200);
}