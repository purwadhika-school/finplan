import axios from "axios";

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


export const LOGIN = 'LOGIN'
export const doSignin = (email, password) => {
  return {
    type: LOGIN,
    payload: login(email, password)
  }
}

const login = (dataEmail, dataPassword) => {
  const url = 'http://172.104.50.9:3000/api/Users/login'
  const data = {
    email: dataEmail,
    password: dataPassword
  }
  return axios.post(url, data)
    .then(response => {
      console.log(response)
      return response
    })
    .catch(error => {
      console.log(error)
    })

}