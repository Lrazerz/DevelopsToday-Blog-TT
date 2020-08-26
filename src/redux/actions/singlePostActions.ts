import axios from 'axios';
import {SINGLE_POST_LOADING, SINGLE_POST_LOADED, SINGLE_POST_ERROR} from './types';
import Post from "../../models/Post";
import {dummyData} from "./postsActions";

let _postLoading: () => { type: string };
_postLoading = () => {
  return {type: SINGLE_POST_LOADING};
};

let _postLoaded: (post: null | Post) => { type: string, post: null | Post };
_postLoaded = (post: null | Post) => {
  return {type: SINGLE_POST_LOADED, post};
};

let _postError: (error: null | Error) => { type: string, error: null | Error };
_postError = (error: null | Error) => {
  return {type: SINGLE_POST_ERROR, error};
};

let getSinglePost: (id: string | string[]) => (dispatch: any) => Promise<void>;
getSinglePost = (id: string | string[]) => {
  return async dispatch => {
    try {
      dispatch(_postLoading());

      const res = await axios.get(`https://simple-blog-api.crew.red/posts/${id}`);
      dispatch(_postLoaded(res.data));
    } catch (e) {
      dispatch(_postError(e));
    }
  }
}

let dummyGetSinglePost: (id: string | string[]) => (dispatch: any) => Promise<void>;
dummyGetSinglePost = (id: string | string[]) => {
  return async dispatch => {
    try {
      dispatch(_postLoading());

      const promise = new Promise((res, rej) => {
        const post: Post = dummyData.find(post => post.id.toString() === id);
        if (!post) {
          let err = {
            message: 'Post not found',
            msg: 'Post not found',
            response: {
              status: 404,
            }
          };
          throw err;
        }
        setTimeout(() => {
          res(post);
        }, 2000);
      });

      const res: any = await promise;
      dispatch(_postLoaded(res));
    } catch (e) {
      dispatch(_postError(e));
    }
  }
}

export {getSinglePost, dummyGetSinglePost};