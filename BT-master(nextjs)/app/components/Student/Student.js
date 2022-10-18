import React from 'react'
import InfoPanel from './StudentInfoPanel'
import MainContent from './StudentMainContent'
import ControlPanel from './StudentControlPanel'
import { useState } from 'react'
import Footer from '../Footer'
import { StudentContainer } from './Student.style'


export default function Student({ data }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal ?
        <>
          BLA
          <button onClick={() => setOpenModal(false)}>Dashboard</button>
        </>
      :
      <>
        <StudentContainer>
          <ControlPanel data={data}/>
          <MainContent data={data}/>
          <InfoPanel data={data} setOpenModal={setOpenModal}/>
        </StudentContainer>
        <Footer />
      </>
      }
    </>
  )
}
