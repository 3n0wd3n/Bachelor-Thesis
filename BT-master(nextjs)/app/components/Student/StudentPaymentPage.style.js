import styled from 'styled-components'
import { CommonDisplayFlexColumn } from '../CommonStyles'
import { SettingsBackButton } from './StudentSettingsPage.style'

// little help ->  ``; 

export const StudentPaymentMainContainer = styled(CommonDisplayFlexColumn)`
    height: 100vh;
`;

export const StudentPaymentContainer = styled(CommonDisplayFlexColumn)`
    height: 20%;
    align-items: flex-start;
`;

export const StudentBackButton = styled(SettingsBackButton)``;
