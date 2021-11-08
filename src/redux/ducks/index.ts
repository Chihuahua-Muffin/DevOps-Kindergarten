import { combineReducers } from 'redux';
import authReducer from './auth';
import lectureReducer from './lecture';
import userReducer from './user';

// COMBINED REDUCERS
const reducers = {
  auth: authReducer,
  lecture: lectureReducer,
  user: userReducer,
};

export default combineReducers(reducers);
