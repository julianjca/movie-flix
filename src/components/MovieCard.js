import React from 'react';
import { MOVIE_BY_ID_API, paramsByID, IMAGE_URL } from '../constants';
import PriceHelper from '../helpers/price';

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <div>
      <h2>{ movie.title }</h2>
      <img src={ IMAGE_URL + movie.poster_path } alt=""/>
      <h3>Rating {movie.vote_average}</h3>
      <h3>Rp { PriceHelper(movie.vote_average) }</h3>
      <h3>Duration { movie.runtime } minutes</h3>
    </div>
  );
}

export default MovieCard;