import {combineReducer} from 'redux';
import sessionsReducer from './sessions_reducer';

const errorsReducer = combineReducer({
  session: sessionsReducer
});
