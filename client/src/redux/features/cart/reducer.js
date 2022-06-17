import { ADD_TO_CART_SUCCESS } from "./actionTypes";

const initState = {
    cartProducts: [],
    orderSummary: {}
}

export const cartReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                orderSummary: { ...state.orderSummary, payload },
                cartProducts: [...state.cartProducts, payload]
            };
        default:
            return state;
    }
};