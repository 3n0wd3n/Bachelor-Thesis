import styled from 'styled-components'

import { Colors } from '../../../utils/Colors'
import { CommonDisplayFlexColumn, CommonDisplayFlexRow } from '../../CommonStyles'

export const StudentSVGsValue = 1.5;
export const StudentInfoContentValue = .9;

export const DropDown = styled(CommonDisplayFlexColumn)`
    width: 100%;
`;

export const StudentInfoContainerOne = styled(CommonDisplayFlexColumn)`
    align-items: flex-start;
    margin: 0em 0 0em 1em;
`;

export const StudentInfoContainerTwo = styled(CommonDisplayFlexColumn)`
    align-items: flex-start;
    margin: 1em 1em 1em 0;
    @media (max-width: 1000px) {
      /* we write media query into constants */
      margin: 1em 0 1em 1em;
    }
`;

export const StudentKeyAttribute = styled.span`
    font-family: 'Raleway', sans-serif;
    text-shadow: -1px 1px 1px rgba(0, 0, 0, 0.08);
    font-size: ${StudentInfoContentValue}rem;
    font-weight: 900;
    margin: 0em 0 0.5em 0.5em;
`;

export const StudentInfoAboveContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999; /* zajistí, že bude div viditelný nad všemi elementy */
  font-family: 'Raleway', sans-serif;
  font-size: ${StudentInfoContentValue+0.1}rem;
  /* background-color: ${Colors.white}; */
  background-color: white;
  box-shadow: -3px 3px 5px rgba(155, 155, 155, 0.25);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  border-radius: 15px;
  @media (max-width: 300px) {
        padding: .5rem;
    }
`;

export const AboveContainerAssurance = styled.div`
    &>span>span{
        font-weight: 600;
    }
`;

export const AboveContainerChoice = styled.div`
    display: flex;
    &>div>span{
        font-weight: 600;
    }
    cursor: pointer;
    &>div{
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 600px) {
            padding: .3rem;
            border-radius: 10px;
            border: 1px solid ${Colors.lightGray};
        }
    }
    &>div>svg{
        color: ${Colors.red};
        margin: 0 0 0 1rem;
        font-size: ${StudentInfoContentValue+0.2}rem;
        transition: 0.3s;
        &:hover{
            font-size: ${StudentInfoContentValue+0.35}rem;
        }
        @media (max-width: 600px) {
            margin: 0 0 0 .5rem;
        }
    }
    &>div:first-child>svg{
        color: ${Colors.lightGreen}
    }
    gap: 1rem;
    @media (max-width: 600px) {
      flex-direction: column;
    }
`;

export const StudentAttributes = styled.div``;

export const StudentKeyRemoveAttribute = styled(StudentKeyAttribute)`
    transition: .6s;
    text-transform: uppercase;
    margin: 0;
    color: #D3D0CB;
    text-shadow: none;
    /* color: ${Colors.red}; */
`;

export const StudentKeyRemoveButton = styled.div`
    display: flex;
    align-items: center;
    & > svg {
        transition: .6s;
        color: #D3D0CB;
        margin: 0 0 0 .5em 
    }
`;

export const StudentKeyRemoveLessonButton = styled.div`
    display: flex;
    align-items: center;
    & > svg {
        transition: .6s;
        color: #D3D0CB;
        font-size: ${StudentInfoContentValue}em;
        transition: .6s;
        cursor: pointer;
        &:hover{
            color: ${Colors.red};
            filter: opacity(.6);
            transform: scale(1.1);
        }
    }
`;

export const StudentRemoveAttribute = styled(StudentAttributes)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    border-radius: 12px;
    /* border: 1px solid ${Colors.darkGray}; */
    border: 1px solid #D3D0CB;
    cursor: pointer;
    transition: .6s;

    &:hover{
        border: 1px solid ${Colors.red};
    }
    &:hover ${StudentKeyRemoveButton} svg{
        transform: scale(1.05);
        color: ${Colors.red};
    }
    &:hover ${StudentKeyRemoveAttribute}{
        color: ${Colors.red};
        /* transform: scale(1.01); */
    }
`;

export const PlanAttributes = styled.div`
    position: relative;
    background-color: white;
    border: 1px solid ${Colors.beige};
    border-radius: 12px;
    display: flex;
    padding: 4px 15px 4px 6px;
    input {
        width: fit-content;
    }
`;

export const StudentPlanAttribute = styled(StudentKeyAttribute)`
    margin: 1em 0 0.5em 0.5em;
`;

export const StudentValueAttribute = styled.span`
    font-family: 'Raleway', sans-serif;
    color: ${({ changed }) => changed ? 'orangered' : 'black'};
    text-shadow: -1px 1px 1px rgba(0, 0, 0, 0.08);
    font-size: ${StudentInfoContentValue}rem;
    font-weight: 300;
    padding: 0.3em;
    margin: 0em 0 0.5em 0.5em;
`;

export const StudentPlanContent = styled(CommonDisplayFlexRow)`
    padding-left: 8px;
    gap: 2px;

    & > *:nth-child(odd) {
        margin-left: 4px;
    }
`;

export const StudentPlanValues = styled(CommonDisplayFlexRow)`
    flex-direction: column;
    align-items: flex-start;
`;

export const StudentPlansValues = styled(CommonDisplayFlexRow)`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 4px;
`;

export const StudentEditContainer = styled.div`
    display: flex;
    cursor: pointer;
    transition: 0.7s;
    & > svg {
        background: ${Colors.creameWhite};
        color: ${Colors.lightGreen};
        font-size: ${StudentSVGsValue}em;
        transition: .6s;
        &:hover{
            filter: opacity(.6);
            transform: scale(1.1);
        }
    }

    &:hover {
        filter: opacity(.6)
    }
`;

export const StudentKeyInputAttribute = styled.input`
    font-family: 'Raleway', sans-serif;
    margin: 0 0 0.5em 0.3em;
    padding: 0.3em;
    font-size: ${StudentInfoContentValue}rem;
    border-radius: 10px;
    border: ${({ editable }) => editable ? '1px solid rgba(155, 155, 155, 0.05)' : 'None'};
    box-shadow: ${({ editable }) => editable ? '-3px 3px 5px rgba(155, 155, 155, 0.15)' : 'None'};
    background-color: ${({ editable }) => editable ? Colors.lightGray : 'transparent'};
`;

export const StudentKeyInputAttributePlan = styled.input`
    background-color: ${({ editable }) => editable ? Colors.lightGray : 'transparent'};
`;

export const StudentCheckInputAttribute = styled(StudentEditContainer)`
    right: 28px;
`;

export const StudentEditAttributes = styled.div`
    position: relative;
    font-size: 0.6rem;
    cursor: pointer;
    transition: 0.7s;
    & > svg {
        background: ${Colors.creameWhite};
        color: ${Colors.lightGreen};
        font-size: ${StudentSVGsValue}em;
    }
    &:hover {
        filter: opacity(.6)
    }
`;

export const StudentRemoveAttributes = styled(StudentEditAttributes)`
    & > svg {
        position: absolute;
        color: ${Colors.red};
        right: -9px;
        top: 0;
        font-size: ${StudentSVGsValue}em;
    }
`;

