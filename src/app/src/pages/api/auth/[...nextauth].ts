import NextAuth from 'next-auth'
import { SpotifyProvider } from '@/lib/providers/spotify'
import { GoogleProvider } from '@/lib/providers/google'
import { StravaProvider } from '@/lib/providers/strava'

export default NextAuth({
  providers: [SpotifyProvider, GoogleProvider, StravaProvider],
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        console.log(
          `[jwt callback] Storing account.provider (${account.provider}) and account.access_token (${account.access_token}) on token`
        )
        // Persist the OAuth access_token to the token right after signin
        token.accessToken = account.access_token
        token.provider = account.provider
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      session.provider = token.provider
      // console.log("session: ", session);
      return session
    },
  },
})
