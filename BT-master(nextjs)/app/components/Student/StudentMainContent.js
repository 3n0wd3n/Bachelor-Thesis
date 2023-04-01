import React from 'react'
import axios from 'axios'
import moment from 'moment'
import { getCookie } from 'cookies-next';
import { FaChevronCircleDown, FaChevronCircleUp, FaCheckCircle, FaRegSmileBeam } from 'react-icons/fa'
import { Colors } from '../../utils/Colors'
import { addDays } from '../Admin/ContentOfStudent/LessonChange';

import { StudentMCSummaryItem, StudentMCSummaryFirstPart, StudentMCFontsSummary, StudentMCSummaryColumnContainer, StudentMCSummaryButtonContainer, StudentMCSummarySecondPart, StudentMCDescription, StudentMCHomeworkDoneContainer, StudentMCFontsSectionLinkItem, StudentUnorderedList, StudentListItem, SimpleContainer, SimpleDiv, StudentMCFilesItems, StudentMCFontsWordList, StudentMCFontsFiles, StudentMCWordList, StudentMCFiles, StudentMCContainer, StudentMCNextLesson, StudentMCFontsDate, StudentMCFontsBold, StudentMCHomeworks, StudentMCFontsHomeworks, StudentMCFontsHomeworksItem, StudentMCFontsSectionItems } from './StudentMainContent.style'
// StudentMC = StudentMainContent

export const getNextLesson = (lessons) => {
  const reFormatIndex = (date) => new Date(date).getDay() === 0 ? 6 : new Date(date).getDay() - 1

  const now = new Date()
  const nowIndex = now.getDay()
  const daysIndexes = lessons.map(lesson => reFormatIndex(lesson.date))

  const isHigherOrEqual = daysIndexes.filter(dayIndex => dayIndex >= nowIndex).length > 0
  let nextLessonIndex
  if (isHigherOrEqual) lessons.map(lesson => {
    const dayIndex = reFormatIndex(lesson.date)
    if (dayIndex >= nowIndex && (dayIndex < nextLessonIndex || !nextLessonIndex)) return nextLessonIndex = dayIndex
  })
  else lessons.map(lesson => {
    const dayIndex = reFormatIndex(lesson.date)
    if (dayIndex < nowIndex && (dayIndex > nextLessonIndex || !nextLessonIndex)) return nextLessonIndex = dayIndex
  })

  let nextLesson = new Date(lessons.find(lesson => reFormatIndex(lesson.date) === nextLessonIndex).date)

  while (nextLesson.getTime() < now.getTime()) {
    nextLesson = addDays(nextLesson, 7)
  }

  lessons.map(lesson => {
    lesson.changes.map(change => {
      if (new Date(change.from).getTime() === nextLesson.getTime()) nextLesson = new Date(change.newFrom)
    })
  })

  return nextLesson
}

export const getDay = (nextLesson) => {
  // Getting properties from date
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var lessonDay = nextLesson;
  var day;
  for (var i = 0; i < daysOfTheWeek.length; i++) {
    if (i == lessonDay) {
      day = daysOfTheWeek[i];
    }
  }
  return day
}

