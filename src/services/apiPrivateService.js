import axios from "axios";

const config = {
  baseURL: process.env.REACT_APP_API_AUTH_URL,
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
};

export { Post };
