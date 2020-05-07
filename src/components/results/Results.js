import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 

import { deleteMovie } from '../../actions/movieActions';
import Movie from './Movie';
import './Results.css';

class Results extends Component {

  constructor(props) {
    super(props);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  deleteMovie(index) {
    this.props.deleteMovie(index);
  }

  render() {
    const movieItems = this.props.movies.map((movie, index) => (
      <Movie 
      key={index}
      id={index}
      poster={movie.Poster}
      title={movie.Title}
      year={movie.Year}
      onClick={this.deleteMovie}/>
    ));

    return (
      <div className="Results container-max-width">
        <div className="grid-row">
          {movieItems}
        </div>
      </div>
    )
  };
}

Results.propTypes = {
  movies: PropTypes.array.isRequired,
  deleteMovie: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movies: state.data.movies
})

export default connect(mapStateToProps, { deleteMovie })(Results);
