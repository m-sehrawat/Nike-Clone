export const isSignupFormEmpty = ({ firstName, lastName, email, password, dateOfBirth, gender }) => {

    if (!firstName || !lastName || !email || !password || !dateOfBirth || !gender) {
        return { status: false, message: "Please fill all the details" };

    } else {
        return { status: true };
    }
};

export const isLoginFormEmpty = ({ email, password }) => {
    if (!email || !password) {
        return { status: false, message: "Please fill all the details" };
    }
    return { status: true };
};


export const validateEmail = (email) => {

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
        return { status: false, message: "Please provide a valid email id" };
    }
    return { status: true };
};


export const validatePassword = (password) => {

    const errors = [];

    if (password.length < 6) {
        errors.push("at least 6 characters");
    }
    if (password.length > 16) {
        errors.push("not more than 16 characters");
    }
    if (password.search(/[a-z]/i) < 0) {
        errors.push("at least one lower case");
    }
    if (password.search(/[A-Z]/i) < 0) {
        errors.push("at least one upper case");
    }
    if (password.search(/[0-9]/) < 0) {
        errors.push("at least one number");
    }
    if (password.search(/[!@#$%^&*]/) < 0) {
        errors.push("at least one special character(! @ # $ % ^ & *)");
    }

    if (errors.length > 0) {
        return { status: false, message: errors.join(", ") };
    }
    return { status: true };
};


export const isCheckoutFormEmpty = (obj) => {

    const { firstName, lastName, addressLine1, locality, pinCode, state, country, email, mobile } = obj;

    if (!firstName || !lastName || !addressLine1 || !locality || !pinCode || !state || !country || !email || !mobile) {

        return { status: false, message: 'Please fill the mandatory details' };
    }
    return { status: true };
};


export const validatePinCode = (num) => {

    if (num.length !== 6) {
        return { status: false, message: 'Please provide 6 digit valid pincode' };
    }
    return { status: true };
};


export const validateMobile = (num) => {

    if (num.length !== 10) {
        return { status: false, message: 'Please provide 10 digit valid mobile number' };
    }
    return { status: true };
};


