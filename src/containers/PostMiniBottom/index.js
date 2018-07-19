import React, { Component } from 'react';
import './index.css';
import likeEmpty from '../../img/likeEmpty.png';
import like from '../../img/like.png';
import comments from '../../img/comments.png';
import { connect } from 'react-redux';

class PostMiniBottom extends Component {
  like = () => {
    this.props.onLike(this.props.index);
    this.likeIcon.style.backgroundImage = 'url(' + like + ')';
  };

  render() {
    return (
      <div className="bottom-wrapper">
        <div className="postMini-likes">
          <div
            className="like"
            ref={ref => {
              this.likeIcon = ref;
            }}
            onClick={this.like}
          />
          {this.props.state.addPost[this.props.index].likes}
        </div>
        <div className="postMini-comments">
          <img className="comments" src={comments} alt="" />
          {this.props.state.addPost[this.props.index].comments}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    state: state
  }),
  dispatch => ({
    onLike: index => {
      dispatch({ type: 'ADD_LIKE', index: index });
    }
  })
)(PostMiniBottom);
