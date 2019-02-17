const API_KEY = '17f155cf401439f44476ce31a909de90'
// const region = 'US';
const region = 'ID';
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

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w400';
export const SMALL_IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

export const YOUTUBE_TRAILER_API = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&key=AIzaSyAbXH5HXzHQR7pwhFGdmNkMF2Eta2-QyQ0';

export const YOUTUBE_BASE_URL = 'https://www.youtube.com/embed/';
