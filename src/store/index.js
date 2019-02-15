import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import MovieReducer from './movies';

const store = createStore(MovieReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

export default store