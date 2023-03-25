import styled from 'styled-components'
import { Colors } from '../../../utils/Colors'
import { FontsHeaderBold, FontsThin, FontsBold, CommonDisplayFlexColumn, CommonDisplayFlexRow, CommonDisplayFlex } from '../../CommonStyles'

// export const <name> = styled.div`

// `;

export const SummaryContentContainer = styled(CommonDisplayFlexColumn)`
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

// export const SummaryContentAddContainer = styled(SummaryContentContainer)`
//     min-height: 100%;
//     margin: 1em 0 0 0;
// `;

export const SummaryContentItemContainer = styled(SummaryContentContainer)`
    min-height: 100%;
    width: 100%;
    align-items: flex-start;
    /* margin: 0 2rem 0 2rem; */
`;

export const SummaryContentItem = styled.span`

`;

export const SummaryContentChooseFile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SummaryContentInput = styled.input.attrs({
    type: 'text'
  })`
    font-family: 'Raleway', sans-serif;
    font-size: .8rem;
    font-weight: 300;
    margin: 1em 0 0 1em;
    color: ${Colors.lightGreen};
    background-color: ${Colors.darkGray};
    border-radius: 2px;
    padding: .5em 0 .5em .5em;
  `;

export const SummaryContentUploadButton = styled.div`
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

export const SummaryContentAddButtonContainer = styled.div`
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

export const SummaryContentBackButtonContainer = styled.div`
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


export const SummaryContentAddForm = styled.div`
    display: flex;
    margin: 1em 0 0 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    & > svg {
        color: ${Colors.lightGreen};
        margin: 1em 0 1em 0;
        font-size: 1.8em;
        cursor: pointer;
        transition: .7s;
        &:hover{
            transform: scale(1.1);
            opacity: 0.7;
        }
    }
`;

export const SummaryContentBasicContainer = styled(CommonDisplayFlexColumn)`
    width: 30%;
    align-items: flex-start;
    @media (max-width: 1200px) {
        width: 50%;
    }
    @media (max-width: 800px) {
        width: 65%;
    }
`;

export const SummaryContentAddContainer = styled(CommonDisplayFlexColumn)`
    width: 100%;
    margin: 0 0 1em 0;
`;

export const SummaryContentAddLabel = styled.label`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 1rem;

`;

export const SummaryContentAddInput = styled.input`
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    width: 100%;
    height: 40px;
    padding: 0 0 0 1em;
    border-radius: 12px;
    box-shadow: 4px 4px 7px rgba(155, 155, 155, 0.35);
    opacity: 0.7;
`;

export const SummaryContentItemWrapper = styled.div`
`;

export const SummaryContentIconWrapper = styled.span`
    & > svg {
        color: ${Colors.red};
        margin: 0 0 0 1em;
        font-size: 1em;
        cursor: pointer;
        transition: .7s;
        &:hover{
            transform: scale(1.1);
            opacity: 0.7;
        }
    }
`;




