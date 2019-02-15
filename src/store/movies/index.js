import { REQUEST_MOVIE_LIST, REQUEST_MOVIE_SUCCESS, REQUEST_MOVIE_FAILED } from './actions';

const initialState = {
  isMovieLoaded: false,
  movies: {},
  errors: ''
}

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MOVIE_LIST:
      return {
        ...state
      }
    case REQUEST_MOVIE_SUCCESS:
      return {
        ...state,
        isMovieLoaded: true,
        movies: action.payload.movies,
        errors: ''
      }
    case REQUEST_MOVIE_FAILED:
      return {
        ...state,
        isMovieLoaded: false,
        movies: {},
        errors: 'error getting data'
      }
    default:
      return state
  }
}

export default MovieReducer;