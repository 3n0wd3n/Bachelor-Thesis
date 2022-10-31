import styled from 'styled-components'
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'

export const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 90vw;
  transition: 0.7s;
  margin: 1em 0 0 0;
  @media (max-width: 700px) {
      /* we write media query into constants */
      width: 100%;
  }
`;

export const MainHeaderContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-around;
  width: 90vw;
  @media (max-width: 1000px) {
      /* we write media query into constants */
      flex-flow: column;
      justify-content: center;
      align-items: center;
  }
`

export const MainHeaderUser = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  height: 10vh;
  justify-content: center;
  align-items: center;
`

export const MainHeaderRole = styled.div`
  height: 10vh;
`

export const MainHeaderName = styled.div`
  /* background-color: red; */
`

export const MainHeaderTitle = styled(FontsHeaderBold)`
  font-size: 3.5rem;
  @media (max-width: 700px) {
      /* we write media query into constants */
      font-size: 1.7rem;
  }
`

export const MainHeaderTitleRole = styled(FontsThin)`
  font-size: 1.5rem;
  @media (max-width: 1000px) {
      /* we write media query into constants */
      display: none;
  }
`

export const MainHeaderNextLesson = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #61C9A8;
  padding: 0.5em 2em 0.5em 2em;
  border-radius: 25px;
  color: white;
  transition: 0.7s;
  @media (max-width: 1000px) {
      /* we write media query into constants */
      padding: 0.7em 7em 0.7em 7em;
  }
  @media (max-width: 700px) {
      /* we write media query into constants */
      padding: 0.5em 4em 0.5em 4em;
  }
`

export const MainHeaderNextLessonTitle = styled(FontsBold)`
  font-size: 2rem;
  @media (max-width: 700px) {
      /* we write media query into constants */
      font-size: 1.5rem;
  }
`

export const MainHeaderLessonTitleTime = styled(FontsThin)`
  font-size: 1rem;
`
