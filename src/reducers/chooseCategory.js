import defaultCategories from '../defaultCategories';

const chooseCategory = (state = defaultCategories, action) => {
  switch (action.type) {
    case 'POPULAR':
      return { popular: 1, new: 0 };
    case 'NEW':
      return { popular: 0, new: 1 };
    default:
      return state;
  }
};

export default chooseCategory;
