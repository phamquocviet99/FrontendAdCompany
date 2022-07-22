import axiosClient from "./axiosClient";

const MessageApi = {
  getAll: (params) => {
    const url = `/message`;
    return axiosClient.get(url);
  },
  create: (data) => {
    const url = `/message`;
    return axiosClient.post(url, data);
  },

  remove: (id) => {
    const url = `/message/${id}`;
    return axiosClient.delete(url);
  },
};

export default MessageApi;
