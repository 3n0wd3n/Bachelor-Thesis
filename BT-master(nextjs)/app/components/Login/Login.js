import React from 'react';
import Router from 'next/router'
import { FontsHeaderBold, FontsLight, FontsExtraThin, FontsBold } from '../CommonStyles'
import { LoginButtonStyled, LoginInputStyled, LoginFormStyled, LoginLabelStyled, LoginInputCheckboxStyled, LoginButtonContainer, LoginButtonBottomContainer, LoginContainer } from './Login.style'

export default function LoginForm(){
    return(
            <LoginFormStyled>
                <FontsHeaderBold >login</FontsHeaderBold >

                <LoginContainer>
                    <LoginButtonContainer >
                        <FontsLight>username</FontsLight>
                        <LoginInputStyled type="text" name="username" placeholder=""></LoginInputStyled>
                    </LoginButtonContainer >

                    <LoginButtonBottomContainer>
                        <FontsLight>password</FontsLight>
                        <LoginInputStyled type="password" name="password" placeholder=""></LoginInputStyled>
                        
                    </LoginButtonBottomContainer>

                    <LoginLabelStyled>
                        <LoginInputCheckboxStyled type="checkbox"></LoginInputCheckboxStyled>
                        <FontsExtraThin>login as parent</FontsExtraThin>
                    </LoginLabelStyled>
                    
                    <LoginButtonStyled onClick={() => Router.push('/dashboard')}><FontsBold>login</FontsBold></LoginButtonStyled>     
                    {/* <button onClick={() => Router.push('/dashboard')}>Login</button> */}
                
                </LoginContainer>
            </LoginFormStyled>
    )
}