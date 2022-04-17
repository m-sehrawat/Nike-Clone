import { SHOW_LOGIN_PAGE, SHOW_RESET_PAGE } from "./actionTypes";

const init = { isLogin: false, isReset: false }

export const authReducer = (state = init, { type, payload }) => {
    switch (type) {
        case SHOW_LOGIN_PAGE:
            return { ...state, isLogin: !state.isLogin, isReset: false };
        case SHOW_RESET_PAGE:
            return { ...state, isReset: !state.isReset, isLogin: false };
        default:
            return state;
    }
}