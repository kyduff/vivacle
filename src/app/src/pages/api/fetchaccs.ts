import { ethers } from "ethers";
import { NextApiRequest, NextApiResponse } from "next";
import _abi from "../../lib/abi.json";
import _signets from '../../lib/signets.json'
import { getIdsAndTimestampsByEvents } from "../../lib/getaccs";

const { signets } = _signets
const { abi } = _abi;
const provider = new ethers.providers.JsonRpcProvider(process.env.RINKEBY_URL);

interface TokenBalance {
  contractAddress: string,
  tokens: any[],
}

export default async function FetchAccs(req: NextApiRequest, res: NextApiResponse) {

  try {

    const { address } = req.body;
    const accolades = new Object();

    console.log(`fetching accolades for ${address}`)
    console.log(`signets: ${JSON.stringify(signets, null, 2)}`)

    if (address === undefined) {
      return res.status(400).json({ error: "400: no address provided", accolades: {} });
    }

    const startT = Date.now();
    console.log(`time: ${startT}`);

    const tokenPromises = Object.keys(signets).map(contractAddress => {
      const contract = new ethers.Contract(
        contractAddress,
        abi,
        provider,
      )

      const promise = new Promise<TokenBalance>(async (resolve, reject) => {

        let tokens = await getIdsAndTimestampsByEvents(address, contract);

        if (tokens === null) {
          console.error(`could not fetch tokens for ${contractAddress}`)
          tokens = [];
        }

        resolve({
          contractAddress,
          tokens
        })

      })

      return promise
    })

    const tokensArray = await Promise.all(tokenPromises);
    tokensArray.forEach(addrTokens => {
      const { contractAddress, tokens } = addrTokens;
      accolades[signets[contractAddress]] = tokens;
    })

    const endT = Date.now();
    console.log(`elapsed time: ${endT - startT}`);

    res.status(200).json({ accolades });

  } catch {
    res.send(500);
  }

}