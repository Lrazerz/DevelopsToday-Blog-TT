import axios from 'axios';
import Post from "../../models/Post";
import {POSTS_LOADING, POSTS_LOADED, POSTS_ERROR} from "./types";

let _postLoading: () => { type: string };
_postLoading = () => {
  return {type: POSTS_LOADING};
};

let _postLoaded: (posts: null | Post[]) => { type: string, posts: null | Post[] };
_postLoaded = (posts: null | Post[]) => {
  return {type: POSTS_LOADED, posts};
};

let _postError: (error: null | Error) => { type: string, error: null | Error };
_postError = (error: null | Error) => {
  return {type: POSTS_ERROR, error};
};

// Without redux
let getAllPostsDirect: () => Promise<Post[]>;
getAllPostsDirect = async () => {
  try {
    const res = await axios.get('https://simple-blog-api.crew.red/posts');
    // Save only 12 last posts with title and body
    const validPosts = res.data.filter(post => post.title && post.body).slice(0, 20);
    return validPosts;
  } catch (e) {
    throw e;
  }
}

let getAllPosts: () => (dispatch: any) => Promise<void>;
getAllPosts = () => {
  return async dispatch => {
    try {
      dispatch(_postLoading());

      const res = await axios.get(`https://simple-blog-api.crew.red/posts`);
      // Save only 12 last posts with title and body
      dispatch(_postLoaded(res.data.filter(post => post.title && post.body).slice(0, 20)));
    } catch (e) {
      dispatch(_postError(e));
    }
  }
}

const dummyData: Post[] = [
  {
    "title": "Qu'est-ce que le Lorem Ipsum?",
    "body": "Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. ",
    "id": 1
  },
  {
    "title": "Front-End (React) test assessment by DevelopsToday",
    "body": "In Next.js, a page is a React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory. Each page is associated with a route based on its file name.",
    "id": 2
  },
  {
    "title": "Design",
    "body": "The design is up to you. Simple, minimalistic and clean would be nice. As a general example check Ghost standard UI.",
    "id": 3
  },
  {
    "title": "Qu'est-ce que le Lorem Ipsum?",
    "body": "Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. ",
    "id": 4
  },
  {
    "title": "Front-End (React) test assessment by DevelopsToday",
    "body": "In Next.js, a page is a React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory. Each page is associated with a route based on its file name.",
    "id": 5
  },
  {
    "title": "Design",
    "body": "The design is up to you. Simple, minimalistic and clean would be nice. As a general example check Ghost standard UI.",
    "id": 6
  },
  {
    "title": "Qu'est-ce que le Lorem Ipsum?",
    "body": "Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. ",
    "id": 7
  },
  {
    "title": "Front-End (React) test assessment by DevelopsToday",
    "body": "In Next.js, a page is a React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory. Each page is associated with a route based on its file name.",
    "id": 8
  },
  {
    "title": "Design",
    "body": "The design is up to you. Simple, minimalistic and clean would be nice. As a general example check Ghost standard UI.",
    "id": 9
  },
  {
    "title": "Qu'est-ce que le Lorem Ipsum?",
    "body": "Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. ",
    "id": 10
  },
  {
    "title": "Front-End (React) test assessment by DevelopsToday",
    "body": "In Next.js, a page is a React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory. Each page is associated with a route based on its file name.",
    "id": 11
  },
  {
    "title": "Design",
    "body": "The design is up to you. Simple, minimalistic and clean would be nice. As a general example check Ghost standard UI.",
    "id": 12
  },
];

let dummyGetAllPosts: () => Promise<Post[]>;
dummyGetAllPosts = async () => {
  try {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(dummyData);
      }, 10);
    });
  } catch (e) {
    throw e;
  }
}

export {
  getAllPosts,
  dummyGetAllPosts,
  dummyData,
  getAllPostsDirect
}