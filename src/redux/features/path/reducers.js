import { SET_NAVBAR_PATH } from "./actionTypes";


const init = { path: "men" };

export const pathReducer = (state = init, { type, payload }) => {
    switch (type) {
        case SET_NAVBAR_PATH:
            return { ...state, path: payload };
        default:
            return state;
    }
}