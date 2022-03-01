async function main() {
  const Achievements = await ethers.getContractFactory("Achievements");

  const contractTemplates = [
    [
      48,
      "Spotify",
      "https://oxhack.herokuapp.com/metadata/spotify/{id}/?format=json",
    ],
    [
      6,
      "Strava",
      "https://oxhack.herokuapp.com/metadata/strava/{id}/?format=json",
    ],
    [
      6,
      "RedCross",
      "https://oxhack.herokuapp.com/metadata/redcross/{id}/?format=json",
    ],
    [
      1,
      "OxfordHack",
      "https://oxhack.herokuapp.com/metadata/oxhack/{id}/?format=json",
    ],
  ];

  let contracts = {};

  for (let contractTemplate of contractTemplates) {
    let [tokenCount, brandName, metadataUrl] = contractTemplate;
    const contract = await Achievements.deploy(
      tokenCount,
      brandName,
      metadataUrl
    );
    console.log(`${brandName} contract deployed to: ${contract.address}`);
    contracts[brandName] = contract;
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
