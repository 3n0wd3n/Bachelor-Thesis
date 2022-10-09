import styled from 'styled-components'

// ``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Fonts = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;600;700&display=swap');

  text-align: center;

  & h1 {
    font-family: 'Raleway', sans-serif;
    text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.25);
    font-size: 3rem;
    font-weight: 700;
  }

  & h2 {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
  }

  & p {
    font-family: 'Raleway', sans-serif;
    font-weight: 100;
  }

`;