import React from 'react'
import Footer from '../Footer'
import Apologize from './StudentApologize'
import InfoPanel from './StudentInfoPanel'
import MainContent from './StudentMainContent'
import ControlPanel from './StudentControlPanel'
import { useState } from 'react'
import { StudentContainer } from './Student.style'



export default function Student({ data }) {
  const [openApologize, setOpenApologize] = useState(false);

  return (
    <>
      {openApologize ?
        <Apologize data={data}/>
      :
      <>
        <StudentContainer>
          <ControlPanel data={data}/>
          <MainContent data={data}/>
          <InfoPanel data={data} setOpenApologize={setOpenApologize}/>
        </StudentContainer>
        <Footer />
      </>
      }
    </>
  )
}
