import React, { useState } from 'react';
import { FaRegCheckCircle, FaFolderOpen, FaPlusSquare, FaMinusSquare } from 'react-icons/fa'
import { SummaryContentAddInput, SummaryContentAddLabel, SummaryContentAddContainer, SummaryContentBasicContainer, SummaryContentAddForm, SummaryContentBackButtonContainer, SummaryContentAddButtonContainer, SummaryContentUploadButton, SummaryContentInput, SummaryContentChooseFile, SummaryContentItem, SummaryContentItemContainer, SummaryContentContainer } from './SummaryContent.style'

export default function SummaryContent({ setData, student }) {
    const dateRef = React.useRef(null)
    const summaryRef = React.useRef(null)
    const [add, setAdd] = React.useState(false)

    function createSummary(){
        console.log(dateRef.current.value, summaryRef.current.value)
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
                student.files.length > 0
                    ?
                    <>
                        <SummaryContentContainer>
                            <SummaryContentItemContainer>
                                <SummaryContentItem>Summaries:</SummaryContentItem>
                                {/* test */}
                                {/* {student.files[0]} */}
                                <>2023-03-24 - present simple exercise and reading article</>
                                <br />
                                <>2023-03-27 - recap of lection and testing knowledge</>
                                {/* {student.files[1]} */}
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