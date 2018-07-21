import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Blog from './containers/Blog/index.js';
import Tutorial from './components/Tutorial';
import AddPost from './containers/AddPost';
import Post from './containers/Post';
import reducer from './reducers';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function CreatePosts() {
  return store
    .getState()
    .addPost.map((post, index) => <Route path={`/post/${index}`} component={Post} />);
}

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/blog" component={Blog} />
        <Route path="/tutorial" component={Tutorial} />
        <Route path="/addPost" component={AddPost} />
        <CreatePosts />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
