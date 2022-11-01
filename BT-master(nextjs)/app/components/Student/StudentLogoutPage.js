import React from 'react'

export default function LogoutPage({setLogoutPage}) {
  return (
    <>
      LogoutPage     
      <button onClick={() => setLogoutPage(false)}>no</button>
    </>
  )
}