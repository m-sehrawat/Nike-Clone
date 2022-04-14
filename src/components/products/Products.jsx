import { Box, Button, Center, Flex, Grid, Image, Spacer, Text, } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoOptionsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getRequest, resetFilters } from "../../redux/features/products/actions";
import { LeftSideFilter } from "./LeftSideFilter";
import { SortFilters } from "./SortFilters";



export const Products = () => {

    const [isFilter, setIsFilter] = useState(true);
    const { products, filters } = useSelector((state) => state.prodReducer);
    console.log('filters:', filters)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRequest());
    }, []);

    const resetFilter = () => {
        dispatch(resetFilters());
    };


    return (
        <>
            <Flex border={'1px solid red'} h={'60px'} position={'sticky'} top={'0px'} zIndex={1} bg={'white'} >
                <Center>
                    <Text ml={'50px'} fontSize={'25px'} fontWeight={500}  >Men's Clothing</Text>
                </Center>
                <Spacer />
                <Center>
                    <Button onClick={() => { setIsFilter(!isFilter) }} rightIcon={<IoOptionsOutline />} >
                        {isFilter ? 'Hide Filter' : 'Show Filter'}
                    </Button>
                    <Button onClick={resetFilter} mx={'20px'}>Reset Filter</Button>
                    <SortFilters />
                </Center>
            </Flex>

            <Grid templateColumns={isFilter ? '18% 77.4%' : '97%'} gap={6} justifyContent={'center'}>
                {isFilter && <Box border={'1px solid red'} h={'600px'} position={'sticky'} top={'70px'} overflowY={'scroll'} id='scroll'>

                    <LeftSideFilter />

                </Box>}

                <Box border={'1px solid red'} minH={'400px'}>
                    <Grid templateColumns='repeat(3, 1fr)' gap={4} p={'20px'}>
                        {products.map((e, i) => (
                            <Box key={i} border={'1px solid red'} minH={isFilter ? '520px' : '660px'}>
                                <Box border={'1px solid red'} h={'70%'} overflow={'hidden'}>
                                    <Image className="imgAnimation" src={e.img[0]} />
                                </Box>
                                <Box>
                                    <Text>{e.name}</Text>
                                    <Text>Price: ₹ {e.price}</Text>
                                    <Text>Rating: {e.rating}</Text>
                                    <Text>Gender: {e.gender}</Text>
                                    <Box>Size: {e.size.map((el, i) => <Text key={i} style={{ display: "inline" }}>{el}, </Text>)}</Box>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </>
    );
};


