import { Contract, ethers } from "ethers";
import { abi } from "./abi.json";

function replaceId(str: string, id: number) {
  const idHex = id.toString(16).padStart(64, '0');
  return str.replace(/\{id\}/g, idHex);
}

export async function getAccoladesByContract(address: string, contract: Contract) {
  console.log(address)

  const numTokens = await contract.totalTokenIdCount();

  const addrs = [];
  const ids = [];

  for (let i = 0; i < numTokens; i++) {
    addrs.push(address);
    ids.push(i);
  }

  const balances = await contract.balanceOfBatch(addrs, ids);
  console.log(balances);
  const uri = await contract.uri(0);
  console.log(uri);

  const tokens = [];

  for (let i = 0; i < numTokens; i++) {

    if (Number(balances[i]) > 0) {
      // get metadata from token uri
      const url = replaceId(uri, i);
      console.log(uri);
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        tokens.push(await res.json());
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  }

  return tokens;
}


export async function getAllContractAccolades(contractAddress) {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);
  const numTokens = await contract.totalTokenIdCount();

  const tokens = [];
  for (let i = 0; i < numTokens; i++) {
    const uri = await contract.uri(i);

    const url = replaceId(uri, i);
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      tokens.push(await res.json());
    } catch (error) {
      console.log(error);
    }
  }
  return tokens;
}
