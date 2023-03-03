import React from 'react'
import { FaCheck } from 'react-icons/fa'
import HomeworksContentEmpty from './HomeworksContentEmpty'
import HomeworksContentShow from './HomeworksContentShow'


export default function HomeworksContent({ student }) {
    return (
        <>
            {console.log(student.homeworks.length)}
            {student.homeworks.length === 0
                ?
                <HomeworksContentEmpty></HomeworksContentEmpty>
                :
                <HomeworksContentShow student={student}></HomeworksContentShow>
            }
        </>
    )
}
