import { Box } from "@chakra-ui/react";
import { BagItems } from "../../components/cart/BagItems";
import { OrderSummary } from "../../components/cart/OrderSummary";

export const Cart = () => {

    return (
        <>
            <Box
                display={'grid'}
                gap={'2%'}
                my={'50px'}
                maxW={'1200px'}
                mx={'auto'}
                p={'20px'}
                border={'1px solid red'}
                gridTemplateColumns={['100%', '100%', '100%', '66% 32%', '66% 32%']}
            >

                <BagItems />

                <OrderSummary />

            </Box>
        </>
    );
};