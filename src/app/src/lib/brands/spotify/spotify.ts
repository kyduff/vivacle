import Spotify from "next-auth/providers/spotify";

const SpotifyProvider = Spotify({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  authorization: {
    params: {
      scope: "user-read-email user-read-private user-top-read"
    }
  }
})

const ffilter = async function (token: string) {

  const res = await fetch('https://api.spotify.com/v1/me/top/artists', {
    method: "GET",
    headers: {
      Content: "application/json",
      Authorization: `Bearer ${token}`
    }
  })

  return res.json();
}

export { SpotifyProvider, ffilter };