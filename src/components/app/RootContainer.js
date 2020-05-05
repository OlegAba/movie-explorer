import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchRandomMovies } from '../../actions/postActions';

import Navbar from '../navbar/Navbar';
import Results from '../results/Results';

class RootContainer extends Component {

  componentDidMount() {
    this.props.fetchRandomMovies(10);
  }

  render() {
    return (
        <div className="RootContainer">
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

const mapStateToProps = state => ({
    movies: state.posts.movies
})

//export default RootContainer;
export default connect(mapStateToProps, { fetchRandomMovies })(RootContainer);
