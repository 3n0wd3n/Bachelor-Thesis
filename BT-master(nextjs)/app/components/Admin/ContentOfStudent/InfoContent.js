import React from 'react'
import moment from 'moment'
import { FaTrash, FaRegEdit, FaCheck, FaPlusCircle, FaMinusCircle } from 'react-icons/fa'
import axios from 'axios'
import { getCookie } from 'cookies-next';

import { StudentKeyRemoveButton, StudentKeyRemoveAttribute, StudentRemoveAttribute, StudentPlanAttribute, StudentKeyInputAttributePlan, StudentPlansValues, PlanAttributes, StudentRemoveAttributes, StudentEditAttributes, StudentCheckInputAttribute, StudentKeyInputAttribute, StudentEditContainer, StudentPlanContent, StudentPlanValues, StudentInfoContainerOne, StudentInfoContainerTwo, StudentAttributes, StudentKeyAttribute, StudentValueAttribute } from './InfoContent.style'

export const constructWeek = (lessons) => {
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

const randomStringGen = () => (Math.random() + 1).toString(36).substring(7)

const arrayEquals = (a, b) => {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

export default function InfoContent({ student, setData }) {
    const lessons = React.useMemo(() => constructWeek(student.lessons), [student])
    const [edit, setEdit] = React.useState(false)
    const [plan, setPlan] = React.useState(student.plan.map(plan => ({ value: plan, key: randomStringGen() })))
    const nameRef = React.useRef(null)
    const surnameRef = React.useRef(null)

    const addArrayAttribute = () => {
        setPlan(prevPlan => [...prevPlan, { value: 'set plan...', key: randomStringGen() }])
    }

    // [
    //     {
    //         value: 'plan1',
    //         key: 'randomString'
    //     },
    //     {
    //         value: 'plan2',
    //         key: 'randomString'
    //     }
    // ]

    const editArrayAttribute = (key, value) => {
        setPlan(prevPlan => {
            const index = prevPlan.findIndex(planValue => planValue.key === key)
            prevPlan[index].value = value
            return prevPlan
        })
    }

    const removeArrayAttribute = (key) => {
        setPlan(prevPlan => prevPlan.filter(planValue => planValue.key !== key))
    }

    const removeStudent = async (studentId) => {
        const id = getCookie('userCookie')
        console.log(studentId)
        await axios('http://localhost:3000/api/user.remove', {
            method: 'DELETE',
            data: {
                adminId: id,
                studentId,
            }
        })
        .then(({ data }) => {
            if (data) setData(data)
            else alert('Change failed.')
        })
    }

    const changeInfo = async () => {
        const changedName = nameRef.current.value
        const changedSurname = surnameRef.current.value
        const id = getCookie('userCookie')
        const studentId = student.id
        const valuePlan = plan.map(plan => plan.value)

        if (changedName === student.firstName && changedSurname === student.lastName && arrayEquals(valuePlan, student.plan)) return

        await axios('http://localhost:3000/api/user.change', {
            method: 'POST',
            data: {
                adminId: id,
                studentId,
                changedName,
                changedSurname,
                plan: valuePlan
            }
        }).then(({ data }) => {
            if (data) setData(data)
            else alert('Change failed.')
        }).finally(() => setEdit(false))
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
                    <StudentKeyAttribute>count of lessons: </StudentKeyAttribute>
                    <StudentValueAttribute>{student.lessons.length}</StudentValueAttribute>
                </StudentAttributes>
                <StudentPlanValues>
                    <StudentPlanAttribute>plan: </StudentPlanAttribute>
                    <StudentPlansValues>
                        {plan.map((value, key) =>
                            <PlanAttributes key={value.key}>
                                <StudentKeyInputAttributePlan onChange={({ target }) => editArrayAttribute(value.key, target.value)} defaultValue={value.value} disabled={!edit} readOnly={!edit} editable={edit} />
                                <StudentRemoveAttributes onClick={() => removeArrayAttribute(value.key)}>
                                    {
                                        edit &&
                                        <FaMinusCircle />
                                    }
                                </StudentRemoveAttributes>
                            </PlanAttributes>
                        )}
                        <StudentEditAttributes onClick={() => addArrayAttribute()}>
                            {
                                edit &&
                                <FaPlusCircle />
                            }
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
                <StudentRemoveAttribute >
                    <StudentKeyRemoveAttribute>disable: </StudentKeyRemoveAttribute>
                    <StudentKeyRemoveButton onClick={() => removeStudent(student.id)}>
                        <FaTrash />
                    </StudentKeyRemoveButton>
                </StudentRemoveAttribute>
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