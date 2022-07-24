import Google from "next-auth/providers/google";

export const GoogleProvider = Google({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  authorization: {
    params: {
      scope: "profile"
    }
  }
})
