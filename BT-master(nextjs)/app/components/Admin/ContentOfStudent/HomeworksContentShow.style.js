import styled from 'styled-components'
import { FontsHeaderBold, FontsThin, FontsBold, CommonDisplayFlexColumn, CommonDisplayFlexRow, CommonDisplayFlex } from '../../CommonStyles'
import { Colors } from '../../../utils/Colors'

export const HomeworksContentShowMainContainer = styled(CommonDisplayFlexColumn)`
    width: 100%;
    align-items: flex-end;
    margin: 1em 0em 0em 1em;
`;

export const HomeworksContentShowContainer = styled(CommonDisplayFlexRow)`
    width: 100%;
    justify-content: flex-start;
    margin: 0em 0em 1em 0em;
    & > svg {
        color: ${Colors.red};
        font-size: 1em;
        cursor: pointer;
        margin: 0em 0em 0em 1em;
    }
`;

export const HomeworksContentShowTitleItem = styled.span`
    font-family: 'Raleway', sans-serif;
    font-size: .9rem;
    font-weight: 900;
`;

export const HomeworksContentShowContentItem = styled.span`
    font-family: 'Raleway', sans-serif;
    font-size: .9rem;
    font-weight: 400;
    margin: 0 .5em 0 0;
`;

export const HomeworksContentShowContentEditContainer = styled.div`
    & > svg {
            color: ${Colors.lightGreen};
            font-size: 1.5em;
            cursor: pointer;
        }
`;