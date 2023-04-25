import React from 'react'
import { FaSurprise } from 'react-icons/fa'
import { HomeworksContentContainer,HomeworksContentMainContainer,HomeworksContentEmptyPhrase } from './HomeworksContentEmpty.style'

export default function HomeworksContentEmpty() {
  return (
    <HomeworksContentMainContainer>
        <HomeworksContentContainer>
            <HomeworksContentEmptyPhrase>{`No homework has been written yet!`}</HomeworksContentEmptyPhrase>
            <FaSurprise/>
        </HomeworksContentContainer>
    </HomeworksContentMainContainer>
  )
}