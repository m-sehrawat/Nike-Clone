import { Box, Button, Divider, Flex, Image, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartRequest, removeFromCartRequest } from "../../redux/features/cart/actions";
import { numberWithCommas, setToast } from "../../utils/extraFunctions";
import { BagItemBtn, QuantityBtn } from "./BagItemBtn";
import { useNavigate } from 'react-router-dom';
import { addToFavouriteRequest } from "../../redux/features/favourite/actions";


export const ItemBox = ({ title, description, img, price, quantity, index, data }) => {

    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();
    const token = useSelector((state) => state.authReducer.token);

    const handleRemoveItem = () => {
        dispatch(removeFromCartRequest(index, toast));
    };

    const handleAddToFavourite = () => {
        if (!token) {
            setToast(toast, 'Please login first', 'error');
            navigate('/auth');
        } else {
            dispatch(addToFavouriteRequest(data, token, toast));
        }
    };

    const handleQuantityChange = ({ target: { name } }) => {
        if (quantity === 1 && name === 'reduce') {
            return dispatch(removeFromCartRequest(index, toast));
        }
        return dispatch(addToCartRequest(data, toast, name));
    };

    return (
        <>
            <Box
                my={'15px'}
                minH={'150px'}
                display={'flex'}
                gap={['5px', '5px', '20px', '20px', '20px']}
            >

                <Box
                    w={['80px', '80px', '150px', '150px', '150px']}
                    h={['80px', '80px', '150px', '150px', '150px']}
                >
                    <Image h={'100%'} src={img[0]} />
                </Box>

                <Box
                    w={'100%'}
                    display={'grid'}
                    gap={'2%'}
                    gridTemplateColumns={['67% 30%', '67% 30%', '80% 18%', '80% 18%', '80% 18%']}
                >
                    <Box minH={'150px'}>
                        <Text fontWeight={500}>{title}</Text>
                        <Text color={'gray'}>{description}</Text>

                        <Flex alignItems={'center'} gap={'10px'} my={'8px'}>
                            <Text >Quantity:</Text>

                            <QuantityBtn
                                text={'-'}
                                name={'reduce'}
                                onClick={handleQuantityChange}
                            />
                            <Text fontWeight={600}>{quantity}</Text>

                            <QuantityBtn
                                text={'+'}
                                name={'add'}
                                onClick={handleQuantityChange}
                            />
                        </Flex>

                        <Box display={'flex'} gap={'10px'}>

                            <BagItemBtn title={'Favourites'} onClick={handleAddToFavourite} />

                            <BagItemBtn title={'Remove'} onClick={handleRemoveItem} />
                        </Box>
                    </Box>

                    <Box minH={'150px'}>
                        <Text fontSize={'18px'} textAlign={'end'}>₹{numberWithCommas(price)}</Text>
                    </Box>
                </Box>

            </Box>

            <Divider />
        </>
    );
};