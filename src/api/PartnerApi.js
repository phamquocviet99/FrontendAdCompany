import axiosClient from "./axiosClient";

const PartnerApi = {
  getAll: () => {
    const url = `/partner`;
    return axiosClient.get(url);
  },
  create: (data) => {
    const url = `/partner`;
    return axiosClient.post(url, data);
  },

  remove: (id) => {
    const url = `/partner/${id}`;
    return axiosClient.delete(url);
  },
};

export default PartnerApi;
