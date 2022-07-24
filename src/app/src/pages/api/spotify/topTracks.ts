import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'

const secret = process.env.NEXT_AUTH_SECRET

export default async function getTopArtistAccolades(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken({ req, secret })
  try {
    const response = await fetch('https://api.spotify.com/v1/me/top/tracks', {
      method: 'GET',
      headers: {
        Content: 'application/json',
        Authorization: `Bearer ${token.accessToken}`,
      },
    })
    // console.log('response headers: ', response.headers)
    const data = await response.json()
    return res.status(200).json({
      data,
    })
  } catch (e) {
    return res.status(400).json({
      status: e.message,
    })
  }
}
