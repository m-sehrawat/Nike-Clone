import { Box, Container, Spinner, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavouriteRequest } from "../../redux/features/favourite/actions";

export const Favourite = () => {

    const dispatch = useDispatch();
    const token = useSelector((state) => state.authReducer.token);
    const { isLoading, isError } = useSelector((state) => state.favouriteReducer);

    const handleGetRequest = (token) => {
        dispatch(getFavouriteRequest(token));
    };

    useEffect(() => {
        handleGetRequest(token);
    }, [token]);

    
    return isLoading ? (
        <Container my={'140px'} display={'flex'} justifyContent={'center'}>
            <Spinner size='xl' />
        </Container>
    ) : isError ? (
        <Box my={'140px'}>
            <Text textAlign={'center'}>Something went Wrong</Text>
        </Box>
    ) : (
        <>
            <Box border={'1px solid red'} maxW={'1450px'} mx={'auto'} my={'20px'}>
                <Text fontSize={'20px'} fontWeight={500}>Favourites</Text>


            </Box>
        </>
    );
};