import React, { Component } from 'react';
import Header from '../../components/Header';
import './index.css';
import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';

class AddPost extends Component {
  constructor(props) {
    super(props);
  }

  addPost = () => {
    this.props.onAddPost(this.addPostAuthor.value, this.addPostTitle.value, this.addPostText.value);

    document.location.href = 'http://localhost:3000/?#/blog';
  };

  render() {
    return (
      <div>
        <Header />
        <div className="addPost-body">
          <form className="addPost" onSubmit={this.addPost}>
            <button type="submit" className="submitArticle">
              Tweeth
            </button>
            <input
              type="text"
              maxLength="30"
              className="addPost-author"
              placeholder="Your name"
              ref={ref => (this.addPostAuthor = ref)}
              onKeyDown={event => {
                if (event.keyCode == 13) {
                  event.preventDefault();
                }
              }}
            />
            <input
              type="text"
              maxLength="60"
              className="addPost-title"
              placeholder="Title"
              ref={ref => (this.addPostTitle = ref)}
              onKeyDown={event => {
                if (event.keyCode == 13) {
                  event.preventDefault();
                }
              }}
            />
            <Textarea
              className="addPost-text"
              placeholder="Share your story..."
              inputRef={ref => (this.addPostText = ref)}
            />
          </form>
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
    onAddPost: (name, title, text) => {
      const payload = {
        key: Date.now().toString(),
        name: name,
        title: title,
        text: text,
        likes: 0,
        comments: [],
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes()
      };
      dispatch({ type: 'ADD_POST', payload });
      dispatch({ type: 'NEW' });
    }
  })
)(AddPost);
