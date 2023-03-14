import React from 'react'
import { FaSurprise } from 'react-icons/fa'
import { WordlistContentContainer,WordlistContentMainContainer,WordlistContentEmptyPhrase } from './WordlistContent.style'

export default function WordlistContent({ student, setData }) {

    return (
        <>
            {
                student.wordList.length == 0
                    ?
                    <WordlistContentMainContainer>
                        <WordlistContentContainer>
                            <WordlistContentEmptyPhrase>You have not written any homework yes !</WordlistContentEmptyPhrase>
                            <FaSurprise />
                        </WordlistContentContainer>
                    </WordlistContentMainContainer>
                    :
                    <p>{student.wordList}</p>
            }
        </>
    )
}