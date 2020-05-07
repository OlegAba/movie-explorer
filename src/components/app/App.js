import React, { Component } from 'react';
import { Provider } from 'react-redux';

import RootContainer from './RootContainer';
import store from '../../store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  };
}

export default App;
