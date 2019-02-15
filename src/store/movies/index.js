import { REQUEST_MOVIE_LIST, REQUEST_MOVIE_SUCCESS, REQUEST_MOVIE_FAILED } from './actions';

const initialState = {
  isMovieLoaded: false,
  movies: {},
  errors: '',
  total_pages: 0
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
        errors: '',
        total_pages: action.payload.total_pages
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