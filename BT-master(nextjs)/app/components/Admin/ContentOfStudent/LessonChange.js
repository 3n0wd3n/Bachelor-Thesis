import React from 'react'
import { WrapperStyled, DayStyled } from './LessonChange.style'
import { constructWeek } from './FilesContent';

const generateNextLessons = (lessons, weeks) => {
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const nextLessons = []
  // for (let i = 0; i < weeks; i++) {
  let i = 0
  while (nextLessons.length < weeks) {
    const weekLessons = []

    lessons.map(lesson => {
      const newDate = addDays(lesson.date, (i + 1) * 7)
      const newEndDate = addDays(lesson.endDate, (i + 1) * 7)

      if (newDate.getTime() < new Date().getTime()) return
      weekLessons.push({ id: lesson.id, date: newDate, endDate: newEndDate })
    })

    if (weekLessons.length) nextLessons.push(weekLessons)
    i++
  }

  return nextLessons
}

export default function LessonChange({ student }) {
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const [nextWeeks, setNextWeeks] = React.useState(5)
  const nextLessons = React.useMemo(() => generateNextLessons(student.lessons, nextWeeks).map(lesson => constructWeek(lesson)), [nextWeeks])

  return (
    <WrapperStyled>
      {week.map((day, key) =>
        <DayStyled key={key}>{day}</DayStyled>
      )}

      {/* {nextLessons.map((nextWeek, key) => {
        return nextWeek.map((nextLesson, lessonKey) => {
          return week.map((day, weekKey) => {
            const lesson = nextLesson[1][0];
            console.log(nextLesson[0], day, nextLesson[0] === day ? nextLesson[1][0] : 'nothing')
            // return nextLesson[0] === day ? <DayStyled key={weekKey}>{nextLesson[1][0].date}</DayStyled> : <>Nothing</>
            return nextLesson[0] === day ? <span key={weekKey}>Found</span> : <span key={weekKey}>Nothing</span>
          })
        })
      })} */}
    </WrapperStyled>
  )
}
