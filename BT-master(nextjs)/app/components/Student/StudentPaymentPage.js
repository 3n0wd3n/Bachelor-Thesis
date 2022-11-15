import React from 'react'
import Footer from '../Footer'
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'
import { StudentPaymentContainer } from './StudentPaymentPage.style'

export default function PaymentPage({setPaymentPage}) {
  return (
    <>
      <StudentPaymentContainer>
        <FontsHeaderBold>Payments</FontsHeaderBold>    
        <button onClick={() => setPaymentPage(false)}><FontsBold>back to dashboard</FontsBold></button>
      </StudentPaymentContainer>
      <Footer />
    </>
  )
}