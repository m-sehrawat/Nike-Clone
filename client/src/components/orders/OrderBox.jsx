import { Box, Center, Grid, Image, Text } from "@chakra-ui/react";
import { numberWithCommas, shortString } from '../../utils/extraFunctions';


export const OrderBox = ({ img, title, price, quantity }) => {
    return (
        <Grid templateColumns={'100px 60%'} p={'5px'}>
            <Box w={'100px'} overflow={'hidden'}>
                <Image src={img[0]} />
            </Box>
            <Center>
                <Box px={'20px'} w={'100%'} >
                    <Text fontWeight={600}>{shortString(title)}</Text>
                    <Text>Price: ₹ {numberWithCommas(price)}</Text>
                    <Text>Quantity: {quantity}</Text>
                </Box>
            </Center>
        </Grid>
    );
};