import * as django from '../api/django';
import { getTaskList } from './actions/taskActions';

export const handleGetTaskList = () => async dispatch => {
  const response = await django.getTaskList();

  dispatch(getTaskList(response));
};