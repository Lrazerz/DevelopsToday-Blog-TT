import React from 'react';
import styled from 'styled-components';
import theme from "../../constants/styles/theme";
import CreatePostContainer from '../../containers/createPost/CreatePostContainer';
import MainButton from "../common/buttons/MainButton";

// Styles
const textInputStyles = `
  background-color: ${theme.colors.white};
  padding: 10px;
  line-height: 1.5;
  letter-spacing: 1px;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 1px 1px 1px #999;
  display: block;
  margin: 10px auto;
  border: 2px solid ${theme.colors.lightGray};
  margin: 10px auto 0px auto;
  outline: none;
  &:hover {
    box-shadow: 0px 0px 3px 2px ${theme.colors.secondary};
  }
  font-size: 20px;
  @media(max-width: ${theme.breakpoints.values.md}) {
    font-size: 18px;
  }
  @media(max-width: ${theme.breakpoints.values.sm}) {
    font-size: 15px;
  }
`;

const MainContainer = styled.div`
  max-width: 600px;
  min-width: 40%;
  margin: 50px auto;
  background-color: ${theme.colors.lightGray};
  color: ${theme.colors.black};
  border-radius: 10px;
  padding: 20px;
`;

const MainForm = styled.form`
  padding: 20px;
  margin: auto;
`;

const Label = styled.label`
  display: block;
  text-align: center;
  margin-top: 15px;
  font-size: 25px;
  @media (max-width: ${theme.breakpoints.values.sm}) {
    font-size: 20px;
  }
`;

const TextInput = styled.input`  
  ${textInputStyles}
  font-size: 19px;
  @media(max-width: ${theme.breakpoints.values.md}) {
    font-size: 18px;
  }
  @media(max-width: ${theme.breakpoints.values.sm}) {
    font-size: 14px;
  }
`;

const TextArea = styled.textarea`  
  ${textInputStyles}
`;

const DangerSpan = styled.span`
  letter-spacing: 0.3px;
  display: block;
  margin: 3px auto;
  text-align: center;
  color: ${theme.colors.danger}
`;

function CreatePost(props) {
  const {
    title, onTitleChange, titleWarning, body,
    onBodyChange, bodyWarning, onSendPost
  } = props;

  const buttonStyles = {
    margin: '15px auto',
    borderRadius: '10px',
    height: '50px',
  }

  return (
    <MainContainer>
      <MainForm>
        <Label htmlFor="title">Title:</Label>
        <TextInput id="title" type='text' placeholder='True story'
                   value={title} onChange={onTitleChange} size={40}
                   style={titleWarning && {border: `2px solid ${theme.colors.danger}`}}/>
        <DangerSpan>{titleWarning}</DangerSpan>

        <Label htmlFor="body">Tell us your story:</Label>
        <TextArea id="body" name="body" rows={10} maxLength={400}
                  placeholder={'It was a dark and stormy night...'} value={body}
                  onChange={onBodyChange} cols={40}
                  style={bodyWarning && {border: `2px solid ${theme.colors.danger}`}}
        />
        <DangerSpan>{bodyWarning}</DangerSpan>
        <MainButton text={'Send Post'} styles={buttonStyles} onClick={onSendPost}/>
      </MainForm>
    </MainContainer>
  )
}

export default CreatePostContainer(CreatePost);