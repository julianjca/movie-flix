import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';

import getMoviesAction from '../../store/movies/getMovies';
import MovieCard from '../../components/MovieCard';
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
          this.props.movieData.movies.map((movie)=>{
            return <MovieCard movie= {movie} key={movie.id} />
          })
          :
          <h3>Loading data</h3>
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