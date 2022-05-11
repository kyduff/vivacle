import { ethers } from 'ethers';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const toHex = (num) => {
  const val = Number(num);
  return "0x" + val.toString(16);
};

export async function getAddress(buttonClick) {

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: process.env.NEXT_PUBLIC_INFURA_KEY
      }
    }
  };

  const web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions
  });

  if (!buttonClick && !web3Modal.cachedProvider) return;

  try {

    const instance = await web3Modal.connect();

    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();

    const { chainId } = await provider.getNetwork();
    if (chainId !== 4) {
      try {
        await provider.provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: toHex(4) }]
        });
      } catch (error) {
        alert('Please switch network to Rinkeby')
      }
    }

    return await signer.getAddress();
  } catch(error) {
    console.log(error)
  }
}
