import defaultState from '../defaultState/index.js';

const addPost = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    case 'ADD_LIKE':
      state[action.index].likes++;
      return [...state];
    case 'ADD_COMMENT':
      state[action.index].comments = [...state[action.index].comments, action.payload];
      return [...state];
    default:
      return state;
  }
};

export default addPost;
