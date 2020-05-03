import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';
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

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title
    }

    this.props.createPost(post);
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
                  placeholder="Type something to search..." 
                />
                <button type="search">Search</button>
              </form>
            </div>
        </div>
      </div>
    )
  };
}

Navbar.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(Navbar);
