import {
  useContractWrite,
  useContractRead,
  useAccount,
  useContractEvent
} from "wagmi";
import { useState } from "react";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../config/contract";

export function Contract() {
  const [input, setInput] = useState("");
  const { address } = useAccount();
  const { write, status } = useContractWrite({
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
      <div>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        ></input>
        <button onClick={() => write()}>Send</button>
        <br />
        <span style={{ color: "grey" }}>Tx Status: {status}</span>
      </div>
      <h3>My messages:</h3>
      {data && <pre>&gt; {data.join("\r\n> ")}</pre>}
    </>
  );

  // <div>{JSON.stringify(data)}</div>;
}
