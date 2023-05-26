const { default: axios } = require("axios");

export default axios.create({
  baseURL: "http://localhost:5000",
});
export const baseURL = "http://localhost:5000";
