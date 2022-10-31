import styled from 'styled-components'

export const AdminContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  min-height: 100vh;
  @media (max-width: 700px) {
      /* we write media query into constants */
      flex-flow: column;
      /* flex-direction: column-reverse; */
  }
`;