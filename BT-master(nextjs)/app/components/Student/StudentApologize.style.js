import styled from 'styled-components'
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'

export const StudentApologizeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  flex-flow: column;
  margin: 5rem 0 0 0;
`;

export const ApologizeTitle = styled(FontsHeaderBold)`
  font-size: 3.5rem;
  @media (max-width: 700px) {
      /* we write media query into constants */
      font-size: 1.7rem;
  }
`;

export const ApologizeLabel = styled(FontsBold)`
  font-size: 2rem;
  @media (max-width: 700px) {
      /* we write media query into constants */
      font-size: 1.7rem;
  }
`;

export const ApologizeInput = styled.input`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  font-size: 1.3rem;
  margin: 0 0 2rem 0; 
  border: 1px solid #D3D0CB;
  padding: .5rem 1rem .5rem 1rem;
  border-radius: 18px;
  transition: 0.7s;
  @media (max-width: 700px) {
      /* we write media query into constants */
      font-size: 1rem;
  }
  :hover{
      border-color: #61C9A8;
    }
`;

export const ApologizeForm = styled.form`
    display: flex;
    flex-flow: column;
    margin: 3rem 0 0 0;
`;

export const ApologizeSendButton = styled.button`
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: black;
    background-color: #F0F0F0;
    border-radius: 25px;
    padding: 1rem 4rem 1rem 4rem;
    margin: 0 0 3rem 0;
    transition: 0.7s;
    :hover{
        color: white;
        background-color: #61C9A8;
    }
`;

export const ApologizeBackButton = styled(ApologizeSendButton)`
    :hover{
        background-color: #E8986B;
    }
`;