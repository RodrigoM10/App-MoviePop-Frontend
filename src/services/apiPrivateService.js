import axios from 'axios';

const config = {
    baseURL:'https://api-movie-pop.herokuapp.com/api/auth',
    timeout: 1000,
};
const instance = axios.create(config);

const Post = async (url, body) => {
    const response = {};
    try {
        const { data } = await instance.post(url, body);
        response.data = data;
    } catch (error) {
        response.error = error;
    }
    return response;
  }

export { Post };