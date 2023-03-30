import styled from 'styled-components'
import { AdminLessonTimeInput } from '../AdminAddPage.style'
import { Colors } from '../../../utils/Colors'

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`;

export const WeekWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const WeekInputStyled = styled.input`
  border-bottom: 1px solid black;
  text-align: center;
  width: 40px;
  background-color: ${Colors.creameWhite};
  font-weight: bold;
`;

export const WeekPlaceholderStyled = styled.label`
  
`;

export const CalendarContentWrapperStyled = styled.div`
  display: flex;
  width: 100%;
`;

export const DatesWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 80px;
`;

export const CalendarWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  width: 100%;
`;

export const DayStyled = styled.span`
  font-weight: bold;
  text-align: center;
  height: 20px;
`;

export const DateStyled = styled.span`
  text-align: center;
  font-size: 14px;
  height: 20px;
`;

export const LessonStyled = styled.span`
  text-align: center;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: ${Colors.yellow}
  }
`;

export const LessonTimeWrapper = styled(AdminLessonTimeInput)`
  width: fit-content;
`;

export const GoBackButton = styled.button`
  
`;

export const SaveButton = styled.button`
  
`;
