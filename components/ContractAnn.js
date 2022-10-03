import {
  useContractWrite,
  useContractReads,
  useContractEvent,
} from "wagmi";
import {ethers} from "ethers";
import { useState } from "react";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../config/contract";
import { Form, Row, Col, Button } from "react-bootstrap";

export function ContractAnn() {
  const [input, setInput] = useState("");
  const [spend, setSpend] = useState(0);
  const { write, status } = useContractWrite({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    functionName: "newAnnouncement",
    args: [input],
    chainId: 5,
    overrides: {
      value: String(spend),
    }
  });
  const { data, refetch } = useContractReads({
    contracts: [
      {
        addressOrName: CONTRACT_ADDRESS,
        contractInterface: CONTRACT_ABI,
        functionName: 'announcement',
        chainId: 5
      },
      {
        addressOrName: CONTRACT_ADDRESS,
        contractInterface: CONTRACT_ABI,
        functionName: 'announcementLastPaidVal',
        chainId: 5
      }
    ]
  });
  // console.log(data);
  useContractEvent({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    eventName: "newAnnouncementEvent",
    listener: (event) => {
      console.log(event);
      refetch();
    }
  });

  return (
    <>
    <Form>
      <Form.Group className="mb-3">
        <h3 sm="12">付費公告訊息</h3>
        <Row>
        <Col sm="6">
        <Form.Label>付費公告訊息</Form.Label>
        <Form.Control type="text" placeholder="輸入訊息" value={input}
          onChange={(event) => setInput(event.target.value)}/>  
        </Col>
        <Col sm="3">
          <Form.Label>付款公告金額(Wei)</Form.Label>
          <Form.Control type="number" placeholder="付款公告金額(Wei)" value={spend}
          onChange={(event) => setSpend(event.target.value)}/>  
          
        </Col>
        <Col sm="3"><Button onClick={() => write()}>發布付費訊息</Button></Col>
        </Row>
        <Col sm="12" className="text-muted">Tx Status: {status}</Col>
      </Form.Group>
    </Form>
      <h3>目前的公告訊息:</h3>
      {data && <pre>{data[0]}</pre>}
      <h3>目前的公告的費用需高於:</h3>
      {data && <pre>{ethers.utils.formatEther( data[1] )} ETH</pre>}
    </>
  );
}