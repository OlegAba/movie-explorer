import React, { Component } from 'react';
import Movie from './Movie'
import './Results.css';

class Results extends Component {
  render() {
    return (
      <div className="Results container-max-width">
        <div className="grid-row">
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </div>
      </div>
    )
  };
}

export default Results;
