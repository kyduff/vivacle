import { ethers } from "ethers";
import { NextApiRequest, NextApiResponse } from "next";
import _abi from "../../lib/abi.json";
import _signets from '../../lib/signets.json'
import { getIdsAndTimestampsByEvents } from "../../lib/getaccs";

const { signets } = _signets
const { abi } = _abi;
const provider = new ethers.providers.JsonRpcProvider(process.env.RINKEBY_URL);

export default async function FetchAccs(req: NextApiRequest, res: NextApiResponse) {

  try {

    const { address } = req.body;
    const accolades = new Object();

    console.log(`fetching accolades for ${address}`)
    console.log(`signets: ${signets}`)

    if (address === undefined) {
      return res.status(400).json({ error: "400: no address provided", accolades: {} });
    }


    for (const contractAddress in signets) {
      const contract = new ethers.Contract(
        contractAddress,
        abi,
        provider,
      )

      let tokens = await getIdsAndTimestampsByEvents(address, contract);

      if (tokens === null) {
        console.error(`could not get accolades for ${signets[contractAddress]}`);
        tokens = [];
      }

      accolades[signets[contractAddress]] = tokens;
    }

    res.status(200).json({ accolades });

  } catch {
    res.send(500);
  }

}