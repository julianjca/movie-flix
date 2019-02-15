import { REQUEST_MOVIE_LIST, REQUEST_MOVIE_SUCCESS, REQUEST_MOVIE_FAILED, ADD_MOVIE } from './actions';

const initialState = {
  isMovieLoaded: false,
  movies: {},
  errors: '',
  total_pages: 0,
  ownedMovies: [],
  balance: 100000
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
      case ADD_MOVIE:
      return {
        ...state,
        ownedMovies: state.ownedMovies.concat(action.payload.movie),
        balance: state.balance - action.payload.price
      }
    default:
      return state
  }
}

export default MovieReducer;