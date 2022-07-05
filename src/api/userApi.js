import axiosClient from "./axiosClient";

const userApi = {
  getAll: (params) => {
    const url = "/user";
    return axiosClient.get(url, { params });
  },
  create: (data) => {
    const url = "/user/signIn";
    return axiosClient.post(url, data);
  },
  remove: (id) => {
    const url = `/user/${id}`;
    return axiosClient.delete(url);
  },
  login: (user) => {
    const url = `/user/login`;
    return axiosClient.post(url, user);
  },
  change: (user) => {
    const url = `/user/change`;
    return axiosClient.put(url, user);
  },
  update: (id,user) => {
    const url = `/user/${id}`;
    return axiosClient.put(url, user);
  },
};

export default userApi;
