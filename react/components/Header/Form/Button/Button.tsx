import React, {ButtonHTMLAttributes} from 'react'
import styled from '@emotion/styled'

const ButtonData = styled.button`
  border: none;
  border-radius: 10px;
  height: 30px;
  margin-left: 5px;
  color: #333;
  background: linear-gradient(150deg, #ffeb84 0%, #ffd53e 100%);
  box-shadow: 0px 2px 5px -1px rgb(59, 59, 59, 0.5);
  & disabled {
    background: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`;

type ButtonProps = {
    children: React.ReactNode;
}
// Union type
type ButtonUnion = ButtonProps | ButtonHTMLAttributes<HTMLButtonElement>

export default function Button(props:ButtonUnion) {
  return (
    <ButtonData {...props}>{props.children}</ButtonData>
  )
}
