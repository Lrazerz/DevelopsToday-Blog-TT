import React from "react";
import styled from 'styled-components';
import theme from "../../constants/styles/theme";
import SinglePostContainer from "../../containers/singlePost/SinglePostContainer";

// Styles
const MainContainer = styled.div`
  min-height: 250px;
  max-width: 600px;
  min-width: 40%;
  margin: auto;
  background-color: ${theme.colors.lightGray};
  border-radius: 10px;
  padding: 20px;
`;

const TitleContainer = styled.div`
  padding: 20px;
`;

const TitleText = styled.p`
  font-weight: 800;
  margin: 0;
  padding: 20px;
  color: ${theme.colors.black};
  font-size: 35px;
  @media (max-width: ${theme.breakpoints.values.md}) {
    font-size: 30px;
  }
  @media (max-width: ${theme.breakpoints.values.sm}) {
    font-size: 25px;
  }
`;

const BodyContainer = styled.div`
  padding: 20px;
`;

const BodyText = styled.p`
  font-weight: 400;
  margin: 0;
  padding: 20px;
  color: ${theme.colors.black};
  font-size: 28px;
  @media (max-width: ${theme.breakpoints.values.md}) {
    font-size: 24px;
  }
  @media (max-width: ${theme.breakpoints.values.sm}) {
    font-size: 20px;
  }
`;

function SinglePost({post}) {

  return (
    <MainContainer>
      <TitleContainer>
        <TitleText>
          {post && post.title}
        </TitleText>
      </TitleContainer>
      <BodyContainer>
        <BodyText>
          {post && post.body}
        </BodyText>
      </BodyContainer>
    </MainContainer>
  )
}

export default SinglePostContainer(SinglePost);