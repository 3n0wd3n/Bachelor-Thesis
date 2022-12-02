import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import Router from 'next/router'
import { dbConnect, findOneFromMongo } from '../../utils/dbMongo'
import { FontsHeaderBold, FontsLight, FontsExtraThin, FontsBold } from '../CommonStyles'
import { LoginButtonStyled, LoginInputStyled, LoginFormStyled, LoginLabelStyled, LoginInputCheckboxStyled, LoginButtonContainer, LoginButtonBottomContainer, LoginContainer } from './Login.style'

export default function LoginForm({ setData }){
    const [isParent, setIsParent] = useState(false);
    const [userName, setUserName] = useState("");
    const [userNumber, setNumber] = useState("");
    const [userPassword, setPassword] = useState("");

    function sendData(){
        axios('http://localhost:3000/api/user', {
          method: 'PUT',
          data: {
            userName,
            userNumber,
            userPassword
          }
        })
        .then((data) => {
            if (data.data){
                setData(data.data);
                Router.push('/dashboard')
            } else {
                alert('wrong credentials')
            }
        })
    }
    
    
    const handleChange = event => {
        setIsParent(current => !current);
    };

    return(
            <LoginFormStyled>
                <FontsHeaderBold >login</FontsHeaderBold >

                <LoginContainer>
                    {isParent
                        ?
                        <LoginButtonContainer>
                            <FontsLight>telephone</FontsLight>
                            <LoginInputStyled type="number" name="phone" placeholder="" value={userNumber} onChange={({ target }) => setNumber(target.value)} />
                        </LoginButtonContainer >
                        :
                        <LoginButtonContainer >
                            <FontsLight>username</FontsLight>
                            <LoginInputStyled type="text" name="username" placeholder="" value={userName} onChange={({ target }) => setUserName(target.value)} />
                        </LoginButtonContainer >

                    }

                    <LoginButtonBottomContainer>
                        <FontsLight>password</FontsLight>
                        <LoginInputStyled type="password" name="password" placeholder="" value={userPassword} onChange={({ target }) => setPassword(target.value)}></LoginInputStyled>
                        
                    </LoginButtonBottomContainer>

                    <LoginLabelStyled>
                        <LoginInputCheckboxStyled type="checkbox" value={isParent} onChange={handleChange}></LoginInputCheckboxStyled>
                        <FontsExtraThin>login as parent</FontsExtraThin>
                    </LoginLabelStyled>
                    
                    <LoginButtonStyled onClick={() => sendData()}><FontsBold>login</FontsBold></LoginButtonStyled>     
                
                </LoginContainer>
            </LoginFormStyled>
    )
}