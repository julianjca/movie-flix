import React from 'react';

const MovieList = (props) => {
  const { match : { params } } = props;
  console.log(params)
  return (
    <div>
      <h2>Movie Details Component</h2>
    </div>
  )
}

export default MovieList;