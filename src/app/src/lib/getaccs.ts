import { Contract, ethers } from "ethers";

import _abi from "./abi.json";
const { abi } = _abi


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
  const abi = [
              "function uri(uint256 id) external view returns (string memory)",
              "function totalTokenIdCount() public view returns (uint256)"]
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

async function filterQueryResult(queryResult) {
  const idsAndTimestamps = [];
  for (const event of queryResult) {
    const blockInfo = await event.getBlock();
    const timestamp = blockInfo.timestamp;
    for (const id of event.args.ids) {
      const idNum = Number(id._hex);
      idsAndTimestamps.push([idNum, timestamp]);
    }
  }
  return idsAndTimestamps;
}

export async function getIdsAndTimestampsByEvents(address: string, contract: Contract) {
  // Fetch all Batch Transfer ids/timestamps
  const batchTransferFilter = contract.filters.TransferBatch(
    null,
    null,
    address
  );
  const batchQueryResult = await contract.queryFilter(batchTransferFilter);
  let batchIdsAndTimestamps = [];
  if (batchQueryResult.length > 0) {
    batchIdsAndTimestamps = await filterQueryResult(batchQueryResult);
  }

  // Fetch all single Transfer ids/timestamps
  const singleTransferFilter = contract.filters.TransferSingle(
    null,
    null,
    address
  );
  const singleQueryResult = await contract.queryFilter(singleTransferFilter);
  let singleIdsAndTimestamps = [];
  if (singleQueryResult.length > 0) {
    singleIdsAndTimestamps = await filterQueryResult(singleQueryResult);
  }

  const allIdsAndTimestamps = batchIdsAndTimestamps.concat(
    singleIdsAndTimestamps
  );
  return allIdsAndTimestamps;
}
