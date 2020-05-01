import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="navbar">
          <div className="container-max-width">
            <div className="container-search">
              <input type="text" placeholder="Type something to search..." />
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="container-results container-max-width">
          <div className="grid-row">
            <div className="grid-item"><div className="item"></div></div>
            <div className="grid-item"><div className="item"></div></div>
            <div className="grid-item"><div className="item"></div></div>
            <div className="grid-item"><div className="item"></div></div>
            <div className="grid-item"><div className="item"></div></div>
            <div className="grid-item"><div className="item"></div></div>
            <div className="grid-item"><div className="item"></div></div>
            <div className="grid-item"><div className="item"></div></div>
            <div className="grid-item"><div className="item"></div></div>
            <div className="grid-item"><div className="item"></div></div>
            <div className="grid-item"><div className="item"></div></div>
            <div className="grid-item"><div className="item"></div></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
