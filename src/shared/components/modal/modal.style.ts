import styled from "styled-components/native";
import { theme } from "../../themes/theme";
import {Icon}from '../icon/Icon';

export const ContainerModal = styled.View`
  position: absolute;
  bottom: 0;
  background-color: ${theme.colors.neutralTheme.white};
  height: 200px;

  
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  padding: 16px;
  z-index: 9;

  /* shadow-color: #000; */
  shadow-offset: {
    width: 0;
    height: 0;
  }
  /* shadow-opacity: 1;
  shadow-radius: 1px;
  elevation: 10; */
`;

export const IconCloseModal = styled(Icon)`
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 10;
`;
