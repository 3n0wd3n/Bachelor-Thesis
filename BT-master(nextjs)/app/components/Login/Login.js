import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import Router from 'next/router'
import { dbConnect, findOneFromMongo } from '../../utils/dbMongo'
import { FontsHeaderBold, FontsLight, FontsExtraThin, FontsBold } from '../CommonStyles'
import { LoginButtonStyled, LoginInputStyled, LoginFormStyled, LoginLabelStyled, LoginInputCheckboxStyled, LoginButtonContainer, LoginButtonBottomContainer, LoginContainer } from './Login.style'

export default function LoginForm(){
    // let data = axios.get('http://localhost:3000/api/user').then(resp => {
    //     console.log(resp.data);
    //     return resp.data
    // });
    // console.log(data)

    async function get_status() {
        return await axios.get("http://localhost:3000/api/user");
    }
    get_status().then((data) => 
        console.log(data.data)
    );

    const [isParent, setIsParent] = useState(false);
    const [userName, setUserName] = useState("");
    const [userNumber, setNumber] = useState("");

    const handleChange = event => {
        if (!isParent) {
          console.log('Checkbox is checked');
        } else {
          console.log('Checkbox is NOT checked');
        }
        setIsParent(current => !current);
    };

    console.log(userName)

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