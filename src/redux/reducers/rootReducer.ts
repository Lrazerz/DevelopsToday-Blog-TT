import {
  POSTS_LOADING, POSTS_LOADED, POSTS_ERROR, SINGLE_POST_LOADED, SINGLE_POST_ERROR,
  CREATED_POST_LOADING, CREATED_POST_LOADED, CREATED_POST_ERROR, SINGLE_POST_LOADING
} from "../actions/types";
import {AnyAction} from 'redux';
import Post from '../../models/Post';
import {HYDRATE} from 'next-redux-wrapper';

interface State {
  posts: null | Post[];
  postsError: boolean | Error;

  singlePost: null | Post;
  singlePostError: boolean | Error;

  createdPost: null | Post;
  createdPostLoading: boolean;
  createdPostError: boolean | Error;
}

const initialState: State = {
  posts: null,
  postsError: false,

  singlePost: null,
  singlePostError: false,

  createdPost: null,
  createdPostLoading: false,
  createdPostError: false
};

// Single reducer to proper HYDRATE action, can configure to not override existing state
export default function rootReducer(state: State = initialState, action: AnyAction): State {
  switch (action.type) {
    case POSTS_LOADING: {
      return {
        ...state,
        posts: null,
        postsError: false,
      }
    }
    case POSTS_LOADED: {
      return {
        ...state,
        posts: action.posts,
        postsError: false,
      }
    }
    case POSTS_ERROR: {
      return {
        ...state,
        posts: null,
        postsError: action.error,
      }
    }
    case SINGLE_POST_LOADING: {
      return {
        ...state,
        singlePost: null,
        singlePostError: false,
      }
    }
    case SINGLE_POST_LOADED: {
      return {
        ...state,
        singlePost: action.post,
        singlePostError: false,
      }
    }
    case SINGLE_POST_ERROR: {
      return {
        ...state,
        singlePost: null,
        singlePostError: action.error,
      }
    }

    case CREATED_POST_LOADING: {
      return {
        ...state,
        createdPost: null,
        createdPostLoading: true,
        createdPostError: null,
      }
    }
    case CREATED_POST_LOADED: {
      return {
        ...state,
        createdPost: action.post,
        createdPostLoading: false,
        createdPostError: null,
      }
    }
    case CREATED_POST_ERROR: {
      return {
        ...state,
        createdPost: null,
        createdPostLoading: false,
        createdPostError: action.error,
      }
    }
    case HYDRATE: {
      return {
        ...state,
        ...action.payload
      }
    }
    default: {
      return state;
    }
  }
}