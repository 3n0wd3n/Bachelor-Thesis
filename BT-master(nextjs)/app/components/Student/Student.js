import React from 'react'
import InfoPanel from './StudentInfoPanel'
import MainContent from './StudentMainContent'
import ControlPanel from './StudentControlPanel'
import { StudentContainer } from './Student.style'


export default function Student({ data }) {
  console.log(data)
  return (
    <>
      <StudentContainer>
        <ControlPanel data={data}/>
        <MainContent data={data}/>
        <InfoPanel data={data} />
      </StudentContainer>
    </>
  )
}
