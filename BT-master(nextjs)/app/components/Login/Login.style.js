import styled from 'styled-components'

export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: -4px 4px 6px rgba(155, 155, 155, 0.15);
  border-radius: 20px;
  /* padding: top right bottom left; */
  padding: 3em 10em 3em 10em;
  margin-top: 2em;
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
    border: none;
    color: grey;
    border-radius: 18px;
    background-color: #EDEDED;
    padding: 1.5em 5em 1.5em 5em;
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
  :hover{
    background-color: #61C9A8;
    border: 1px solid #61C9A8;
    transition: 0.7s;
  }
  @media (max-width: 700px) {
      /* we write media query into constants */
      padding: 1em 4em 1em 4em;
    }
`;

