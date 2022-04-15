import { Box, Button, Center, Flex, Grid, Icon, Image, Spacer, Text, } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoOptionsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getRequest, resetFilters } from "../../redux/features/products/actions";
import { numberWithCommas } from "../../utils/extraFunctions";
import { LeftSideFilter } from "./LeftSideFilter";
import { SortFilters } from "./SortFilters";
import { AiOutlineStar } from "react-icons/ai";



export const Products = () => {

    const [isFilter, setIsFilter] = useState(true);
    const { products } = useSelector((state) => state.prodReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRequest());
    }, []);

    const resetFilter = () => {
        // dispatch(resetFilters());
        dispatch(getRequest());
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

            <Grid className="test" templateColumns={isFilter ? '18% 77.4%' : '97%'} gap={6} justifyContent={'center'}>
                {isFilter && <Box border={'1px solid red'} h={'600px'} position={'sticky'} top={'70px'} overflowY={'scroll'} id='scroll'>

                    <LeftSideFilter />

                </Box>}

                <Box border={'1px solid red'} minH={'400px'}>
                    <Grid templateColumns='repeat(3, 1fr)' gap={4} p={'20px'}>
                        {products.map((e, i) => {
                            const { title, description, color, rating, price, size, gender } = e;
                            return <Box key={i} border={'1px solid red'} minH={isFilter ? '520px' : '660px'}>
                                <Box border={'1px solid red'} h={'70%'} overflow={'hidden'}>
                                    <Image className="imgAnimation" src={e.img[0]} />
                                </Box>
                                <Box>
                                    <Flex justifyItems={'center'}>
                                        <Text fontSize={'18px'} fontWeight={500} mt={'8px'}>{title}</Text>
                                        <Spacer />
                                        <Box fontSize={'22px'} mt={'10px'} mr={'3px'}><AiOutlineStar /></Box>
                                        <Text fontSize={'18px'} mt={'8px'} mr={'16px'}> {rating}</Text>
                                    </Flex>
                                    <Text fontSize={'17px'} color={'gray'} my={'2px'}>{description}</Text>
                                    <Text my={'2px'} color={'gray'}>Size : {size.join(", ")}</Text>
                                    <Text fontSize={'17px'} color={'gray'} my={'2px'}>Colour : {color}</Text>
                                    <Text fontSize={'17px'} color={'gray'} my={'2px'}>Gender : {gender}</Text>
                                    <Text fontSize={'20px'} fontWeight={500} mt={'8px'}>₹ {numberWithCommas(price)}</Text>
                                </Box>
                            </Box>
                        })}
                    </Grid>
                </Box>
            </Grid>
        </>
    );
};


