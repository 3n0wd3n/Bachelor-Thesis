import React from 'react'
import moment from 'moment'
import { FaRegEdit,FaCheck } from 'react-icons/fa'
import { Colors } from '../../../utils/Colors'

import { StudentCheckInputAttribute, StudentKeyInputAttribute, StudentEditContainer, StudentPlanContent, StudentPlanValues,StudentInfoContainerOne, StudentInfoContainerTwo, StudentAttributes, StudentKeyAttribute, StudentValueAttribute } from './FilesContent.style'

const constructWeek = (lessons) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const week = {}

    lessons.forEach(lecture => {
        const dayIndex = new Date(lecture.date).getDay() === 0 ? days.length - 1 : new Date(lecture.date).getDay() - 1
        const day = days[dayIndex]

        if (week[day]) week[day].push(lecture)
        else week[day] = [lecture]
    })

    return Object.entries(week).reverse()
}

export default function FilesContent({ student }) {
    const lessons = React.useMemo(() => constructWeek(student.lessons), [student])
    const [edit, setEdit] = React.useState(false)
    const nameRef = React.useRef(null)
    const surnameRef = React.useRef(null)



    return (
        <>
            <StudentInfoContainerOne>
                <StudentAttributes>
                    <StudentKeyAttribute>name: </StudentKeyAttribute>
                    <StudentKeyInputAttribute ref={nameRef} defaultValue={student.firstName} disabled={!edit} readOnly={!edit} editable={edit} />
                </StudentAttributes>
                <StudentAttributes>
                    <StudentKeyAttribute>surname: </StudentKeyAttribute>
                    <StudentKeyInputAttribute ref={surnameRef} defaultValue={student.lastName} disabled={!edit} readOnly={!edit} editable={edit} />
                </StudentAttributes>
                <StudentAttributes>
                    <StudentKeyAttribute>total count of lessons: </StudentKeyAttribute>
                    <StudentValueAttribute>{student.lessons.length}</StudentValueAttribute>
                </StudentAttributes>
                <StudentPlanValues>
                    <StudentKeyAttribute>plan: </StudentKeyAttribute>
                    {student.plan.map((value, key) =>
                        <StudentAttributes key={key}>
                            <StudentValueAttribute>{value}</StudentValueAttribute>
                        </StudentAttributes>
                    )}
                </StudentPlanValues>
            </StudentInfoContainerOne>
            <StudentInfoContainerTwo>
                {lessons.map((lesson, key) =>
                    <div key={key}>
                        <StudentValueAttribute>{lesson[0]}</StudentValueAttribute>
                        {lesson[1].map((day, key) =>
                            <StudentPlanContent>
                                <StudentKeyAttribute>from: </StudentKeyAttribute><StudentValueAttribute>{`${moment(day.date).format('HH:mm')}`}</StudentValueAttribute>
                                <StudentKeyAttribute>to: </StudentKeyAttribute><StudentValueAttribute>{`${moment(day.endDate).format('HH:mm')}`}</StudentValueAttribute>
                            </StudentPlanContent>
                        )}
                    </div>
                )}
            </StudentInfoContainerTwo>
            <StudentEditContainer onClick={() => setEdit(prevState => !prevState)}><FaRegEdit></FaRegEdit></StudentEditContainer>
            {
            edit &&
                <StudentCheckInputAttribute><FaCheck></FaCheck></StudentCheckInputAttribute>
            }
        </>
    )
}
