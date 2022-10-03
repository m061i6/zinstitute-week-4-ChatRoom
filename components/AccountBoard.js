import { useAccount, useBalance } from "wagmi";
import { Row } from "react-bootstrap";

const AccountBoard = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const balance = useBalance({
    addressOrName: address
  });

  return (
    <Row>
      <h3>帳號資訊</h3>

      {!isConnecting && !isDisconnected && <h5>錢包地址： {address}</h5>}

      {/* <pre>{JSON.stringify(balance, null, 2)}</pre> */}
      {balance.data && (
        <p>錢包餘額：
          {parseFloat(balance.data.formatted).toFixed(2)} {balance.data.symbol}
        </p>
      )}
    </Row>
  );
};

export { AccountBoard };
