import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Icon } from "@mui/material";
import Home from "../utils/Icons/HomeIcon";
import PaymentIcon from "../utils/Icons/PaymentIcon";
import ExtractIcon from "../utils/Icons/ExtractIcon";
import CreditCardIcon from "../utils/Icons/CreditCardIcon";
import CreditIcon from "../utils/Icons/CreditIcon";
import TranferIcon from "../utils/Icons/TranferIcon";

const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #242424;
  color: #f8f8f8;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 400;
      font-size: 0.8rem;
      list-style: none;
      line-height: 30px;
      margin-bottom: 3%;
      border: solid 4px transparent;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      &:hover {
        background: #888;
        border-left-color: #fffb19;
        cursor: pointer;
      }
    }
  }
`;

export default function Menu() {
  return (
    <MenuContainer>
      <ul>
        <li>
          <Icon>
            <Home />
          </Icon>
          <Link href="/">
            <a>Início</a>
          </Link>
        </li>
        <li>
          <Icon>
            <ExtractIcon />
          </Icon>

          <Link href="/">
            <a>Extrato</a>
          </Link>
        </li>
        <li>
        <Icon>
            <TranferIcon />
          </Icon>
          <Link href="/">
            <a>Transferências</a>
          </Link></li>
        <li>
          <Icon>
            <PaymentIcon />
          </Icon>
          <Link href="/">
            <a>Pagamentos</a>
          </Link>
        </li>
        <li>
          <Icon>
            <CreditCardIcon />
          </Icon>
          <Link href="/">
            <a>Cartões</a>
          </Link>
        </li>
        <li>
          <Icon>
            <CreditIcon />
          </Icon>
          <Link href="/">
            <a>Crédito</a>
          </Link>
        </li>
      </ul>
    </MenuContainer>
  );
}
