import { convertObject } from "../../../utils/extraFunctions";
import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, GET_PRICE_RANGE, NAME_A_TO_Z, NAME_Z_TO_A, RATING_HIGH_TO_LOW, RATING_LOW_TO_HIGH, RESET_FILTERS, SET_ALL_FILTERS, SORT_HIGH_TO_LOW, SORT_LOW_TO_HIGH } from "./actionTypes";

const init = {
    isLoading: false,
    isError: false,
    products: [],
    backupData: [],
    filters: {
        Gender: { Men: false, Women: false, Kids: false },
        Category: { Cloths: false, Shoes: false },
        Size: { Small: false, Medium: false, Large: false },
        Colour: { Black: false, White: false, Green: false, Red: false, Mix: false }
    }
};

export const prodReducer = (state = init, { type, payload }) => {
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
            return { ...state, products: state.products.sort((a, b) => a.title.localeCompare(b.title)) };
        case NAME_Z_TO_A:
            return { ...state, products: state.products.sort((a, b) => b.title.localeCompare(a.title)) };
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
                    Category: { Cloths: false, Shoes: false },
                    Size: { Small: false, Medium: false, Large: false },
                    Colour: { Black: false, White: false, Green: false, Red: false, Mix: false }
                }
            };
        case SET_ALL_FILTERS:
            let usingFunc = checkSize([1], [1])
            console.log('selectSize:', usingFunc);
            let { Gender, Category, Colour, Size } = convertObject(payload);
            let variableMapped = { Gender, Category, Colour, Size };
            let functionMapped = {
                "Gender": "Gender.includes(e.gender)",
                "Category": "Category.includes(e.category)",
                "Colour": "Colour.includes(e.color)",
                "Size": "checkSize(Size, e.size)"
            }
            return {
                ...state,
                filters: payload,
                products: state.backupData.filter((e) => {
                    let equation = ["Gender", "Category", "Colour", "Size"].filter((e) => variableMapped[e].length > 0);
                    equation = equation.map((e) => functionMapped[e]).join(" && ");
                    return eval(equation);
                })
            };
        default:
            return state;
    }
}


function checkSize(A, B) {
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (A[i] === B[j]) {
                return true;
            }
        }
    }
    return false;
}




