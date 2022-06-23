import { getItemSession } from "../../../utils/sessionStorage";
import { SET_NAVBAR_PATH} from "./actionTypes";


const init = {
    path: getItemSession("path") || "/",
};

export const pathReducer = (state = init, { type, payload }) => {
    switch (type) {
        case SET_NAVBAR_PATH:
            return { ...state, path: payload };
        default:
            return state;
    }
};