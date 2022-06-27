import { Flex, Text } from "@chakra-ui/react";

export const AddressText = ({ title, value, fs = '18px', fw }) => {
    return (
        <Flex gap={'20px'} fontWeight={fw} fontSize={fs} my={'15px'} >
            <Text>{title}</Text>
            <Text>{value}</Text>
        </Flex>
    );
};