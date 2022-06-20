import axiosClient from "./axiosClient"


const InformationApi = {
    getAll : (params) => {
        const url =  '/information'
        return axiosClient.get(url, {params});
    },

    getById : (id) => {
        const url =  `/information/${id}`;
        return axiosClient.get(url);
    }
}

export default InformationApi;