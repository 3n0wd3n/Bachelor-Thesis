import styled from 'styled-components'
import { FontsHeaderBold, FontsThin, FontsBold, CommonDisplayFlexColumn, CommonDisplayFlexRow, CommonDisplayFlex } from '../../CommonStyles'
import { Colors } from '../../../utils/Colors'

export const WordlistContentURL = styled.p``;

export const WordlistContentURLContainer = styled(CommonDisplayFlex)`
    height: 100%;
    width: 100%;
    > ${WordlistContentURL} {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        margin-top: 1em;
        cursor: pointer;
    }
`;

export const WordlistContentEmptyPhrase = styled.span`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    color: ${Colors.blue};
    font-size: 1.5rem;
`;

export const WordlistContentContainer = styled(CommonDisplayFlexColumn)`
    width: 100%;
    margin: 1em 0 1em 0;
    & > svg {
        color: ${Colors.darkGray};
        margin: 1em 0 0 0;
        font-size: 1.8em;
    }
`;

export const WordlistContentMainContainer = styled(CommonDisplayFlexColumn)`
    width: 100%;
    align-items: flex-end;
    & > svg {
        color: ${Colors.lightGreen};
        font-size: 1.5em;
        cursor: pointer;
    }
`;