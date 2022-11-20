import styled from 'styled-components'
import { LoginButtonContainer, LoginInputStyled } from '../Login/Login.style'


// little help ``;

export const AdminAddContainer = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const AddBackButton = styled.button`
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
        background-color: #E8986B;
    }
`;

export const AdminFormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // background-color: grey;
    margin: 2em 0em 2em 0em;
    padding: 2em;
    transition: 0.7s;
    border-radius: 25px;
    border: 1px solid rgba(155, 155, 155, 0.05);
    box-shadow: -3px 3px 5px rgba(155, 155, 155, 0.15);
    :hover{
        box-shadow: -5px 5px 7px rgba(155, 155, 155, 0.3);
    }
`;

export const AdminButtonContainer = styled(LoginButtonContainer)`
    // nothing changed yet
`;

export const AdminInputStyled = styled(LoginInputStyled)`
    // nothing changed yet
`;

export const AdminLabel = styled.label`
    // nothing to change
`;