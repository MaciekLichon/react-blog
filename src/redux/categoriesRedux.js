
// selectors

export const getAllCategories = state =>
  state.categories;

// subreducer

const categoriesReducer = (statePart = [], action) => {
  switch(action.type) {

    default:
      return statePart;
  }
}

export default categoriesReducer;
