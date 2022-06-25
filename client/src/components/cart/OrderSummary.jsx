import { Box, Divider, Flex, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { applyCouponRequest, removeCouponRequest } from "../../redux/features/cart/actions";
import { couponValidator } from "../../utils/couponValidator";
import { numberWithCommas, setToast } from "../../utils/extraFunctions";
import { CheckoutBtn } from "./CheckoutBtn";


export const OrderSummary = () => {

    const { subTotal, total, shipping, discount } = useSelector((state) => state.cartReducer.orderSummary);

    const [coupon, setCoupon] = useState("");
    const toast = useToast();
    const dispatch = useDispatch();


    const handleCouponCode = ({ target: { textContent } }) => {
        switch (textContent) {
            case 'Apply Coupon':
                return applyCouponCode();
            case 'Remove Coupon':
                return dispatch(removeCouponRequest(toast));;
        };
    };

    const applyCouponCode = () => {
        if (!coupon) {
            return setToast(toast, 'Please enter coupon code', 'error');
        }
        const discountPercent = couponValidator(coupon);
        if (!discountPercent) {
            return setToast(toast, 'Invalid Coupon Code', 'error');
        }
        dispatch(applyCouponRequest(discountPercent, toast));
    };


    return (
        <>
            <Box>

                <Text fontSize={'20px'} fontWeight={500}>Summary</Text>

                <Box my={'20px'} fontSize={'18px'}>
                    <Flex justifyContent={'space-between'}>
                        <Text>Subtotal</Text>
                        <Text>₹{numberWithCommas(subTotal)}.00</Text>
                    </Flex>

                    <Flex mt={'5px'} justifyContent={'space-between'}>
                        <Text>Estimated Delivery</Text>
                        <Text>₹{numberWithCommas(shipping)}.00</Text>
                    </Flex>

                    <Flex mt={'5px'} justifyContent={'space-between'}>
                        <Text>Discount</Text>
                        <Text>₹{numberWithCommas(discount)}.00</Text>
                    </Flex>
                </Box>

                <Divider />

                <Flex fontSize={'18px'} justifyContent={'space-between'} my={'20px'}>
                    <Text>Total</Text>
                    <Text fontWeight={500} >₹{numberWithCommas(total)}.00</Text>
                </Flex>

                <Divider mb={'20px'} />

                <Input
                    onChange={(e) => { setCoupon(e.target.value) }}
                    placeholder={'Coupon'}
                    disabled={discount > 0}
                    type={'text'}
                    mb={'20px'}
                />

                <CheckoutBtn
                    onClick={handleCouponCode}
                    name={discount > 0 ? 'Remove Coupon' : 'Apply Coupon'}
                    bgColor={"white"}
                    color={"black"}
                    hoverBorder={"black"}
                    borderColor={'#cecdce'}
                />

                <CheckoutBtn
                    onClick={() => { console.log('hello'); }}
                    name={"Member Checkout"}
                    bgColor={"black"}
                    color={"white"}
                    hoverBg={'#1e1e1e'}
                    borderColor={'transparent'}
                />

            </Box>

        </>
    );
};