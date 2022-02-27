import { ethers } from "ethers";
import { NextApiRequest, NextApiResponse } from "next";
import { abi } from "../../lib/abi.json";

export default async function Mint(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { contractAddress, address, tokenId } = req.body;

    const url = process.env.RINKEBY_URL;
    const provider = new ethers.providers.JsonRpcProvider(url);
    const privateKey = process.env.PRIVATE_KEY;
    // Assumes a correct environment setup
    const wallet = new ethers.Wallet(privateKey!, provider);

    const contract = new ethers.Contract(contractAddress, abi, wallet);

    const tx = await contract.mint(address, tokenId, 1, "0x00");

    res.send(200);
  } catch (error) {
    res.send(500);
  }
}
