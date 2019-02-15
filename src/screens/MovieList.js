import React from 'react';
import queryString from 'query-string';

const MovieList = (props) => {
  const parsed = queryString.parse(props.location.search);

  return (
    <div>Movie List Component</div>
  )
}

export default MovieList;