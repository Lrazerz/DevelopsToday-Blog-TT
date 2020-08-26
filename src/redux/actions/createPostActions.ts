import axios from 'axios';
import {CREATED_POST_LOADING, CREATED_POST_LOADED, CREATED_POST_ERROR} from './types';
import Post from "../../models/Post";

let _postLoading: () => { type: string };
_postLoading = () => {
  return {type: CREATED_POST_LOADING};
};

// Export to delete post from redux
let postLoaded: (post: null | Post) => { type: string, post: null | Post };
postLoaded = (post) => {
  return {type: CREATED_POST_LOADED, post};
};

let _postError: (error: null | Error) => { type: string, error: null | Error };
_postError = (error) => {
  return {type: CREATED_POST_ERROR, error};
};

let createPost: (title: string, body: string) => (dispatch: any) => Promise<void>;
createPost = (title, body) => {
  return async dispatch => {
    try {
      dispatch(_postLoading());
      const requestData = {
        title, body
      };

      const res = await axios.post(`https://simple-blog-api.crew.red/posts`, requestData);
      console.log(res.data);
      dispatch(postLoaded(res.data));
    } catch (e) {
      dispatch(_postError(e));
    }
  }
}

export {
  postLoaded,
  createPost
};