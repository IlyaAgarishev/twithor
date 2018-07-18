import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  render() {
    return (
      <div>
        <div className="post-title">{this.props.state.addPost[3].title}</div>
        <br />
        <div className="post-text">{this.props.state.addPost[3].text}</div>
        <br />
        likes: {this.props.state.addPost[3].likes}
      </div>
    );
  }
}

export default connect(
  state => ({ state }),
  dispatch => ({})
)(Post);
