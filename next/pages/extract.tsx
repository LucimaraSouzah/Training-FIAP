import React from "react";
import styled from "@emotion/styled";
import SideBar from "../components/SideBar/Index";

const ExtractContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export default function extractPage() {
  return (
    <ExtractContainer>
      <SideBar />
      <section>
        <h1>Extrato</h1>
      </section>
    </ExtractContainer>
  );
}
