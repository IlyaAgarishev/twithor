import React, { Component } from 'react';
import Header from '../../components/Header';
import './index.css';
import { connect } from 'react-redux';

class AddPost extends Component {
  constructor(props) {
    super(props);
  }

  addPost = () => {
    this.props.onAddPost(
      this.addPostAuthor.value,
      this.addPostTitle.value,
      this.addPostText.innerHTML
    );

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
              className="addPost-author"
              placeholder="Your name"
              ref={ref => (this.addPostAuthor = ref)}
            />
            <input
              type="text"
              className="addPost-title"
              placeholder="Title"
              ref={ref => (this.addPostTitle = ref)}
            />
            <div
              className="addPost-text"
              data-placeholder="Share your story..."
              contentEditable="true"
              ref={ref => (this.addPostText = ref)}
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
        comments: 0,
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes()
      };
      dispatch({ type: 'ADD_POST', payload });
    }
  })
)(AddPost);
