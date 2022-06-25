export const getCartTotal = (arr, discountPercent = 0) => {

    const subTotal = arr.map((item) => item.price).reduce((prev, curr) => prev + curr, 0);
    const shipping = subTotal <= 14000 && subTotal > 0 ? 750 : 0;
    const discount = Math.floor(subTotal * discountPercent / 100);
    const total = subTotal + shipping - discount;

    return {
        subTotal,
        shipping,
        discount,
        total
    };
};