import React from 'react';
import queryString from 'query-string';

const MovieList = (props) => {
  const parsed = queryString.parse(props.location.search);

  return (
    <div>
      <h2>Movie List Component</h2>
      <h6>{ parsed.page || '' }</h6>
    </div>
  )
}

export default MovieList;