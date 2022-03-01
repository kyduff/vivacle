require("dotenv").config();

let accounts = [
  // Rinkeby accounts to mint to
  "0xcd09b5D92931a9a6E90B0983bA33287Fb1A9d3CB",
  "0x6c626228EA18d5215655d6523213E1ffAb39eaeD",
  "0x98590dF62A19c0Cca207833f872f2e7B72E33416",
  "0xA27BA222AE43A9d1C0d09df46Ca8d5802CE9eEA5",
  "0x53721BC66cdFdB07e065c2F4B8A2C4642Aa58Bf6",
];

// contract addresses
let addresses = [
  // process.env.STRAVA_CONTRACT_ADDRESS,
  process.env.SPOTIFY_CONTRACT_ADDRESS,
];

let mintSpec = accounts.map((account) => {
  achievements = {};
  for (var address of addresses) {
    achievements[address] = [];
    // random number from 0 to 63
    var rand = Math.floor(Math.random() * 64);
    rand = rand.toString(2).padStart(6, "0");
    for (var i = 0; i < rand.length; i++) {
      if (Number(rand.charAt(i)) > 0) {
        achievements[address].push(i);
      }
    }
  }
  return {
    account,
    achievements,
  };
});

console.log(mintSpec);

async function main() {
  const Achievements = await ethers.getContractFactory("Achievements");

  for (let o of mintSpec) {
    let { account, achievements } = o;
    console.log(account);
    console.log(achievements);
    for (let contractAddress in achievements) {
      const contract = await Achievements.attach(contractAddress);
      let ids = achievements[contractAddress];
      console.log(ids);
      let tokenCounts = Array(ids.length).fill(1);
      console.log(tokenCounts);
      let res = await contract.mintBatch(account, ids, tokenCounts, "0x00");
      console.log(res);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
