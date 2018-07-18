import React, { Component } from 'react';
import './index.css';
import likeEmpty from '../../img/likeEmpty.png';
import like from '../../img/like.png';
import comments from '../../img/comments.png';
import { connect } from 'react-redux';

class PostMini extends Component {
  like = () => {
    this.props.onLike(this.props.index);
    this.likeIcon.style.backgroundImage = 'url(' + like + ')';
  };

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
        <div className="bottom-wrapper">
          <div className="postMini-likes">
            <div
              onClick={this.like}
              className="like"
              ref={ref => {
                this.likeIcon = ref;
              }}
            />
            {this.props.likes}
          </div>
          <div className="postMini-comments">
            <img className="comments" src={comments} alt="" />
            {this.props.post.comments}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    state
  }),
  dispatch => ({
    onLike: index => {
      dispatch({ type: 'ADD_LIKE', index: index });
    }
  })
)(PostMini);
