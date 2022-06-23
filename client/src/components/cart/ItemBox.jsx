import { Box, Image } from "@chakra-ui/react";

export const ItemBox = () => {

    return (
        <>
            <Box border={'1px solid red'} my={'15px'} minH={'150px'} display={'flex'} gap={'20px'}>

                <Box border={'1px solid red'} w={'170px'} h={'150px'}>
                    <Image />
                </Box>

                <Box w={'100%'} display={'grid'} gridTemplateColumns={'80% 18%'} gap={'2%'}>
                    <Box border={'1px solid red'}  minH={'150px'}></Box>
                    <Box border={'1px solid red'}  minH={'150px'}></Box>
                </Box>

            </Box>
        </>
    );
};