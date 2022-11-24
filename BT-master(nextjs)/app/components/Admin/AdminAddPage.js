import React from 'react'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'
import { AdminLessonCountContainer, AdminLessonCountInput, AdminLessonTimeInput,AdminLessonsContainer, AdminLesson, AdminCustomFontThin, AdminCustomFontBold, AdminRowDays, AdminDayItem, AdminDaysContainer, AdminLabel, AdminInputStyled, AdminButtonContainer, AdminFormContainer, AddBackButton, AdminAddContainer } from './AdminAddPage.style'
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
        {/* <AdminLabel><FontsThin>lesson days</FontsThin></AdminLabel>
        <AdminDaysContainer>
          <AdminRowDays>
            <AdminDayItem><AdminCustomFontBold>Mon</AdminCustomFontBold></AdminDayItem>
            <AdminDayItem><AdminCustomFontBold>Tue</AdminCustomFontBold></AdminDayItem>
            <AdminDayItem><AdminCustomFontBold>Wed</AdminCustomFontBold></AdminDayItem>
          </AdminRowDays>
          <AdminRowDays>
            <AdminDayItem><AdminCustomFontBold>Thu</AdminCustomFontBold></AdminDayItem>
            <AdminDayItem><AdminCustomFontBold>Fri</AdminCustomFontBold></AdminDayItem>
            <AdminDayItem><AdminCustomFontBold>Sat</AdminCustomFontBold></AdminDayItem>
          </AdminRowDays>
        </AdminDaysContainer> */}
        <AdminLabel><FontsThin>count of hours</FontsThin></AdminLabel>
        <AdminLessonsContainer>
          <AdminLesson>
              <span><AdminCustomFontBold>Mon</AdminCustomFontBold></span>
              <AdminLessonCountContainer>
                <span><FaMinusCircle style={styleMinus} /></span>
                <AdminLessonCountInput type="number" ></AdminLessonCountInput>
                <span><FaPlusCircle style={stylePlus} /></span>
              </AdminLessonCountContainer>
              <span><AdminCustomFontBold>start lecture: </AdminCustomFontBold></span>
              <AdminLessonTimeInput type="time" ></AdminLessonTimeInput>
          </AdminLesson>
          <AdminLesson>
              <span><AdminCustomFontBold>Tue</AdminCustomFontBold></span>
              <AdminLessonCountContainer>
                <span><FaMinusCircle style={styleMinus} /></span>
                <AdminLessonCountInput type="number" ></AdminLessonCountInput>
                <span><FaPlusCircle style={stylePlus} /></span>
              </AdminLessonCountContainer>
              <span><AdminCustomFontBold>start lecture: </AdminCustomFontBold></span>
              <AdminLessonTimeInput type="time" ></AdminLessonTimeInput>
          </AdminLesson>
          <AdminLesson>
              <span><AdminCustomFontBold>Wed</AdminCustomFontBold></span>
              <AdminLessonCountContainer>
                <span><FaMinusCircle style={styleMinus} /></span>
                <AdminLessonCountInput type="number" ></AdminLessonCountInput>
                <span><FaPlusCircle style={stylePlus} /></span>
              </AdminLessonCountContainer>
              <span><AdminCustomFontBold>start lecture: </AdminCustomFontBold></span>
              <AdminLessonTimeInput type="time" ></AdminLessonTimeInput>
          </AdminLesson>
          <AdminLesson>
              <span><AdminCustomFontBold>Thu</AdminCustomFontBold></span>
              <AdminLessonCountContainer>
                <span><FaMinusCircle style={styleMinus} /></span>
                <AdminLessonCountInput type="number" ></AdminLessonCountInput>
                <span><FaPlusCircle style={stylePlus} /></span>
              </AdminLessonCountContainer>
              <span><AdminCustomFontBold>start lecture: </AdminCustomFontBold></span>
              <AdminLessonTimeInput type="time" ></AdminLessonTimeInput>
          </AdminLesson>
          <AdminLesson>
              <span><AdminCustomFontBold>Fri</AdminCustomFontBold></span>
              <AdminLessonCountContainer>
                <span><FaMinusCircle style={styleMinus} /></span>
                <AdminLessonCountInput type="number" ></AdminLessonCountInput>
                <span><FaPlusCircle style={stylePlus} /></span>
              </AdminLessonCountContainer>
              <span><AdminCustomFontBold>start lecture: </AdminCustomFontBold></span>
              <AdminLessonTimeInput type="time" ></AdminLessonTimeInput>
          </AdminLesson>
          <AdminLesson>
              <span><AdminCustomFontBold>Sat</AdminCustomFontBold></span>
              <AdminLessonCountContainer>
                <span><FaMinusCircle style={styleMinus} /></span>
                <AdminLessonCountInput type="number" ></AdminLessonCountInput>
                <span><FaPlusCircle style={stylePlus} /></span>
              </AdminLessonCountContainer>
              <span><AdminCustomFontBold>start lecture: </AdminCustomFontBold></span>
              <AdminLessonTimeInput type="time" ></AdminLessonTimeInput>
          </AdminLesson>
        </AdminLessonsContainer>
        <div>
              <AdminCustomFontThin>
                <AdminInputStyled type="checkbox" id="under-age" name="under-age" value="" />
                <AdminLabel htmlFor="under-age">if student is under aged or need legal representative</AdminLabel>
              </AdminCustomFontThin>
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
