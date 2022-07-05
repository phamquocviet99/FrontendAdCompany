import axiosClient from "./axiosClient";

const NewsApi = {
  getAll: (params) => {
    const url = `/news`;
    return axiosClient.get(url,{params});
  },
  create: (data) => {
    const url = `/news`;
    return axiosClient.post(url, data);
  },
  getById: (id) => {
    const url = `/news/${id}`;
    return axiosClient.get(url);
  },
  update: (id, data) => {
    const url = `/news/${id}`;
    return axiosClient.put(url, data);
  },
  remove: (id) => {
    const url = `/news/${id}`;
    return axiosClient.delete(url);
  },
};

export default NewsApi;
