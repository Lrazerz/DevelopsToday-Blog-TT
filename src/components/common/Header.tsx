import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import theme from '../../constants/styles/theme';
import MainButton from "./buttons/MainButton";

// Styles
const MainContainer = styled.nav`
  height: 60px;
  max-height: 60px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  margin-bottom: 50px;
  background-color: ${theme.colors.primary};
`;

const ImageContainer = styled.div`
  height: 100%;
  max-width: 100px;
  overflow: hidden;
`;

const TitleContainer = styled.div`
  height: 100%;
  max-width: 400px;
  overflow: hidden;
`;

const TitleText = styled.p`
  margin: 0px;
  line-height: 50px;
  letter-spacing: 0.5rem;
  font-size: 30px;
  @media (max-width: ${theme.breakpoints.values.sm}) {
    font-size: 25px;
    letter-spacing: normal;
  }
  @media (max-width: ${theme.breakpoints.values.xs}) {
    display: none;
  }
`;

const CustomLink = styled.a`
  cursor: pointer;
`;

export default function Header() {

  return (
    <MainContainer>
      <Link href='/'>
        <CustomLink>
          <ImageContainer>
            <img src='/post-logo.png' height='50px' width='90px'/>
          </ImageContainer>
        </CustomLink>
      </Link>
      <Link href='/'>
        <CustomLink>
          <TitleContainer>
            <TitleText>Perfect Posts</TitleText>
          </TitleContainer>
        </CustomLink>
      </Link>
      <Link href='/posts/new'>
        <CustomLink>
          <MainButton text={'Create Post'}/>
        </CustomLink>
      </Link>
    </MainContainer>
  )
};