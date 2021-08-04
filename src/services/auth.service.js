import axios from "axios";
import jwt from 'jwt-decode';

const API_URL = "http://localhost:5000/api/v1/auth/";

const register = (email, password, name, role) => {
  return axios.post(API_URL + "create", {
    email,
    password,
    name,
    role
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      const user = jwt(response.data.access_token)
      user.accessToken = response.data.access_token
      if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(user));
      }

      return user
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
