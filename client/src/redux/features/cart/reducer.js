import { getItem } from "../../../utils/localstorage";
import { ADD_TO_CART_SUCCESS } from "./actionTypes";

const initState = {
    cartProducts: getItem('cartProducts') || [],
    orderSummary: getItem('orderSummary') || {
        subTotal: 0,
        shipping: 0,
        total: 0
    }
}

export const cartReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                orderSummary: payload.orderSummary,
                cartProducts: payload.cartProducts
            };
        default:
            return state;
    }
};