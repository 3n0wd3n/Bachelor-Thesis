import React from 'react'
import moment from 'moment'
import { WrapperStyled, DateStyled, CalendarContentWrapperStyled, DatesWrapperStyled, SaveButton, GoBackButton, LessonTimeWrapper, WeekWrapperStyled, WeekInputStyled, WeekPlaceholderStyled, CalendarWrapperStyled, DayStyled, LessonStyled } from './LessonChange.style'
import { AdminLessonTimeInput } from '../AdminAddPage.style'
import { constructWeek } from './FilesContent';

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const generateNextLessons = (lessons, weeks) => {
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

  const formattedNextLessons = []

  nextLessons.map(weekLessons => {
    const formattedWeek = []
    week.map(day => {
      const dayIndex = week.indexOf(day)
      const lessonsThisDay = weekLessons.filter(dayLesson => dayLesson[0] === dayIndex)[0]

      formattedWeek.push(lessonsThisDay ? lessonsThisDay[1] : null)
    })
    formattedNextLessons.push(formattedWeek)
  })
  
  return formattedNextLessons
}

const getMonday = (d) => {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

const generateDates = (weeks) => {
  const dates = []
  let nextDate = getMonday(new Date())

  while (dates.length < weeks) {
    dates.push(nextDate)

    nextDate = addDays(nextDate, 7)
  }

  return dates
}

export default function LessonChange({ student }) {
  const [nextWeeks, setNextWeeks] = React.useState(3)
  const [selectedDay, setSelectedDay] = React.useState(null)
  const nextLessons = React.useMemo(() => generateNextLessons(student.lessons, nextWeeks), [nextWeeks])
  const dates = React.useMemo(() => generateDates(nextWeeks), [nextWeeks])

  if (selectedDay) {
    const saveTimeChange = () => {

    }

    return (
      <>
        <GoBackButton onClick={() => setSelectedDay(null)}>Go back</GoBackButton>
        <LessonTimeWrapper type="date" value={selectedDay.selectedDate} readOnly />
        <AdminLessonTimeInput type="time"
          // ref={(el) => lessonRefs.current[index] = { from: el, day: lessonRefs.current[index]?.day, to: lessonRefs.current[index]?.to }}
          defaultValue={selectedDay.fromTime}
        />
        <AdminLessonTimeInput type="time"
          defaultValue={selectedDay.toTime}
          // ref={(el) => lessonRefs.current[index] = { to: el, from: lessonRefs.current[index]?.from, day: lessonRefs.current[index]?.day }}
          // onChange={({ target }) => {
          //   const from = lessonRefs.current[index]?.from.value;
          //   const fromHour = Number(from.split(':')[0]) || 0
          //   const fromMinute = Number(from.split(':')[1]) || 0
          //   const toHour = Number(target.value.split(':')[0]) || 0
          //   const toMinute = Number(target.value.split(':')[1]) || 0

          //   if (!from || (fromHour >= toHour || (fromHour > toHour && fromMinute >= toMinute) || (fromHour + 1 === toHour && fromMinute > toMinute))) target.value = '';
          // }}
        />
        <SaveButton onClick={() => saveTimeChange()}>Save</SaveButton>
      </>
    )
  }

  return (
    <WrapperStyled>
      <WeekWrapperStyled>
        <WeekPlaceholderStyled>Select how many weeks to show:</WeekPlaceholderStyled>
        <WeekInputStyled value={nextWeeks} onChange={({ target }) => (target.value > 0 && setNextWeeks(target.value))} type='number' />
      </WeekWrapperStyled>

      <CalendarContentWrapperStyled>
        <DatesWrapperStyled>
          <DayStyled>Dates</DayStyled>
          {dates.map((date, key) =>
            <DateStyled key={key}>{`${moment(date).format('DD.M.')} - ${moment(addDays(date, 6)).format('DD.M.')}`}</DateStyled>
          )}
        </DatesWrapperStyled>
        <CalendarWrapperStyled>
          {week.map((day, key) =>
            <DayStyled key={key}>{day}</DayStyled>
          )}

          {nextLessons.map(week => {
            return week.map((day, dayKey) => {
              if (!day) return <DayStyled key={dayKey} />

              const fromDate = new Date(day.date)
              const toDate = new Date(day.endDate)
              const fromHours = fromDate.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
              const fromMinutes = fromDate.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
              const toHours = toDate.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
              const toMinutes = toDate.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

              const formattedDay = { ...day, selectedDate: moment(day.date).format('YYYY-MM-DD') ,fromTime: `${fromHours}:${fromMinutes}`, toTime: `${toHours}:${toMinutes}` }

              return <LessonStyled key={day.id} onClick={() => setSelectedDay(formattedDay)} >{`${fromHours}:${fromMinutes} - ${toHours}:${toMinutes}`}</LessonStyled>
            })}
          )}
        </CalendarWrapperStyled>
      </CalendarContentWrapperStyled>
    </WrapperStyled>
  )
}
