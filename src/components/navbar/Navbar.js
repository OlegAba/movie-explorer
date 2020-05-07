import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/postActions';
import SearchIcon from 'react-ionicons/lib/MdSearch';
import './Navbar.css';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const title = this.state.title
    if (title) {
      this.props.fetchMovies(this.state.title);
    };
  }

  render() {
    return (
      <div className="Navbar">
        <div className="container-max-width">
            <div className="container-search">
              <form onSubmit={this.onSubmit}>
                <input 
                  type="text" 
                  name="title"
                  onChange={this.onChange}
                  value={this.state.title} 
                  placeholder="Type a movie to search..." 
                />
                <button type="search">
                  <SearchIcon color="#fff" fontSize="30px" />
                </button>
              </form>
            </div>
        </div>
      </div>
    )
  };
}

Navbar.propTypes = {
  fetchMovies: PropTypes.func.isRequired
  //createPost: PropTypes.func.isRequired
}

export default connect(null, { fetchMovies })(Navbar);
