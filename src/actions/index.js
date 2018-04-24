import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const fetchData = () => {
  return {
    type: FETCH_DATA
  };
};

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
      console.log(res);
      return res;
    })
    .catch(err => {
      console.log(err);
    });
};
