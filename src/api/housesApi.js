import axiosClient from "./axiosClient";

const HousesApi = {
  getAll: (params) => {
    const url = "/api/houses/1";
    return axiosClient.get(url, { params });
  },
  delete: (id) => {
    const url = `/api/houses/${id}`;
    return axiosClient.get(url);
  },
};

const housesApi = new HousesApi();

export default housesApi;
