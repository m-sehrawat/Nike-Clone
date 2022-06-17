import { setToast } from "../../../utils/extraFunctions";
import { getCartTotal } from "../../../utils/getCartTotal";
import { getItem, setItem } from "../../../utils/localstorage";
import { ADD_TO_CART_SUCCESS } from "./actionTypes";


export const addToCartSuccess = (payload) => {
    return { type: ADD_TO_CART_SUCCESS, payload };
};


export const addToCartRequest = (data, toast) => (dispatch) => {
    const cartData = getItem('cartProducts') || [];
    cartData.push(data);
    setItem('cartProducts', cartData);
    const orderSummary = getCartTotal(cartData);
    setItem('orderSummary', orderSummary);
    dispatch(addToCartSuccess({cartData, orderSummary}));
    setToast(toast, 'Item added to the cart', 'success');
};