import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { Colors } from '../../utils/Colors'
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'

import { AdminStudentsContainer, AdminUnorderedList, AdminListItem, MainContainer, MainHeaderContainer, MainHeaderUser, MainHeaderRole, MainHeaderName, MainHeaderTitle, MainHeaderTitleRole, MainHeaderNextLesson, MainHeaderNextLessonTitle, MainHeaderLessonTitleTime } from './AdminMainContent.style'

export default function MainContent( { data } ) {
    const styleArrow = { color: Colors.lightBrown, fontSize: "3em" };
    const Description = ({name}) => {
        return <FontsBold>{name}</FontsBold>
      }

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
            <AdminStudentsContainer>
            {data.students.map((students, key) => {
                  return (
                    <AdminUnorderedList key={key}>
                      <AdminListItem>
                          <Description name={students.firstName + " " + students.lastName} />
                      </AdminListItem>
                    </AdminUnorderedList>
                  )
                })
            }
            </AdminStudentsContainer>
        </MainContainer>

    )
  }