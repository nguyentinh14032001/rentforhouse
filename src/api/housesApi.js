import axiosClient from "./axiosClient";

// api/productApi.js
const productApi = {
  getAll: (params) => {
    const url = "/api/houses/all";
    return axiosClient.get(url, { params });
  },
};

export default productApi;
