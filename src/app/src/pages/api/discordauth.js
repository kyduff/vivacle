export default async function DiscordAuth(req, res) {
  try {
    let verified = false;
    const { code } = req.body;
    console.log(code);

    if (!code) {
      return res.send(500);
    }

    const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: 'https://oxhack22.vercel.app/discordlanding',
        scope: 'guilds',
      })
    })

    const oauthData = await oauthResult.json();

    console.log(oauthData);

    const resp = await fetch(`https://discordapp.com/api/users/@me/guilds`, {
      headers: {
        authorization: `${oauthData.token_type} ${oauthData.access_token}`
      },
    })

    const servers = await resp.json();

    console.log(servers);
    console.log(process.env.NEXT_PUBLIC_OXFORD_HACK_GUILD_ID)

    servers.forEach(server => {
      if (server.id == process.env.NEXT_PUBLIC_OXFORD_HACK_GUILD_ID.toString()) {
        verified = true;
      }
    })

    res.json({ verified });
  } catch (error) {
    res.send(500);
  }
}