// selectors

export const getAllPosts = state =>
  state.posts;

// actions

const createActionName = actionName => `app/lists/${actionName}`;

// action creators

// subreducer

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default postsReducer;