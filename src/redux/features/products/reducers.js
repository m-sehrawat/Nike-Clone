
import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, NAME_A_TO_Z, NAME_Z_TO_A, RATING_HIGH_TO_LOW, RATING_LOW_TO_HIGH, SET_GENDER, SORT_HIGH_TO_LOW, SORT_LOW_TO_HIGH } from "./actionTypes";

const init = { isLoading: false, products: [], isError: false };

export const productReducer = (state = init, { type, payload }) => {
    switch (type) {
        case GET_DATA_LOADING:
            return { ...state, isLoading: true };
        case GET_DATA_SUCCESS:
            return { ...state, isLoading: false, products: payload };
        case GET_DATA_ERROR:
            return { ...state, isLoading: false, isError: true };
        case SORT_LOW_TO_HIGH:
            return { ...state, products: state.products.sort((a, b) => a.price - b.price) };
        case SORT_HIGH_TO_LOW:
            return { ...state, products: state.products.sort((a, b) => b.price - a.price) };
        case RATING_LOW_TO_HIGH:
            return { ...state, products: state.products.sort((a, b) => a.rating - b.rating) };
        case RATING_HIGH_TO_LOW:
            return { ...state, products: state.products.sort((a, b) => b.rating - a.rating) };
        case NAME_A_TO_Z:
            return { ...state, products: state.products.sort((a, b) => a.name.localeCompare(b.name)) };
        case NAME_Z_TO_A:
            return { ...state, products: state.products.sort((a, b) => b.name.localeCompare(a.name)) };
        case SET_GENDER:
            return { ...state, products: state.products.filter((e) => e.gender === payload) };
        default:
            return state;
    }
}
