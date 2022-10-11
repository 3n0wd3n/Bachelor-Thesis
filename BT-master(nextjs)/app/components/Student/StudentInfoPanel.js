import React from 'react'
import { StudentFontsHeaderBold, StudentFontsThin, StudentItemContainer, StudentContainer, StudentButton, StudentButtonFontsBold  } from './StudentInfoPanel.style'
// import { Container } from '../CommonStyles'

export default function InfoPanel({ data }) {
  console.log(data)

  return (
    <>
      <StudentContainer>
        <StudentItemContainer>
          <StudentFontsThin>{data.firstName}</StudentFontsThin>
          <StudentFontsHeaderBold>{data.lastName}</StudentFontsHeaderBold>
        </StudentItemContainer>
        <StudentItemContainer>
          <StudentFontsThin>role</StudentFontsThin>
          <StudentFontsHeaderBold>{data.role}</StudentFontsHeaderBold>
        </StudentItemContainer>
        <StudentItemContainer>
          <StudentFontsThin>total count of lessons</StudentFontsThin>
          <StudentFontsHeaderBold>{data.lessons.length}</StudentFontsHeaderBold>
        </StudentItemContainer>
        <StudentItemContainer>
          <StudentFontsThin>count of homeworks</StudentFontsThin>
          <StudentFontsHeaderBold>{data.homeworks.length}</StudentFontsHeaderBold>
        </StudentItemContainer>
        <StudentItemContainer>
          <StudentFontsThin>your study plan</StudentFontsThin>
          {/*<StudentFontsHeaderBold>{data.plan[0]}</StudentFontsHeaderBold>
          How to render values from list in data https://www.youtube.com/watch?v=_kVJnN2e4tw */}
          {data.plan.map((item, key) => {
            return <StudentFontsHeaderBold key={key}><Item name={item}/></StudentFontsHeaderBold>
          })}
        </StudentItemContainer>
        <StudentButton><StudentButtonFontsBold>appologize</StudentButtonFontsBold></StudentButton>
      </StudentContainer>
      
    </>
  )
}

const Item = ({name}) => {
  return <div>{name}</div>
}