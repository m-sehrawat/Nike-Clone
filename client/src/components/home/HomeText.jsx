import { Text } from "@chakra-ui/react";


export const HomeText = ({ children }) => {
    return (
        <Text
            fontWeight={600}
            letterSpacing={2}
            fontFamily={"'Anton', sans-serif"}
            fontSize={['35px', '40px', '55px', '60px', '60px']}
        >{children}
        </Text>
    );
};


export const HomeDescText = ({ children }) => {
    return (
        <Text
            mb={['30px']}
            px={['10px', '15px', '30px', '50px', '100px']}
            fontSize={['14px', '15px', '16px', '16px', '16px']}
        >
            {children}
        </Text>
    );
};