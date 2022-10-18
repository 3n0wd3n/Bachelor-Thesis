import React from 'react'
import { StudentCPContainer, StudentCPFontsBold } from './StudentControlPanel.style'

// StudentCP = StudentControlPanel

export default function ControlPanel({ data }) {
  console.log(data)

  return (
    <>
      <StudentCPContainer>
          {data.legalRepresentative === false
            ?
            <StudentCPFontsBold>payment</StudentCPFontsBold>
            :    
            <></>      
          }
          <StudentCPFontsBold>logout</StudentCPFontsBold>
          {/* <StudentCPFontsBold>settings</StudentCPFontsBold> */}
      </StudentCPContainer>  
    </>
  )
}