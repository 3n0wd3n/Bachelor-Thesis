import styled from 'styled-components'
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'

// little help ->  ``; 
// StudentIP = StudentInfoPanel

export const StudentIPFontsHeaderBold = styled(FontsHeaderBold)`
  font-size: 1.8rem;
`;

export const StudentIPFontsThin = styled(FontsThin)`
  font-size: 1.8rem;
`;

export const StudentIPButtonFontsBold = styled(FontsBold)`
  font-size: 1.2rem;
  color: white;
`;

export const StudentIPItemContainer = styled.div`
  margin: 0 0 2em 0;
  padding: 0 0 2em 2em;
  border-bottom: 1px solid black;
`;

export const StudentIPContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  min-height: 100vh;
  margin-left: 2em;
  margin-top: 2em;
`; 

export const StudentIPButton = styled.button`
  border: 1px solid white;
  cursor: pointer;
  border-radius: 30px;
  background-color: #E8986B;
  margin: 0 2em 2em 2em;
  padding: 1.2em 0 1.2em 0;
  transition: 0.7s;
  :hover{
    background-color: rgba(232, 152, 107, 0.7);
  }
`