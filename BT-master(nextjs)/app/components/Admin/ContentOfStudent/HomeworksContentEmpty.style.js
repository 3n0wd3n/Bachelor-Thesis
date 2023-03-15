import styled from 'styled-components'
import { FontsHeaderBold, FontsThin, FontsBold, CommonDisplayFlexColumn, CommonDisplayFlexRow, CommonDisplayFlex } from '../../CommonStyles'
import { Colors } from '../../../utils/Colors'

export const HomeworksContentEmptyPhrase = styled.span`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    color: ${Colors.blue};
    font-size: 1.5rem;
`;

export const HomeworksContentContainer = styled(CommonDisplayFlexColumn)`
    width: 100%;
    margin: 1em 0 1em 0;
    & > svg {
        color: ${Colors.darkGray};
        margin: 1em 0 0 0;
        font-size: 1.8em;
    }
`;

export const HomeworksContentMainContainer = styled(CommonDisplayFlexColumn)`
    width: 100%;
    align-items: flex-end;
    & > svg {
        color: ${Colors.lightGreen};
        font-size: 1.5em;
        cursor: pointer
    }
`;