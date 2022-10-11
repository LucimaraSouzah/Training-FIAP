import React, {InputHTMLAttributes} from 'react'
import styled from '@emotion/styled'


const InputData = styled.input`
  border-radius: 10px;
  outline: 0;
  border: 0;
  height: 40%;
  width: 20%;
  margin-right: 10px;
  box-shadow: 0px 0px 2px rgb(0, 0, 0.2);
`;

export default function Input(props:InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputData {...props}/>
  )
}
