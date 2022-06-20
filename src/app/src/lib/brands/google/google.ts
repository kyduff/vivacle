import Google from "next-auth/providers/google";

const GoogleProvider = Google({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  authorization: {
    params: {
      scope: "profile"
    }
  }
})

export { GoogleProvider };