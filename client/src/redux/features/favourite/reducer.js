import { ADD_TO_FAVOURITE } from "./actionTypes";

const initState = { favourite: [] };

export const favouriteReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TO_FAVOURITE:
            return { ...state, favourite: payload };
        default:
            return state;
    }
}