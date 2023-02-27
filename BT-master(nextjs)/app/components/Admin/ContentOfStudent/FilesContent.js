import React from 'react'
import moment from 'moment'
import { FaRegEdit, FaCheck, FaPlusCircle, FaMinusCircle } from 'react-icons/fa'
import { Colors } from '../../../utils/Colors'
import axios from 'axios'
import { getCookie } from 'cookies-next';

import { StudentPlansValues, PlanAttributes, StudentRemoveAttributes, StudentEditAttributes, StudentCheckInputAttribute, StudentKeyInputAttribute, StudentEditContainer, StudentPlanContent, StudentPlanValues, StudentInfoContainerOne, StudentInfoContainerTwo, StudentAttributes, StudentKeyAttribute, StudentValueAttribute } from './FilesContent.style'

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

const arrayEquals = (a, b) => {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

export default function FilesContent({ student, setData }) {
    const lessons = React.useMemo(() => constructWeek(student.lessons), [student])
    const [edit, setEdit] = React.useState(false)
    const [plan, setPlan] = React.useState(student.plan)
    const nameRef = React.useRef(null)
    const surnameRef = React.useRef(null)
    const planRef = React.useRef([])

    const addArrayAttribute = () =>{
        setPlan(prevPlan => [...prevPlan, 'set plan...'])
    }

    const removeArrayAttribute = (index) =>{
        // setPlan(prevPlan => prevPlan.splice(index, 1))
    }

    const changeInfo = async () => {
        const changedName = nameRef.current.value
        const changedSurname = surnameRef.current.value
        const id = getCookie('userCookie')
        const studentId = student.id
        const plan = planRef.current.map(el => el.value)

        if (changedName === student.firstName && changedSurname === student.lastName && arrayEquals(plan, student.plan)) return

        await axios('http://localhost:3000/api/user.change', {
            method: 'POST',
            data: {
                id,
                studentId,
                changedName,
                changedSurname,
                plan
            }
        })
            .then(({ data }) => {
                if (data) setData(data)
                else alert('Change failed.')
            })
            .finally(() => setEdit(false))
    }

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
                    <StudentPlansValues>
                        {plan.map((value, key) =>
                            <PlanAttributes key={key}>
                                <StudentKeyInputAttribute ref={el => planRef.current[key] = el} defaultValue={value} disabled={!edit} readOnly={!edit} editable={edit} />
                                <StudentRemoveAttributes onClick={() => removeArrayAttribute(key)}>
                                    <FaMinusCircle />
                                </StudentRemoveAttributes>
                            </PlanAttributes>
                        )}
                        <StudentEditAttributes onClick={() => addArrayAttribute()}>
                            <FaPlusCircle/>
                        </StudentEditAttributes>
                    </ StudentPlansValues>
                </StudentPlanValues>
            </StudentInfoContainerOne>
            <StudentInfoContainerTwo>
                {lessons.map((lesson, key) =>
                    <div key={key}>
                        <StudentValueAttribute>{lesson[0]}</StudentValueAttribute>
                        {lesson[1].map((day, key) =>
                            <StudentPlanContent key={key}>
                                <StudentKeyAttribute>from: </StudentKeyAttribute><StudentValueAttribute>{`${moment(day.date).format('HH:mm')}`}</StudentValueAttribute>
                                <StudentKeyAttribute>to: </StudentKeyAttribute><StudentValueAttribute>{`${moment(day.endDate).format('HH:mm')}`}</StudentValueAttribute>
                            </StudentPlanContent>
                        )}
                    </div>
                )}
            </StudentInfoContainerTwo>
            <StudentEditContainer onClick={() => setEdit(prevState => !prevState)}>
                <FaRegEdit />
            </StudentEditContainer>
            {
                edit &&
                <StudentCheckInputAttribute onClick={() => changeInfo()}>
                    <FaCheck />
                </StudentCheckInputAttribute>
            }
        </>
    )
}
