import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import './App.css';
import MovieList from './screens/MovieList';
import MovieDetails from './screens/MovieDetails';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path='/' component = { MovieList }/>
              <Route path='/:movie' component = { MovieDetails }/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;