export const getCartTotal = (arr) => {

    const subTotal = arr.map((item) => item.price).reduce((prev, curr) => prev + curr, 0);
    const shipping = subTotal <= 4999 && subTotal > 0 ? 200 : 0;
    const total = subTotal - shipping;

    return {
        subTotal,
        shipping,
        total
    };
};