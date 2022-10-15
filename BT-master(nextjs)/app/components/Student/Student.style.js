import styled from 'styled-components'
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'

// little help ->  ``; 

export const StudentContainer = styled.div`
  display: flex;
  flex-flow: row;
  transition: 0.7s;
  @media (max-width: 1000px) {
      /* we write media query into constants */
      flex-flow: column;
      justify-content: center;
      align-items: center;
  }
`;
