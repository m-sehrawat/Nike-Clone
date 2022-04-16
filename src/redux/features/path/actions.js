import { SET_MODAL_OPEN, SET_NAVBAR_PATH } from "./actionTypes";

export const setNavbarPath = (payload) => ({ type: SET_NAVBAR_PATH, payload });

export const setModalOpen = (payload) => ({ type: SET_MODAL_OPEN, payload });
