export const saveTaskList = taskList => {
  return {
    type: 'GET_TASK_LIST',
    payload: taskList
  }
};

export const saveCatList = catList => {
  return {
    type: 'GET_CAT_LIST',
    payload: catList
  }
}