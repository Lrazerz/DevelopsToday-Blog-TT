import React from "react";
import styled from 'styled-components';
import theme from "../../../constants/styles/theme";
import Link from 'next/link';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faSadTear} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import MainButton from "../buttons/MainButton";

library.add(faSadTear);

const MainContainer = styled.div`
  height: 65%;
  min-height: 300px;
  width: 60%;
  min-width: 500px;
  box-sizing: border-box;
  padding: 30px;
  margin: 50px auto;
  border-radius: 10px;
  background-color: ${theme.colors.lightGray};
  @media(max-width: ${theme.breakpoints.values.sm}) {
    min-width: 400px;
    padding: 20px;
  }
  @media(max-width: ${theme.breakpoints.values.xs}) {
    min-width: 200px;
    padding: 10px;
  }
`;

const TitleContainer = styled.div`
  height: 50%;
`;

const TitleText = styled.p`
  text-align: center;
  color: ${theme.colors.red};
  font-size: 30px;
  @media(max-width: ${theme.breakpoints.values.sm}) {
    font-size: 25px;
  }
  @media(max-width: ${theme.breakpoints.values.xs}) {
    font-size: 20px;
  }
`;

const EmojiContainer = styled.div`
  height: 30%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  alignItems: center;
`;

const ButtonContainer = styled.div`
  height: 10%;
  margin-top: 10px;
`;

const A = styled.a`
  text-decoration: none,
`;


interface PropsInterface {
  title: string;
}

export default function ErrorComponent({title}: PropsInterface) {
  return (
    <MainContainer>
      <TitleContainer>
        <TitleText>
          Oops... Error occurred.
        </TitleText>
        <TitleText>
          {title}
        </TitleText>
      </TitleContainer>
      <EmojiContainer>
        <FontAwesomeIcon icon={'sad-tear' as IconProp} color={theme.colors.red} size='5x'
                         style={{float: 'left', margin: '5px'}}/>
      </EmojiContainer>
      <ButtonContainer>
        <Link href='/'>
          <A>
            <MainButton text={'Back to Main Page'} styles={{maxWidth: '300px', margin: '15px auto'}}/>
          </A>
        </Link>
      </ButtonContainer>
    </MainContainer>
  )
}