import { Box, Divider, Flex, Input, Text } from "@chakra-ui/react";
import { useSelector } from 'react-redux';
import { numberWithCommas } from "../../utils/extraFunctions";
import { CheckoutBtn } from "./CheckoutBtn";


export const OrderSummary = () => {

    const { subTotal, total, shipping } = useSelector((state) => state.cartReducer.orderSummary)

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
                </Box>

                <Divider />

                <Flex fontSize={'18px'} justifyContent={'space-between'} my={'20px'}>
                    <Text>Total</Text>
                    <Text fontWeight={500} >₹{numberWithCommas(total)}.00</Text>
                </Flex>

                <Divider mb={'20px'} />

                <Input mb={'20px'} type={'text'} placeholder={'Coupon'} />

                <CheckoutBtn
                    onClick={() => { console.log('hello'); }}
                    name={"Apply Coupon"}
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