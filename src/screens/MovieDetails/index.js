import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import CircularProgressbar from 'react-circular-progressbar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-circular-progressbar/dist/styles.css';

import { MOVIE_BY_ID_API, paramsByID, IMAGE_URL, YOUTUBE_TRAILER_API, YOUTUBE_BASE_URL } from '../../constants';

import PriceHelper from '../../helpers/price';
import ColorHelper from '../../helpers/color';

import addMovieAction from '../../store/movies/addMovie';

import { InnerDiv, Div, H1, OuterDiv, Button, TitleGrid } from './style';

import Loader from '../../components/MovieDetailLoader';

class MovieDetails extends Component {
  state = {
    movieDetails: {},
    isLoaded: false,
    isOwned: false,
    youtubeUrl: ''
  }

  componentDidMount = async () => {
    const { match : { params }, movieData: { ownedMovies } } = this.props;
    const movieID = params.movie.split('-')[0];
    try {
      const { data } = await axios({
        method:'GET',
        url: `${MOVIE_BY_ID_API}${movieID}`,
        params: paramsByID
      });

      const youtubeData = await axios({
        method: 'GET',
        url: YOUTUBE_TRAILER_API,
        params: {
          q: data.title + 'trailer'
        }
      });

      this.setState({
        isLoaded: true,
        movieDetails: data,
        isOwned: ownedMovies.includes(movieID),
        youtubeUrl: YOUTUBE_BASE_URL + youtubeData.data.items[0].id.videoId
      })
    } catch (e) {
      console.log(e)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { movieDetails } = this.state;
    const { movieData: {ownedMovies}} = this.props;

    if(nextProps.movieData.ownedMovies !== ownedMovies){
      this.setState({
        isOwned: nextProps.movieData.ownedMovies.includes(movieDetails.id.toString())
      })
    }
  }

  addMovie = () => {
    const { movieDetails } = this.state;
    const { movieData: { balance, ownedMovies }, addMovie } = this.props;
    if((balance - PriceHelper(movieDetails.vote_average)> 0) && ! ownedMovies.includes(movieDetails.id)) {
      addMovie(movieDetails.id.toString(), PriceHelper(movieDetails.vote_average));
      toast.success('Success buying movie!');
    }
    else {
      toast.error('Insufficient fund!');
    }
  }

  render() {
    const { isLoaded, movieDetails, isOwned, youtubeUrl } = this.state;
    console.log(this.state)
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
                <iframe
                title="Youtube-Trailer"
                width="600" height="300"
                src={youtubeUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
                </iframe>
                <TitleGrid>
                  <div>
                    <h2>Overview</h2>
                    <h4>{ movieDetails.runtime } minutes</h4>
                  </div>
                  <div
                  style={{ width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3%' }}>
                  <CircularProgressbar
                    percentage={movieDetails.vote_average * 10}
                    text={`${movieDetails.vote_average * 10}%`}
                    styles={{
                      path: { stroke: ColorHelper(movieDetails.vote_average) },
                      text: { fill: ColorHelper(movieDetails.vote_average), fontSize: '25px' },
                    }}
                  />
                </div>
                </TitleGrid>

                <p>{movieDetails.overview}</p>
                <TitleGrid>
                  <h3>Rp { PriceHelper(movieDetails.vote_average) }</h3>
                  {
                    isOwned ?
                    <Button inactive>BOUGHT</Button>
                    :
                    <Button onClick={this.addMovie}>buy movie</Button>
                  }
                </TitleGrid>

              </InnerDiv>
            </Div>

          </OuterDiv>
          : <Loader />
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