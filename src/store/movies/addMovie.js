import { ADD_MOVIE } from './actions';

export default function(movieID, price){
  return (dispatch) => {
    dispatch({
      type : ADD_MOVIE,
      payload: {
        movie: movieID,
        price
      }
    })

  }
}