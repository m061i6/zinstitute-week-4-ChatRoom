import {
  useContractWrite,
  useContractRead,
  useAccount,
  useContractEvent,
} from "wagmi";
import { useState } from "react";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../config/contract";
import { Form, Row, Col, Button } from "react-bootstrap";

export function ContractMsg() {
  const [input, setInput] = useState("");
  const { address } = useAccount();
  const { write, status, isLoading } = useContractWrite({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    functionName: "newMsg",
    args: [input],
    chainId: 5
  });
  const { data, refetch } = useContractRead({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    functionName: "showLastestMsg",
    args: ["5", address],
    chainId: 5
  });
  // console.log(data);
  useContractEvent({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    eventName: "newMessage",
    listener: (event) => {
      // console.log(event);
      refetch();
    }
  });

  return (
    <>
    <Form>
      <Form.Group className="mb-3">
        <h3 sm="12">一般免費訊息</h3>
        <Row>
        <Col sm="6">
        <Form.Label>一般訊息</Form.Label>
          <Form.Control type="text" placeholder="輸入訊息" value={input}
          onChange={(event) => setInput(event.target.value)}/>  
        </Col>
        <Col sm="6"><Button onClick={() => write()}>發布訊息</Button></Col>
        </Row>
        <Col sm="12" className="text-muted">Tx Status: {status}</Col>
      </Form.Group>
    </Form>
      <h3>我的近5則訊息:</h3>
      {data && <pre>&gt; {data.join("\r\n> ")}</pre>}
    </>
  );
}
