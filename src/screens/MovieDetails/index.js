import React, { Component, Fragment } from 'react';
import axios from 'axios';

import { MOVIE_BY_ID_API, paramsByID, IMAGE_URL } from '../../constants';
import PriceHelper from '../../helpers/price';

class MovieDetails extends Component {
  state = {
    movieDetails: {},
    isLoaded: false
  }

  componentDidMount = async () => {
    const { match : { params } } = this.props;
    const movieID = params.movie.split('-')[0];
    try {
      const { data } = await axios({
        method:'GET',
        url: `${MOVIE_BY_ID_API}${movieID}`,
        params: paramsByID
      });
      console.log(data)
      this.setState({
        isLoaded: true,
        movieDetails: data
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { isLoaded, movieDetails } = this.state;
    return (
      <div>
        {
          isLoaded
          ?
          <Fragment>
            <h2>{ movieDetails.title }</h2>
            <img src={ IMAGE_URL + movieDetails.poster_path } alt=""/>
            <h3>Rating {movieDetails.vote_average}</h3>
            <h3>Rp { PriceHelper(movieDetails.vote_average) }</h3>
            <h3>Duration { movieDetails.runtime } minutes</h3>

          </Fragment>
          : <h4>Loading Data from API</h4>
        }
      </div>
    );
  }
}

export default MovieDetails;