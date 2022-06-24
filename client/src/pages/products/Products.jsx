import { Box, Button, Center, Flex, Grid, Spacer, Text, useColorMode, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoOptionsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "../../redux/features/products/actions";
import { setToast } from "../../utils/extraFunctions";
import { LeftSideFilter } from "../../components/products/LeftSideFilter";
import { SortFilters } from "../../components/products/SortFilters";
import { useNavigate } from "react-router-dom";
import { getItemSession, setItemSession } from "../../utils/sessionStorage";
import { ProductDisplayBox } from "../../components/products/ProductDisplayBox";


export const Products = () => {

    const { colorMode } = useColorMode();
    const [isFilter, setIsFilter] = useState(true);
    const { products } = useSelector((state) => state.prodReducer);
    const path = getItemSession("path");
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
        setItemSession("singleProduct", data);
        navigate("/description");
    };


    return (
        <>
            <Flex
                direction={["column", "row"]}
                border={'1px solid red'}
                h={['100px', '60px']}
                position={["static", 'sticky']}
                top={'0px'}
                bg={colorMode === 'light' ? 'white' : '#1a202c'}
                zIndex={0}
            >
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

            <Grid
                className="test"
                gap={6}
                templateColumns={['100%', isFilter ? '18% 77.4%' : '97%']}
                justifyContent={'center'}
            >

                {isFilter && <Box
                    border={'1px solid red'}
                    minH={['120px', '600px']}
                    maxH={['900px', '600px']}
                    position={['none', 'sticky']}
                    top={['0px', '70px']}
                    overflowY={'scroll'}
                    className='scroll'
                    zIndex={-1}
                >
                    <LeftSideFilter />
                </Box>}

                <Box border={'1px solid red'} minH={'400px'}>
                    <Grid
                        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
                        gap={[2, 4]}
                        p={['10px', '20px']}
                    >
                        {products.map((product, index) => (
                            <ProductDisplayBox
                                {...product}
                                key={index}
                                onClick={() => { handleSingleProduct(product) }}
                            />
                        ))}
                    </Grid>
                </Box>

            </Grid>
        </>
    );
};


