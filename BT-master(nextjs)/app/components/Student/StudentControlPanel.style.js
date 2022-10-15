import styled from 'styled-components'
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'

// little help ->  ``; 
// StudentCP = StudentControlPanel

export const StudentCPContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15vw;
    min-height: 90vh;
    background-color: lightgreen;
    // transition: 0.7s;
    @media (max-width: 1000px) {
        /* we write media query into constants */
        width: 100%;
        min-height: 20vh;
    }
`;