const initialState = {
  categories: [{
    displayName: 'Food',
    normalizedName: 'food',
    description: 'tastes really good!'
  },
  {
    displayName: 'Electronics',
    normalizedName: 'electronics',
    description: 'They use electricity!'
  }],
  products: [{
    name: 'banana',
    count: 10,
    price: 12,
    category: 'food',
    description: 'Really good for potassium',
  }],
  activeCategory: ''
}

function storeFrontReducer(state = initialState, action) {

    let { type, payload } = action;

    switch(type) {
      case "SELECT_ACTIVE_CATEGORY":

        let selectedCategory = state.categories.filter(category => category.normalizedName === payload)[0];
        return {...state, activeCategory: selectedCategory.displayName };

      default:
        return state;
    }
}

export const selectCategory = (categoryName) => {
  return {
    type: 'SELECT_ACTIVE_CATEGORY',
    payload: categoryName,
  }
};

export default storeFrontReducer;