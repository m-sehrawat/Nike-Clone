const coupon = {
    NIKE5: 5,
    NIKE10: 10,
    NIKE15: 15,
    NIKE20: 20,
    NIKE25: 25,
    NIKE30: 30,
};


export const couponValidator = (couponCode) => {
    return coupon[couponCode] ? coupon[couponCode] : false;
};
