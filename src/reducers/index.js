import addPost from './addPost';
import chooseCategory from './chooseCategory';

import { combineReducers } from 'redux';

export default combineReducers({
  addPost,
  chooseCategory
});
