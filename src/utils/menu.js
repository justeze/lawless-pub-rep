import axios from "axios";

export const getMenu = () => {
  return axios.get(
    `http://localhost:2300/`
  );
};