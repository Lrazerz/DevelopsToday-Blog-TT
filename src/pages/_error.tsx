import React from 'react';
import ErrorComponent from "../components/common/error/ErrorComponent";

function Error({statusCode}) {
  return (
    <ErrorComponent title={statusCode
      ? `An error ${statusCode} occurred on server`
      : 'An error occurred on client'}/>
  )
}

Error.getInitialProps = ({res, err}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return {statusCode}
}

export default Error