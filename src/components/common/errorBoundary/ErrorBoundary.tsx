import React from 'react';
import ErrorComponent from "../error/ErrorComponent";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  render() {
    if (this.state['hasError']) {
      return <ErrorComponent title={'Something went wrong. We are already fixing it.'}/>;
    }

    return this.props.children;
  }
}