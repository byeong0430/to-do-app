const INITIAL_STATE = {
  categories: null
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_CAT_LIST':
      return {
        ...state,
        categories: action.payload
      }

    default:
      return state;
  }
};