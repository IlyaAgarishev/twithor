import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import './index.css';
import like from '../../img/like.png';
import AddComment from '../AddComment';
import Comment from '../Comment';

class Post extends Component {
  render() {
    const postId = document.location.hash.split('/')[document.location.hash.split('/').length - 1];
    return (
      <div>
        <Header />
        <div className="post-body">
          <div className="post">
            <div className="post-madeBy">
              Made by <strong>{this.props.state.addPost[postId].name}</strong>
            </div>
            <div className="post-title">{this.props.state.addPost[postId].title}</div>
            <div className="post-text">{this.props.state.addPost[postId].text}</div>
            <div className="post-likes">
              <div
                className="post-like"
                ref={ref => {
                  this.likeIconn = ref;
                }}
                onClick={() => {
                  this.likeIconn.style.backgroundImage = `url(${like})`;
                  this.props.onLike(postId);
                }}
              />
              {this.props.state.addPost[postId].likes}
            </div>
            <AddComment index={postId} />
            <div className="post-comments">
              {this.props.state.addPost[postId].comments.map((comment, index) => {
                return <Comment postIndex={postId} commentIndex={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ state }),
  dispatch => ({
    onLike: index => {
      dispatch({ type: 'ADD_LIKE', index: index });
    }
  })
)(Post);
