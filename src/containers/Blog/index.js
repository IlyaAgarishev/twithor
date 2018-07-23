import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import PostMini from '../PostMini';
import { connect } from 'react-redux';

class Blog extends Component {
  onPopularClick = () => {
    this.new.style.background = '#e6ecf0';
    this.popular.style.background = '#d6e0e6';
    this.props.onPopular();
  };

  onNewClick = () => {
    this.new.style.background = '#d6e0e6';
    this.popular.style.background = '#e6ecf0';
    this.props.onNew();
  };

  render() {
    const popular = this.props.state.addPost.filter(post => {
      return post.likes > 100;
    });
    console.log(popular);
    return (
      <div>
        <Header />
        <div className="blog-body">
          <div className="blog-wrapper">
            <div className="blog-field left">
              <div
                className="button popular"
                onClick={this.onPopularClick}
                ref={ref => (this.popular = ref)}
              >
                Popular
              </div>
              <div className="button new" onClick={this.onNewClick} ref={ref => (this.new = ref)}>
                New
              </div>
            </div>
            <div className="blog-field middle">
              {this.props.state.chooseCategory.new
                ? this.props.state.addPost.map((post, index) => {
                    return <PostMini post={post} index={index} />;
                  })
                : popular.map((post, index) => {
                    return <PostMini post={post} index={index} />;
                  })}
            </div>
            <div className="addPostArea">
              Want to add your own arcticle?<br />
              Click a button below
              <Link to="/addPost">
                <div className="addPostButton">Tweeth</div>
              </Link>
            </div>
          </div>
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
    onPopular: () => dispatch({ type: 'POPULAR' }),
    onNew: () => dispatch({ type: 'NEW' })
  })
)(Blog);
