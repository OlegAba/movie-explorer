import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';

import Navbar from '../navbar/Navbar';
import Results from '../results/Results';
import store from '../../store'

console.log(process.env.REACT_APP_OMDB_APP_KEY);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header>
            <Navbar />
          </header>

          <section>
            <Results />
          </section>
        </div>
      </Provider>
    )
  };
}

export default App;
