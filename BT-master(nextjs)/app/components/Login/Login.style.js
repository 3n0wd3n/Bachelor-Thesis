import styled from 'styled-components'

export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    /* we write media query into constants */
  }
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
  padding: 3em 1em 3em 1em;
  margin-top: 2em;
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
    padding: 1.5em;
`;

export const LoginLabelStyled = styled.label`
  cursor: pointer;
  justify-content: flex-start;
`;

export const LoginInputCheckboxStyled = styled.input`
  margin-top: 2em;
  margin-right: 0.5em;
`;

export const LoginButtonStyled = styled.button`
  border: 1px solid white;
  cursor: pointer;
  margin-top: 2em;
  border-radius: 30px;
  background: #C4C4C4;
  color: white;
  padding: 1em 4em 1em 4em;
  :hover{
    background-color: white;
    border: 1px solid #C4C4C4;
    transition: 0.7s;
    color: #C4C4C4;
  }
`;

