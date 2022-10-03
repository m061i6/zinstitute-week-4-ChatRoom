import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { AccountBoard } from "../components/AccountBoard";
import { ContractMsg } from "../components/ContractMsg";
import { ContractAnn } from "../components/ContractAnn";
import { TopNavBar } from "../components/TopNavBar";
import React from "react";

import NonSSRWrapper from "../components/NoSSRWrapper";
import {Container, Row, Col} from "react-bootstrap";
import INFURA_PROVIDER_API_KEY from "../config/contract";

const { chains, provider } = configureChains(
  [chain.goerli],
  [infuraProvider({ apiKey: INFURA_PROVIDER_API_KEY }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "#week4 ChatRoom App - Z22096017",
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
      <RainbowKitProvider chains={chains}>
      <TopNavBar />
        <Container className="mt-4">
          {/* nonSSR -> prevent hydration error */}
          <NonSSRWrapper>
            <AccountBoard></AccountBoard>
            <hr className="my-4"/>
            <Row>
            <Col sm={6}><ContractMsg /></Col>
            <Col sm={6}><ContractAnn /></Col>
            </Row>
          </NonSSRWrapper>
          {/* <h2> {address}</h2> */}
        </Container>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
