import axios from "axios";
import {
  getUniversalKeys,
  saveToken,
  removeUniversalKeys,
  saveUserID
} from "../global/util";

export const SIGNUP = "SIGNUP";
export const doSignup = (email, password) => {
  return {
    type: SIGNUP,
    payload: registration(email, password)
  };
};

const registration = (email, password) => {
  const url = "http://172.104.50.9:3000/api/Users";
  const data = { email, password };
  return axios
    .post(url, data)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });
};

export const LOGIN = "LOGIN";
export const doSignin = (email, password) => {
  return {
    type: LOGIN,
    payload: login(email, password)
  };
};

const login = (dataEmail, dataPassword) => {
  const url = "http://172.104.50.9:3000/api/Users/login";
  const data = {
    email: dataEmail,
    password: dataPassword
  };
  return axios
    .post(url, data)
    .then(response => {
      if (response.status === 200) {
        saveToken(response.data.id);
        saveUserID(response.data.userId);
      }
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};

export const LOGOUT = "LOGOUT";
export const doLogout = () => {
  return {
    type: LOGOUT,
    payload: logout()
  };
};

const logout = async () => {
  await removeUniversalKeys("token:user");
};

export const ADD_INCOME = "ADD_INCOME";
export const addIncome = (selectedBtn, label, amount, paydate, from) => {
  return {
    type: ADD_INCOME,
    payload: doAddIncome(selectedBtn, label, amount, paydate, from)
  };
};

const doAddIncome = async (selectedBtn, label, amount, paydate, from) => {
  const uid = await getUniversalKeys("uid:@#$%");
  const token = await getUniversalKeys("token:user");
  const url = `http://172.104.50.9:3000/api/incomes?access_token=${token}`;
  const data = {
    type: selectedBtn,
    label,
    amount,
    paydate,
    user_id: uid,
    organization: from
  };
  return axios
    .post(url, data)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};
