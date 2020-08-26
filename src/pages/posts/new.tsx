import React from 'react';
import Container from "../../components/common/Container";
import CreatePost from "../../components/createPost/CreatePost";
import ErrorBoundary from "../../components/common/errorBoundary/ErrorBoundary";

function CreatePostPage() {
  return (
    <Container>
      <ErrorBoundary>
        <CreatePost/>
      </ErrorBoundary>
    </Container>
  )
}

export default CreatePostPage;