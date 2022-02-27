function replaceId(str, id) {
  const idHex = id.toString(16).padStart(64, '0');
  return str.replace(/\{id\}/g, idHex);
}


export async function getAccoladesByContract(address, contract) {

  console.log(address)

  const numTokens = await contract.totalTokenIdCount();

  let tokens = [];

  for (let i = 0; i < numTokens; i++) {
    // get token balance
    const token = await contract.balanceOf(address, i);
    const uri = await contract.uri(i);

    console.log(`token: ${token}`);
    console.log(`uri: ${uri}`);

    if (Number(token)) {
      // get metadata from token uri
      const url = replaceId(uri, i);
      console.log(uri);
      try {

        var res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

      } catch (error) {
        console.log(error);
        return null;
      }

      tokens.push(await res.json());

    }
  }

  return tokens;
}