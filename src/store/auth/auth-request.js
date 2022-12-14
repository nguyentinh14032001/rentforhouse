import axios from "axios";

export const requestAuthSignIn = (data) => {
  return axios.post("/api/auth/signin", {
    ...data,
  });
};
