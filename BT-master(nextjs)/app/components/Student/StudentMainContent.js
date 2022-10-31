import React from 'react'
// import { BsGrid3X3GapFill } from 'react-icons/bs';
import { FaRegSmileBeam } from "react-icons/fa";
import { SimpleContainer, SimpleDiv, StudentMCFilesItems, StudentMCFontsWordList, StudentMCFontsFiles, StudentMCWordList, StudentMCFiles, StudentMCContainer, StudentMCNextLesson, StudentMCFontsDate, StudentMCFontsBold, StudentMCHomeworks, StudentMCFontsHomeworks, StudentMCFontsHomeworksItem, StudentMCFontsSectionItems } from './StudentMainContent.style'
// StudentMC = StudentMainContent

export default function MainContent({ data }) {
  // Set styling to icons
  const style = { color: "#61C9A8", fontSize: "3em" }

  // Mapping items from array to styled components 
  const Description = ({name}) => {
    return <StudentMCFontsHomeworksItem>{name}</StudentMCFontsHomeworksItem>
  }

  // Getting properties from date
  const lessonDate = new Date(data.lessons[0].date);
  const daysOfTheWeek = ["pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota", "neděle"];
  var lessonDay = lessonDate.getDay();
  var lessonHour = lessonDate.getHours();
  var day;
  for (var i = 0; i < daysOfTheWeek.length; i++) {
    if (i == lessonDay){
      day = daysOfTheWeek[i];
    }
  }

  return (
    <>
      <StudentMCContainer>
         <StudentMCNextLesson>
          <StudentMCFontsDate>next lesson</StudentMCFontsDate>
          <StudentMCFontsBold>{day + ' ' + ' ' + lessonHour + 'h'}</StudentMCFontsBold>
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
              data.homeworks.map((homework, key) => {
                  return (
                    <ul key={key}>
                      <li>
                          <Description name={homework.description} /><input type="checkbox"></input>
                      </li>
                    </ul>
                  )
                })
              // <></>
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
            <StudentMCFontsSectionItems >{data.wordList}</StudentMCFontsSectionItems>  
          }
        </StudentMCWordList>
      </StudentMCContainer>
    </>
  )
}
