import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { Colors } from '../../utils/Colors'
import { FontsBold } from '../CommonStyles'
import AdminStudentContent from './AdminStudentContent'

import { AdminStudentsContainer, MainContainer, MainHeaderContainer, MainHeaderUser, MainHeaderRole, MainHeaderName, MainHeaderTitle, MainHeaderTitleRole, MainHeaderNextLesson, MainHeaderNextLessonTitle, MainHeaderLessonTitleTime } from './AdminMainContent.style'

export default function MainContent({ data, setData}) {
    const styleArrow = { color: Colors.lightBrown, fontSize: "3em" };
    const Description = ({ name }) => {
        return <FontsBold>{name}</FontsBold>
    }

    return (
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
            <AdminStudentsContainer>
                {data.students.map((student, key) => {
                    return (
                        <AdminStudentContent student={student} key={key} setData={setData}/>
                    )
                })
                }
            </AdminStudentsContainer>
        </MainContainer>

    )
}