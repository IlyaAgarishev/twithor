import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import './index.css';
import like from '../../img/like.png';

class Post extends Component {
  like = () => {
    this.likeIconn.style.backgroundImage = `url(${like})`;
  };

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
                onClick={this.like}
              />
              {this.props.state.addPost[postId].likes}
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
