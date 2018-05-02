import axios from "axios";
import { getToken, saveToken, removeToken } from "../global/util";

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
      }
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};


export const LOGOUT = 'LOGOUT'
export const doLogout = () => {
  return {
    type: LOGOUT,
    payload: logout()
  } 
}

const logout = async () => {
  await removeToken('token:user')
  
}