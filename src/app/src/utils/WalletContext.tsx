import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { chain, createClient, WagmiProvider } from 'wagmi';

export const WalletContextProvider: React.FC = ({ children }) => {

  const { chains, provider } = configureChains(
    [chain.rinkeby],
    [
      apiProvider.alchemy(process.env.ALCHEMY_ID),
      apiProvider.fallback()
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: 'Vivacle',
    chains
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  })

  return (
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        {children}
      </RainbowKitProvider>
    </WagmiProvider>
  )
}