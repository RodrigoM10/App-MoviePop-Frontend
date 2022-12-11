import { Post } from "./apiPrivateService";

const LOGIN_ENDPOINT = '/auth/login'
const REGISTER_ENDPOINT = '/auth/register'

export const postAuthRegister = async (body) => await Post(REGISTER_ENDPOINT, body);

export const postAuthLogin = async (body) => await Post(LOGIN_ENDPOINT, body);