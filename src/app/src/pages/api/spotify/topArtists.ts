import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'
// import accolades from "../../../lib/accolades/spotify/accolade_manifest.json"

const secret = process.env.NEXT_AUTH_SECRET

export default async function getTopArtistAccolades(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken({ req, secret })
  try {
    const response = await fetch('https://api.spotify.com/v1/me/top/artists', {
      method: 'GET',
      headers: {
        Content: 'application/json',
        Authorization: `Bearer ${token.accessToken}`,
      },
    })
    const data = await response.json()
    // console.log('fetched data: ', data)
    // console.log("accolade parsing: ", topArtistListIncludes(data.items, "spotify:artist:246dkjvS1zLTtiykXe5h60"))
    // console.log("accolade parsing: ", topArtistListIncludes(data.items, "spotify:artist:x"))

    return res.status(200).json({
      data,
    })
  } catch (e) {
    return res.status(400).json({
      status: e.message,
    })
  }
}
