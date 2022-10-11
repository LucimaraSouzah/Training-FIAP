import React, {ButtonHTMLAttributes} from 'react'
import styled from '@emotion/styled'

const ButtonData = styled.button`
  border: 1px solid #ccc;
  height: 40%;
  border-radius: 10px;
  &:hover {
    background-color: #f0f04b;
  }
`;

type ButtonProps = {
    children: React.ReactNode;
}

type ButtonUnion = ButtonProps | ButtonHTMLAttributes<HTMLButtonElement>

export default function Button(props:ButtonUnion) {
  return (
    <ButtonData {...props}>{props.children}</ButtonData>
  )
}
