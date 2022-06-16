import { getItemSession } from "../../../utils/sessionStorage";
import { SET_NAVBAR_PATH, SET_SIZE } from "./actionTypes";


const init = {
    path: getItemSession("path") || "/",
    size: false
};

export const pathReducer = (state = init, { type, payload }) => {
    switch (type) {
        case SET_NAVBAR_PATH:
            return { ...state, path: payload };
        case SET_SIZE:
            return { ...state, size: payload };
        default:
            return state;
    }
};