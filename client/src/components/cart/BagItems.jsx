import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { ItemBox } from "./ItemBox";


export const BagItems = () => {

    const cartProducts = useSelector((state) => state.cartReducer.cartProducts);
    console.log('cartProducts bagitem:', cartProducts)

    return (
        <>
            <Box border={'1px solid red'}>

                <Text mb={'20px'} fontSize={'20px'} fontWeight={500}>Bag</Text>

                {cartProducts.map((item, index) => (
                    <ItemBox key={index} {...item} index={index} />
                ))}

            </Box>
        </>
    );
};