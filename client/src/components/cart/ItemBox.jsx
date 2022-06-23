import { Box, Button, Image, Text, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removeFromCartRequest } from "../../redux/features/cart/actions";
import { numberWithCommas } from "../../utils/extraFunctions";


export const ItemBox = ({ title, description, img, price, size, index }) => {

    const dispatch = useDispatch();
    const toast = useToast();

    const handleRemoveItem = () => {
        dispatch(removeFromCartRequest(index, toast));
    }

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
                    <Image h={'100%'} src={img[0]} />
                </Box>

                <Box
                    w={'100%'}
                    display={'grid'}
                    gap={'2%'}
                    gridTemplateColumns={['67% 30%', '80% 18%', '80% 18%', '80% 18%', '80% 18%']}
                >
                    <Box border={'1px solid red'} minH={'150px'}>
                        <Text fontWeight={500}>{title}</Text>
                        <Text color={'gray'}>{description}</Text>
                        <Text color={'gray'}>Size: {size}</Text>
                        <Button onClick={handleRemoveItem}>Remove</Button>
                    </Box>

                    <Box border={'1px solid red'} minH={'150px'}>
                        <Text fontSize={'18px'} textAlign={'end'}>₹{numberWithCommas(price)}</Text>
                    </Box>
                </Box>

            </Box>
        </>
    );
};