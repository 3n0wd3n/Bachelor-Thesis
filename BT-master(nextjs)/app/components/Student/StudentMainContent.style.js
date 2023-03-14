import styled from 'styled-components'
import { Colors } from '../../utils/Colors'
import { FontsHeaderBold, FontsThin, FontsBold, CommonDisplayFlexColumn, CommonDisplayFlex } from '../CommonStyles'

// little help ->  ``; 

export const SimpleContainer = styled(CommonDisplayFlexColumn)`
    /* nothing to do here */
`;

export const StudentMCContainer = styled(CommonDisplayFlexColumn)`
    justify-content: flex-start;
    align-items: stretch;
    width: 60vw;
    min-height: 100vh;
    /* background-color: #55917F; */
    @media (max-width: 1000px) {
        /* we write media query into constants */
        width: 100%;
        min-height: 70vh;
    }
`;

export const StudentMCNextLesson = styled(CommonDisplayFlexColumn)`
    background-color: ${Colors.yellow};
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
    margin: 0em 0.7em 0.5em 0em;
`;

export const StudentMCFontsSectionItems = styled(FontsThin)`
    font-size: 1.1rem;
    color: white; 
    text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.25);  
`;

export const StudentMCHomeworks = styled(CommonDisplayFlexColumn)`
    background-color: white;
    border-radius: 25px;
    margin: 0em 1em 1em 1em;
    padding: 1em 2em 1em 2em;
    box-shadow: -4px 4px 6px rgba(155, 155, 155, 0.25);
`;

export const StudentMCFiles = styled(CommonDisplayFlexColumn)`
    background-color: ${Colors.lightGreen};
    border-radius: 25px;
    margin: 0em 1em 1em 1em;
    padding: 1.5em 0em 1.5em 0em;
    box-shadow: -4px 4px 6px rgba(155, 155, 155, 0.5);
`;

export const StudentMCWordList = styled(CommonDisplayFlexColumn)`
    background-color: ${Colors.blue};
    border-radius: 25px;
    padding: 1em 2em 1.5em 2em;
    margin: 0em 1em 1em 1em;
    box-shadow: -4px 4px 6px rgba(155, 155, 155, 0.5);
`;

export const StudentMCFilesItems = styled(CommonDisplayFlex)`
    align-content: flex-start;
    flex-wrap: wrap;
    margin: 0em 5em 0em 5em;
`;

export const SimpleDiv = styled.div`
    // nothing yet
`;

export const StudentListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    > input{
        cursor: pointer;
        margin: 0 0 0 1em;
    }
    > p+p {
        font-weight: 400;
    }
`;

export const StudentUnorderedList = styled.ul`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
`;


