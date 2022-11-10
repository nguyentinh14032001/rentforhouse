const { default: axios } = require("api/axios");
export const requestAuthSignIn = (data) => {
  return axios.post("/api/auth/signin", {
    ...data,
  });
};
