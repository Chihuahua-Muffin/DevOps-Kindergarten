import { combineReducers } from 'redux';
import authReducer from './auth';
import lectureReducer from './lecture';

// COMBINED REDUCERS
const reducers = {
  auth: authReducer,
  lecture: lectureReducer,
};

export default combineReducers(reducers);
