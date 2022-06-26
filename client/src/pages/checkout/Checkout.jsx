import { Box, Divider, Flex, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { setToast } from "../../utils/extraFunctions";
import { isCheckoutFormEmpty, validateEmail, validateMobile, validatePinCode } from "../../utils/formValidator";
import { ContinueBtn } from "../../components/checkout/ContinueBtn";
import { shallowEqual, useSelector } from 'react-redux';
import { displayRazorpay } from "../payment/razorpay";
import { CheckoutForm } from "../../components/checkout/CheckoutForm";


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
    console.log('form:', form)
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
                gridTemplateColumns={['100%', '100%', '100%', '60% 30%', '60% 30%']}
            >
                <CheckoutForm onChange={handleInputChange} />


                <Box border={'1px solid red'}>
                    <Text fontSize={'20px'} fontWeight={600}>Summary</Text>

                    <Box my={'20px'} fontSize={'18px'}>
                        <Flex justifyContent={'space-between'}>
                            <Text>Subtotal</Text>
                            {/* <Text>₹{numberWithCommas(subTotal)}.00</Text> */}
                        </Flex>

                        <Flex mt={'5px'} justifyContent={'space-between'}>
                            <Text>Quantity</Text>
                            {/* <Text>{quantity}</Text> */}
                        </Flex>

                        <Flex mt={'5px'} justifyContent={'space-between'}>
                            <Text >Estimated Delivery</Text>
                            <Text
                                title={'Free delivery applies to orders of ₹14,000 or more'}
                                cursor={'pointer'}
                            >
                                {/* ₹{numberWithCommas(shipping)}.00 */}
                            </Text>
                        </Flex>

                        <Flex mt={'5px'} justifyContent={'space-between'}>
                            <Text>Discount</Text>
                            {/* <Text>₹{numberWithCommas(discount)}.00</Text> */}
                        </Flex>
                    </Box>

                    <Divider />

                    <Flex fontSize={'18px'} justifyContent={'space-between'} my={'20px'}>
                        <Text>Total</Text>
                        {/* <Text fontWeight={500} >₹{numberWithCommas(total)}.00</Text> */}
                    </Flex>

                    <Divider mb={'20px'} />

                    <ContinueBtn onClick={handleFormSubmit} />
                </Box>

            </Box>
        </>
    );
};