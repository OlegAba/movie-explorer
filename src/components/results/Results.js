import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts, fetchMovies } from '../../actions/postActions';
import Movie from './Movie';
import './Results.css';

class Results extends Component {

  // componentWillMount() {
  //   //this.props.fetchPosts()
  //   this.props.fetchMovies("Inception");
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newPost) {
  //     this.props.posts.unshift(nextProps.newPost);
  //   }
  // }

  render() {
    const movieItems = this.props.movies.map((post, index) => (
      <Movie key={index} title={post.Title}/>
    ));

    return (
      <div className="Results container-max-width">
        <div className="grid-row">
          {movieItems}
        </div>
      </div>
    )

    // return (
    //   <div className="Results container-max-width">
    //     <div className="grid-row">
    //       <Movie />
    //     </div>
    //   </div>
    // )
  };
}

Results.propTypes = {
  //fetchPosts: PropTypes.func.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired
  //posts: PropTypes.array.isRequired,
  //newPost: PropTypes.object
};

const mapStateToProps = state => ({
  movies: state.posts.movies
})

//export default connect(mapStateToProps, { fetchPosts })(Results);
export default connect(mapStateToProps, { fetchMovies })(Results);
