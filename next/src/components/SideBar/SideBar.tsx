import React from "react";
import styled from "@emotion/styled";
import Profile from "../Profile";
import Balance from "../Balance";
import Menu from "../Menu";

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 100vh;
  background: #242424;
  position: fixed;
`;

export default function SideBar() {
  return (
    <SideBarContainer>
      <Profile
        name="Lucimara Assis"
        role="Assoc, Dev FullStack"
        avatar="https://avatars.githubusercontent.com/u/95291739?v=4"
        agency="0001"
        accountNumber="123456780-0"
      />
      <Balance amount={20000} />
      <Menu />
    </SideBarContainer>
  );
}
