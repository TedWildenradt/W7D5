import {combineReducer} from 'redux';
import sessionErrorsReducer from './sessions_errors_reducer';

const errorsReducer = combineReducer({
  session: sessionErrorsReducer
});

export default errorsReducer;
