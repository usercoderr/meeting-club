import axiosInstance from "../axios/axios";



const endpoints = {
    registration: (data) => axiosInstance.post("sdsd", data),
    login: (data) => axiosInstance.post("sdsd", data),
    forgotPassword: (data) => axiosInstance.post("sdsd", data),
    getProfile: (data) => axiosInstance.post("sdsd"),
    updateProfile: (data) => axiosInstance.post("sdsd", data),
};
export default endpoints;