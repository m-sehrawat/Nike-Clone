import { Input } from "@chakra-ui/react";

export const AuthBtn = ({ value }) => {
    return (
        <Input
            value={value}
            type={'submit'}
            backgroundColor={'black'}
            _hover={{ backgroundColor: "#1e1e1e" }}
            color={'white'}
            w={'100%'}
        />
    );
};