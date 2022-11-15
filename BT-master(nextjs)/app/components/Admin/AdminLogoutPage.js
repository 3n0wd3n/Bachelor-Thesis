import React from 'react'
import Footer from '../Footer'
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'
import { AdminButton, AdminLogoutContainer, AdminMainContent, AdminContentContainer } from './AdminLogoutPage.style'

export default function LogoutPage({setLogoutPage}) {
  const styleIconCheck = { color: "#61C9A8", fontSize: "2em", marginLeft: "0.3em"}
  const styleIconTimes = { color: "#C96161", fontSize: "2em", marginLeft: "0.3em"}
  return (
    <>
      <AdminLogoutContainer>
        <AdminMainContent>
          <FontsHeaderBold>logout</FontsHeaderBold>
          <AdminContentContainer>
            <AdminButton><FontsBold>yes,</FontsBold><FontsThin>logout</FontsThin><FaCheckCircle style={styleIconCheck} /></AdminButton>
            <AdminButton onClick={() => setLogoutPage(false)}><FontsBold>no,</FontsBold> <FontsThin>stay</FontsThin><FaTimesCircle style={styleIconTimes} /></AdminButton>
          </AdminContentContainer>   
        </AdminMainContent>
      </AdminLogoutContainer>
      <Footer />
    </>
  )
}