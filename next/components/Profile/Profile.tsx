import React from "react";
import styled from "@emotion/styled";
import { Avatar } from "@mui/material";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background-color: #242424;
  color: #f8f8f8;
  h2,
  h3 {
    margin: 0;
  }
`;

const Account = styled.div`
  display: flex;
  width: 80%;
  border: 0.5px solid #888;
  border-radius: 2px;
  margin-top: 5%;
  div:first-child {
    width: 100%;
    padding-left: 20px;
    & > div {
      width: 100%;
    }
  }
`

type ProfileProps = {
  name: string;
  role: string;
  avatar: string;
  agency: string
  accountNumber: string
};

export default function Profile(props: ProfileProps) {
  return (
    <ProfileContainer>
      <Avatar
        alt={props.name}
        src={props.avatar}
        sx={{ width: 100, height: 100 }}
      />
      <h2>{props.name}</h2>
      <h3>{props.role}</h3>
      <Account>
        <div>
          <p>336 - Banco C6 S.A.</p>
          <p>Ag: {props.agency} C/C: {props.accountNumber}</p>
        </div>
        <div>Icone</div>
      </Account>
    </ProfileContainer>
  );
}
