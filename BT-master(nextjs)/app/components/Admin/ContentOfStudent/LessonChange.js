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
      const dayIndex = newDate.getDay() === 0 ? week.length - 1 : newDate.getDay() - 1

      if (newDate.getTime() < new Date().getTime()) return
      weekLessons.push([dayIndex, { id: lesson.id, date: newDate, endDate: newEndDate }])
    })

    if (weekLessons.length) nextLessons.push(weekLessons)
    i++
  }

  const formatedNextLessons = []

  nextLessons.map(weekLessons => {
    const formatedWeek = []
    week.map(day => {
      const dayIndex = week.indexOf(day)
      const lessonsThisDay = weekLessons.filter(dayLesson => dayLesson[0] === dayIndex)[0]

      formatedWeek.push(lessonsThisDay ? lessonsThisDay[1] : null)
    })
    formatedNextLessons.push(formatedWeek)
  })
  
  return formatedNextLessons
}

export default function LessonChange({ student }) {
  const [nextWeeks, setNextWeeks] = React.useState(3)
  const nextLessons = React.useMemo(() => generateNextLessons(student.lessons, nextWeeks), [nextWeeks])

  return (
    <WrapperStyled>
      {week.map((day, key) =>
        <DayStyled key={key}>{day}</DayStyled>
      )}

      {nextLessons.map(week => {
        return week.map((day, dayKey) => {
          if (!day) return <DayStyled key={dayKey} />

          const fromDate = new Date(day.date)
          const toDate = new Date(day.date)
          const fromHours = fromDate.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
          const fromMinutes = fromDate.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
          const toHours = toDate.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
          const toMinutes = toDate.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

          return <LessonStyled key={day.id} onClick={() => console.log(day.id, fromDate)} >{`${fromHours}:${fromMinutes} - ${toHours}:${toMinutes}`}</LessonStyled>
        })}
      )}
    </WrapperStyled>
  )
}
