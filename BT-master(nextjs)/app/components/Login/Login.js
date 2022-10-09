import React from 'react';
import Router from 'next/router'
import { Fonts } from '../CommonStyles'
import { LoginButtonStyled, LoginInputStyled, LoginFormStyled, LoginLabelStyled, LoginInputCheckboxStyled, LoginButtonContainer, LoginButtonBottomContainer, LoginContainer } from './Login.style'

export default function LoginForm(){
    return(
            <LoginFormStyled>
                <Fonts>
                    <h1>login</h1>
                </Fonts>

                <LoginContainer>
                    <LoginButtonContainer >
                        <Fonts>
                            <p>username</p>
                        </Fonts>
                        <LoginInputStyled type="text" name="username" placeholder=""></LoginInputStyled>
                    </LoginButtonContainer >

                    <LoginButtonBottomContainer>
                        <Fonts>
                            <p>password</p>
                        </Fonts>
                        <LoginInputStyled type="password" name="password" placeholder=""></LoginInputStyled>
                        
                    </LoginButtonBottomContainer>

                    <LoginLabelStyled>
                        <LoginInputCheckboxStyled type="checkbox"></LoginInputCheckboxStyled>
                        <Fonts>
                            <p>login as parent</p>
                        </Fonts>
                    </LoginLabelStyled>
                    
                    <LoginButtonStyled onClick={() => Router.push('/dashboard')}>login</LoginButtonStyled>     
                    {/* <button onClick={() => Router.push('/dashboard')}>Login</button> */}
                    
                </LoginContainer>
            </LoginFormStyled>
    )
}