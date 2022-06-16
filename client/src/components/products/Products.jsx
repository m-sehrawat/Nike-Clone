import { Box, Button, Center, Flex, Grid, Image, Spacer, Text, useColorMode, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoOptionsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "../../redux/features/products/actions";
import { numberWithCommas, setToast } from "../../utils/extraFunctions";
import { LeftSideFilter } from "./LeftSideFilter";
import { SortFilters } from "./SortFilters";
import { AiOutlineStar } from "react-icons/ai";
import { getItem, setItem } from "../../utils/localstorage";
import { useNavigate } from "react-router-dom";


export const Products = () => {

    const { colorMode } = useColorMode();
    const [isFilter, setIsFilter] = useState(true);
    const { products } = useSelector((state) => state.prodReducer);
    const path = getItem("path");
    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getRequest(path));
    }, [path]);

    const resetFilter = () => {
        setIsFilter(!isFilter);
        dispatch(getRequest(path));
        setToast(toast, "Filter Reset Successfully", "success");
    };

    const handleSingleProduct = (data) => {
        setItem("singleProduct", data);
        navigate("/description");
    }


    return (
        <>
            <Flex direction={["column", "row"]} border={'1px solid red'} h={['100px', '60px']} position={["static", 'sticky']} top={'0px'} bg={colorMode === 'light' ? 'white' : '#1a202c'} zIndex={0} >
                <Center>
                    <Text ml={['0px', '50px']} fontSize={['18px', '25px']} fontWeight={500}>
                        {path === "men" ? "Men's Products"
                            : path === "women" ? "Women's Products"
                                : path === "kids" ? "Kids's Products" : "All Products"} [{products.length}]
                    </Text>
                </Center>
                <Spacer />
                <Center>
                    <Flex gap={['4px']} w={'100%'} my={['10px', '0px']} px={['8px', '35px']}>
                        <Button onClick={() => { setIsFilter(!isFilter) }} fontSize={['13px', '16px']} rightIcon={<IoOptionsOutline />} >
                            {isFilter ? 'Hide Filter' : 'Show Filter'}
                        </Button>
                        <Spacer />
                        <Button onClick={resetFilter} fontSize={['13px', '16px']}>Reset Filter</Button>
                        <Spacer />
                        <SortFilters />
                    </Flex>
                </Center>
            </Flex>

            <Grid className="test" templateColumns={['100%', isFilter ? '18% 77.4%' : '97%']} gap={6} justifyContent={'center'}>
                {isFilter && <Box border={'1px solid red'} minH={['120px', '600px']} maxH={['900px', '600px']} position={['none', 'sticky']} top={['0px', '70px']} overflowY={'scroll'} className='scroll' >

                    <LeftSideFilter />

                </Box>}

                <Box border={'1px solid red'} minH={'400px'}>
                    <Grid templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={[2, 4]} p={['10px', '20px']}>
                        {products.map((e, i) => {
                            const { title, description, color, rating, price, size, gender } = e;
                            return <Flex onClick={() => { handleSingleProduct(e) }} key={i} border={'1px solid red'} flexDirection={'column'} cursor="pointer">
                                <Image className="imgAnimation" src={e.img[0]} />
                                <Box>
                                    <Flex justifyItems={'center'}>
                                        <Text fontSize={['14px', '18px']} fontWeight={500} mt={'8px'}>{title}</Text>
                                        <Spacer />
                                        <Box fontSize={['15px', '22px']} mt={'10px'} mr={'3px'}><AiOutlineStar /></Box>
                                        <Text fontSize={['12px', '18px']} mt={'8px'} mr={'16px'}> {rating}</Text>
                                    </Flex>
                                    <Text fontSize={['12px', '17px']} color={'gray'} my={'2px'}>{description}</Text>
                                    <Text display={['none', 'block']} my={'2px'} fontSize={['13px', '17px']} color={'gray'}>Size : {size.join(", ")}</Text>
                                    <Text display={['none', 'block']} fontSize={['13px', '17px']} color={'gray'} my={'2px'}>Colour : {color}</Text>
                                    <Text display={['none', 'block']} fontSize={['13px', '17px']} color={'gray'} my={'2px'}>Gender : {gender}</Text>
                                    <Text fontSize={['15px', '20px']} fontWeight={500} my={'8px'}>₹ {numberWithCommas(price)}</Text>
                                </Box>
                            </Flex>
                        })}
                    </Grid>
                </Box>
            </Grid>
        </>
    );
};


