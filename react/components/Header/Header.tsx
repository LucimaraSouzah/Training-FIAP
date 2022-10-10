import React from "react";
import styles from "./Header.module.css";
import { css } from "@emotion/css";
import Link from "next/link";
import styled from "@emotion/styled";

const HeaderPage = styled.header`
  width: 100%;
  height: 100px;
  background-color: rgb(247, 243, 232);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const NavMenu = styled.nav`
  width: 80%;
  display: flex;
  justify-content: center;
  height: 50px;
  & a:hover {
    font-weight: bold;
  }
  & li {
    margin-top: 4px;
    border-bottom: 4px solid transparent;
    padding-bottom: 20px;
  }
  & li:hover {
    border-bottom: 4px solid orange;
  }
`;

const Input = styled.input`
  border-radius: 10px;
  outline: 0;
  border: 0;
  height: 40%;
  width: 20%;
  margin-right: 10px;
  box-shadow: 0px 0px 2px rgb(0, 0, 0.2);
`;

const Button = styled.button`
  border: 1px solid #ccc;
  height: 40%;
  border-radius: 10px;
  &:hover {
    background-color: #f0f04b;
  }
`;

type HeaderProps = {
  pesquisar?: string;
  menu?: string;
};

export default function Header(props: HeaderProps) {
  return (
    // <header className={styles["menu-site"]}>
    <HeaderPage>
      <div>Logotipo</div>
      <NavMenu>
        <ul
          className={css`
            margin: 0;
            padding: 0;
            display: inline-flex;
            & > li {
              list-style: none;
              min-width: 100px;
              text-align: center;
              padding: 10px;
            }
          `}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
          <li>
            <Link href="#">Galeria</Link>
          </li>
          <li>
            <Link href="#">Serviços</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Contato</Link>
          </li>
        </ul>
      </NavMenu>
      <Input type="text" placeholder="Digite sua busca"></Input>
      <Button>{props.pesquisar ? props.pesquisar : "Pesquisar"}</Button>
    </HeaderPage>
    // </header>
  );
}
