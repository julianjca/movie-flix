import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';

import getMoviesAction from '../../store/movies/getMovies';

class MovieList extends Component {
  state = {
    movieList: {},
    currentPage: 1
  }

  componentDidMount() {
    console.log(this.props);
    this.props.getMovies(this.state.currentPage);
    const parsed = queryString.parse(this.props.location.search);
    console.log(parsed)
    this.setState({
      currentPage: parsed.page || 1
    })
  }

  render() {
    return (
      <div>
        <h2>Movie List Component</h2>
        <h6>{ this.state.currentPage || '' }</h6>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    props: state
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