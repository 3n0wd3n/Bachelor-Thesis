import styled from 'styled-components'
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'

// little help ->  ``; 

export const SimpleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
`;

export const StudentMCContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-flow: column;
    width: 60vw;
    min-height: 100vh;
    /* background-color: #55917F; */
    @media (max-width: 1000px) {
        /* we write media query into constants */
        width: 100%;
        min-height: 70vh;
    }
`;

export const StudentMCNextLesson = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    background-color: #E8D16B;
    border-radius: 25px;
    margin: 1em 1em 1em 1em;
    padding: 4em 0 4em 0;
    box-shadow: -4px 4px 6px rgba(155, 155, 155, 0.35);
`;

export const StudentMCFontsDate = styled(FontsHeaderBold)`
    font-size: 3.5rem;
    color: white;
`;

export const StudentMCFontsHomeworks = styled(FontsHeaderBold)`
    font-size: 2.5rem;
    color: black;
    margin-bottom: 0.3em;
`;

export const StudentMCFontsFiles = styled(FontsHeaderBold)`
    font-size: 2.5rem;
    color: white;
    margin-bottom: 0.3em;
`;

export const StudentMCFontsWordList = styled(FontsHeaderBold)`
    font-size: 2.5rem;
    color: white;
    margin-bottom: 0.3em;
`;

export const StudentMCFontsBold = styled(FontsBold)`
    font-size: 1.5rem;
    color: white;
    text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const StudentMCFontsHomeworksItem = styled(FontsThin)`
    font-size: 1.1rem;
    color: black;
    text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.25);
    margin: 0em 1.5em 0.3em 1.5em;
`;

export const StudentMCFontsSectionItems = styled(FontsThin)`
    font-size: 1.1rem;
    color: white; 
    text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.25);  
`;

export const StudentMCHomeworks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    background-color: white;
    border-radius: 25px;
    margin: 0em 1em 1em 1em;
    padding: 1em 0 1em 0;
    box-shadow: -4px 4px 6px rgba(155, 155, 155, 0.25);
`;

export const StudentMCFiles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    background-color: #61C9A8;
    border-radius: 25px;
    margin: 0em 1em 1em 1em;
    padding: 1.5em 0em 1.5em 0em;
    box-shadow: -4px 4px 6px rgba(155, 155, 155, 0.5);
`;

export const StudentMCWordList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    background-color: #61B6C9;
    border-radius: 25px;
    padding: 1em 2em 1.5em 2em;
    margin: 0em 1em 1em 1em;
    box-shadow: -4px 4px 6px rgba(155, 155, 155, 0.5);
`;

export const StudentMCFilesItems = styled.div`
    display: flex;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
    margin: 0em 5em 0em 5em;
`;

export const SimpleDiv = styled.div`

`;
