import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';

class PostMiniTop extends Component {
  render() {
    return (
      <div className="postMini">
        <div className="top-wrapper">
          <div className="timeOfPublishing">{this.props.post.time}</div>
          <div className="postMadeBy">{this.props.post.name}</div>
        </div>
        <div className="middle-wrapper">
          <div className="postMini-title">{this.props.post.title}</div>
          <div className="postMini-text">{this.props.post.text}</div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    state
  }),
  dispatch => ({})
)(PostMiniTop);
