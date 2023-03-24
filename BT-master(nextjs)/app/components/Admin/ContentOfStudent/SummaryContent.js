import React, { useState } from 'react';
import axios from 'axios'
import { getCookie } from 'cookies-next';
import { FaRegCheckCircle, FaFolderOpen, FaPlusSquare, FaMinusSquare, FaTrash } from 'react-icons/fa'
import { SummaryContentAddInput, SummaryContentAddLabel, SummaryContentAddContainer, SummaryContentBasicContainer, SummaryContentAddForm, SummaryContentBackButtonContainer, SummaryContentAddButtonContainer, SummaryContentUploadButton, SummaryContentInput, SummaryContentChooseFile, SummaryContentItem, SummaryContentItemContainer, SummaryContentContainer } from './SummaryContent.style'

export default function SummaryContent({ setData, student }) {
    const dateRef = React.useRef(null)
    const summaryRef = React.useRef(null)
    const [add, setAdd] = React.useState(false)


    async function createSummary(){
        const id = student.id
        const adminId = getCookie('userCookie')
        const newDate = dateRef.current.value
        const newSummary = summaryRef.current.value
        const compound = (newDate + " - " + newSummary).toString()
        
        await axios('http://localhost:3000/api/student.change', {
            method: 'PUT',
            data: {
                adminId,
                studentId: id,
                compound
            }
        }).then(({ data }) => {
            if (data) setData(data)
            else alert('Change failed.')
        })
    }


    return (
        <>
            {add
                ?
                <>
                    <SummaryContentAddForm>
                        <SummaryContentAddContainer>
                            <SummaryContentBasicContainer>
                                <SummaryContentAddLabel >date:</SummaryContentAddLabel>
                                <SummaryContentAddInput ref={dateRef} type="date"></SummaryContentAddInput>
                            </SummaryContentBasicContainer>
                        </SummaryContentAddContainer>
                        <SummaryContentAddContainer>
                            <SummaryContentBasicContainer>
                                <SummaryContentAddLabel >description:</SummaryContentAddLabel>
                                <SummaryContentAddInput ref={summaryRef} type="text" placeholder='description'></SummaryContentAddInput>
                            </SummaryContentBasicContainer>
                        </SummaryContentAddContainer>
                        <FaRegCheckCircle onClick={() => (createSummary(), setAdd(false))} />
                        
                    </SummaryContentAddForm>
                    <SummaryContentBackButtonContainer onClick={() => setAdd(prevState => !prevState)}>
                        <FaMinusSquare />
                    </SummaryContentBackButtonContainer>
                </>
                :

                // change files for summary
                student.summary.length > 0
                    ?
                    <>
                        <SummaryContentContainer>
                            <SummaryContentItemContainer>
                                <SummaryContentItem>Summaries:</SummaryContentItem>
                                {
                                student.summary.map((summaryItem, idx) =>
                                    <div key={idx}>
                                        {summaryItem}
                                        <FaTrash/>
                                    </div>
                                )
                                }
                            </SummaryContentItemContainer>
                        </SummaryContentContainer>
                        <SummaryContentAddButtonContainer onClick={() => setAdd(prevState => !prevState)}>
                            <FaPlusSquare />
                        </SummaryContentAddButtonContainer>
                    </>
                    :
                    <>
                        <SummaryContentContainer>
                            <p>No summary hasn't been added!</p>
                            <FaFolderOpen />

                        </SummaryContentContainer>
                        <SummaryContentAddButtonContainer onClick={() => setAdd(prevState => !prevState)}>
                            <FaPlusSquare />
                        </SummaryContentAddButtonContainer>
                    </>
            }
        </>
    );
}