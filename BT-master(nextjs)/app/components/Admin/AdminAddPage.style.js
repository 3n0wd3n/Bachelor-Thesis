import styled from 'styled-components'

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
`;