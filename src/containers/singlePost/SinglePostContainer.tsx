import React from "react";
import {useSelector} from 'react-redux';
import ErrorComponent from "../../components/common/error/ErrorComponent";

const SinglePostContainer = (Component) => (props) => {

  const {singlePost: post, singlePostError: error} = useSelector(state => state);

  if (error) {
    let errMsg = error.response && error.response.status &&
      error.response.status === 404 && 'Requested post not found...'
    if (!errMsg) {
      errMsg = 'Server Error. We are already fixing it.'
    }
    return <ErrorComponent title={errMsg}/>
  }

  return (
    <Component post={post} {...props}/>
  )
}

export default SinglePostContainer;