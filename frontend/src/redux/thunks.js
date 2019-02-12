import * as django from '../api/django';
import { saveTaskList, saveCatList } from './actions/taskActions';

export const handleGetTaskList = () => async dispatch => {
  const response = await django.getTaskList();
  dispatch(saveTaskList(response));
};

export const handleGetCatList = () => async dispatch => {
  const response = await django.getCategoryList();
  dispatch(saveCatList(response));
}