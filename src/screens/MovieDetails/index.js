import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import CircularProgressbar from 'react-circular-progressbar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-circular-progressbar/dist/styles.css';


import { MOVIE_BY_ID_API, paramsByID, IMAGE_URL } from '../../constants';
import PriceHelper from '../../helpers/price';
import ColorHelper from '../../helpers/color';
import addMovieAction from '../../store/movies/addMovie';
import { InnerDiv, Div, H1, OuterDiv, Button } from './style';

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
      console.log(data)
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
      toast.success('Success buying movie!');
    }
    else {
      toast.error('No sufficient fund!');
    }

  }

  render() {
    const { isLoaded, movieDetails, isOwned } = this.state;
    return (
      <div>
        {
          isLoaded
          ?
          <OuterDiv>
            <H1>{ movieDetails.title }</H1>
            <Div>
              <img src={ IMAGE_URL + movieDetails.poster_path } alt=""/>
              <InnerDiv>
                <h2>Overview</h2>
                <p>{movieDetails.overview}</p>
                <div style={{ width: '100px' }}>
                  <CircularProgressbar
                    percentage={movieDetails.vote_average * 10}
                    text={`${movieDetails.vote_average * 10}%`}
                    styles={{
                      path: { stroke: ColorHelper(movieDetails.vote_average) },
                      text: { fill: ColorHelper(movieDetails.vote_average), fontSize: '16px' },
                    }}
                  />
                </div>
                <h3>Rp { PriceHelper(movieDetails.vote_average) }</h3>
                <h3>Duration { movieDetails.runtime } minutes</h3>
                {
                  isOwned ?
                  <Button inactive>BOUGHT</Button>
                  :
                  <Button onClick={this.addMovie}>buy movie</Button>
                }
              </InnerDiv>
            </Div>

          </OuterDiv>
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