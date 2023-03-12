import styled from 'styled-components'
import { Colors } from '../../utils/Colors'
import { FontsHeaderBold, FontsThin, FontsBold, CommonDisplayFlexColumn, CommonDisplayFlexRow, CommonDisplayFlex } from '../CommonStyles'

export const DropDown = styled(CommonDisplayFlexColumn)`
    width: 100%;
    heigth:100%;
`;

export const StudentContainer = styled(CommonDisplayFlexRow)`
    justify-content: space-between;
    min-width: 40vw;
    transition: 0.7s;
    width: 100%;
    border-bottom: 1px solid black;
    cursor: pointer;
    `;

export const MenuItems = styled(CommonDisplayFlexRow)`
    width: 100%;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    margin: 0 0 1em 0;
`;

export const MenuItem = styled.span`
    font-family: 'Raleway', sans-serif;
    font-weight: ${({ selected }) => selected ? 700 : 400};
    font-size: 1rem;
    cursor: pointer;
`;

export const ContentContainer = styled(CommonDisplayFlexRow)`
    position: relative;
    padding-bottom: 1rem;
    width: 95%;
    /* padding: 3em; */
    background-color: ${Colors.creameWhite};
    border-radius: 10px;
    justify-content: space-between;
    @media (max-width: 1000px) {
      /* we write media query into constants */
      flex-direction: column;
      align-items: flex-start;
    }
`;