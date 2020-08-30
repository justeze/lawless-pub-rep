import axios from "axios";

export const getMenu = () => {
  return axios.get(
    `http://localhost:2300/`
  );
};

export const authLogin = (name, password) => {
  return axios.post(`http://localhost:2300/auth/login`, {
    username: name,
    password: password,
  });
}