import React from 'react';
import styled from 'styled-components';
import theme from "../../../constants/styles/theme";

const ButtonContainer = styled.button`
  display: block;
  box-sizing: border-box;
  border: 0;
  text-align: center;
  color: inherit;
  letter-spacing: 0.1rem;
  height: 100%;
  max-width: 200px;
  overflow: hidden;
  border-radius: 10px;
  padding: 5px;
  background-color: ${theme.colors.warning};
  box-shadow: 0px 0px 2px 1px ${theme.colors.warning};
  color: ${theme.colors.white};
  cursor: pointer;
  outline: none;
  &:hover {
    box-shadow: 0px 0px 2px 4px ${theme.colors.lightGray};
  }
`;

const ButtonText = styled.p`
  font-size: 20px;
  margin: 0px;
  line-height: 40px;
`;


export default function MainButton({text, styles = {}, ...rest}) {
  return (
    <ButtonContainer style={{...styles}} {...rest}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  )
}