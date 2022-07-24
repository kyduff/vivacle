import Spotify from "next-auth/providers/spotify";

export const SpotifyProvider = Spotify({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  authorization: {
    params: {
      scope: "user-read-email user-read-private user-top-read"
    }
  }
})
