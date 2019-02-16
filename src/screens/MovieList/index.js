import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';import { Link } from 'react-router-dom'

import getMoviesAction from '../../store/movies/getMovies';
import MovieCard from '../../components/MovieCard/index';
import MoviePlaceHolder from '../../components/MoviePlaceHolder';
import PaginationButton from '../../components/PaginationButton';

import { GridContainer, H2 } from './style';

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
        currentPage: parsedNextProps.page
      })
    }
  }

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    this.props.getMovies(parsed.page ||
    this.props.location.search[this.props.location.search.length-1] ||
    this.state.currentPage);
    this.setState({
      currentPage: parsed.page || 1
    })
  }

  render() {
    return (
      <div>
        <H2>Movies</H2>
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
            {
              Number(this.state.currentPage) === 1
              ?
              <React.Fragment>
                {
                  this.props.movieData.total_pages === 1
                  ?
                  <h4>The total page is only 1</h4>
                  :
                  <PaginationButton
                    to={{
                      pathname: "/",
                      search: `?page=${Number(this.state.currentPage) + 1}`,
                    }}
                    text= "Next Page"
                  />
                }
              </React.Fragment>
              :
              <React.Fragment>
                {
                  Number(this.props.movieData.total_pages) === Number(this.state.currentPage)
                  ?
                  <PaginationButton
                    to={{
                      pathname: "/",
                      search: `?page=${Number(this.state.currentPage) - 1}`,
                    }}
                    text= "Previous Page"
                  />
                  :
                  <React.Fragment>
                    <PaginationButton
                      to={{
                        pathname: "/",
                        search: `?page=${Number(this.state.currentPage) - 1}`,
                      }}
                      text= "Previous Page"
                    />
                    <PaginationButton
                      to={{
                        pathname: "/",
                        search: `?page=${Number(this.state.currentPage) + 1}`,
                      }}
                      text= "Next Page"
                    />
                  </React.Fragment>

                }
              </React.Fragment>
            }
          </React.Fragment>
          :
          <MoviePlaceHolder />
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