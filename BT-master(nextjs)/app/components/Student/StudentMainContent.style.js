import styled from 'styled-components'
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'

// little help ->  ``; 

export const StudentMCContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60vw;
    min-height: 90vh;
    background-color: lightblue;
    @media (max-width: 1000px) {
        /* we write media query into constants */
        width: 100%;
    }
`;