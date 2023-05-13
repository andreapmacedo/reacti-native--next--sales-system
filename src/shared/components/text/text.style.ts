import styled from "styled-components/native";

interface ContainerTextProps {
  color?: string;
  fontSize?: string;
  fontFamily?: 'Poppins-Bold' | 'Poppins-Regular' | 'Poppins-Light';
}

export const ContainerText = styled.Text<ContainerTextProps>`
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  /* font-family: Poppins-Bold; */
  padding-top: 3px;
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
`;
