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
          <h1>Apologies from lecture</h1><br/>
          <form>
            <label>Students name: </label><br/>
            <input type="text" name="name" placeholder="who"></input><br/>
            <input type="date" name="date"></input><br/>
            <button onClick={() => setOpenModal(false)}>Back to dashboard</button>
          </form>
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
