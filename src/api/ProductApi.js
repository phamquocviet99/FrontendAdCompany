import axiosClient from "./axiosClient";

const ProductApi = {
  getAll: (params) => {
    const url = `/product`;
    return axiosClient.get(url,{params});
  },
  create: (data) => {
    const url = `/product`;
    return axiosClient.post(url, data);
  },
  search: (data) => {
    const url = `/product/search`;
    return axiosClient.post(url, data);
  },
  getById: (id) => {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
  getByIdCate: (id,params) => {
    const url = `/product/idcate/${id}`;
    return axiosClient.get(url,{params});
  },
  update: (id, data) => {
    const url = `/product/${id}`;
    return axiosClient.put(url, data);
  },
  remove: (id) => {
    const url = `/product/${id}`;
    return axiosClient.delete(url);
  },
};

export default ProductApi;
