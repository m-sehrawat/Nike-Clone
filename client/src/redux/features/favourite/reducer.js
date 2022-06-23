import { ADD_TO_FAVOURITE, GET_FAVOURITE_ERROR, GET_FAVOURITE_LOADING, GET_FAVOURITE_SUCCESS } from "./actionTypes";

const initState = {
    isLoading: false,
    favourite: [],
    isError: false
};

export const favouriteReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TO_FAVOURITE:
            return { ...state, favourite: payload };
        case GET_FAVOURITE_LOADING:
            return { ...state, isLoading: true, isError: false };
        case GET_FAVOURITE_SUCCESS:
            return { ...state, favourite: payload, isLoading: false, isError: false };
        case GET_FAVOURITE_ERROR:
            return { ...state, isLoading: false, isError: true };
        default:
            return state;
    }
}