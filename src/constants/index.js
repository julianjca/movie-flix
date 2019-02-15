const API_KEY = '17f155cf401439f44476ce31a909de90'
const region = 'US';
const language = 'en';

export const paramsNowPlaying = {
  api_key: API_KEY,
  region,
  language
}

export const paramsByID = {
  api_key: API_KEY
}

export const NOW_PLAYING_API = 'https://api.themoviedb.org/3/movie/now_playing';

export const MOVIE_BY_ID_API = 'https://api.themoviedb.org/3/movie/';

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
export const SMALL_IMAGE_URL = 'https://image.tmdb.org/t/p/w200'

