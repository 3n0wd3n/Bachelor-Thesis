import React from 'react'
import { FaTrash, FaRegEdit } from 'react-icons/fa'
import { HomeworksContentShowContentEditContainer, HomeworksContentShowTitleItem, HomeworksContentShowMainContainer, HomeworksContentShowContainer, HomeworksContentShowContentItem } from './HomeworksContentShow.style'
import HomeworksContentAdd from './HomeworksContentAdd'

export default function HomeworksContentShow({ student }) {
    const [edit, setEdit] = React.useState(false)
    return (
        <HomeworksContentShowMainContainer>

            {
                edit
                ?
                <HomeworksContentAdd></HomeworksContentAdd>
                :
                // console.log(student)
                student.homeworks.map((homework) => {
                    console.log("Index", homework.indexOf("-"), "string", homework.slice(homework.indexOf("-")));
                    return <>
                        <HomeworksContentShowContainer>
                            <HomeworksContentShowTitleItem>{homework.slice(0, homework.indexOf("-"))} - </HomeworksContentShowTitleItem>
                            <HomeworksContentShowContentItem>{homework.slice(homework.indexOf("-") + 1, -1)}</HomeworksContentShowContentItem>
                            <FaTrash />
                        </HomeworksContentShowContainer>
                    </>
                })
            }
            <HomeworksContentShowContentEditContainer onClick={() => setEdit(prevState => !prevState)} >
                <FaRegEdit/>
            </HomeworksContentShowContentEditContainer>
        </HomeworksContentShowMainContainer >
    )
}