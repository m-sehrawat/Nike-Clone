import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavouriteRequest } from "../../redux/features/favourite/actions";
import { numberWithCommas, shortString } from "../../utils/extraFunctions";


export const FavouriteItemBox = ({ _id, title, description, price, img }) => {

    const dispatch = useDispatch();
    const token = useSelector((state) => state.authReducer.token);

    const handleDeleteRequest = () => {
        dispatch(deleteFavouriteRequest(_id, token));
    }

    return (
        <>
            <Flex flexDirection={'column'} mb={'30px'}>
                <Image className="imgAnimation" src={img[0]} />
                <Box mt={'15px'}>
                    <Flex
                        fontSize={['14px', '14px', '16px', '16px', '18px']}
                        justifyContent={'space-between'}
                    >
                        <Text>{shortString(title)}</Text>
                        <Text>₹{numberWithCommas(price)}.00</Text>
                    </Flex>
                    <Text
                        fontSize={['12px', '12px', '15px', '15px', '17px']}
                        color={'gray'}
                        my={'2px'}
                    >
                        {description}
                    </Text>
                    <Button
                        variant={'ghost'}
                        borderRadius={'20px'}
                        border={'1px solid #cecdce'}
                        mt={'20px'}
                        onClick={handleDeleteRequest}
                    >Remove</Button>
                </Box>
            </Flex>
        </>
    );
};
