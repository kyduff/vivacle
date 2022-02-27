import { ethers } from "ethers";

const { abi } = require("../../lib/abi.json");

export default async function Mint(req, res) {
  try {
    const { contractAddress, address, tokenId } = req.body;

    const url = process.env.RINKBY_URL;
    const provider = new ethers.providers.JsonRpcProvider(url);
    const privateKey = process.env.PRIVATE_KEY;
    const wallet = new ethers.Wallet(privateKey, provider);

    const contract = new ethers.Contract(contractAddress, abi, wallet);

    const tx = await contract.mint(address, tokenId, 1, "0x00");

    res.send(200);
  } catch (error) {
    res.send(500);
  }
}