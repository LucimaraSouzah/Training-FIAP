import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: url("/barco.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default function registerPage() {
  return <Container>register</Container>;
}
