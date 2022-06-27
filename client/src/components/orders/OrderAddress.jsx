import { Box, Divider, Text } from "@chakra-ui/react";
import { AddressText } from "./AddressText";


export const OrderAddress = ({ firstName, lastName, email, mobile, addressLine1, addressLine2, locality, state, pinCode }) => {

    return (
        <>
            <Box py={'15px'} px={'25px'} border={'1px solid red'}>
                <Text fontWeight={600} fontSize={'20px'} mb={'10px'} textAlign={'center'}>Shipping Address</Text>
                <Divider />
                <AddressText title={'Full Name:'} value={`${firstName} ${lastName}`} />
                <AddressText title={'Mobile:'} value={`+91 ${mobile}`} />
                <AddressText title={'Email:'} value={email} />
                <AddressText title={'Address:'} value={`${addressLine1}, ${locality}, ${state} - ${pinCode}`} />
                {addressLine2 && <AddressText title={'Address:'} value={`${addressLine2}, ${locality}, ${state} - ${pinCode}`} />}
            </Box>
        </>
    );
};