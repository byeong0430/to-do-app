const INITIAL_STATE = {
  tasks : null
};

export const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_TASK_LIST':
      return {
        ...state,
        tasks: action.payload
      };

    default:
      return state;
  }
};