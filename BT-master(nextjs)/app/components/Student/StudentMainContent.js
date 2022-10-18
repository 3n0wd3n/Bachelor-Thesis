import React from 'react'
import {useState} from 'react';
import { SimpleDiv, StudentMCFilesItems, StudentMCFontsWordList, StudentMCFontsFiles, StudentMCWordList, StudentMCFiles, StudentMCContainer, StudentMCNextLesson, StudentMCFontsDate, StudentMCFontsBold, StudentMCHomeworks, StudentMCFontsHomeworks, StudentMCFontsHomeworksItem, StudentMCFontsSectionItems } from './StudentMainContent.style'

// StudentMC = StudentMainContent

export default function MainContent({ data }) {
  console.log(data);

  // Getting properties from date
  const lessonDate = new Date(data.lessons[0].date);
  const daysOfTheWeekEnglish = ["mon", "tue", "wed", "thu", "fri", "sat", "san"];
  const daysOfTheWeek = ["pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota", "neděle"];
  var lessonDay = lessonDate.getDay();
  var lessonHour = lessonDate.getHours();
  var day;
  for (var i = 0; i < daysOfTheWeek.length; i++) {
    if (i == lessonDay){
      day = daysOfTheWeek[i];
    }
  }

  // Getting homeworks properties and their mapValues
  var titles = [];
  var descriptions = [];
  for (var i = 0; i < data.homeworks.length; i++){
    for (var property in data.homeworks[i]){
      if (property == "title"){
        titles.push(data.homeworks[i][property]);
      }
      if (property == "description"){
        descriptions.push(data.homeworks[i][property]);
      }
    }
  }
  console.log("Title", titles);
  console.log("Description", descriptions);

  return (
    <>
      <StudentMCContainer>
        <StudentMCNextLesson>
          <StudentMCFontsDate>next lesson</StudentMCFontsDate>
          <StudentMCFontsBold>{day + ' ' + ' ' + lessonHour + 'h'}</StudentMCFontsBold>
        </StudentMCNextLesson>  
        <StudentMCHomeworks>
          <StudentMCFontsHomeworks>homeworks</StudentMCFontsHomeworks>
            {/* <div>
              {
              titles.map((item, key) => {
                return <div key={key}><Title name={item}/></div>
              })}
            </div> */}
            <SimpleDiv>
            {
              data.homeworks.length === 0
              ?
              <StudentMCFontsHomeworksItem>looks like you have everything done</StudentMCFontsHomeworksItem>
              :
              descriptions.map((item, key) => {
                  return <StudentMCFontsHomeworksItem key={key}><Description name={item}/></StudentMCFontsHomeworksItem>
                })}
            </SimpleDiv>
        </StudentMCHomeworks> 
        <StudentMCFiles>
          <StudentMCFontsFiles>files</StudentMCFontsFiles>
          <StudentMCFontsSectionItems>
            {
              data.files.length === 0
              ?
              <StudentMCFontsSectionItems >no file has not been added</StudentMCFontsSectionItems>
              :
              <StudentMCFilesItems>
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
              </StudentMCFilesItems>

            }
          </StudentMCFontsSectionItems>
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

// const Title = ({name}) => {
//   return <div>{name}</div>
// }

const Description = ({name}) => {
  return <ul><li>{name} <input type="checkbox" id={name} name="homework"></input></li></ul>
}