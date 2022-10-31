import styled from 'styled-components'

export const SideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 10vw;
  min-height: 100vh;
  gap: 3em;
  transition: 0.7s;
  cursor: pointer;
  @media (max-width: 700px) {
      /* we write media query into constants */
      min-height: 10vh;
      width: 100%;
      flex-flow: row;
  }
`;