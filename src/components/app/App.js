import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">

      <header>
        <Navbar className="navbar" bg="" fixed="top">
          <div className="container-max-width">
            <div className="container-search">
              <input type="text" placeholder="Type something to search.." />
            </div>
          </div>
        </Navbar>
      </header>



      <div className="section container-max-width">
        hello
      </div>
    </div>
  );
}

export default App;
