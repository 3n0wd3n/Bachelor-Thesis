import styled from 'styled-components'

import { Colors } from '../../utils/Colors'
import { CommonDisplayFlexColumn, CommonDisplayFlexRow, CommonDisplayFlex } from '../CommonStyles'


export const StudentSettingMainContainer = styled(CommonDisplayFlexColumn)`
    min-height: 100vh;
    width: 100vw;
    gap: 1em;
`;

export const StudentSettingContainer = styled(CommonDisplayFlexColumn)`
    background-color: ${Colors.beige};
    border-radius: 10px;
    border: 1px solid rgba(155, 155, 155, 0.05);
    box-shadow: -3px 3px 5px rgba(155, 155, 155, 0.15);
    padding: 1em 3em 3em 3em;
    align-items: flex-start;
    & > h1{
        margin: 0 0 .3em 0;
        color: ${Colors.white}
    }
`;

export const StudentSettingAttributesContainer = styled(CommonDisplayFlexRow)`
    gap: 1em;
`;

export const StudentSettingButtonContainer = styled(CommonDisplayFlex)`
    width: 100%;
    margin: 1em 0 0 0;
    justify-content: flex-end;
    & > svg {
        font-size: 1.5rem;
        color: ${Colors.lightGreen};
        transition: .6s;   
        cursor: pointer;
        &:hover {
        filter: opacity(.6)
    }
    }
`;



