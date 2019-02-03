const INITIAL_STATE = {
  is_loading: null,
  is_loaded: null,
  tasks : null
};

export const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_TASK_LIST':
      return {
        ...state,
        is_loading: false,
        is_loaded: true,
        tasks: action.payload
      };

    default:
      return state;
  }
};