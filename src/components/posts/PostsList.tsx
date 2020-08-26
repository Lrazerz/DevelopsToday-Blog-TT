import React from 'react';
import styled from 'styled-components';
import theme from '../../constants/styles/theme';
import PostItem from "./PostItem";

// Styles
const MainContainer = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  display: grid;
  column-gap: 20px;
  row-gap: 15px;
  padding: 5px 20px;
  background-color: ${theme.colors.secondary};
  grid-template-columns: repeat(3,1fr);
  @media (max-width: ${theme.breakpoints.values.md}) {
    grid-template-columns: repeat(2,1fr);
  }
  @media (max-width: ${theme.breakpoints.values.sm}) {
    grid-template-columns: 1fr;
  }
`;

export default function PostsList({posts = []}) {
  const renderPosts = posts.map(post => {
    return <PostItem key={post.id} post={post}/>;
  })

  return (
    <MainContainer>
      {renderPosts}
    </MainContainer>
  )
};