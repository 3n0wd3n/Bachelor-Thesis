import React from 'react'

export default function PaymentPage({setPaymentPage}) {
  return (
    <>
      PaymentPage     
      <button onClick={() => setPaymentPage(false)}>no</button>
    </>
  )
}