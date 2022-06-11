import { GET_TOKEN, SHOW_LOGIN_PAGE } from "./actionTypes";
import { SHOW_RESET_PAGE } from "./actionTypes";

export const showLoginPage = () => ({ type: SHOW_LOGIN_PAGE });

export const showResetPage = () => ({ type: SHOW_RESET_PAGE });

export const getToken = (payload) => ({ type: GET_TOKEN, payload });