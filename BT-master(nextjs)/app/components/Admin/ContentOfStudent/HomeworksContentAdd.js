import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import { HomeworksContentAddLabel, HomeworksContentAddContainer, HomeworksContentAddForm, HomeworksContentAddInput } from './HomeworksContentAdd.style'

export default function HomeworksContentAdd() {
    return (
        <HomeworksContentAddForm>
            <HomeworksContentAddContainer>
                <HomeworksContentAddLabel >title:</HomeworksContentAddLabel>
                <HomeworksContentAddInput type="text" placeholder='input title'></HomeworksContentAddInput>
            </HomeworksContentAddContainer>
            <HomeworksContentAddContainer>
                <HomeworksContentAddLabel >description:</HomeworksContentAddLabel>
                <HomeworksContentAddInput type="text" placeholder='input description of the homework'></HomeworksContentAddInput>
            </HomeworksContentAddContainer>
            <FaRegCheckCircle/>
        </HomeworksContentAddForm>
    )
}