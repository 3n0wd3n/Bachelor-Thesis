import React from 'react'
import Footer from '../Footer'
import LogoutPage from './StudentLogoutPage'
import PaymentPage from './StudentPaymentPage'
import ApologizePage from './StudentApologizePage'
import InfoPanel from './StudentInfoPanel'
import MainContent from './StudentMainContent'
import ControlPanel from './StudentControlPanel'
import SettingsPage from './StudentSettingsPage'
import { useState } from 'react'
import { StudentContainer } from './Student.style'

export default function Student({ data, setData }) {
  const [openApologizePage, setApologizePage] = useState(false);
  const [openLogoutPage, setLogoutPage] = useState(false);
  const [openPaymentPage, setPaymentPage] = useState(false);
  const [openSettingsPage, setSettingsPage] = useState(false);
  const [childNumber, setChildNumber] = useState(-1);
  var subPage;
  if (openLogoutPage){
    subPage = <LogoutPage setLogoutPage={setLogoutPage} setData={setData}/>;
  }
  if (openPaymentPage){
    subPage = <PaymentPage setPaymentPage={setPaymentPage}/>;
  }
  if (openApologizePage){
    subPage = <ApologizePage data={data} setApologizePage={setApologizePage}/>;
  }
  if (openSettingsPage){
    subPage = <SettingsPage data={data} setData={setData} setSettingsPage={setSettingsPage}/>;
  }

  return (
    <>
      {
        openLogoutPage || openPaymentPage || openApologizePage || openSettingsPage
        ?
        subPage
        :
        <>
          <StudentContainer>
            <ControlPanel data={data} setChildNumber={setChildNumber} setPaymentPage={setPaymentPage} setLogoutPage={setLogoutPage} setSettingsPage={setSettingsPage}/>
            {/* <MainContent setData={setData} data={data} setLogoutPage={setLogoutPage}/> */}
            {/* <MainContent setData={setData} data={data.children[0]} setLogoutPage={setLogoutPage}/> */}
            {
              childNumber === -1
              ?
              <MainContent setData={setData} data={data} setLogoutPage={setLogoutPage}/>
              :
              <MainContent setData={setData} data={data.children[childNumber]} setLogoutPage={setLogoutPage}/>
            }
            <InfoPanel data={data} setApologizePage={setApologizePage}/>
          </StudentContainer>
          <Footer />
        </>
      }
    </>
  )
}
