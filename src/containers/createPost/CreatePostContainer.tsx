import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRouter} from "next/router";
import Spinner from "../../components/common/spinners/Spinner";
import {postLoaded, createPost} from '../../redux/actions/createPostActions';
import ErrorComponent from "../../components/common/error/ErrorComponent";

const CreatePostContainer = (Component) => () => {
  const [title, setTitle] = useState('');
  const [titleWarning, setTitleWarning] = useState(null);
  const [body, setBody] = useState('');
  const [bodyWarning, setBodyWarning] = useState(null);
  const dispatch = useDispatch();
  const {createdPost: post, createdPostLoading: loading, createdPostError: error} = useSelector(state => state);
  const router = useRouter();

  const titleChangeHandler = (e) => {
    const originalValue = e.target.value;
    const value = e.target.value.trim()
    if (value.length > 30) {
      setTitleWarning('Max length achieved!');
    } else {
      setTitleWarning(null);
      setTitle(originalValue);
    }
  }

  const bodyChangeHandler = (e) => {
    const originalValue = e.target.value;
    const value = e.target.value.trim()
    if (value.length > 180) {
      setBodyWarning('Max length achieved!');
    } else {
      setBodyWarning(null);
      setBody(originalValue);
    }
  }

  const sendPostHandler = (e) => {
    e.preventDefault();
    if (title.length < 5) {
      setTitleWarning('Title length should be at least 5 symbols');
    } else if (body.length < 10) {
      setBodyWarning('Body length should be at least 5 symbols');
    } else {
      dispatch(createPost(title.trim(), body.trim()));
    }
  }

  if (post) {
    dispatch(postLoaded(null));
    router.push(`/posts/${post.id}`);
  }

  if (loading) {
    return <Spinner/>
  }

  if (error) {
    return <ErrorComponent title={`Post was not created. ${error.message}`}/>
  }

  return (
    <Component title={title} onTitleChange={titleChangeHandler} titleWarning={titleWarning}
               body={body} onBodyChange={bodyChangeHandler} bodyWarning={bodyWarning}
               onSendPost={sendPostHandler}/>
  )
}

export default CreatePostContainer;