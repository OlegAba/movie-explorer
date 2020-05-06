import React, { Component } from 'react';
import RemoveIcon from 'react-ionicons/lib/MdClose';
import unavailableImage from '../../assets/unavailable-image.jpg'
import './Movie.css';

class Movie extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onError = this.onError.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.props.onClick(this.props.id);
  }

  onError(event) {
    event.target.onerror = null;
    event.target.src = unavailableImage;
  }

  render() {
    return (
      <div className="Movie">
        <div className="item">
          <img src={this.props.poster} onError={this.onError} alt="poster" />
          <RemoveIcon className="icon" onClick={this.onClick} color="#ff443a" fontSize="20px" />
          <div className="container-placeholder"></div>
          <div className="container-text">
            <h1>{this.props.title}</h1>
            <h2>{this.props.year}</h2>
          </div>
        </div>
      </div>
    )
  };
}

export default Movie;
