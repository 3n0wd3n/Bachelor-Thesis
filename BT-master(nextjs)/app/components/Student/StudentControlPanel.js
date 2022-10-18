import React from 'react'
import { StudentCPContainer, StudentCPFontsBold } from './StudentControlPanel.style'

// StudentCP = StudentControlPanel

export default function ControlPanel({ data }) {
  return (
    <>
      <StudentCPContainer>
          {/* we ask if student has legal representative and if not he can do payments */}
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