import {
  postUser,
  deleteSession,
  postSession
} from '../util/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = user => ({ // Action creator
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({ // Action creator
  type: LOGOUT_CURRENT_USER,
});

export const createNewUser = formUser => dispatch => postUser(form)
  .then((user) => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch => postSession(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));