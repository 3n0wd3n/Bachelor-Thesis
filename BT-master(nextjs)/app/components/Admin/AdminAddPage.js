import React from 'react'

export default function AddPage({setAddPage}) {
  return (
    <>
      AddPage      
      <button onClick={() => setAddPage(false)}>no</button>
    </>
  )
}
