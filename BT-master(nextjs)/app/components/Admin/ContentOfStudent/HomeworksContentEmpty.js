import React from 'react'
import { FaSurprise } from 'react-icons/fa'
import { HomeworksContentContainer,HomeworksContentMainContainer,HomeworksContentEmptyPhrase } from './HomeworksContentEmpty.style'

export default function HomeworksContentEmpty() {
  return (
    <HomeworksContentMainContainer>
        <HomeworksContentContainer>
            <HomeworksContentEmptyPhrase>You have not written any homework yet !</HomeworksContentEmptyPhrase>
            <FaSurprise/>
        </HomeworksContentContainer>
    </HomeworksContentMainContainer>
  )
}