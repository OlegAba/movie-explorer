import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../../actions/postActions';
import Movie from './Movie';
import './Results.css';

class Results extends Component {

  componentWillMount() {
    this.props.fetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const movieItems = this.props.posts.map(post => (
      <Movie key={post.id} title={post.title} body={post.body} />
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
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Results);
