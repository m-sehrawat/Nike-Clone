import { Flex, Text } from "@chakra-ui/react";

export const AddressText = ({ title, value, fs = '18px', fw }) => {
    return (
        <Flex gap={'10px'} fontWeight={fw} fontSize={fs} my={'5px'} >
            <Text>{title}</Text>
            <Text>{value}</Text>
        </Flex>
    );
};

export const OrderPageText = ({ name, value }) => {

    return (
        <>
            <Flex justifyContent={'space-between'}>
                <Text>{name}</Text>
                <Text>{value}</Text>
            </Flex>
        </>
    );
};