import { Box, Divider, Text } from "@chakra-ui/react";
import { AddressText } from "./AddressText";


export const OrderAddress = ({ firstName, lastName, email, mobile, addressLine1, addressLine2, locality, state, pincode }) => {

    return (
        <>
            <Box className="shadow" py={'15px'} px={'25px'}>
                <Text fontWeight={600} fontSize={'25px'} mb={'10px'} textAlign={'center'}>SHIPPING ADDRESS</Text>
                <Divider />
                <AddressText title={'Full Name :'} value={`${firstName} ${lastName}`} />
                <AddressText title={'Mobile :'} value={`+91 ${mobile}`} />
                <AddressText title={'Email :'} value={email} />
                <AddressText title={'Address 1 :'} value={addressLine1} />
                {addressLine2 && <AddressText title={'Address 2 :'} value={addressLine2} />}
                <AddressText title={'City :'} value={locality} />
                <AddressText title={'State :'} value={state} />
                <AddressText title={'Pincode :'} value={pincode} />
            </Box>
        </>
    );
};