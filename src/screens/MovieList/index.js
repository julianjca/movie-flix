import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import ContentLoader from 'react-content-loader'

import getMoviesAction from '../../store/movies/getMovies';
import MovieCard from '../../components/MovieCard/index';

import { GridContainer } from './style';

const MyLoader = () => (
  <ContentLoader>
    <rect rx="5" ry="5" width="150" height="400" />
  </ContentLoader>
)

class MovieList extends Component {
  state = {
    currentPage: 1
  }

  componentWillReceiveProps(nextProps) {
    const parsedProps = queryString.parse(this.props.location.search);
    const parsedNextProps = queryString.parse(nextProps.location.search);

    if (parsedProps.page !== parsedNextProps.page) {
      nextProps.getMovies(parsedNextProps);
      this.setState({
        currentPage: parsedNextProps
      })
    }
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
          <React.Fragment>
            <GridContainer>
              {
                this.props.movieData.movies.map((movie)=>{
                  return <MovieCard movie= {movie} key={movie.id} />
                })
              }
            </GridContainer>
            <h4>total pages: {this.props.movieData.total_pages}</h4>
          </React.Fragment>


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