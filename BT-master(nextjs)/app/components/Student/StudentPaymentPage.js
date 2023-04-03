import React from 'react'
import Footer from '../Footer'
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'
import { StudentBackButton, StudentPaymentMainContainer, StudentPaymentContainer } from './StudentPaymentPage.style'

export default function PaymentPage({setPaymentPage}) {
  return (
    <>
      <StudentPaymentMainContainer>
        <FontsHeaderBold>Payments</FontsHeaderBold>    
        <StudentPaymentContainer>
          <FontsBold>Info:</FontsBold>
          <FontsThin>č.ú.: 3014941083/0800</FontsThin>
          <FontsThin>email: machackova.baraa@seznam.cz</FontsThin>
          <FontsThin>tel.č.: 725 352 444</FontsThin>
        </StudentPaymentContainer>
        <StudentBackButton onClick={() => setPaymentPage(false)}><FontsBold>back to dashboard</FontsBold></StudentBackButton>
      </StudentPaymentMainContainer>
      <Footer />
    </>
  )
}