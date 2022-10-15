import React from 'react'
import { StudentCPContainer } from './StudentControlPanel.style'

// StudentCP = StudentControlPanel

export default function ControlPanel({ data }) {
  console.log(data)

  return (
    <>
      <StudentCPContainer>
        ControlPanel   
      </StudentCPContainer>  
    </>
  )
}