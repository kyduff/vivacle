import { useEffect } from "react";
import replaceId from "../lib/replaceid";
import { ethers } from "ethers";

// get accolades from a single contract


const {
  abi: SpotifyABI
} = require('./SpotifyAchievements.json');

const contracts = [
  '0x8DA481e40D09F0f0e5AfF246B19857D52e2637F7',
]

export default function GetAccolades() {

  let SpotifyContract;
  let account;
  let provider;

  useEffect(async () => {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    account = accounts[0];

    provider = new ethers.providers.Web3Provider(ethereum);

    SpotifyContract = new ethers.Contract(
      '0x8DA481e40D09F0f0e5AfF246B19857D52e2637F7',
      SpotifyABI,
      provider,
    )
  }, [])

  async function getAccolades() {
    const contract = new ethers.Contract(
      '0x8DA481e40D09F0f0e5AfF246B19857D52e2637F7',
      SpotifyABI,
      provider,
    )

    await getAccoladesByContract(account, contract);
  }

  async function getAccoladesByContract(address, contract) {

    console.log(address)

    const numTokens = await contract.totalTokenIdCount();

    let tokens = [];

    for (let i = 0; i < numTokens; i++) {
      // get token balance
      const token = await contract.balanceOf(address, i);
      const uri = await contract.uri(i);

      if (Number(token)) {
        // get metadata from token uri
        const url = replaceId(uri, i);
        try {

          var res = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })

        } catch (error) {
          console.log(error);
        }

        tokens.push(await res.json());

      }
    }

    return tokens;
  }

  async function handleEnable() {
    // TODO
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    account = accounts[0];
  }

  async function getTokenIds() {
    const tokenIds = await SpotifyContract.totalTokenIdCount();
    console.log(tokenIds);
  }

  async function getSigner() {
    const signer = await provider.getSigner(account);
    console.log(signer);
  }

  return (
    <>
      <button className="enableEthereumButton" onClick={handleEnable}>Enable Ethereum</button>
      <button onClick={getTokenIds}>Get tokenids</button>
      <button onClick={getSigner}>Get Signer</button>
      <button onClick={getAccolades}>Check balance</button>
    </>
  )
}