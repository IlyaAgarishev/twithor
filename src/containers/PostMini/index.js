import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import like from '../../img/like.png';
import comments from '../../img/comments.png';

class PostMini extends Component {
  like = () => {
    this.props.onLike(this.props.index);
    this.likeIcon.style.backgroundImage = 'url(' + like + ')';
  };

  render() {
    return (
      <div className="postMini">
        <Link to={'/post/' + this.props.index} className="top-wrapper">
          <div className="timeOfPublishing">{this.props.post.time}</div>
          <div className="postMadeBy">{this.props.post.name}</div>
        </Link>
        <Link to={'/post/' + this.props.index} className="middle-wrapper">
          <div className="postMini-title">{this.props.post.title}</div>
          <div className="postMini-text">{this.props.post.text}</div>
        </Link>
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
            {this.props.state.addPost[this.props.index].comments.length}
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
