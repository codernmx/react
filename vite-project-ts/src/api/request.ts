import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {message} from "antd";

// 创建 Axios 实例
const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://v3.nmxgzs.cn', // 替换为您的 API 基础 URL
    timeout: 10000, // 超时时间（毫秒）
});

// 请求拦截器
axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // 在发送请求之前可以添加需要的逻辑，例如添加认证信息
        config.headers = {}
        config.headers['Content-Type'] = 'application/json;charset=UTF-8';
        config.headers.token = localStorage.getItem('token') || '';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // 对响应数据进行处理，可以在这里添加全局的响应逻辑
        if(response.data.code === 200) {
            return response.data;
        } else {
            message.error(response.data.msg);
            return Promise.reject(response);
        }
    },
    (error: any) => {
        // 对响应错误进行处理
        return Promise.reject(error);
    }
);

export default axiosInstance;
