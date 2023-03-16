import styled from 'styled-components'

import { Colors } from '../../../utils/Colors'
import { FontsHeaderBold, FontsThin, FontsBold, CommonDisplayFlexColumn, CommonDisplayFlexRow, CommonDisplayFlex } from '../../CommonStyles'

export const DropDown = styled(CommonDisplayFlexColumn)`
    width: 100%;
`;

export const StudentInfoContainerOne = styled(CommonDisplayFlexColumn)`
    align-items: flex-start;
    margin: 0em 0 0em 1em;
`;

export const StudentInfoContainerTwo = styled(CommonDisplayFlexColumn)`
    align-items: flex-start;
    margin: 1em 0em 1em 0;
    @media (max-width: 1000px) {
      /* we write media query into constants */
      margin: 1em 0 1em 1em;
    }
`;

export const StudentAttributes = styled.div`
    
`;

export const PlanAttributes = styled.div`
    position: relative;
    background-color: white;
    border: 1px solid ${Colors.beige};
    border-radius: 12px;
    display: flex;
    padding: 4px 15px 4px 6px;

    input {
        width: fit-content;
    }
`;

export const StudentKeyAttribute = styled.span`
    font-family: 'Raleway', sans-serif;
    text-shadow: -1px 1px 1px rgba(0, 0, 0, 0.08);
    font-size: .8rem;
    font-weight: 900;
    margin: 0em 0 0.5em 0.5em;
`;

export const StudentPlanAttribute = styled(StudentKeyAttribute)`
    margin: 1em 0 0.5em 0.5em;
`;

export const StudentValueAttribute = styled.span`
    font-family: 'Raleway', sans-serif;
    text-shadow: -1px 1px 1px rgba(0, 0, 0, 0.08);
    font-size: .8rem;
    font-weight: 300;
    padding: 0.3em;
    margin: 0em 0 0.5em 0.5em;
`;

export const StudentPlanContent = styled(CommonDisplayFlexRow)`
    padding-left: 8px;
    gap: 2px;

    & > *:nth-child(odd) {
        margin-left: 4px;
    }
`;

export const StudentPlanValues = styled(CommonDisplayFlexRow)`
    flex-direction: column;
    align-items: flex-start;
`;

export const StudentPlansValues = styled(CommonDisplayFlexRow)`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 4px;
`;

export const StudentEditContainer = styled.div`
    display: flex;
    cursor: pointer;
    transition: 0.7s;
    & > svg {
        background: ${Colors.creameWhite};
        color: ${Colors.lightGreen};
        font-size: 1.5em;
    }

    &:hover {
        filter: opacity(.6)
    }
`;

export const StudentKeyInputAttribute = styled.input`
    font-family: 'Raleway', sans-serif;
    margin: 0 0 0.5em 0.3em;
    padding: 0.3em;
    border-radius: 10px;
    border: ${({editable}) => editable? '1px solid rgba(155, 155, 155, 0.05)' : 'None'};
    box-shadow: ${({editable}) => editable? '-3px 3px 5px rgba(155, 155, 155, 0.15)' : 'None'};
    background-color: ${({ editable }) => editable ? Colors.lightGray : 'transparent'};
`;

export const StudentKeyInputAttributePlan = styled.input`
    background-color: ${({ editable }) => editable ? Colors.lightGray : 'transparent'};
`;

export const StudentCheckInputAttribute = styled(StudentEditContainer)`
    right: 28px;
`;

export const StudentEditAttributes = styled.div`
    position: relative;
    font-size: 0.6rem;
    cursor: pointer;
    transition: 0.7s;
    & > svg {
        background: ${Colors.creameWhite};
        color: ${Colors.lightGreen};
        font-size: 1.5em
    }

    &:hover {
        filter: opacity(.6)
    }
`;

export const StudentRemoveAttributes = styled(StudentEditAttributes)`
    & > svg {
        position: absolute;
        color: ${Colors.red};
        right: -9px;
        top: 0;
        font-size: 1.5em;
    }
`;