import { on } from "events";
import React from "react";
import Header from "../components/Header";
import Home from '../pages/index'

export default function LoginPage() {
  return (
    <>
      <Header pesquisar={'Buscar'}/>
      <h1>Seja bem vindo ao React</h1>
      {/* <Home/> */}
    </>
  );
}
