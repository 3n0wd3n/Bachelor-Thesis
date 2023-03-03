import React from 'react'
import { WrapperStyled, DayStyled, LessonStyled } from './LessonChange.style'
import { constructWeek } from './FilesContent';

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const generateNextLessons = (lessons, weeks) => {
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const nextLessons = []
  let i = 0
  while (nextLessons.length < weeks) {
    const weekLessons = []

    lessons.map(lesson => {
      const newDate = addDays(lesson.date, (i + 1) * 7)
      const newEndDate = addDays(lesson.endDate, (i + 1) * 7)
      const dayIndex = newDate.getDay() === 0 ? days.length - 1 : newDate.getDay() - 1

      if (newDate.getTime() < new Date().getTime()) return
      weekLessons.push([dayIndex, { id: lesson.id, date: newDate, endDate: newEndDate }])
    })

    if (weekLessons.length) nextLessons.push(weekLessons)
    i++
  }

  const formatedNextLessons = []

  nextLessons.map(week => {
    week.map(nextLesson => {
      const dayIndex = nextLesson[1].date.getDay() === 0 ? days.length - 1 : nextLesson[1].date.getDay() - 1

      console.log(dayIndex)
    })
  })

  return formatedNextLessons
}

export default function LessonChange({ student }) {
  const [nextWeeks, setNextWeeks] = React.useState(5)
  const nextLessons = React.useMemo(() => generateNextLessons(student.lessons, nextWeeks), [nextWeeks])
  console.log(nextLessons)

  return (
    <WrapperStyled>
      {week.map((day, key) =>
        <DayStyled key={key}>{day}</DayStyled>
      )}
    </WrapperStyled>
  )
}
