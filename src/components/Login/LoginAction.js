import axios from 'axios';
import LoginAuth from '../../utils/LoginAuth';

module.exports = {
  // after login, we want to store the token in localStorage
  loadUserFromLoginResponse: async (response, dispatch, redirect, history) => {
    const token = await response.data.token;
    console.log('loadUserFromLoginResponse()', 'token', token);
    localStorage.setItem('token', token);
    await axios()
      .then((res) => {})
      .catch((err) => {});
  },

  // to login, loginAdmin function takes in cred(email and password) and history
  loginAdmin: async (creds, history) => {
    console.log('made it to loginUser');
    const headers = await LoginAuth.buildHeaders();
    const data = { email: creds.email, password: creds.password };
    await axios()
      .then((res) => {})
      .catch((err) => {});
  },

  buildHeaders: async (token) => {},
  buildHeaders: async (token) => {},
  buildHeaders: async (token) => {},
};
