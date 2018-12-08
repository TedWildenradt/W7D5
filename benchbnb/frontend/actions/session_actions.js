import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const login = formUser => dispatch => APIUtil.login(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => APIUtil.logout()
  .then(user => dispatch(receiveCurrentUser(user)));
