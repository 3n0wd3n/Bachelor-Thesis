import React from 'react'
import moment from 'moment'

import { ContentContainer } from './FilesContent.style'

export default function FilesContent({ student }) {
    return (
        <>
            {student.lessons.map((lesson, key) =>
                <div key={key}>
                    <div>{`day: ${moment(lesson.date).format('DD. MMM Y')}`}</div>
                    <div>{`from: ${new Date(lesson.date).getHours()}:${new Date(lesson.date).getMinutes()}`}</div>
                    <div>{`to: ${new Date(lesson.endDate).getHours()}:${new Date(lesson.endDate).getMinutes()}`}</div>
                </div>
            )}
        </>
    )
}
