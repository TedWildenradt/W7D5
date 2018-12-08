import {combineReducer} from 'redux';
import usersReducer from './users_reducer.js';

const entitiesReducer = combineReducer({
  users: usersReducer
});

export default entitiesReducer;
