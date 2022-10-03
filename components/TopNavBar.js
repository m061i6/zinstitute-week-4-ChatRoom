
import { Container, Navbar} from "react-bootstrap";
import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
} from "@rainbow-me/rainbowkit";

export function TopNavBar (){
    return(
        <>
        <Navbar bg="dark" variant="dark">
        <Container >
          <Navbar.Brand>
            <img
              alt=""
              src="./yama.png"
              width="30"
              height="30"
              className="d-inline-block align-top mx-3"
            />{' '}
            #Week4 ChatRoom App <span className="text-muted mx-3">author : Po🚀Z22096017✨</span>
          </Navbar.Brand>
          <ConnectButton />
        </Container>
      </Navbar>
        </>
    )
}