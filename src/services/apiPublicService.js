import axios from 'axios';

const config = {
    baseURL:'http://api.tvmaze.com',
    timeout: 1000,
};
const instance = axios.create(config);

const Get = async (endpoint, parameter) => {
    const response = {data:{}, error: null};
    try {
        const {data} = await instance.get(endpoint, parameter);
        response.data = data;
    } catch (error) {
        response.error = error;
    }

    return response;
};


export { Get };