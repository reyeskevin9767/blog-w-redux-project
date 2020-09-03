import React, { Component } from 'react';
import { connect } from 'react-deux';
import { fetchPosts } from '../actions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Post List</div>;
  }
}

export default connect(null, { fetchPosts })(PostList);
