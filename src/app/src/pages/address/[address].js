import { ethers } from "ethers";

export default function TrophyCase({ accolades }) {
  return (
    <>
    {JSON.stringify(accolades, null, 2)}
    </>
  );
}

export async function getServerSideProps(context) {

  const { getAccoladesByContract } = require("../../lib/getaccs");
  const { signets } = require('../../lib/signets.json');

  const provider = new ethers.providers.JsonRpcProvider(process.env.RINKEBY_URL);

  const { abi } = require("../../lib/abi.json");

  const address = context.query.address.toLowerCase();
  const accolades = new Object();

  for (let contractAddr in signets) {

    const contract = new ethers.Contract(
      contractAddr,
      abi,
      provider,
    );

    let tokens = await getAccoladesByContract(address, contract);

    if (tokens === null) {
      console.error(`could not get accolades for ${signets[contractAddr]}`);
      tokens = [];
    }

    accolades[signets[contractAddr]] = tokens;
  }

  console.log(JSON.stringify(accolades, null, 2))

  return {
    props: {
      accolades,
    }
  }
}