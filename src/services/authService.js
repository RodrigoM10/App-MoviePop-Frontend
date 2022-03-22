import { Post } from "./apiPrivateService";

const LOGIN_ENDPOINT = '/login'
const REGISTER_ENDPOINT = '/register'

export const postAuthRegister = async (body) => await Post(REGISTER_ENDPOINT, body);

export const postAuthLogin = async (body) => await Post(LOGIN_ENDPOINT, body);