import React from 'react';
import Router from 'next/router'
import { Container } from '../CommonStyles'
import { ButtonStyled, InputStyled } from './Login.style'

export default function LoginForm(){
    return(
        <Container>
            <InputStyled type="text" name="name" placeholder="name"></InputStyled>
            <InputStyled type="text" name="surname" placeholder="surname"></InputStyled>
            <ButtonStyled onClick={() => Router.push('/dashboard')}>Login</ButtonStyled>     
            {/* <button onClick={() => Router.push('/dashboard')}>Login</button> */}
        </Container>
    )
}