import {combineReducer} from 'redux';
import entitiesReducer from './entities_reducer';
import sessionsReducer from './session_reducer';
import errorsReducer from './error_reducer';

const rootReducer = combineReducer({
  entities: entitiesReducer,
  session: sessionsReducer,
  errors: errorsReducer
});

export default rootReducer;
