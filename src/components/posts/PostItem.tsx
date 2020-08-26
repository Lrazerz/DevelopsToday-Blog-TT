import React from 'react';
import styled from 'styled-components';
import theme from '../../constants/styles/theme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faCommentAlt} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

library.add(faCommentAlt);

// Styles
const MainContainer = styled.div`
  height: 200px;
  max-height: 200px;
  padding: 5px 10px;
  background-color: ${theme.colors.lightGray};
  overflow: hidden;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 2px 2px 3px 5px ${theme.colors.primary};
  color: ${theme.colors.black};
  &:hover {
    border: 2px solid ${theme.colors.primary};
  }
`;

const TitleContainer = styled.div`
  max-height: 50%;
`;

const TitleText = styled.p`
  font-size: 18px;
  font-weight: 800;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.25;
`;

const BodyContainer = styled.div`
`;

const BodyText = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  line-height: 1.25;
`;

const Hr = styled.hr`
  margin-top: 10px;
`;

const A = styled.a`
  text-decoration: none;
`;

export default function PostItem({post: {title, body, id}}) {

  return (
    <Link href={`/posts/${id}`}>
      <A>
        <MainContainer>
          <FontAwesomeIcon icon={'comment-alt'} color={theme.colors.primary} size='1x'
                           style={{float: 'left', margin: '5px'}}/>
          <TitleContainer>
            <TitleText>
              {title}
            </TitleText>
          </TitleContainer>
          <Hr/>
          <BodyContainer>
            <BodyText>
              {body}
            </BodyText>
          </BodyContainer>
        </MainContainer>
      </A>
    </Link>
  )
};