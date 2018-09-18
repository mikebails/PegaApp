import { actionTypes } from './actionTypes';

export const alertActions = {
  success,
  error,
  clear
};

function success(message) {
  return { type: actionTypes.ALERT_SUCCESS, message };
}

function error(message) {
  return { type: actionTypes.ALERT_ERROR, message };
}

function clear() {
  return { type: actionTypes.ALERT_CLEAR };
}
