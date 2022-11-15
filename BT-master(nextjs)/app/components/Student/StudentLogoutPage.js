import React from 'react'
import Footer from '../Footer'
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'
import { StudentButton, StudentLogoutContainer, StudentMainContent, StudentContentContainer } from './StudentLogoutPage.style'

export default function LogoutPage({setLogoutPage}) {
  const styleIconCheck = { color: "#61C9A8", fontSize: "2em", marginLeft: "0.3em"}
  const styleIconTimes = { color: "#C96161", fontSize: "2em", marginLeft: "0.3em"}
  return (
    <>
      <StudentLogoutContainer>
        <StudentMainContent>
          <FontsHeaderBold>logout</FontsHeaderBold>
          <StudentContentContainer>
            <StudentButton><FontsBold>yes,</FontsBold><FontsThin>logout</FontsThin><FaCheckCircle style={styleIconCheck} /></StudentButton>
            <StudentButton onClick={() => setLogoutPage(false)}><FontsBold>no,</FontsBold> <FontsThin>stay</FontsThin><FaTimesCircle style={styleIconTimes} /></StudentButton>
          </StudentContentContainer>   
        </StudentMainContent>
      </StudentLogoutContainer>
      <Footer />
    </>
  )
}