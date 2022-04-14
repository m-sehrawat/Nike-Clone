import { checkSize, convertObject } from "../../../utils/extraFunctions";
import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, GET_PRICE_RANGE, NAME_A_TO_Z, NAME_Z_TO_A, RATING_HIGH_TO_LOW, RATING_LOW_TO_HIGH, RESET_FILTERS, SET_ALL_FILTERS, SET_GENDER, SET_SIZE, SORT_HIGH_TO_LOW, SORT_LOW_TO_HIGH } from "./actionTypes";

const init = {
    isLoading: false,
    isError: false,
    products: [],
    backupData: [],
    filters: {
        Gender: { Men: false, Women: false, Kids: false },
        Size: { Small: false, Medium: false, Large: false },
        Colour: { Black: false, White: false, Green: false, Red: false, Mix: false }
    }
};

export const productReducer = (state = init, { type, payload }) => {
    switch (type) {
        case GET_DATA_LOADING:
            return { ...state, isLoading: true };
        case GET_DATA_SUCCESS:
            return { ...state, isLoading: false, products: payload, backupData: payload };
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
        case GET_PRICE_RANGE:
            return {
                ...state,
                products: state.products.filter((e) => e.price >= payload.minPrice && e.price <= payload.maxPrice)
            };
        case RESET_FILTERS:
            return {
                ...state,
                products: state.backupData,
                filters: {
                    Gender: { Men: false, Women: false, Kids: false },
                    Size: { Small: false, Medium: false, Large: false },
                    Colour: { Black: false, White: false, Green: false, Red: false, Mix: false }
                }
            };
        case SET_ALL_FILTERS:
            let { Gender, Colour, Size } = convertObject(payload);
            return {
                ...state,
                filters: payload,
                products: state.backupData.filter((e) => {

                    if (Gender.length > 0 && Colour.length > 0 && Size.length > 0) {
                        return Gender.includes(e.gender) && Colour.includes(e.color) && checkSize(Size, e.size);

                    } else if (Gender.length > 0 && Size.length > 0) {
                        return Gender.includes(e.gender) && checkSize(Size, e.size);

                    } else if (Gender.length > 0 && Colour.length > 0) {
                        return Gender.includes(e.gender) && Colour.includes(e.color);

                    } else if (Colour.length > 0 && Size.length > 0) {
                        return Colour.includes(e.color) && checkSize(Size, e.size);

                    } else if (Gender.length > 0) {
                        return Gender.includes(e.gender);

                    } else if (Colour.length > 0) {
                        return Colour.includes(e.color);

                    } else if (Size.length > 0) {
                        return checkSize(Size, e.size);

                    } else {
                        return e;
                    }
                })
            };
        default:
            return state;
    }
}






