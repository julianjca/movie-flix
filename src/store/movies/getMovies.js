import axios from 'axios'

import { REQUEST_MOVIE_LIST, REQUEST_MOVIE_SUCCESS, REQUEST_MOVIE_FAILED } from './actions';
import { NOW_PLAYING_API, paramsNowPlaying } from '../../constants';

export default function(page){
  return (dispatch) => {
    dispatch({
      type : REQUEST_MOVIE_LIST
    })

    console.log(page)

    paramsNowPlaying.page = page.page;
    axios({
      method : 'GET',
      url : NOW_PLAYING_API,
      params: paramsNowPlaying
    })
      .then(({data})=>{
        dispatch({
          type : REQUEST_MOVIE_SUCCESS,
          payload : {
            movies : data.results,
            isMovieLoaded : true,
            errors : '',
            total_pages: data.total_pages
          }
        })
      })

      .catch(err=>{
        console.log(err)
        dispatch({
          type : REQUEST_MOVIE_FAILED,
          payload : {
            characters : [],
            isMovieLoaded : false,
            errors : ''
          }
        })
      })
  }
}