import { isCheckoutFormEmpty, validateEmail, validateMobile, validatePinCode } from "../../utils/formValidator";
import { CheckoutOrderSummary } from "../../components/checkout/CheckoutOrderSummary";
import { CheckoutForm } from "../../components/checkout/CheckoutForm";
import { Box, useToast } from "@chakra-ui/react";
import { setToast } from "../../utils/extraFunctions";
import { shallowEqual, useSelector } from 'react-redux';
import { initPayment } from "../payment/razorpay";
import { useState } from "react";
import axios from "axios";


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
            setToast(toast, isEmpty.message, 'error');
            return isEmpty.status;
        }
        const isEmail = validateEmail(form.email);
        if (!isEmail.status) {
            setToast(toast, isEmail.message, 'error');
            return isEmail.status;
        }
        const isPinCode = validatePinCode(form.pinCode);
        if (!isPinCode.status) {
            setToast(toast, isPinCode.message, 'error');
            return isPinCode.status;
        }
        const isMobile = validateMobile(form.mobile);
        if (!isMobile.status) {
            setToast(toast, isMobile.message, 'error');
            return isMobile.status;
        }
        return true;
    };


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!handleFormValidation(form)) return;

        //To get order id
        const { data } = await axios.post('/api/payment/order', { amount: orderSummary.total });

        //Passing order id to razorpay function
        initPayment(form, data, orderSummary, cartProducts);
        

        

        // let res = await axios.post('/order',)

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

                <CheckoutOrderSummary onClick={handleFormSubmit} orderSummary={orderSummary} />

            </Box>
        </>
    );
};