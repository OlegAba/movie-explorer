import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-max-width">
            <div className="container-search">
            <input type="text" placeholder="Type something to search..." />
            </div>
        </div>
      </div>
    )
  };
}

export default Navbar;
