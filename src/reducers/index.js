import { combineReducers } from "redux";
import { PENDING, FULFILLED, REJECTED } from "redux-promise-middleware";
import { FETCH_DATA, SIGNUP } from "../actions/index";

export const signupData = (
  state = {
    isProcessing: false,
    data: {},
    status: ""
  },
  action
) => {
  switch (action.type) {
    case `${SIGNUP}_PENDING`:
      return {
        ...state,
        isProcessing: true
      };

    case `${SIGNUP}_FULFILLED`:
      return {
        ...state,
        isProcessing: false,
        data: action.payload.data,
        status:
          action.payload.status === 200 ? "Signup Success" : "Something happen!"
      };

    case `${SIGNUP}_REJECTED`:
      return {
        ...state,
        isProcessing: false,
        data: {}
      };

    default:
      return state;
  }
};

export const data = (
  state = {
    items: ""
  },
  action
) => {
  switch (action.type) {
    case `${FETCH_DATA}`:
      return {
        ...state,
        items: "This is data from redux"
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data,
  signupData
});

export default rootReducer;
