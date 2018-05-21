import { combineReducers } from "redux";
import { PENDING, FULFILLED, REJECTED } from "redux-promise-middleware";
import {
  SIGNUP,
  LOGIN,
  ADD_INCOME,
  GET_INCOME,
  ADD_EXPENSE,
  GET_EXPENSE,
  HITUNG_TOTAL_SALDO,
  HITUNG_TOTAL_EXPENSE
} from "../actions/index";
import numeral from "numeral";

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
    data: [],
    status: ""
  },
  action
) => {
  switch (action.type) {
    case `${GET_INCOME}_PENDING`:
      return {
        ...state,
        isFetching: true,
        status: "processing"
      };

    case `${GET_INCOME}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        status: "ok"
      };

    case `${GET_INCOME}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        status: "error"
      };

    case `${ADD_INCOME}_PENDING`:
      return {
        ...state,
        isFetching: true,
        status: "processing"
      };

    case `${ADD_INCOME}_FULFILLED`:
      const datas = [...state.data, action.payload]
      console.log(datas)
      return {
        ...state,
        isFetching: false,
        data: datas,
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

export const addExpenseData = (
  state = {
    isFetching: false,
    data: {},
    status: ""
  },
  action
) => {
  switch (action.type) {
    case `${ADD_EXPENSE}_PENDING`:
      return {
        ...state,
        isFetching: true,
        status: "processing"
      };
    case `${ADD_EXPENSE}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        status: "ok",
        data: action.payload
      };

    case `${ADD_EXPENSE}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        status: "failed"
      };

    default:
      return state;
  }
};

export const expenseData = (
  state = {
    isFetching: false,
    data: {},
    status: ""
  },
  action
) => {
  switch (action.type) {
    case `${GET_EXPENSE}_PENDING`:
      return {
        ...state,
        isFetching: true,
        status: "processing"
      };
    case `${GET_EXPENSE}_FULFILLED`:
      console.log(action.payload);
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        status: "ok"
      };

    case `${GET_EXPENSE}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        status: "failed"
      };

    default:
      return state;
  }
};

export const totalSaldo = (
  state = {
    isFetching: false,
    totalNominalSaldo: 0,
    status: ""
  },
  action
) => {
  switch (action.type) {
    case `${HITUNG_TOTAL_SALDO}_PENDING`:
      return {
        ...state,
        isFetching: true,
        status: "processing"
      };
    case `${HITUNG_TOTAL_SALDO}_FULFILLED`:
      console.log(action.payload);
      let total_saldo = 0;
      const amounts = action.payload;
      amounts.map(data => {
        const nominal = parseInt(data.amount);
        total_saldo += nominal;
      });
      console.log(total_saldo);

      return {
        ...state,
        isFetching: false,
        totalNominalSaldo: numeral(total_saldo).format("0,0")
      };
    case `${HITUNG_TOTAL_SALDO}_REJECTED`:
      return {
        ...state,
        isFetching: false
      };

    default:
      return state;
  }
};

export const totalExpense = (
  state = {
    isFetching: false,
    totalNominalExpense: 0,
    status: ""
  },
  action
) => {
  switch (action.type) {
    case `${HITUNG_TOTAL_EXPENSE}_PENDING`:
      return {
        ...state,
        isFetching: true,
        status: "processing"
      };
    case `${HITUNG_TOTAL_EXPENSE}_FULFILLED`:
      console.log(action.payload);
      let total_saldo = 0;
      const amounts = action.payload;
      amounts.map(data => {
        const nominal = parseInt(data.amount);
        total_saldo += nominal;
      });
      console.log(total_saldo);

      return {
        ...state,
        isFetching: false,
        totalNominalExpense: numeral(total_saldo).format("0,0")
      };
    case `${HITUNG_TOTAL_EXPENSE}_REJECTED`:
      return {
        ...state,
        isFetching: false
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  signupData,
  signinData,
  incomeData,
  addExpenseData,
  expenseData,
  totalSaldo,
  totalExpense
});

export default rootReducer;
