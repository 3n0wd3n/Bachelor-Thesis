import styled from 'styled-components'

export const ContainerStyled = styled.section`
    display: flex;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const LoginContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    border: none;
    border-radius: 15px;
    color: #f9f9f9;
    gap: 1rem;
    margin-top: 3vh;
    padding-top: 5vh;
    box-shadow: -3px 3px 6px rgba(0, 0, 0, 0.01), 0 6px 20px 0 rgba(0, 0, 0, 0.11);
`

export const LabelStyled = styled.p`
    color: black;
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;500;700&display=swap');
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
`

export const InputContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 14vh;
    margin-right: 14vh;
`

export const InputStyled = styled.input`
    background-color: #ededed;
    border-radius: 15px;
    border: none;
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
`

export const ButtonStyled = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;500;700&display=swap');
    font-family: 'Raleway', sans-serif; 
    background-color: #61C9A8;
    border: none;
    color: #F9F9F9;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 700;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 35px;
    padding-left: 35px;
    margin-bottom: 5vh;
    &:hover {
    background-color: #69ffcf;
    transition:.6s;
  }
`

