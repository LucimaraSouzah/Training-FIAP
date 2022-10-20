import React, { useState } from "react";
import styled from "@emotion/styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #f8f8f8;
  background: #242424;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    & > button {
      background: transparent;
      color: #f8f8f8;
      border: none;
      cursor: pointer;
    }
    & > strong {
      width: 120px;
    }
  }
`;

type BalanceProps = {
  amount: number;
};

export default function Balance(props: BalanceProps) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <BalanceContainer>
      <div>
        <p>Saldo:</p>
        {show ? (
          <strong>
            {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(props.amount)}
          </strong>
        ) : (
          <strong>********</strong>
        )}

        <button onClick={() => setShow(!show)}>
          {show ? <VisibilityOff /> : <Visibility />}
        </button>
      </div>
    </BalanceContainer>
  );
}
