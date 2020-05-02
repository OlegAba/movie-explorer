import React, { Component } from 'react';
import Navbar from '../navbar/Navbar'
import Results from '../results/Results'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>

        <section>
          <Results />
        </section>
      </div>
    )
  };
}

export default App;
