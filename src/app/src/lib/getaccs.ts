import { Contract, ethers } from "ethers";


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

export async function getOwnedAccoladesByContractAddress(address: string, contractAddress: string) {

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner();
  const hrAbi = [
    "function uri(uint256 id) external view returns (string memory)",
    "function totalTokenIdCount() public view returns (uint256)",
    "function balanceOfBatch(address[] memory accounts, uint256[] memory ids) public view returns (uint256[] memory)"
  ]
  const contract = new ethers.Contract(contractAddress, hrAbi, signer);
  const numTokens = await contract.totalTokenIdCount();

  const addrs = [];
  const ids = [];

  for (let i = 0; i < numTokens; i++) {
    addrs.push(address);
    ids.push(i);
  }

  const balances = await contract.balanceOfBatch(addrs, ids);
  const ownedTokens = [];
  for (let i = 0; i < numTokens; i++) {
    if (balances[i] >= 1) {
      ownedTokens.push(ids[i])
    }
  }

  return ownedTokens;
}

export async function getAllContractAccolades(contractAddress: string) {

  console.log(`contract: ${contractAddress}`);

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner();
  const hrAbi = [
    "function uri(uint256 id) external view returns (string memory)",
    "function totalTokenIdCount() public view returns (uint256)"
  ]
  const contract = new ethers.Contract(contractAddress, hrAbi, signer);
  const numTokens = await contract.totalTokenIdCount();
  const uri = await contract.uri(0);
  console.log(`numTokens: ${numTokens}; uri: ${uri}`);

  const tokens = [];
  for (let i = 0; i < numTokens; i++) {

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

async function filterQueryResult(queryResult: ethers.Event[]) {
  const idsAndTimestamps = [];

  const promises = queryResult.map(async event => {
    const ids = event.args.id !== undefined ? [event.args.id] : event.args.ids;

    const blockInfo = await event.getBlock();
    const timestamp = blockInfo.timestamp;

    console.log(`${ids}`);

    for (const id of ids) {
      const idNum = Number(id._hex);
      idsAndTimestamps.push([idNum, timestamp]);
    }
  })

  await Promise.all(promises);
  return idsAndTimestamps;
}


async function getMetadataFromId(id: number, contract: Contract) {

  const uri = await contract.uri(id);
  const url = replaceId(uri, id);

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res.json();
}


export async function getIdsAndTimestampsByEvents(address: string, contract: Contract) {
  // Fetch all Batch Transfer ids/timestamps
  const batchTransferFilter = contract.filters.TransferBatch(
    null,
    null,
    address
  );


  console.log(`address: ${contract.address}`);

  const batchQueryResult = await contract.queryFilter(batchTransferFilter);
  let batchIdsAndTimestamps = [];


  if (batchQueryResult.length > 0) {
    batchIdsAndTimestamps = await filterQueryResult(batchQueryResult);
  }

  console.log(`batch: ${batchIdsAndTimestamps}`)

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

  console.log(`single: ${singleIdsAndTimestamps}`);

  const allIdsAndTimestamps = batchIdsAndTimestamps.concat(
    singleIdsAndTimestamps
  );

  const tokenPromises = allIdsAndTimestamps.map(async ([id, timestamp]) => {
    const metadata = await getMetadataFromId(id, contract);
    metadata.timestamp = timestamp;
    return metadata;
  })
  const tokens = await Promise.all(tokenPromises);

  return tokens;
}


export async function getEligibleContractAccolades(contractAddress: string, eligibleTokenList: number[]) {

  console.log(`contract: ${contractAddress}`);

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner();
  const hrAbi = [
    "function uri(uint256 id) external view returns (string memory)",
    "function totalTokenIdCount() public view returns (uint256)"
  ]
  const contract = new ethers.Contract(contractAddress, hrAbi, signer);
  const uri = await contract.uri(0);
  console.log(`numTokens: ${eligibleTokenList.length}; uri: ${uri}`);

  const tokens = [];
  for (let i = 0; i < eligibleTokenList.length; i++) {

    const url = replaceId(uri, eligibleTokenList[i]);
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newToken = await res.json()
      newToken["tokenId"] = eligibleTokenList[i];
      tokens.push(newToken);
    } catch (error) {
      console.log(error);
    }
  }
  return tokens;
}
