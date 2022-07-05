import axiosClient from "./axiosClient";

const CategoryProductApi = {
  getAll: () => {
    const url = `/categories_product`;
    return axiosClient.get(url);
  },
  create: (data) => {
    const url = `/categories_product`;
    return axiosClient.post(url, data);
  },
  getById: (id) => {
    const url = `/categories_product/${id}`;
    return axiosClient.get(url);
  },
  update: (id, data) => {
    const url = `/categories_product/${id}`;
    return axiosClient.put(url, data);
  },
  remove: (id) => {
    const url = `/categories_product/${id}`;
    return axiosClient.delete(url);
  },
};

export default CategoryProductApi;
