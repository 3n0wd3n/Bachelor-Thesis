import React from 'react'
import axios from 'axios'
import { getCookie } from 'cookies-next';
import { FaTrash, FaRegEdit } from 'react-icons/fa'
import { HomeworksContentShowContentEditContainer, HomeworksContentShowTitleItem, HomeworksContentShowMainContainer, HomeworksContentShowContainer, HomeworksContentShowContentItem } from './HomeworksContentShow.style'
import HomeworksContentEmpty from './HomeworksContentEmpty'
import HomeworksContentAdd from './HomeworksContentAdd'

export default function HomeworksContent({ student, setData }) {
    const [edit, setEdit] = React.useState(false)
    const id = getCookie('userCookie')
    const studentId = student.id

    async function removeItem(homeworkId) {
        console.log("Removing homework with this ID: ", id)

        await axios('http://localhost:3000/api/user.change', {
            method: 'DELETE',
            data: {
                adminId: id,
                studentId,
                homeworkId,
            }
        }).then(({ data }) => {
            if (data) setData(data)
            else alert('Change failed.')
    })
    }

    return (
        <>
            {edit
                ?
                <HomeworksContentAdd student={student} setEdit={setEdit} setData={setData} />
                :
                <HomeworksContentShowMainContainer>
                    {student.homeworks.length > 0 
                        ?
                        student.homeworks.map(homework =>
                            <HomeworksContentShowContainer key={homework.id}>
                                <HomeworksContentShowTitleItem>{homework.title} - {homework.description}</HomeworksContentShowTitleItem>
                                <FaTrash onClick={() => removeItem(homework.id)} />
                            </HomeworksContentShowContainer>
                        )
                        :
                        <HomeworksContentEmpty setData={setData}></HomeworksContentEmpty>}
                </HomeworksContentShowMainContainer>
            }
            <HomeworksContentShowContentEditContainer onClick={() => setEdit(prevState => !prevState)} >
                <FaRegEdit />
            </HomeworksContentShowContentEditContainer>
        </>
    )
}
