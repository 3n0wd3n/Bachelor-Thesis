import React from 'react'
import axios from 'axios'
import { FaTrash, FaCheck, FaRegEdit } from 'react-icons/fa'
import { HomeworksContentShowContentEditContainer, HomeworksContentShowTitleItem, HomeworksContentShowMainContainer, HomeworksContentShowContainer, HomeworksContentShowContentItem } from './HomeworksContentShow.style'
import HomeworksContentEmpty from './HomeworksContentEmpty'
import HomeworksContentAdd from './HomeworksContentAdd'

export default function HomeworksContent({ student, setData }) {
    const [edit, setEdit] = React.useState(false)

    // async function removeItem(index){
    //     console.log(index)
    //     const changedHomeworks = student.homeworks

    //     await axios('http://localhost:3000/api/user.change', {
    //         method: 'DELETE',
    //         data: {
    //             changedHomeworks
    //         }
    //     })
    // }

    return (
        <>
            {edit
                ?
                <HomeworksContentAdd student={student} setEdit={setEdit} setData={setData}/>
                :
                <>
                    {student.homeworks.length > 0 ? 
                        student.homeworks.map((homework, index) => {
                            return (
                                <HomeworksContentShowContainer key={index}>
                                    <HomeworksContentShowTitleItem>{homework.slice(0, homework.indexOf("-"))} - </HomeworksContentShowTitleItem>
                                    <HomeworksContentShowContentItem>{homework.slice(homework.indexOf("-") + 1, -1)}</HomeworksContentShowContentItem>
                                    <FaTrash onClick={() => removeItem(index)}/>
                                </HomeworksContentShowContainer>
                            )
                        })
                    :
                    <HomeworksContentEmpty setData={setData}></HomeworksContentEmpty>}
                </>                
            }
            <HomeworksContentShowContentEditContainer onClick={() => setEdit(prevState => !prevState)} >
                <FaRegEdit/>
            </HomeworksContentShowContentEditContainer>
        </>
    )
}
