export const isCheckoutFormEmpty = (obj) => {

    const { firstName, lastName, addressLine1, locality, postalCode, state, country, email, mobile } = obj;

    if (!firstName || !lastName || !addressLine1 || !locality || !postalCode || !state || !country || !email || !mobile) {
        return {
            status: false,
            message: 'Please fill the mandatory details'
        };
    }
    return { status: true };
};