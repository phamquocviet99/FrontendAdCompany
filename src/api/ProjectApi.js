import axiosClient from "./axiosClient";

const ProjectApi = {
  getAll: (params) => {
    const url = `/project`;
    return axiosClient.get(url,{params});
  },
  create: (data) => {
    const url = `/project`;
    return axiosClient.post(url, data);
  },
  getById: (id) => {
    const url = `/project/${id}`;
    return axiosClient.get(url);
  },
  getByIdCate: (id,params) => {
    const url = `/project/idcate/${id}`;
    return axiosClient.get(url,{params});
  },
  update: (id, data) => {
    const url = `/project/${id}`;
    return axiosClient.put(url, data);
  },
  remove: (id) => {
    const url = `/project/${id}`;
    return axiosClient.delete(url);
  },
};

export default ProjectApi;
