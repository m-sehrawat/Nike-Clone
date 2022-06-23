import { Box, Image } from "@chakra-ui/react";

export const ItemBox = () => {

    return (
        <>
            <Box
                border={'1px solid red'}
                my={'15px'}
                minH={'150px'}
                display={'flex'}
                gap={'20px'}
            >

                <Box
                    border={'1px solid red'}
                    w={['80px', '80px', '150px', '150px', '150px']}
                    h={['80px', '80px', '150px', '150px', '150px']}
                >
                    <Image />
                </Box>

                <Box
                    w={'100%'}
                    display={'grid'}
                    gap={'2%'}
                    gridTemplateColumns={['63% 35%', '63% 35%', '73% 25%', '73% 25%', '73% 25%']}
                >
                    <Box border={'1px solid red'} minH={'150px'}></Box>
                    <Box border={'1px solid red'} minH={'150px'}></Box>
                </Box>

            </Box>
        </>
    );
};