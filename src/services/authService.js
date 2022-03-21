import { Post } from "./apiPrivateService";

const LOGIN_ENDPOINT = process.env.REACT_APP_LOGIN_ENDPOINT
const REGISTER_ENDPOINT = process.env.REACT_APP_REGISTER_ENDPOINT

export const postAuthRegister = async (body) => await Post(LOGIN_ENDPOINT, body);

export const postAuthLogin = async (body) => await Post(REGISTER_ENDPOINT, body);