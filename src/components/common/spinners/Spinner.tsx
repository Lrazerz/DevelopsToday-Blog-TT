import React from 'react';
import {css} from "@emotion/core";
import styled from 'styled-components';
import ClipLoader from "react-spinners/ClipLoader";
import theme from "../../../constants/styles/theme";

const MainContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const override = css`
  display: block;
  margin: 0 auto;
  border-color: ${theme.colors.primary};
`;


export default function Spinner() {
  return (
    <MainContainer>
      <ClipLoader
        css={override}
        size={150}
        color={theme.colors.primary}
        loading={true}
      />
    </MainContainer>
  );
}