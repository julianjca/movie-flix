import React, { Component } from 'react';
import axios from 'axios';

import { MOVIE_BY_ID_API, paramsByID } from '../constants';

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
        <h2>Movie Details Component</h2>
        {
          isLoaded
          ? <h4>{ JSON.stringify(movieDetails) }</h4>
          : <h4>Loading Data from API</h4>
        }
      </div>
    );
  }
}

export default MovieDetails;