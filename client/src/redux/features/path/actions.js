import { SET_NAVBAR_PATH, SET_SIZE } from "./actionTypes";


export const setNavbarPath = (payload) => {
    return { type: SET_NAVBAR_PATH, payload };
};

export const setSize = (payload) => {
    return { type: SET_SIZE, payload };
};

