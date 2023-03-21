import React from 'react'
import axios from 'axios'
import { getCookie } from 'cookies-next';
import { FaCheckCircle, FaRegSmileBeam } from 'react-icons/fa'
import { Colors } from '../../utils/Colors'

import { StudentMCDescription, StudentMCHomeworkDoneContainer, StudentMCFontsSectionLinkItem, StudentUnorderedList, StudentListItem, SimpleContainer, SimpleDiv, StudentMCFilesItems, StudentMCFontsWordList, StudentMCFontsFiles, StudentMCWordList, StudentMCFiles, StudentMCContainer, StudentMCNextLesson, StudentMCFontsDate, StudentMCFontsBold, StudentMCHomeworks, StudentMCFontsHomeworks, StudentMCFontsHomeworksItem, StudentMCFontsSectionItems } from './StudentMainContent.style'
// StudentMC = StudentMainContent

export default function MainContent({ data, setData }) {
  // Set styling to icons
  const style = { color: Colors.lightGreen, fontSize: "3em" }
  const [edit, setEdit] = React.useState(false)
  const id = getCookie('userCookie')
  const studentId = data.id

  // Getting properties from date
  const daysOfTheWeek = ["pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota", "neděle"];
  const lessonDate = new Date(data.lessons[0]?.date);
  var lessonDay = lessonDate?.getDay();
  var lessonHour = lessonDate?.getHours();
  var day;
  for (var i = 0; i < daysOfTheWeek.length; i++) {
    if (i == lessonDay) {
      day = daysOfTheWeek[i];
    }
  }

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
          <StudentMCFontsBold>{`${day ? day + ' ' + ' ' + lessonHour + 'h' : 'No next lesson'}`}</StudentMCFontsBold>
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
            data.files.length === 0
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
      </StudentMCContainer>
    </>
  )
}
