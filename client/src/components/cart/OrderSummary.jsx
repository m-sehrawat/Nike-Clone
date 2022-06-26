import { Box, Divider, Flex, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { applyCouponRequest, removeCouponRequest } from "../../redux/features/cart/actions";
import { couponValidator } from "../../utils/couponValidator";
import { numberWithCommas, setToast } from "../../utils/extraFunctions";
import { CheckoutBtn } from "./CheckoutBtn";
import { useNavigate } from 'react-router-dom';


export const OrderSummary = () => {

    const { subTotal, quantity, total, shipping, discount } = useSelector((state) => state.cartReducer.orderSummary);
    const token = useSelector((state) => state.authReducer.token);

    const [coupon, setCoupon] = useState("");
    const toast = useToast();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleCouponCode = ({ target: { textContent } }) => {
        switch (textContent) {
            case 'Apply Coupon':
                return applyCouponCode();
            case 'Remove Coupon':
                return removeCouponCode();
        };
    };

    const applyCouponCode = () => {
        if (!token) {
            setToast(toast, 'Please login first', 'error');
            return navigate('/auth');
        }
        if (total === 0) {
            return setToast(toast, 'Please add some products in the cart', 'error');
        }
        if (!coupon) {
            return setToast(toast, 'Please enter coupon code', 'error');
        }
        const discountPercent = couponValidator(coupon);
        if (!discountPercent) {
            return setToast(toast, 'Invalid Coupon Code', 'error');
        }
        dispatch(applyCouponRequest(discountPercent, toast));
    };

    const removeCouponCode = () => {
        dispatch(removeCouponRequest(toast));
        setCoupon('');
    };

    const handleMemberCheckout = () => {
        if (!token) {
            setToast(toast, 'Please login first', 'error');
            return navigate('/auth');
        }
        if (total === 0) {
            return setToast(toast, 'Please add some products in the cart', 'error');
        }
        navigate('/checkout');
    };


    return (
        <>
            <Box>

                <Text fontSize={'20px'} fontWeight={600}>Summary</Text>

                <Box my={'20px'} fontSize={'18px'}>
                    <Flex justifyContent={'space-between'}>
                        <Text>Subtotal</Text>
                        <Text>₹{numberWithCommas(subTotal)}.00</Text>
                    </Flex>

                    <Flex mt={'5px'} justifyContent={'space-between'}>
                        <Text>Quantity</Text>
                        <Text>{quantity}</Text>
                    </Flex>

                    <Flex mt={'5px'} justifyContent={'space-between'}>
                        <Text >Estimated Delivery</Text>
                        <Text
                            title={'Free delivery applies to orders of ₹14,000 or more'}
                            cursor={'pointer'}
                        >
                            ₹{numberWithCommas(shipping)}.00
                        </Text>
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
                    value={coupon}
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
                    onClick={handleMemberCheckout}
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