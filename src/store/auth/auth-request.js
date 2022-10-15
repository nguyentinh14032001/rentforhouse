const { default: axios } = require("api/axios");
export const requestAuthRegister = (data) => {
  return axios.post("/api/auth/signup", { data });
};
