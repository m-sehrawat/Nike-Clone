import { Box, Divider, Image, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCartRequest } from "../../redux/features/cart/actions";
import { numberWithCommas, setToast } from "../../utils/extraFunctions";
import { BagItemBtn } from "./BagItemBtn";
import { useNavigate } from 'react-router-dom';
import { addToFavouriteRequest } from "../../redux/features/favourite/actions";


export const ItemBox = ({ title, description, img, price, size, quantity, index, data }) => {

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
                        <Text color={'gray'}>Size: {size}</Text>
                        <Text color={'gray'}>Quantity: {quantity}</Text>

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