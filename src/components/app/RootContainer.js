import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchRandomMovies } from '../../actions/postActions';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/BarLoader'

import Navbar from '../navbar/Navbar';
import Results from '../results/Results';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
  width: 100%;
`;

class RootContainer extends Component {

  componentDidMount() {
    this.props.fetchRandomMovies(1);
  }

  render() {
    const clipLoader = 
    <div className="container-loader container-max-width">
      <ClipLoader css={override} size={25} color={'#fff'} loading={this.props.isLoading} />
    </div>

    return (
        <div className="RootContainer">
          <header>
            <Navbar />
          </header>

          <section>
            {clipLoader}
            <Results />
            {/* {this.props.isLoading ? clipLoader : <Results />} */}
          </section>
        </div>
    )
  };
}

const mapStateToProps = state => ({
    isLoading: state.posts.isLoading,
    movies: state.posts.movies
})

//export default RootContainer;
export default connect(mapStateToProps, { fetchRandomMovies })(RootContainer);
