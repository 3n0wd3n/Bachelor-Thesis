import React from 'react'
import Footer from '../Footer'
import LogoutPage from './StudentLogoutPage'
import PaymentPage from './StudentPaymentPage'
import ApologizePage from './StudentApologizePage'
import InfoPanel from './StudentInfoPanel'
import MainContent from './StudentMainContent'
import ControlPanel from './StudentControlPanel'
import { useState } from 'react'
import { StudentContainer } from './Student.style'



export default function Student({ data }) {
  const [openApologize, setOpenApologize] = useState(false);
  const [openLogoutPage, setLogoutPage] = useState(false);
  const [openPaymentPage, setPaymentPage] = useState(false);
  var subPage;
  if (openLogoutPage){
    subPage = <LogoutPage setLogoutPage={setLogoutPage}/>;
  }
  if (openPaymentPage){
    subPage = <PaymentPage setPaymentPage={setPaymentPage}/>;
  }
  if (openApologize){
    subPage = <ApologizePage data={data}setOpenApologize={setOpenApologize}/>;
  }

  return (
    <>
      {
        openLogoutPage || openPaymentPage || openApologize
        ?
        subPage
        :
        <>
          <StudentContainer>
            <ControlPanel data={data} setPaymentPage={setPaymentPage} setLogoutPage={setLogoutPage}/>
            <MainContent data={data} setLogoutPage={setLogoutPage}/>
            <InfoPanel data={data} setOpenApologize={setOpenApologize}/>
          </StudentContainer>
          <Footer />
        </>
      }
    </>
  )
}
