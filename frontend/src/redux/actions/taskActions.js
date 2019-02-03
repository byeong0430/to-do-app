export const getTaskList = taskList => {
  return {
    type: 'GET_TASK_LIST',
    payload: taskList
  }
};