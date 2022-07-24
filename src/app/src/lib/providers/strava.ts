import Strava from 'next-auth/providers/strava'

export const StravaProvider = Strava({
  clientId: process.env.STRAVA_CLIENT_ID,
  clientSecret: process.env.STRAVA_CLIENT_SECRET,
})
