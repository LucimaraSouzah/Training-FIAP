import React from "react";
import styled from "@emotion/styled";
import { Avatar, Icon } from "@mui/material";
import PersonIcon from "../utils/Icons/PersonIcon";

const ProfileContainer = styled.div`
padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #242424;
  color: #f8f8f8;
  h3,
  h3 + p {
    margin: 0;
  }
  h3 + p {
    font-size: 0.8rem;
  }
`;

const Account = styled.div`
  display: flex;
  width: 80%;
  border: 0.5px solid #888;
  border-radius: 2px;
  margin-top: 3%;
  font-size: 0.8rem;
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
        sx={{ width: 80, height: 80 }}
      />
      <h3>{props.name}</h3>
      <p>{props.role}</p>
      <Account>
        <div>
          <p>336 - Banco C6 S.A.</p>
          <p>Ag: {props.agency} C/C: {props.accountNumber}</p>
        </div>
        <Icon><PersonIcon/></Icon>
      </Account>
    </ProfileContainer>
  );
}
