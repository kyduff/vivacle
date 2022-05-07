import { ethers } from "ethers";
import { NextApiRequest, NextApiResponse } from "next";
import _abi from "../../lib/abi.json";
const { abi } = _abi

export default async function Mint(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { contractAddress, address, tokenIds } = req.body;

    const url = process.env.RINKEBY_URL;
    const provider = new ethers.providers.JsonRpcProvider(url);
    const privateKey = process.env.PRIVATE_KEY;
    // Assumes a correct environment setup
    const wallet = new ethers.Wallet(privateKey!, provider);

    const amounts = new Array(tokenIds.length).fill(1);
    const contract = new ethers.Contract(contractAddress, abi, wallet);
    const tx = await contract.mintBatch(address, tokenIds, amounts, "0x00");

    res.status(200).json({ tokens: tokenIds });
  } catch (error) {
    res.send(500);
  }
}
