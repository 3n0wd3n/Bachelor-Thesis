import React from 'react'
import axios from 'axios'
import { ButtonStyled, InputStyled } from './App.style'

export const App = () => {
  const [usernameInput, setUsernameInput] = React.useState('')
  const [passwordInput, setPasswordInput] = React.useState('')

  function fetchData({ url, method, headers, data }) {
    axios({
      url: 'http://localhost:4000' + url,
      method: method || 'POST',
      headers: headers || {
        'Content-Type': 'application/json;charset=utf-8',
      },
      data: data,
    })
  }

  function login() {
    // fetchData({
    //   url: '/login',
    //   data: { username: usernameInput, password: passwordInput },
    // })

    axios({
      url: 'http://localhost:4000/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      data: { username: usernameInput, password: passwordInput },
    }).then((data) => {
      console.log(data.data)
    })
  }

  return (
    <>
      <InputStyled
        type='text'
        placeholder='username'
        value={usernameInput}
        onChange={(e) => setUsernameInput(e.target.value)}
      />
      <InputStyled
        type='test'
        placeholder='password'
        value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
      />
      <ButtonStyled onClick={login}>Login</ButtonStyled>
    </>
  )
}
