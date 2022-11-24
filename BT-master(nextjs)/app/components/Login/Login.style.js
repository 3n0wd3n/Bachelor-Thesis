import styled from 'styled-components'
import { CommonDisplayFlexColumn } from '../CommonStyles'


export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginButtonContainer = styled(CommonDisplayFlexColumn)`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const LoginContainer = styled(CommonDisplayFlexColumn)`
  background-color: white;
  box-shadow: -4px 4px 6px rgba(155, 155, 155, 0.15);
  border-radius: 20px;
  /* padding: top right bottom left; */
  padding: 3em 10em 3em 10em;
  margin-top: 2em;
  transition: 0.7s;
  border: 1px solid rgba(155, 155, 155, 0.05);
  :hover{
    box-shadow: -8px 8px 10px rgba(155, 155, 155, 0.3);
  }
  @media (max-width: 700px) {
    /* we write media query into constants */
    padding: 3em 1em 3em 1em;
  }
`;

export const LoginButtonBottomContainer = styled(LoginButtonContainer)`
  margin-top: 2em;
`;

export const LoginInputStyled= styled.input`
    cursor: pointer;
    border: 1px solid #EDEDED;
    color: grey;
    font-family: 'Raleway', sans-serif;
    border-radius: 18px;
    background-color: #EDEDED;
    padding: 1.5em 7em 1.5em 3em;
    transition: 0.7s;
    :focus{
      border: 1px solid #61C9A8;
    }
    @media (max-width: 700px) {
      /* we write media query into constants */
      padding: 1.5em;
    }
`;

export const LoginLabelStyled = styled.label`
  cursor: pointer;
  margin-top: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginInputCheckboxStyled = styled.input`
  margin-right: 0.5em;
`;

export const LoginButtonStyled = styled.button`
  border: 1px solid white;
  cursor: pointer;
  margin-top: 2em;
  border-radius: 30px;
  background: #C4C4C4;
  color: white;
  padding: 1.2em 6em 1.2em 6em;
  transition: 0.7s;
  :hover{
    background-color: #61C9A8;
    border: 1px solid #61C9A8;
  }
  @media (max-width: 700px) {
      /* we write media query into constants */
      padding: 1em 4em 1em 4em;
    }
`;

