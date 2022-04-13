import React from 'react'
import axios from 'axios'
import { Logged } from './Logged'
import { FontStyled } from "../fonts.js";
import { ButtonStyled, ContainerStyled, InputStyled, LoginContainerStyled, LabelStyled, InputContainerStyled } from './App.style'

export const App = () => {
  const [usernameInput, setUsernameInput] = React.useState('')
  const [passwordInput, setPasswordInput] = React.useState('')
  const [data, setData] = React.useState(false)

  function fetchData({ url, method, headers, data }) {
    return axios({
      url: 'http://localhost:4000' + url,
      method: method || 'POST',
      headers: headers || {
        'Content-Type': 'application/json;charset=utf-8',
      },
      data: data,
    })
  }

  async function login() {
    fetchData({
      url: '/login',
      data: { username: usernameInput, password: passwordInput },
    }).then((data) => {
      setData(data.data)
    })
  }

  // console.log(data)

  return (
    <>
      {data === false ? (
      <ContainerStyled>
        <FontStyled>
            <h1>login</h1>
        </FontStyled>
        <LoginContainerStyled>
          <InputContainerStyled>
            <LabelStyled>username</LabelStyled>
            <InputStyled
              type='text'
              // placeholder='username'
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
            />
          </InputContainerStyled>
          <InputContainerStyled>
            <LabelStyled>password</LabelStyled>
            <InputStyled
              type='password'
              // placeholder='password'
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </InputContainerStyled>
          <ButtonStyled onClick={login}>sign in</ButtonStyled>
        </LoginContainerStyled>
      </ContainerStyled>) : <Logged data={data} />}
    </>
  )
}
