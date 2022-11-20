import styled from 'styled-components'
import { LoginButtonContainer, LoginInputStyled } from '../Login/Login.style'
import { FontsBold,FontsThin } from '../CommonStyles'

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
    //nothing to change
`;

export const AdminInputStyled = styled(LoginInputStyled)`
    // nothing changed yet
`;

export const AdminLabel = styled.label`
    margin: 1em 0em 0em 0em;
`;

export const AdminDaysContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1em;
    gap: 0.7em
`;

export const AdminDayItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 50px;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.7s;
    // background-color: #EDEDED;
    border: 1px solid rgba(155, 155, 155, 0.05);
    box-shadow: -2px 2px 3px rgba(155, 155, 155, 0.15);
    :hover{
        color: white;
        background-color: #A9A9A9;
        box-shadow: -3px 3px 4px rgba(155, 155, 155, 0.3);
    }
`;

export const AdminRowDays = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.7em;
`;

export const AdminCustonFontBold = styled(FontsBold)`
    font-size: 0.8em;
`;

export const AdminCustonFontThin = styled(FontsThin)`
    font-size: 0.9em;
`;