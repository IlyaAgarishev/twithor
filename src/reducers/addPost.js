import defaultState from '../defaultState/index.js';

const addPost = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    case 'ADD_LIKE':
      return [...state, ...state[action.index].likes++];
    default:
      return state;
  }
};

export default addPost;
