import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


import { MOVIE_BY_ID_API, paramsByID, IMAGE_URL } from '../../constants';
import PriceHelper from '../../helpers/price';
import addMovieAction from '../../store/movies/addMovie';
import { InnerDiv, Div } from './style';

class MovieDetails extends Component {
  state = {
    movieDetails: {},
    isLoaded: false,
    isOwned: false
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
        movieDetails: data,
        isOwned: this.props.movieData.ownedMovies.includes(movieID)
      })
    } catch (e) {
      console.log(e)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { movieDetails } = this.state;
    if(nextProps.movieData.ownedMovies !== this.props.movieData.ownedMovies){
      this.setState({
        isOwned: nextProps.movieData.ownedMovies.includes(movieDetails.id.toString())
      })
    }
  }

  addMovie = () => {
    const { movieDetails } = this.state;
    if((this.props.movieData.balance - PriceHelper(movieDetails.vote_average)> 0) && !this.props.movieData.ownedMovies.includes(movieDetails.id)) {
      this.props.addMovie(movieDetails.id.toString(), PriceHelper(movieDetails.vote_average));
    }
  }

  render() {
    const { isLoaded, movieDetails, isOwned } = this.state;
    return (
      <div>
        {
          isLoaded
          ?
          <Fragment>
            <h1>{ movieDetails.title }</h1>
            <Div>
              <img src={ IMAGE_URL + movieDetails.poster_path } alt=""/>
              <InnerDiv>
                <p>{movieDetails.overview}</p>
                <div style={{ width: '100px' }}>
                  <CircularProgressbar
                    percentage={movieDetails.vote_average * 10}
                    text={`${movieDetails.vote_average * 10}%`}
                  />
                </div>
                <h3>Rp { PriceHelper(movieDetails.vote_average) }</h3>
                <h3>Duration { movieDetails.runtime } minutes</h3>
                {
                  isOwned ?
                  <h3>you already bought this movie</h3>
                  :
                  <button onClick={this.addMovie}>buy movie</button>
                }
              </InnerDiv>
            </Div>

          </Fragment>
          : <h4>Loading Data from API</h4>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movieData: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addMovie: (movieID, price) => {
      dispatch(addMovieAction(movieID, price))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);