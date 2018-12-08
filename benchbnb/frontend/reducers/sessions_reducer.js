import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER }

const _nullSession = {
 currentUser: null
};

const sessionsReducer = (state=_nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user;
      return Object.assign({}, {currentUser });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;

  }
} ;

export default sessionsReducer;
