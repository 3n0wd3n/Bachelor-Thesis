import React from 'react'
import { FaSurprise, FaRegEdit } from 'react-icons/fa'
import { WordlistSVGContainer, WordlistContentURL, WordlistContentURLContainer, WordlistContentContainer, WordlistContentMainContainer, WordlistContentEmptyPhrase } from './WordlistContent.style'

export default function WordlistContent({ student, setData }) {

    return (
        <>
            {
                student.wordList.length == 0
                    ?
                    <>
                        <WordlistContentMainContainer>
                            <WordlistContentContainer>
                                <WordlistContentEmptyPhrase>You have not added any word list!</WordlistContentEmptyPhrase>
                                <FaSurprise />
                            </WordlistContentContainer>
                        </WordlistContentMainContainer>
                        <WordlistSVGContainer>
                            <FaRegEdit />
                        </WordlistSVGContainer>
                    </>
                    :
                    <>
                        <WordlistContentURLContainer>
                            <WordlistContentURL>{student.wordList}</WordlistContentURL>
                        </WordlistContentURLContainer>
                        <WordlistSVGContainer>
                            <FaRegEdit />
                        </WordlistSVGContainer>
                    </>
            }
        </>
    )
}