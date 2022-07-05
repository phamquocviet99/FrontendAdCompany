import axiosClient from "./axiosClient";

const InformationApi = {
  getById: (id) => {
    const url = `/information/${id}`;
    return axiosClient.get(url);
  },
  update: (id, data) => {
    const url = `/information/${id}`;
    return axiosClient.put(url, data);
  },
};

export default InformationApi;
