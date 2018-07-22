import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

class Comment extends Component {
  render() {
    const commnetIndex = this.props.commentIndex;
    const postIndex = this.props.postIndex;
    return (
      <div className="comment-body">
        <div className="comment-top-wrapper">
          <div className="comment-author">
            {this.props.comments.addPost[postIndex].comments[commnetIndex].author}
          </div>
          <div className="comment-time">
            {this.props.comments.addPost[postIndex].comments[commnetIndex].time}
          </div>
        </div>
        <div className="comment">
          {this.props.comments.addPost[postIndex].comments[commnetIndex].comment}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    comments: state
  }),
  dispatch => ({})
)(Comment);
