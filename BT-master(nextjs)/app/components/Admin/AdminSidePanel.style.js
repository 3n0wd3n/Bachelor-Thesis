import styled from 'styled-components'
import { Colors } from '../../utils/Colors'
import { CommonDisplayFlexColumn } from '../CommonStyles'


export const SideContainer = styled(CommonDisplayFlexColumn)`
  width: 10vw;
  min-height: 100vh;
  gap: 3em;
  transition: 0.7s;
  cursor: pointer;
  & > svg {
    transition: 0.6s;
    &:hover{
      transform: scale(1.1);
      filter: opacity(.8);
    }
  }
  @media (max-width: 700px) {
      /* we write media query into constants */
      min-height: 10vh;
      width: 100%;
      flex-flow: row;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  justify-content: flex start;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  margin: 0 0 0 24.5px;
  &>span{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    border-radius: 100%;
    height: fit-content;
    padding: 0 7px 3.5px 7px;
    // width: 23px;
    background-color: ${Colors.red};
    color: ${Colors.white}
  }
`;