import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { OrderPageText } from "./OrderPageText";


export const OrderAddress = ({ firstName, lastName, email, mobile, addressLine1, addressLine2, locality, state, pinCode, country }) => {
    return (
        <Box py={'15px'} px={'25px'}>

            <Text fontSize={'20px'} fontWeight={600}>Shipping Address</Text>

            <Divider mb={'20px'} />

            <Flex flexDirection={'column'} gap={'5px'} my={'20px'} fontSize={'18px'}>

                <OrderPageText name={'Full Name'} value={`${firstName} ${lastName}`} />

                <OrderPageText name={'Mobile'} value={`+91 ${mobile}`} />

                <OrderPageText name={'Email'} value={email} />

                <Divider my={'10px'} />

                <OrderPageText name={'Address'} value={addressLine1} />

                {addressLine2 && <OrderPageText name={'Address(2)'} value={addressLine2} />}

                <OrderPageText name={'City'} value={locality} />

                <OrderPageText name={'State'} value={state} />

                <OrderPageText name={'Pincode'} value={pinCode} />

                <OrderPageText name={'Country'} value={country} />

                <Divider my={'10px'} />

            </Flex>
        </Box>
    );
};