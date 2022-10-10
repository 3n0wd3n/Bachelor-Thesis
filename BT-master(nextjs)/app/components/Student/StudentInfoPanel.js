import React from 'react'

import { StudentFontsHeaderBold, StudentFontsThin } from './StudentInfoPanel.style'

export default function InfoPanel({ data }) {
  console.log(data)
  function test(){
    const li = []
    for (let i; i < data.plan.length; i++){
        li.push(data.plan[i])
      }
    return li
  }
  return (
    <>
      <StudentFontsThin>{data.firstName}</StudentFontsThin>
      <StudentFontsHeaderBold>{data.lastName}</StudentFontsHeaderBold>
      <StudentFontsThin>total count of lessons</StudentFontsThin>
      <StudentFontsHeaderBold>{data.lessons.length}</StudentFontsHeaderBold>
      <StudentFontsThin>role</StudentFontsThin>
      <StudentFontsHeaderBold>{data.role}</StudentFontsHeaderBold>
      <StudentFontsThin>your study plan</StudentFontsThin>
      <StudentFontsHeaderBold>{data.plan}</StudentFontsHeaderBold>
      <StudentFontsHeaderBold>{test()}</StudentFontsHeaderBold>

    </>
  )
}