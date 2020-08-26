import * as React from 'react';
import styled from 'styled-components';
import theme from '../../constants/styles/theme';
import Header from "./Header";

// Styles
const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  max-width: ${theme.breakpoints.values.lg};
  background-color: ${theme.colors.secondary};
`;

// Component
export default function Container({children}) {
  return (
    <MainContainer>
      <Header/>
      {children}
    </MainContainer>
  )
};