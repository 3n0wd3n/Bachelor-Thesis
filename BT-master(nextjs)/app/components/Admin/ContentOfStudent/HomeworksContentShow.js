import React from 'react'
import { FaTrash, FaRegEdit } from 'react-icons/fa'
import { HomeworksContentShowTitleItem, HomeworksContentShowMainContainer, HomeworksContentShowContainer, HomeworksContentShowContentItem } from './HomeworksContentShow.style'

export default function HomeworksContentShow({ student }) {
    return (
        <HomeworksContentShowMainContainer>
            {
                // console.log(student)
                student.homeworks.map((homework) => {
                    console.log("Index", homework.indexOf("-"), "string", homework.slice(homework.indexOf("-")));
                    return <>
                        <HomeworksContentShowContainer>
                            <HomeworksContentShowTitleItem>{homework.slice(0, homework.indexOf("-"))} - </HomeworksContentShowTitleItem>
                            <HomeworksContentShowContentItem>{homework.slice(homework.indexOf("-") + 1, -1)}</HomeworksContentShowContentItem>
                            <FaTrash/>
                        </HomeworksContentShowContainer>
                    </>
                })
            }
            <FaRegEdit/>
        </HomeworksContentShowMainContainer>
    )
}