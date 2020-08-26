import React from 'react';
import {getSinglePost} from '../../redux/actions/singlePostActions';
import Container from "../../components/common/Container";
import SinglePost from "../../components/singlePost/SinglePost";
import ErrorBoundary from "../../components/common/errorBoundary/ErrorBoundary";
import {getAllPostsDirect} from "../../redux/actions/postsActions";
import {wrapper} from '../../redux/store';

export const getStaticProps = wrapper.getStaticProps(
  async ({store, params}) => {
    // @ts-ignore
    await store.dispatch(getSinglePost(params.id));
    return {props: {}};
  }
);

export async function getStaticPaths() {
  // Can not connect redux, direct request to /posts (ssr) or just return fallback: true
  const posts = await getAllPostsDirect();

  const paths = [];
  posts.forEach(post => paths.push({params: {id: post.id.toString()}}));

  return {
    paths,
    fallback: true,
  }
}


function SinglePostPage() {

  return (
    <Container>
      <ErrorBoundary>
        <SinglePost/>
      </ErrorBoundary>
    </Container>
  )
}

export default SinglePostPage;