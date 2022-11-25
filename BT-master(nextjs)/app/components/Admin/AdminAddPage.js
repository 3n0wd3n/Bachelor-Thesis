import React from 'react'
import Footer from '../Footer'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'
import { AddSendButton, AdminAddLesson, AdminLessonCountContainer, AdminLessonCountInput, AdminLessonTimeInput,AdminLessonsContainer, AdminLesson, AdminCustomFontThin, AdminCustomFontBold, AdminRowDays, AdminDayItem, AdminDaysContainer, AdminLabel, AdminInputStyled, AdminButtonContainer, AdminFormContainer, AddBackButton, AdminAddContainer } from './AdminAddPage.style'

export default function AddPage({setAddPage}) {
  const styleMinus = { color: "#C96161", fontSize: "1.2em", cursor: "pointer" };
  const stylePlus = { color: "#61C9A8", fontSize: "1.2em", cursor: "pointer" };
  const userStudentNameRef = React.useRef();
  const userStudentSurnameRef = React.useRef();
  const passwordRef = React.useRef();
  const lessonRefs = React.useRef([]);
  const [lessonCount, setLessonCount] = React.useState(1);
  
  const addStudent = () => {
    let array = [];
    for (const key of Object.keys(lessonRefs.current)) {
      // const day = lessonRefs.current[key];
      // const dayCount = day.count.value;
      // const dayTime = day.time.value;
      // const date = new Date(dayTime);

      // console.log(date);
    }

    console.log(lessonRefs.current)
    
    // printing values from form
    // console.log(userNameRef.current.value);
    
    // axios('http://localhost:3000/api/user', {
    //   method: 'POST',
    //   data: {
    //     role: 'student',

    //   }
    // })
    //   .then((data) => console.log(data.data))
  }

  return (
    <>
    <AdminAddContainer>
      <AdminFormContainer>
        <FontsHeaderBold>add student</FontsHeaderBold>
        <AdminButtonContainer>
          <AdminLabel><FontsThin>name</FontsThin></AdminLabel>
          <AdminInputStyled type="text" placeholder="name" ref={userStudentNameRef} onChange={() => passwordRef.current.value = userStudentNameRef.current.value.slice(0, 3).toLowerCase() + userStudentSurnameRef.current.value.slice(0, 3).toLowerCase()}></AdminInputStyled>
        </AdminButtonContainer>
        <AdminButtonContainer>
          <AdminLabel><FontsThin>surname</FontsThin></AdminLabel>
          <AdminInputStyled type="text" placeholder="surname" ref={userStudentSurnameRef} onChange={() => passwordRef.current.value = userStudentNameRef.current.value.slice(0, 3) + userStudentSurnameRef.current.value.slice(0, 3)}></AdminInputStyled>
        </AdminButtonContainer>
        <AdminButtonContainer>
          <AdminLabel><FontsThin>password</FontsThin></AdminLabel>
          <AdminInputStyled type="text" placeholder="password" ref={passwordRef}></AdminInputStyled>
        </AdminButtonContainer>
        <AdminLabel><FontsThin>count of hours</FontsThin></AdminLabel>
        <AdminLessonsContainer>
          {[...Array(lessonCount)].map((el, index) =>
            <AdminLesson key={index}>
              <AdminLessonTimeInput type="date"
                ref={(el) => lessonRefs.current[index] = { day: el, from: lessonRefs.current[index]?.from, to: lessonRefs.current[index]?.to }}
                min={new Date()}
              ></AdminLessonTimeInput>
              <AdminLessonTimeInput type="time"
                ref={(el) => lessonRefs.current[index] = { from: el, day: lessonRefs.current[index]?.day, to: lessonRefs.current[index]?.to }}
              ></AdminLessonTimeInput>
              <AdminLessonTimeInput type="time"
                ref={(el) => lessonRefs.current[index] = { to: el, from: lessonRefs.current[index]?.from, day: lessonRefs.current[index]?.day }}
                onChange={({ target }) => {
                  if (lessonRefs.current[index]?.from < target.value) target.value = '';
                }}
              ></AdminLessonTimeInput>
            </AdminLesson>
          )}
          
        </AdminLessonsContainer>
        <AdminAddLesson onClick={() => setLessonCount(prevCount => prevCount + 1)}>
          <span>add new lesson day</span><FaPlusCircle style={stylePlus} />
        </AdminAddLesson>
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
      <AddSendButton onClick={() => addStudent()}>create</AddSendButton>
      <AddBackButton onClick={() => setAddPage(false)}>back to dashboard</AddBackButton>
    </AdminAddContainer>
    <Footer/>
    </>
  )
}
