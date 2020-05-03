import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
      <div className="Movie">
        <div className="item">
          <h3>{this.props.title}</h3>
        </div>
      </div>
    )
  };
}

export default Movie;
