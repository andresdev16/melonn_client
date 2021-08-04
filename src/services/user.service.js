import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/v1/";

const getItems = (offset, limit) => {
  return axios.get(API_URL + "products/all", {
    params: {
      offset: offset,
      limit: limit
    },
    headers: authHeader()
  });
};

const getProfile = () => {
  return axios.get(API_URL + "auth/profile", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getItems: getItems,
  getProfile: getProfile,
  getModeratorBoard,
  getAdminBoard,
};