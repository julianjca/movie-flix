import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import ContentLoader from 'react-content-loader'

import getMoviesAction from '../../store/movies/getMovies';
import MovieCard from '../../components/MovieCard';

import { GridContainer } from './style';

const MyLoader = () => (
  <ContentLoader>
    <rect rx="5" ry="5" width="150" height="400" />
  </ContentLoader>
)

class MovieList extends Component {
  state = {
    movieList: {},
    currentPage: 1
  }

  componentDidMount() {
    this.props.getMovies(this.state.currentPage);
    const parsed = queryString.parse(this.props.location.search);
    this.setState({
      currentPage: parsed.page || 1
    })
  }

  render() {
    return (
      <div>
        <h2>Movie List Component</h2>
        {
          this.props.movieData.isMovieLoaded
          ?
          <GridContainer>
            {
              this.props.movieData.movies.map((movie)=>{
                return <MovieCard movie= {movie} key={movie.id} />
              })
            }
          </GridContainer>

          :
          <GridContainer>
            <MyLoader />
            <MyLoader />
            <MyLoader />
            <MyLoader />
            <MyLoader />
          </GridContainer>
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
    getMovies: (page) => {
      dispatch(getMoviesAction(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);