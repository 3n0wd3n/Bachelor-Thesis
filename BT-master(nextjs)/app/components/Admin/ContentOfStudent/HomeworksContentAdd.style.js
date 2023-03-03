import styled from 'styled-components'
import { FontsHeaderBold, FontsThin, FontsBold, CommonDisplayFlexColumn, CommonDisplayFlexRow, CommonDisplayFlex } from '../../CommonStyles'
import { Colors } from '../../../utils/Colors'

// ``;

export const HomeworksContentAddForm = styled.form`
    display: flex;
    margin: 1em 0 0 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    & > svg {
        color: ${Colors.lightGreen};
        margin: 1em 0 0 0;
        font-size: 1.8em;
        cursor: pointer;
    }
`;

export const HomeworksContentAddContainer = styled(CommonDisplayFlexColumn)`
    width: 100%;
    margin: 0 0 1em 0;
`;

export const HomeworksContentAddLabel = styled.label`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 1rem;

`;

export const HomeworksContentAddInput = styled.input`
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    width: 50%;
    height: 40px;
    padding: 0 0 0 1em;
    border-radius: 12px;
    box-shadow: 4px 4px 7px rgba(155, 155, 155, 0.35);
    opacity: 0.7;
`;


