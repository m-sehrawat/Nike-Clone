import { SET_MODAL_OPEN, SET_NAVBAR_PATH, SET_SIZE } from "./actionTypes";


const init = { path: "men", modalOpen: false, size: false };

export const pathReducer = (state = init, { type, payload }) => {
    switch (type) {
        case SET_NAVBAR_PATH:
            return { ...state, path: payload };
        case SET_MODAL_OPEN:
            return { ...state, modalOpen: payload };
        case SET_SIZE:
            return { ...state, size: payload };
        default:
            return state;
    }
}