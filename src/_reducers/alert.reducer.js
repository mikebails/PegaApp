import { actionTypes } from "../_actions";

/**
 * Redux reducers.
 * Used to update state in the store after actions are issued.
 */
export function alert(state = {}, action) {
  switch (action.type) {
    case actionTypes.ALERT_SUCCESS:
      return {
        positive: true,
        negative: false,
        message: action.message
      };
    case actionTypes.ALERT_ERROR:
      return {
        positive: false,
        negative: true,
        type: "alert-danger",
        message: action.message
      };
    case actionTypes.ALERT_CLEAR:
      return {};
    default:
      return state;
  }
}
