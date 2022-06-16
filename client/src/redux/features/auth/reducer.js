import { getItem } from "../../../utils/localstorage";
import { GET_TOKEN, REMOVE_TOKEN, SHOW_LOGIN_PAGE, SHOW_RESET_PAGE } from "./actionTypes";

const init = {
    isLogin: false,
    isReset: false,
    token: getItem('token') || false,
    user: getItem('user') || {}
}

export const authReducer = (state = init, { type, payload }) => {
    switch (type) {
        case SHOW_LOGIN_PAGE:
            return { ...state, isLogin: !state.isLogin, isReset: false };
        case SHOW_RESET_PAGE:
            return { ...state, isReset: !state.isReset, isLogin: false };
        case GET_TOKEN:
            return { ...state, token: payload.token, user: payload.user };
        case REMOVE_TOKEN:
            return { ...state, token: false, user: {} };
        default:
            return state;
    }
}