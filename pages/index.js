import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { AccountBoard } from "../components/AccountBoard";
import { Contract } from "../components/Contract";
import React from "react";

import NonSSRWrapper from "../components/NoSSRWrapper";
import {Container, Navbar, Nav} from "react-bootstrap";
import INFURA_PROVIDER_API_KEY from "../config/contract";

const { chains, provider } = configureChains(
  [chain.goerli],
  [infuraProvider({ apiKey: INFURA_PROVIDER_API_KEY }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Z22096017 #week4 ChatRoom App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export default function IndexPage() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <Container>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
          <ConnectButton />
          {/* nonSSR -> prevent hydration error */}
          <NonSSRWrapper>
            <AccountBoard></AccountBoard>
            <Contract />
          </NonSSRWrapper>
          {/* <h2> {address}</h2> */}
        </Container>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
