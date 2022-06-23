import { Box, Text } from "@chakra-ui/react";
import { ItemBox } from "./ItemBox";


export const BagItems = () => {

    return (
        <>
             <Box border={'1px solid red'}>

                <Text fontSize={'20px'} fontWeight={500}>Bag</Text>

                {[1,2].map((item)=>(
                    <ItemBox />
                ))}
                 
             </Box>
        </>
    );
};