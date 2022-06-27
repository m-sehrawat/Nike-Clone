import { Box, Center, Grid, Image, Text } from "@chakra-ui/react";
import { numberWithCommas, shortString } from "../../utils/extrafunctions";

export const OrderBox = ({ product }) => {

    const { img, name, price, quantity } = product;

    return (
        <>
            <Grid templateColumns={'110px 60%'} p={'5px'}>
                <Box w={'110px'} overflow={'hidden'}>
                    <Image src={img} />
                </Box>
                <Center>
                    <Box px={'20px'} w={'100%'} >
                        <Text fontWeight={600}>{shortString(name)}</Text>
                        <Text>Price: ₹ {numberWithCommas(price)}</Text>
                        <Text>Quantity: {quantity}</Text>
                    </Box>
                </Center>
            </Grid>
            
        </>
    );
};