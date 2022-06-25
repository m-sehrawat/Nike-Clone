import { setToast } from "../../../utils/extraFunctions";
import { getCartTotal } from "../../../utils/getCartTotal";
import { getItem, setItem } from "../../../utils/localstorage";
import { ADD_TO_CART_SUCCESS, APPLY_COUPON_SUCCESS, REMOVE_FROM_CART } from "./actionTypes";


export const addToCartSuccess = (payload) => {
    return { type: ADD_TO_CART_SUCCESS, payload };
};

export const removeFromCart = (payload) => {
    return { type: REMOVE_FROM_CART, payload };
};

export const applyCouponSuccess = (payload) => {
    return { type: APPLY_COUPON_SUCCESS, payload };
};


export const addToCartRequest = (data, toast) => (dispatch) => {
    const cartData = getItem('cartProducts') || [];
    cartData.push(data);
    setItem('cartProducts', cartData);
    const orderSummary = getCartTotal(cartData);
    setItem('orderSummary', orderSummary);
    dispatch(addToCartSuccess({ data, orderSummary }));
    setToast(toast, 'Item added to the cart', 'success');
};

export const removeFromCartRequest = (index, toast) => (dispatch) => {
    const cartData = getItem('cartProducts');
    cartData.splice(index, 1);
    setItem('cartProducts', cartData);
    const orderSummary = getCartTotal(cartData);
    setItem('orderSummary', orderSummary);
    dispatch(removeFromCart({ index, orderSummary }));
    setToast(toast, 'Item removed from the cart', 'success');
};

export const applyCouponRequest = (discountPercent, toast) => (dispatch) => {
    const cartData = getItem('cartProducts');
    const orderSummary = getCartTotal(cartData, discountPercent);
    setItem('orderSummary', orderSummary);
    dispatch(applyCouponSuccess(orderSummary));
    setToast(toast, 'Coupon Applied Successfully', 'success', 2000, `You got ${discountPercent}% discount`);
};