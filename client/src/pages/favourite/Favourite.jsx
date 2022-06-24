import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FavouriteItemBox } from "../../components/favourite/FavouriteItemBox";
import { Error } from "../../components/loading/Error";
import { Loading } from "../../components/loading/Loading";
import { getFavouriteRequest } from "../../redux/features/favourite/actions";


export const Favourite = () => {

    const dispatch = useDispatch();
    const token = useSelector((state) => state.authReducer.token);
    const { isLoading, isError, favourite } = useSelector((state) => state.favouriteReducer);


    const handleGetRequest = (token) => {
        dispatch(getFavouriteRequest(token));
    };

    useEffect(() => {
        handleGetRequest(token);
    }, [token]);


    return isLoading ? (
        <Loading />
    ) : isError ? (
        <Error />
    ) : (
        <>
            <Box border={'1px solid red'} maxW={'1450px'} mx={'auto'} my={'20px'}>
                <Text fontSize={'20px'} fontWeight={500}>Favourites</Text>

                <Box
                    display={'grid'}
                    gridTemplateColumns={['repeat(3, 1fr)']}
                    gap={'40px'}
                    mt={'40px'}
                >
                    {favourite.map((item) => (
                        <FavouriteItemBox key={item._id} {...item} />
                    ))}

                </Box>
            </Box>
        </>
    );
};