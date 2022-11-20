import React from 'react'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'
import { AdminLessonsContainer, AdminLesson, AdminCustonFontThin, AdminCustonFontBold, AdminRowDays, AdminDayItem, AdminDaysContainer, AdminLabel, AdminInputStyled, AdminButtonContainer, AdminFormContainer, AddBackButton, AdminAddContainer } from './AdminAddPage.style'
export default function AddPage({setAddPage}) {
  const styleMinus = { color: "#C96161", fontSize: "1.2em", cursor: "pointer" };
  const stylePlus = { color: "#61C9A8", fontSize: "1.2em", cursor: "pointer" };
  return (
    <>
    <AdminAddContainer>
      <AdminFormContainer>
        <FontsHeaderBold>add student</FontsHeaderBold>
        <AdminButtonContainer>
          <AdminLabel><FontsThin>name</FontsThin></AdminLabel>
          <AdminInputStyled type="text" placeholder="name"></AdminInputStyled>
        </AdminButtonContainer>
        <AdminButtonContainer>
          <AdminLabel><FontsThin>surname</FontsThin></AdminLabel>
          <AdminInputStyled type="text" placeholder="surname"></AdminInputStyled>
        </AdminButtonContainer>
        <AdminButtonContainer>
          <AdminLabel><FontsThin>password</FontsThin></AdminLabel>
          <AdminInputStyled type="password" placeholder="password"></AdminInputStyled>
        </AdminButtonContainer>
        <AdminLabel><FontsThin>lesson days</FontsThin></AdminLabel>
        <AdminDaysContainer>
          <AdminRowDays>
            <AdminDayItem><AdminCustonFontBold>Mon</AdminCustonFontBold></AdminDayItem>
            <AdminDayItem><AdminCustonFontBold>Tue</AdminCustonFontBold></AdminDayItem>
            <AdminDayItem><AdminCustonFontBold>Wed</AdminCustonFontBold></AdminDayItem>
          </AdminRowDays>
          <AdminRowDays>
            <AdminDayItem><AdminCustonFontBold>Thu</AdminCustonFontBold></AdminDayItem>
            <AdminDayItem><AdminCustonFontBold>Fri</AdminCustonFontBold></AdminDayItem>
            <AdminDayItem><AdminCustonFontBold>Sat</AdminCustonFontBold></AdminDayItem>
          </AdminRowDays>
        </AdminDaysContainer>
        <AdminLabel><FontsThin>count of hours</FontsThin></AdminLabel>
        <AdminLessonsContainer>
          <AdminLesson>
              <span><AdminCustonFontBold>Mon</AdminCustonFontBold></span>
              <span><FaMinusCircle style={styleMinus} /></span>
              <span><FaPlusCircle style={stylePlus} /></span>
              <span><AdminCustonFontBold>start lecture: </AdminCustonFontBold></span>
          </AdminLesson>
          <AdminLesson>Tue</AdminLesson>
          <AdminLesson>Wed</AdminLesson>
          <AdminLesson>Thu</AdminLesson>
          <AdminLesson>Fri</AdminLesson>
          <AdminLesson>Sat</AdminLesson>
        </AdminLessonsContainer>
        <div>
              <AdminCustonFontThin>
                <AdminInputStyled type="checkbox" id="under-age" name="under-age" value="" />
                <AdminLabel for="under-age">if student is under aged or need legal representative</AdminLabel>
              </AdminCustonFontThin>
        </div>
        <FontsHeaderBold>representative</FontsHeaderBold>
        <AdminButtonContainer>
          <AdminLabel><FontsThin>name</FontsThin></AdminLabel>
          <AdminInputStyled type="text" placeholder="name"></AdminInputStyled>
        </AdminButtonContainer>
        <AdminButtonContainer>
          <AdminLabel><FontsThin>surname</FontsThin></AdminLabel>
          <AdminInputStyled type="text" placeholder="surname"></AdminInputStyled>
        </AdminButtonContainer>
        <AdminButtonContainer>
          <AdminLabel><FontsThin>password</FontsThin></AdminLabel>
          <AdminInputStyled type="password" placeholder="password"></AdminInputStyled>
        </AdminButtonContainer>
        <AdminButtonContainer>
          <AdminLabel><FontsThin>phone number</FontsThin></AdminLabel>
          <AdminInputStyled type="tel"></AdminInputStyled>
        </AdminButtonContainer>
      </AdminFormContainer>
      <AddBackButton onClick={() => setAddPage(false)}>back to dashboard</AddBackButton>
    </AdminAddContainer>
    </>
  )
}
