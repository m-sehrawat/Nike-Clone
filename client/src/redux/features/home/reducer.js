import { GET_DATA_ERROR_HOME, GET_DATA_LOADING_HOME, GET_DATA_SUCCESS_CLOTH, GET_DATA_SUCCESS_SHOE } from "./actionTypes";


const initState = { loading: false, error: false, clothData: [], shoeData: [] };


export const homeReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_DATA_LOADING_HOME:
            return { ...state, loading: true };
        case GET_DATA_SUCCESS_SHOE:
            return { ...state, loading: false, shoeData: payload, error: false };
        case GET_DATA_SUCCESS_CLOTH:
            return { ...state, loading: false, clothData: payload, error: false };
        case GET_DATA_ERROR_HOME:
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
};