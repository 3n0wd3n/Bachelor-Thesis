import styled from 'styled-components'
import { Colors } from '../../../utils/Colors'
import { FontsHeaderBold, FontsThin, FontsBold, CommonDisplayFlexColumn, CommonDisplayFlexRow, CommonDisplayFlex } from '../../CommonStyles'

// export const <name> = styled.div`

// `;

export const FileContentContainer = styled(CommonDisplayFlexColumn)`
    min-height: 100%;
    width: 100%;
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    font-weight: 300;
    & > span {
        font-family: 'Raleway', sans-serif;
        font-size: 1rem;
        font-weight: 900;
    }
    & > svg {
        color: ${Colors.lightGreen};
        font-size: 2em;
    }
    & > p {
        color: ${Colors.blue};
        font-size: 1.5em;
        font-weight: 900;
    }
`;

export const FileContentAddContainer = styled(FileContentContainer)`
    min-height: 100%;
    margin: 1em 0 0 0;
`;

export const FileContentItemContainer = styled(FileContentContainer)`
    min-height: 100%;
    width: 100%;
    align-items: flex-start;
    margin: 0 0 0 2em;
`;

export const FileContentItem = styled.span`

`;

export const FileContentChooseFile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FileContentInput = styled.input.attrs({
    type: 'file',
    default: 'text'
  })`
    font-family: 'Raleway', sans-serif;
    font-size: .8rem;
    font-weight: 300;
    margin: 0 0 0 1em;
    color: ${Colors.lightGreen};
    background-color: ${Colors.darkGray};
    border-radius: 2px;
  `;

export const FileContentUploadButton = styled.div`
    cursor: pointer;
    border-radius: 20px;
    border: 1px solid rgba(155, 155, 155, 0.05);
    box-shadow: -3px 3px 5px rgba(155, 155, 155, 0.15);
    background-color: ${Colors.white};
    margin: 1em 0 0 0;
    padding: .5em .7em .5em .7em;
    transition: 0.6s;
    &:hover{
        color: white;
        background-color: ${Colors.lightGreen};
    }
    @media (max-width: 1000px){
        margin: 1em 0 1em 0;
    }
`;

export const FileContentAddButtonContainer = styled.div`
    & > svg {
        color: ${Colors.lightGreen};
        margin: 1em 0 1em 0;
        font-size: 1.4em;
        cursor: pointer;
        transition: .7s;
        &:hover{
            transform: scale(1.1);
            opacity: 0.7;
        }
    }
`;

export const FileContentBackButtonContainer = styled.div`
    & > svg {
        color: ${Colors.red};
        margin: 1em 0 1em 0;
        font-size: 1.4em;
        cursor: pointer;
        transition: .7s;
        &:hover{
            transform: scale(1.1);
            opacity: 0.7;
        }
    }
`;
