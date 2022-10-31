import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { MainContainer, MainHeaderContainer, MainHeaderUser, MainHeaderRole, MainHeaderName, MainHeaderTitle, MainHeaderTitleRole, MainHeaderNextLesson, MainHeaderNextLessonTitle, MainHeaderLessonTitleTime } from './AdminMainContent.style'

export default function MainContent( { data} ) {
    const styleArrow = { color: "gray", fontSize: "3em" };

    return (
        // <FaAngleDown style={styleArrow} />
        <MainContainer>
            <MainHeaderContainer>
                <MainHeaderUser>
                    <MainHeaderName><MainHeaderTitle>{data.firstName} {data.lastName}</MainHeaderTitle></MainHeaderName>
                    <MainHeaderRole><MainHeaderTitleRole>{data.role}</MainHeaderTitleRole></MainHeaderRole>
                </MainHeaderUser>
                <MainHeaderNextLesson>
                    <MainHeaderNextLessonTitle>next lesson</MainHeaderNextLessonTitle>
                    <MainHeaderLessonTitleTime>monday 3pm</MainHeaderLessonTitleTime>
                </MainHeaderNextLesson>
            </MainHeaderContainer>
        </MainContainer>

    )
  }