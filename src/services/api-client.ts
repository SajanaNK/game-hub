import axios, { AxiosRequestConfig } from "axios";


const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '24724e939bf14b7cb9dcd2f6102a739c'
    }
});

class ApiClient<T> {
    
    endPoint : string;

    constructor(endPoint: string) {
        this.endPoint = endPoint;
    }

     get = (config: AxiosRequestConfig = {} ) => {
        return  axiosInstance.get<T>(this.endPoint,config).then(res => res.data);
    }

}

export default ApiClient;