export default function MainContent({ data, setData }) {
  // Set styling to icons
  const style = { color: Colors.lightGreen, fontSize: "3em" }
  const [edit, setEdit] = React.useState(false)
  const [summaryOpen, summaryOpenEdit] = React.useState(false)
  const id = getCookie('userCookie')
  const studentId = data.id
  const nextLesson = React.useMemo(() => data.lessons.length > 0 ? getNextLesson(data.lessons) : null, [data])
  const day = nextLesson ? getDay(nextLesson.getDay()) : null

  const removeHomework = async (homeworkId) => {
    await axios('http://localhost:3000/api/student.change', {
      method: 'DELETE',
      data: {
        adminId: id,
        studentId,
        homeworkId
      }
    }).then(({ data }) => {
      if (data) setData(data)
      else alert('Change failed.')
    }).finally(() => setEdit(prevState => !prevState))
  }

  return (
    <>
      <StudentMCContainer>
        <StudentMCNextLesson>
          <StudentMCFontsDate>next lesson</StudentMCFontsDate>
          <StudentMCFontsBold>{`${day ? `${day} ${moment(nextLesson).format('HH:mm')}` : "Lessons not yet set"}`}</StudentMCFontsBold>
        </StudentMCNextLesson>
        <StudentMCHomeworks>
          <StudentMCFontsHomeworks>homeworks</StudentMCFontsHomeworks>
          <SimpleDiv>
            {
              data.homeworks.length === 0
                ?
                <SimpleContainer>
                  <StudentMCFontsHomeworksItem>looks like you have everything done</StudentMCFontsHomeworksItem>
                  <FaRegSmileBeam style={style} />
                </ SimpleContainer>
                :
                data.homeworks.map((homework) => {
                  return (
                    <StudentUnorderedList key={homework.id}>
                      <StudentListItem>
                        <p>{homework.title}-</p>
                        <StudentMCDescription editable={edit}>{homework.description}</StudentMCDescription>

                        <StudentMCHomeworkDoneContainer onClick={() => removeHomework(homework.id)}>
                          <FaCheckCircle />
                        </StudentMCHomeworkDoneContainer>
                      </StudentListItem>
                    </StudentUnorderedList>
                  )
                })
            }
          </SimpleDiv>
        </StudentMCHomeworks>
        <StudentMCFiles>
          <StudentMCFontsFiles>files</StudentMCFontsFiles>

          {
            data.files.length !== 0
              ?
              <StudentMCFontsSectionItems >no file has not been added</StudentMCFontsSectionItems>
              :
              <StudentMCFilesItems>
                <StudentMCFontsSectionItems>
                  prvni_soubor
                  druhý_soubor
                  třetí_soubor
                  čtvrty_soubor
                  prvni_soubor
                  druhý_soubor
                  třetí_soubor
                  čtvrty_soubor
                  prvni_soubor
                  druhý_soubor
                  třetí_soubor
                  čtvrty_soubor
                  prvni_soubor
                  druhý_soubor
                  třetí_soubor
                  čtvrty_soubor
                </StudentMCFontsSectionItems>
              </StudentMCFilesItems>
          }

        </StudentMCFiles>
        <StudentMCWordList>
          <StudentMCFontsWordList>weekly word list</StudentMCFontsWordList>
          {
            data.wordList.length === 0
              ?
              <StudentMCFontsSectionItems >this week is your lucky week</StudentMCFontsSectionItems>
              :
              <StudentMCFontsSectionLinkItem href={data.wordList} >{data.wordList}</StudentMCFontsSectionLinkItem>
          }
        </StudentMCWordList>
        <>
          {
            summaryOpen
              ?
              <StudentMCSummaryFirstPart>
                {
                  data.summary.map((summaryItem, idx) =>
                    <div key={idx}>
                      <StudentMCSummaryItem>
                        <span>{summaryItem.slice(0, 12)}</span>
                        {summaryItem.slice(12,)}
                      </StudentMCSummaryItem>
                    </div>
                  )
                }
                <StudentMCSummaryColumnContainer>
                  <StudentMCSummaryButtonContainer editable={summaryOpen} onClick={() => summaryOpenEdit(prevState => !prevState)}>
                    <FaChevronCircleUp />
                  </StudentMCSummaryButtonContainer>
                </StudentMCSummaryColumnContainer>
              </StudentMCSummaryFirstPart>
              :
              <StudentMCSummarySecondPart>
                <StudentMCSummaryColumnContainer>
                  <StudentMCFontsSummary>summary of lessons</StudentMCFontsSummary>
                  <StudentMCSummaryButtonContainer editable={summaryOpen} onClick={() => summaryOpenEdit(prevState => !prevState)}>
                    <FaChevronCircleDown />
                  </StudentMCSummaryButtonContainer>
                </StudentMCSummaryColumnContainer>
              </StudentMCSummarySecondPart>
          }
        </>
      </StudentMCContainer>
    </>
  )
}
