import React from 'react';
import {useState} from 'react';
import Router from 'next/router'
import { FontsHeaderBold, FontsLight, FontsExtraThin, FontsBold } from '../CommonStyles'
import { LoginButtonStyled, LoginInputStyled, LoginFormStyled, LoginLabelStyled, LoginInputCheckboxStyled, LoginButtonContainer, LoginButtonBottomContainer, LoginContainer } from './Login.style'

export default function LoginForm(){
    const [isParent, setisParent] = useState(false);

    const handleChange = event => {
        if (event.target.checked) {
          console.log('Checkbox is checked');
        } else {
          console.log('Checkbox is NOT checked');
        }
        setisParent(current => !current);
    };
    console.log(isParent);

    return(
            <LoginFormStyled>
                <FontsHeaderBold >login</FontsHeaderBold >

                <LoginContainer>
                    { isParent === true
                        ?
                        <LoginButtonContainer >
                            <FontsLight>telephone</FontsLight>
                            <LoginInputStyled type="number" name="phone" placeholder=""></LoginInputStyled>
                        </LoginButtonContainer >
                        :
                        <LoginButtonContainer >
                            <FontsLight>username</FontsLight>
                            <LoginInputStyled type="text"   name="username" placeholder=""></LoginInputStyled>
                        </LoginButtonContainer >

                    }

                    <LoginButtonBottomContainer>
                        <FontsLight>password</FontsLight>
                        <LoginInputStyled type="password" name="password" placeholder=""></LoginInputStyled>
                        
                    </LoginButtonBottomContainer>

                    <LoginLabelStyled>
                        <LoginInputCheckboxStyled type="checkbox" value={isParent} onChange={handleChange}></LoginInputCheckboxStyled>
                        <FontsExtraThin>login as parent</FontsExtraThin>
                    </LoginLabelStyled>
                    
                    <LoginButtonStyled onClick={() => Router.push('/dashboard')}><FontsBold>login</FontsBold></LoginButtonStyled>     
                    {/* <button onClick={() => Router.push('/dashboard')}>Login</button> */}
                
                </LoginContainer>
            </LoginFormStyled>
    )
}