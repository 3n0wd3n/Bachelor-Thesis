import React from 'react'
import Footer from '../Footer'
import { StudentApologizeContainer, ApologizeTitle, ApologizeForm, ApologizeLabel, ApologizeInput, ApologizeSendButton, ApologizeBackButton } from './StudentApologizePage.style'

export default function ApologizePage({ data, setOpenApologize }) {
  return (
    <>
      <StudentApologizeContainer>
          <ApologizeTitle>Apologies from lecture</ApologizeTitle>
          <ApologizeForm>
              <ApologizeLabel >name:</ApologizeLabel >
              <ApologizeInput type="text" name="name" placeholder={data.firstName}></ApologizeInput>
              <ApologizeLabel >surname:</ApologizeLabel >
              <ApologizeInput type="text" name="name" placeholder={data.lastName}></ApologizeInput>
              <ApologizeInput type="date" name="date"></ApologizeInput>
              <ApologizeSendButton>send</ApologizeSendButton>
              <ApologizeBackButton onClick={() => setOpenApologize(false)}>back to dashboard</ApologizeBackButton>
          </ApologizeForm>
      </StudentApologizeContainer>
      <Footer />
    </>
  )
}