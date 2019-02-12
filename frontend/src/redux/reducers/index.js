import { combineReducers } from 'redux';
import { taskReducer } from './taskReducer';
import { categoryReducer } from './categoryReducer';

export default combineReducers({
  task: taskReducer,
  category: categoryReducer
})