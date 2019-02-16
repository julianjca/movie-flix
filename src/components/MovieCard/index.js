import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StarRatings from 'react-star-ratings';


import { SMALL_IMAGE_URL } from '../../constants';
import PriceHelper from '../../helpers/price';
import { Div } from './style';

const MovieCard = (props) => {
  const { movie, movieData } = props;
  const splittedTitle = movie.title.split(' ').join('-')
  return (
    <Link
      to={{
        pathname: `${movie.id}-${splittedTitle}`,
      }}
    >
      <Div>
        <img src={ SMALL_IMAGE_URL + movie.poster_path } alt=""/>
        <h3><b>{ movie.title }</b></h3>
        {/* <h4>Rating {movie.vote_average}</h4> */}
        <StarRatings
          rating={movie.vote_average/2}
          starDimension="12px"
          starSpacing="2px"
        />
        {
          movieData.ownedMovies.includes(movie.id.toString())
          &&
          <h4>owned</h4>
        }
        <h4>Rp { PriceHelper(movie.vote_average) }</h4>
      </Div>
    </Link>

  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    movieData: state
  }
}

export default connect(mapStateToProps, null)(MovieCard);