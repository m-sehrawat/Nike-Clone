import { SET_MODAL_OPEN, SET_NAVBAR_PATH, SET_SIZE } from "./actionTypes";

export const setNavbarPath = (payload) => ({ type: SET_NAVBAR_PATH, payload });

export const setModalOpen = (payload) => ({ type: SET_MODAL_OPEN, payload });

export const setSize = (payload) => ({ type: SET_SIZE, payload });

