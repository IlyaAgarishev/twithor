import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import PostMiniTop from '../PostMiniTop';
import PostMiniBottom from '../PostMiniBottom';
import { connect } from 'react-redux';

class Blog extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="blog-body">
          <div className="blog-wrapper">
            <div className="blog-field left">
              <div className="button popular">Popular</div>
              <div className="button new">New</div>
            </div>
            <div className="blog-field middle">
              {this.props.articles.addPost.map((post, index) => {
                return (
                  <div>
                    <Link to={'/post/' + index}>
                      <PostMiniTop post={post} index={index} />
                    </Link>
                    <PostMiniBottom index={index} />
                  </div>
                );
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
    articles: state
  }),
  dispatch => ({})
)(Blog);
