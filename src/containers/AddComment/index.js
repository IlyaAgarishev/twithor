import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import './index.css';
import { connect } from 'react-redux';

class AddComment extends Component {
  addComment = () => {
    this.props.onAddComment(
      this.props.index,
      this.addCommentAuthor.value,
      this.addCommentText.value
    );

    this.addCommentText.value = '';
  };

  render() {
    return (
      <form className="addComment-body">
        <input
          type="text"
          className="addComment-author"
          ref={ref => (this.addCommentAuthor = ref)}
          maxLength="30"
          placeholder="Your name"
        />
        <Textarea
          className="addComment"
          placeholder="Add comment"
          inputRef={ref => (this.addCommentText = ref)}
        />
        <button type="submit" className="addComment-button" onClick={this.addComment}>
          Go
        </button>
      </form>
    );
  }
}

export default connect(
  state => ({
    state
  }),
  dispatch => ({
    onAddComment: (index, author, text) => {
      const payload = {
        key: Date.now().toString(),
        author: author,
        comment: text,
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes()
      };
      dispatch({ type: 'ADD_COMMENT', payload, index });
    }
  })
)(AddComment);
