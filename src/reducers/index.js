import { combineReducers } from "redux";
import { PENDING, FULFILLED, REJECTED } from "redux-promise-middleware";
import { SIGNUP, LOGIN, ADD_INCOME } from "../actions/index";

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

export const signinData = (
  state = {
    isProcessing: false,
    data: {},
    status: ""
  },
  action
) => {
  switch (action.type) {
    case `${LOGIN}_PENDING`:
      return {
        ...state,
        isProcessing: true
      };

    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        isProcessing: false,
        data: action.payload.data,
        status:
          action.payload.status === 200 ? "Signin Success" : "Something happen!"
      };

    case `${LOGIN}_REJECTED`:
      return {
        ...state,
        isProcessing: false
      };

    default:
      return state;
  }
};

export const incomeData = (
  state = {
    isFetching: false,
    data: {},
    status: ""
  },
  action
) => {
  switch (action.payload) {
    case `${ADD_INCOME}_PENDING`:
      return {
        ...state,
        isFetching: true,
        status: "processing"
      };

    case `${ADD_INCOME}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        data: action.payload.data,
        status: "ok"
      };

    case `${ADD_INCOME}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        status: "error"
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  signupData,
  signinData,
  incomeData
});

export default rootReducer;
