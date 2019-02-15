import React from 'react';

const MovieCard = (props) => {
  return (
    <div>
      {JSON.stringify(props.movie)}
    </div>
  );
}

export default MovieCard;