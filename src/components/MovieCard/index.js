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
        <h3><b>{ movie.title }</b></h3>
        <img src={ SMALL_IMAGE_URL + movie.poster_path } alt=""/>
        <h4>Rating {movie.vote_average}</h4>
        <h4>Rp { PriceHelper(movie.vote_average) }</h4>
      </Div>
    </Link>

  );
}

export default MovieCard;