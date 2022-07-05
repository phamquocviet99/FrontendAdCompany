import axiosClient from "./axiosClient";

const RecruitApi = {
  getAll: () => {
    const url = `/recruit`;
    return axiosClient.get(url);
  },
  create: (data) => {
    const url = `/recruit`;
    return axiosClient.post(url, data);
  },
  getById: (id) => {
    const url = `/recruit/${id}`;
    return axiosClient.get(url);
  },
  update: (id, data) => {
    const url = `/recruit/${id}`;
    return axiosClient.put(url, data);
  },
  remove: (id) => {
    const url = `/recruit/${id}`;
    return axiosClient.delete(url);
  },
};

export default RecruitApi;
