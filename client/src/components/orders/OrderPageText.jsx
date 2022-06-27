import { Flex, Text } from "@chakra-ui/react";


export const OrderPageText = ({ name, value }) => {
    return (
        <Flex justifyContent={'space-between'}>
            <Text>{name}</Text>
            <Text>{value}</Text>
        </Flex>
    );
};