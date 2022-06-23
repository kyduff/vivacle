import NextAuth from "next-auth"
import EmailProvider from 'next-auth/providers/email';
import { SpotifyProvider } from "@/lib/brands/spotify";
import { GoogleProvider } from "@/lib/brands/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
  // adapter: PrismaAdapter(prisma),
  providers: [
    SpotifyProvider,
    GoogleProvider,
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async session({ session, user }) {
      if (user) session.name = user.name;
      return session;
    },
    async jwt({ token, account }) {
      if (account) token.accessToken = account.access_token;
      return token;
    }
  }
})
