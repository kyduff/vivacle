import { Center } from "@chakra-ui/react"
import React from "react";

import { ConnectButton } from "@rainbow-me/rainbowkit";


export const ConnectWalletButton: React.FC = () => {

  return (
    <Center>
      <ConnectButton label="Connect" accountStatus={"address"} chainStatus="icon" showBalance={false}/>
    </Center >
  )
}
