import { Box, Divider, Flex, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { setToast } from "../../utils/extraFunctions";
import { isCheckoutFormEmpty, validateEmail, validateMobile, validatePinCode } from "../../utils/formValidator";
import { shallowEqual, useSelector } from 'react-redux';
import { displayRazorpay } from "../payment/razorpay";
import { CheckoutForm } from "../../components/checkout/CheckoutForm";
import { CheckoutOrderSummary } from "../../components/checkout/CheckoutOrderSummary";


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

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // const isEmpty = isCheckoutFormEmpty(form);
        // if (!isEmpty.status) {
        //     return setToast(toast, isEmpty.message, 'error');
        // }

        // const isEmail = validateEmail(form.email);
        // if (!isEmail.status) {
        //     return setToast(toast, isEmail.message, 'error');
        // }

        // const isPinCode = validatePinCode(form.pinCode);
        // if (!isPinCode.status) {
        //     return setToast(toast, isPinCode.message, 'error');
        // }

        // const isMobile = validateMobile(form.mobile);
        // if (!isMobile.status) {
        //     return setToast(toast, isMobile.message, 'error');
        // }

        displayRazorpay(form, orderSummary.total);

        console.log(form);
    };



    return (
        <>
            <Box
                display={'grid'}
                gap={['40px', '40px', '40px', '10%', '10%']}
                my={'30px'}
                maxW={'1200px'}
                mx={'auto'}
                p={'20px'}
                gridTemplateColumns={['100%', '100%', '100%', '55% 35%', '60% 30%']}
            >
                <CheckoutForm onChange={handleInputChange} />


                <CheckoutOrderSummary onClick={handleFormSubmit} {...orderSummary} />

            </Box>
        </>
    );
};