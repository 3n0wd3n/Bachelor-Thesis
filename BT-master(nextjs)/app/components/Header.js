import React from 'react'
import { WrapperStyled, FirstNameStyled, LastNameStyled } from './Header.style'

export default function Header({ data }) {

  return (
    <WrapperStyled>
      <FirstNameStyled>{data.firstName}</FirstNameStyled>
      <LastNameStyled>{data.lastName}</LastNameStyled>
    </WrapperStyled>
  )
}
