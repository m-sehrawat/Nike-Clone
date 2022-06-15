export const isSignupFormEmpty = ({ firstName, lastName, email, password, dateOfBirth, gender }) => {
    if (!firstName || !lastName || !email || !password || !dateOfBirth || !gender) {
        return { status: false, message: "Please fill all the details" };
    } else {
        return { status: true };
    }
};


export const validateEmail = (email) => {
    const regexForEmail = /\S+@\S+\.\S+/;
    return regexForEmail.test(email);
};

