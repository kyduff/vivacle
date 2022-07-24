import { NextApiRequest, NextApiResponse } from 'next'
import getTopArtists from './topArtists'
import getTopTracks from './topTracks'

export default async function getAllAccolades(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return getTopArtists(req, res)
}
