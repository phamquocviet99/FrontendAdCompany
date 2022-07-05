import axiosClient from "./axiosClient";

const CategoryProjectApi = {
  getAll: () => {
    const url = `/categories_project`;
    return axiosClient.get(url);
  },
  create: (data) => {
    const url = `/categories_project`;
    return axiosClient.post(url, data);
  },
  getById: (id) => {
    const url = `/categories_project/${id}`;
    return axiosClient.get(url);
  },
  update: (id, data) => {
    const url = `/categories_project/${id}`;
    return axiosClient.put(url, data);
  },
  remove: (id) => {
    const url = `/categories_project/${id}`;
    return axiosClient.delete(url);
  },
};

export default CategoryProjectApi;
