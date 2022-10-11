import React from 'react'
import { StudentFontsHeaderBold, StudentFontsThin } from './StudentInfoPanel.style'
import { Container } from '../CommonStyles'

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
      <StudentFontsHeaderBold>{data.plan[0]}</StudentFontsHeaderBold>
      <StudentFontsHeaderBold>{data.plan[1]}</StudentFontsHeaderBold>
      <StudentFontsHeaderBold>{data.plan[2]}</StudentFontsHeaderBold>
      <StudentFontsHeaderBold>{data.plan[3]}</StudentFontsHeaderBold>
      <StudentFontsHeaderBold>{data.plan[4]}</StudentFontsHeaderBold>
      <StudentFontsHeaderBold>{test()}</StudentFontsHeaderBold>
    </>
  )
}