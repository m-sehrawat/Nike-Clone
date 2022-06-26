import { isCheckoutFormEmpty, validateEmail, validateMobile, validatePinCode } from "../../utils/formValidator";
import { CheckoutOrderSummary } from "../../components/checkout/CheckoutOrderSummary";
import { CheckoutForm } from "../../components/checkout/CheckoutForm";
import { Box, useToast } from "@chakra-ui/react";
import { setToast } from "../../utils/extraFunctions";
import { shallowEqual, useSelector } from 'react-redux';
import { displayRazorpay } from "../payment/razorpay";
import { useState } from "react";


export const Checkout = () => {

    const { orderSummary, cartProducts } = useSelector((state) => state.cartReducer, shallowEqual);

    const initState = {
        firstName: "",
        lastName: "",
        addressLine1: "",
        addressLine2: "",
        locality: "",
        pinCode: "",
        state: "",
        country: "",
        email: "",
        mobile: ""
    };

    const [form, setForm] = useState(initState);
    const toast = useToast();


    const handleInputChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleFormValidation = (form) => {
        const isEmpty = isCheckoutFormEmpty(form);
        if (!isEmpty.status) {
            return setToast(toast, isEmpty.message, 'error');
        }
        const isEmail = validateEmail(form.email);
        if (!isEmail.status) {
            return setToast(toast, isEmail.message, 'error');
        }
        const isPinCode = validatePinCode(form.pinCode);
        if (!isPinCode.status) {
            return setToast(toast, isPinCode.message, 'error');
        }
        const isMobile = validateMobile(form.mobile);
        if (!isMobile.status) {
            return setToast(toast, isMobile.message, 'error');
        }
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();

        handleFormValidation(form);

        displayRazorpay(form, orderSummary.total);

        console.log(form);
    };



    return (
        <>
            <Box
                p={'20px'}
                my={'30px'}
                mx={'auto'}
                maxW={'1200px'}
                display={'grid'}
                gap={['40px', '40px', '40px', '10%', '10%']}
                gridTemplateColumns={['100%', '100%', '100%', '55% 35%', '60% 30%']}
            >
                <CheckoutForm onChange={handleInputChange} />

                <CheckoutOrderSummary onClick={handleFormSubmit} {...orderSummary} />

            </Box>
        </>
    );
};