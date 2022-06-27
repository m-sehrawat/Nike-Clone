import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { dateFormator } from "../../utils/dateFormator";
import { numberWithCommas } from "../../utils/extrafunctions";



export const Summary = ({ subTotal, discount, quantity, total, shipping, createdAt }) => {

    const { date, time } = dateFormator(createdAt);

    return (
        <>
            <Box py={'15px'} px={'25px'}>
                <Text fontSize={'20px'} fontWeight={600}>Summary</Text>
                <Divider />

                <Box my={'20px'} fontSize={'18px'}>

                    <Flex justifyContent={'space-between'}>
                        <Text>Order Date</Text>
                        <Text>{date}</Text>
                    </Flex>

                    <Flex mt={'5px'} justifyContent={'space-between'}>
                        <Text>Order Time</Text>
                        <Text>{time}</Text>
                    </Flex>

                    <Divider my={'10px'} />

                    <Flex mt={'5px'} justifyContent={'space-between'}>
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
            </Box>
        </>
    );
};