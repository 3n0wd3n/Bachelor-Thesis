import React from 'react'
import axios from 'axios'
import { FaTrash, FaCheck, FaRegEdit } from 'react-icons/fa'
import { HomeworksContentShowContentEditContainer, HomeworksContentShowTitleItem, HomeworksContentShowMainContainer, HomeworksContentShowContainer, HomeworksContentShowContentItem } from './HomeworksContentShow.style'
import HomeworksContentEmpty from './HomeworksContentEmpty'
import HomeworksContentAdd from './HomeworksContentAdd'

export default function HomeworksContent({ student, setData }) {
    const [edit, setEdit] = React.useState(false)

    async function removeItem(id){
        console.log("Removeing homework with this ID: ", id)
        // const changedHomeworks = student.homeworks

        // await axios('http://localhost:3000/api/user.change', {
        //     method: 'DELETE',
        //     data: {
        //         changedHomeworks
        //     }
        // })
    }

    return (
        <>
            {edit
                ?
                <HomeworksContentAdd student={student} setEdit={setEdit} setData={setData}/>
                :
                <HomeworksContentShowMainContainer>
                    {console.log("Test", student.homeworks, student.homeworks.length, student.homeworks[0].title)}
                    {student.homeworks.length > 0 ? 
                    // <>Mapování</>
                        student.homeworks.map(homework => 
                            // console.log("aa", homework, student.homeworks)
                            
                            <HomeworksContentShowContainer>
                                <HomeworksContentShowTitleItem>{homework.title} - {homework.description}</HomeworksContentShowTitleItem>                          
                                <FaTrash onClick={() => removeItem(homework.id)}/>
                            </HomeworksContentShowContainer>
                        
                        )
                    :
                    <HomeworksContentEmpty setData={setData}></HomeworksContentEmpty>}
                </HomeworksContentShowMainContainer>                
            }
            <HomeworksContentShowContentEditContainer onClick={() => setEdit(prevState => !prevState)} >
                <FaRegEdit/>
            </HomeworksContentShowContentEditContainer>
        </>
    )
}
