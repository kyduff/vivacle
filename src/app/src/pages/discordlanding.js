import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/UserContext";

export default function DiscordLanding(req, res) {

  const router = useRouter();
  const { code } = router.query;

  const { user, setUser } = useContext(UserContext);

  const [verified, setVerified] = useState(false);

  const handleTok = async () => {
    try {

      console.log(code);
      console.log(verified);

      if (!code || verified) {
        return;
      }

      const oauthResp = await fetch('/api/discordauth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code })
      });

      const { verified } = await oauthResp.json();

      console.log(verified);
      setVerified(verified);

    } catch (error) {
      console.error(error);
    }


  }

  useEffect(handleTok, [code]);

  async function handleClaim() {

    if (!verified) {
      console.error('not verified');
    }

    const tokenId = 0;
    const contractAddress = '';

    try {
      var res = await fetch('/api/mint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address, contractAddress, tokenId })
      })
    } catch (error) {
      console.error(error);
    }

    if (res.status == 200) {
      // take user to explore page
    } else {
      console.error('error minting token');
    }
  }


  return (
    <>
    <button onClick={handleClaim}>Claim OxHack NFT</button>
    </>
  )
}