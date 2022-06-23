import { Box, Flex, Text } from "@chakra-ui/react";
import { useSelector } from 'react-redux';
import { numberWithCommas } from "../../utils/extraFunctions";


export const OrderSummary = () => {

    const { subTotal, total, shipping } = useSelector((state) => state.cartReducer.orderSummary)

    return (
        <>
            <Box border={'1px solid red'}>

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

                <Flex fontSize={'18px'} justifyContent={'space-between'}>
                    <Text>Total</Text>
                    <Text fontWeight={500} >₹{numberWithCommas(total)}.00</Text>
                </Flex>
                
            </Box>

        </>
    );
};