import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

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
  }
`;

type BalanceProps = {
  amount: number;
};

export default function Balance(props: BalanceProps) {
  return (
    <BalanceContainer>
      <div>
        <p>Saldo:</p>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(props.amount)}
        </strong>
        <Link href="#">
          <a>MOSTRAR</a>
        </Link>
      </div>
    </BalanceContainer>
  );
}
