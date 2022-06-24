import { Text } from "@chakra-ui/react";


export const DescText = ({ children }) => {
    return (
        <Text
            fontSize={['12px', '12px', '13px', '16px', '17px']}
            color={'gray'}
        >
            {children}
        </Text>
    );
};

export const PriceText = ({children}) => {

    return (
        <>
            <Text
                fontSize={['15px', '20px', '17px', '20px', '20px']}
                fontWeight={600}
                my={'6px'}
            >
                {children}
            </Text>
        </>
    );
};