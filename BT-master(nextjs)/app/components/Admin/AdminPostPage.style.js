import styled from 'styled-components'

export const AdminPostContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    flex-direction: column;
`;

export const AdminMainContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 4em 4em 4em 4em;
    box-shadow: -4px 4px 6px rgba(155, 155, 155, 0.15);
    border: 1px solid rgba(155, 155, 155, 0.05);
    border-radius: 25px;
    margin: 2em 2em 2em 2em;
    @media (max-width: 750px) {
        padding: 2em 2em 2em 2em;
    }
`;

export const AdminListItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap; 
    gap: 1em;
    margin: 2em 0em 1em 0em;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

export const AdminItem = styled.div`
    /* empty for now */
`;

export const AdminUnorderedList = styled.ul`
    margin: 1em 0em 0em 0em;
    display: flex;
`;

export const AdminMessages = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 0.5em;
    @media (max-width: 750px) {
        flex-direction: column;
        gap: 0em;
    }
`;

export const PostBackButton = styled.button`
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