import React from 'react'
import { StudentCPContainer, StudentCPFontsBold } from './StudentControlPanel.style'

// StudentCP = StudentControlPanel

export default function ControlPanel({ data, setPaymentPage, setLogoutPage, setSettingsPage }) {
  return (
    <>
      <StudentCPContainer>
          {/* we ask if student has legal representative and if not he can do payments */}
          {data.legalRepresentative === false
            ?
            <StudentCPFontsBold onClick={() => setPaymentPage(true)}>payment</StudentCPFontsBold>
            :    
            <></>      
          }
          <StudentCPFontsBold onClick={() => setLogoutPage(true)}>logout</StudentCPFontsBold>
          <StudentCPFontsBold onClick={() => setSettingsPage(true)}>settings</StudentCPFontsBold>
      </StudentCPContainer>  
    </>
  )
}