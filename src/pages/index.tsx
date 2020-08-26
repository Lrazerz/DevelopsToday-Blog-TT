import React from 'react';
import Container from "../components/common/Container";
import PostsList from "../components/posts/PostsList";
import {getAllPosts, dummyGetAllPosts} from '../redux/actions/postsActions';
import ErrorBoundary from "../components/common/errorBoundary/ErrorBoundary";
import ErrorComponent from "../components/common/error/ErrorComponent";
import {wrapper} from "../redux/store";

function indexPage({error = null, posts = []}) {

  if (error) {
    return <ErrorComponent title={'Error fetching data. Check your internet connection and try again.'}/>
  }

  return (
    <ErrorBoundary>
      <Container>
        <PostsList posts={posts}/>
      </Container>
    </ErrorBoundary>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({store, params}) => {
    // @ts-ignore
    await store.dispatch(getAllPosts());

    return {props: {posts: store.getState().posts, error: store.getState().postsError}};
  }
);

export default indexPage;