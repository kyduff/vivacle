const ethers = require("ethers");
const {
  abi,
} = require("../artifacts/contracts/Achievements.sol/Achievements.json");
require("dotenv").config();

let targetAddresses = [
  "0xcd09b5D92931a9a6E90B0983bA33287Fb1A9d3CB",
  // "0x6c626228EA18d5215655d6523213E1ffAb39eaeD",
  // "0x98590dF62A19c0Cca207833f872f2e7B72E33416",
  // "0xA27BA222AE43A9d1C0d09df46Ca8d5802CE9eEA5",
  // "0x53721BC66cdFdB07e065c2F4B8A2C4642Aa58Bf6",
];

// OXHACK_CONTRACT_ADDRESS=0x47a2f25ad83Efa1BaA376D062284e777dD223463
// RED_CROSS_CONTRACT_ADDRESS=0xb9a749F903682127dE0b29BA02C10c847A6593b6
// STRAVA_CONTRACT_ADDRESS=0x75F60C7CEe414FE60bB96a12d930F3DC8E59eEf3
let contractAddress = process.env.STRAVA_CONTRACT_ADDRESS;
let ids = [0, 1, 2, 3, 4, 5];

async function main() {
  const url = process.env.RINKEBY_URL;
  const privateKey = process.env.RINKEBY_PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(url);
  const wallet = new ethers.Wallet(privateKey, provider);

  const contract = new ethers.Contract(contractAddress, abi, wallet);

  for (let targetAddress of targetAddresses) {
    let tokenCounts = Array(ids.length).fill(1);
    let res = await contract.mintBatch(targetAddress, ids, tokenCounts, "0x00");
    console.log(res);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
