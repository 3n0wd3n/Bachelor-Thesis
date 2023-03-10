import styled from 'styled-components'

import { Colors } from '../../../utils/Colors'

export const WrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  width: 100%;
`;

export const DayStyled = styled.span`
  font-weight: bold;
  text-align: center;
`;

export const LessonStyled = styled.span`
  text-align: center;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: ${Colors.yellow}
  }
`;