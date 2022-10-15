import React from 'react'
import { StudentMCContainer } from './StudentMainContent.style'

// StudentMC = StudentMainContent

export default function MainContent({ data }) {
  console.log(data)

  return (
    <>
      <StudentMCContainer>
        Main Content      
      </StudentMCContainer>
    </>
  )
}