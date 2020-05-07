import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/BarLoader'

import Navbar from '../navbar/Navbar';
import Results from '../results/Results';
import { fetchRandomMovies } from '../../actions/movieActions';

class RootContainer extends Component {

  componentDidMount() {
    this.props.fetchRandomMovies(10);
  }

  render() {
    const clipLoader = 
    <div className="container-loader container-max-width">
      <ClipLoader css={override} size={25} color={'#2f8be6'} loading={this.props.isLoading} />
    </div>

    return (
      <div className="RootContainer">
        <header>
          <Navbar />
        </header>

        <section>
          {clipLoader}
          <Results />
        </section>
      </div>
    )
  };
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
  width: 100%;
`;

RootContainer.propTypes = {
  fetchRandomMovies: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.data.isLoading,
})

export default connect(mapStateToProps, { fetchRandomMovies })(RootContainer);
