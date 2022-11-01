import React from 'react'
import { StudentIPFontsHeaderBold, StudentIPFontsThin, StudentIPItemContainer, StudentIPContainer, StudentIPButton, StudentIPButtonFontsBold  } from './StudentInfoPanel.style'

// StudentIP = StudentInfoPanel

export default function InfoPanel({ data, setOpenApologize }) {
  return (
    <>
      <StudentIPContainer>
        <StudentIPItemContainer>
          <StudentIPFontsThin>{data.firstName}</StudentIPFontsThin>
          <StudentIPFontsHeaderBold>{data.lastName}</StudentIPFontsHeaderBold>
        </StudentIPItemContainer>
        <StudentIPItemContainer>
          <StudentIPFontsThin>role</StudentIPFontsThin>
          <StudentIPFontsHeaderBold>{data.role}</StudentIPFontsHeaderBold>
        </StudentIPItemContainer>
        <StudentIPItemContainer>
          <StudentIPFontsThin>total count of lessons</StudentIPFontsThin>
          <StudentIPFontsHeaderBold>{data.lessons.length}</StudentIPFontsHeaderBold>
        </StudentIPItemContainer>
        <StudentIPItemContainer>
          <StudentIPFontsThin>count of homeworks</StudentIPFontsThin>
          <StudentIPFontsHeaderBold>{data.homeworks.length}</StudentIPFontsHeaderBold>
        </StudentIPItemContainer>
        <StudentIPItemContainer>
          <StudentIPFontsThin>your study plan</StudentIPFontsThin>
          {/*<StudentIPFontsHeaderBold>{data.plan[0]}</StudentIPFontsHeaderBold>
          How to render values from list in data https://www.youtube.com/watch?v=_kVJnN2e4tw */}
          {data.plan.map((item, key) => {
            return <StudentIPFontsHeaderBold key={key}><Item name={item}/></StudentIPFontsHeaderBold>
          })}
        </StudentIPItemContainer>
        <StudentIPButton><StudentIPButtonFontsBold onClick={() => setOpenApologize(true)}>apologize</StudentIPButtonFontsBold></StudentIPButton>
      </StudentIPContainer>
      
    </>
  )
}

const Item = ({name}) => {
  return <ul><li>{name}</li></ul>
}