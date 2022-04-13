import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Checkbox, Flex, Grid, Image, Input, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Text, } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoOptionsOutline } from "react-icons/io5";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getRequest } from "../../redux/features/products/actions";
import { SortFilters } from "./SortFilters";




export const Products = () => {

    const [isFilter, setIsFilter] = useState(true);

    const { isLoading, isError } = useSelector((state) => state.prodReducer, shallowEqual);
    const { products } = useSelector((state) => state.prodReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRequest());
    }, []);


    const handleChange = (e) => {
        let isChecked = e.target.checked;
        let value = e.target.value;
        console.log('answer:', isChecked, value)

    }


    return isLoading ? (
        <div>...Loading</div>
    ) : isError ? (
        <div>Something went wrong</div>
    ) : (
        <>
            <Flex border={'1px solid red'} h={'60px'} position={'sticky'} top={'0px'} zIndex={1} bg={'white'} >
                <Center>
                    <Text ml={'50px'} fontSize={'25px'} fontWeight={500}  >Men's Clothing</Text>
                </Center>
                <Spacer />
                <Center>
                    <Button onClick={() => { setIsFilter(!isFilter) }} mr={'20px'} rightIcon={<IoOptionsOutline />} >
                        {isFilter ? 'Hide Filter' : 'Show Filter'}
                    </Button>
                    <SortFilters />
                </Center>
            </Flex>

            <Grid templateColumns={isFilter ? '18% 77.4%' : '97%'} gap={6} justifyContent={'center'}>
                {isFilter && <Box border={'1px solid red'} h={'600px'} position={'sticky'} top={'70px'} overflowY={'scroll'} id='scroll'>



                    <LeftSideFilter handleChange={handleChange} />

                </Box>}
                <Box border={'1px solid red'} minH={'400px'}>
                    <Grid templateColumns='repeat(3, 1fr)' gap={4} p={'20px'}>
                        {products.map((e, i) => (
                            <Box key={i} border={'1px solid red'} minH={isFilter ? '520px' : '660px'}>
                                <Box border={'1px solid red'} h={'70%'} overflow={'hidden'}>
                                    <Image src={e.img[0]} />
                                </Box>
                                <Box>
                                    <Text>{e.name}</Text>
                                    <Text>Price: ₹ {e.price}</Text>
                                    <Text>Rating: {e.rating}</Text>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </>
    );
};




const LeftSideFilter = ({ handleChange }) => {

    return (
        <>
            <Accordion defaultIndex={[1, 2]} allowMultiple>
                <PriceFilter />
                <FilterSection handleChange={handleChange} title={'Gender'} item={['Men', 'Women', 'Kids']} />
                <FilterSection title={'Size'} item={['Small', 'Medium', 'Large', 'Extra Large']} />
                <FilterSection title={'Colour'} item={['Black', 'White', 'Green', 'Red', 'Pink', 'Orange']} />
                <FilterSection title={'Rating'} item={['3 stars', '4 stars', '5 stars']} />
                <FilterSection title={'Brand'} item={['Nike Sportswear', 'Jordan', 'NikeLab', 'Nike Pro']} />
            </Accordion>
        </>
    );
};


const FilterSection = ({ title, item, handleChange }) => {

    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left' fontSize={'18px'}>{title}</Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>

                <Stack direction={'column'} gap={'5px'} >
                    {item.map((e, i) => (
                        <Checkbox onChange={(e) => { handleChange(e) }} value={e} key={i}>{e}</Checkbox>
                    ))}
                </Stack>

            </AccordionPanel>
        </AccordionItem>
    );
};

const PriceFilter = () => {

    return (
        <>

            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontSize={'18px'}>Price Filter</Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>

                    <Flex m={'2%'} direction={'column'} gap={2} >
                        <Input type={'number'} placeholder="₹ min price" />
                        <Input type={'number'} placeholder="₹ max price" />
                        <Button >Apply</Button>
                    </Flex>

                </AccordionPanel>
            </AccordionItem>
        </>
    );
};