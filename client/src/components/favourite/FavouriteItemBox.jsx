import { Box, Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavouriteRequest } from "../../redux/features/favourite/actions";
import { numberWithCommas, shortString } from "../../utils/extraFunctions";


export const FavouriteItemBox = ({ _id, title, description, price, img }) => {

    const dispatch = useDispatch();
    const toast = useToast();
    const token = useSelector((state) => state.authReducer.token);

    const handleDeleteRequest = () => {
        dispatch(deleteFavouriteRequest(_id, token, toast));
    };


    return (
        <>
            <Flex flexDirection={'column'} mb={'30px'}>
                <Box overflow={'hidden'}>
                    <Image className="imgAnimation" src={img[0]} />
                </Box>
                <Box mt={'15px'}>
                    <Flex
                        fontSize={['14px', '14px', '16px', '16px', '18px']}
                        justifyContent={'space-between'}
                    >
                        <Text>{shortString(title)}</Text>
                        <Text>₹{numberWithCommas(price)}</Text>
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
