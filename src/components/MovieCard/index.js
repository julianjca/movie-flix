import React from 'react';
import { Link } from 'react-router-dom'

import { SMALL_IMAGE_URL } from '../../constants';
import PriceHelper from '../../helpers/price';
import { Div } from './style';

const MovieCard = (props) => {
  const { movie } = props;
  const splittedTitle = movie.title.split(' ').join('-')

  return (
    <Link
      to={{
        pathname: `${movie.id}-${splittedTitle}`,
      }}
    >
      <Div>
        <h2>{ movie.title }</h2>
        <img src={ SMALL_IMAGE_URL + movie.poster_path } alt=""/>
        <h3>Rating {movie.vote_average}</h3>
        <h3>Rp { PriceHelper(movie.vote_average) }</h3>
      </Div>
    </Link>

  );
}

export default MovieCard;