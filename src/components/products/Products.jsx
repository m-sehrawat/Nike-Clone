import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Checkbox, Flex, Grid, Heading, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { IoOptionsOutline } from "react-icons/io5";



export const Products = () => {

    const [isFilter, setIsFilter] = useState(true);



    return (
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
                    <Filter />
                </Center>
            </Flex>

            <Grid templateColumns={isFilter ? '18% 77.4%' : '97%'} gap={6} justifyContent={'center'}>
                {isFilter && <Box border={'1px solid red'} h={'600px'} position={'sticky'} top={'70px'} overflowY={'scroll'} id='scroll'>

                    <LeftSideFilter />

                </Box>}
                <Box border={'1px solid red'} minH={'400px'}>
                    <Grid templateColumns='repeat(3, 1fr)' gap={4} p={'20px'}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => (
                            <Box key={i} border={'1px solid red'} h={isFilter ? '540px' : '640px'}>
                                <Box border={'1px solid red'} h={'70%'}></Box>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </>
    );
};


const Filter = () => {

    return (
        <Box mr={'50px'}>
            <Menu>
                <MenuButton as={Button} rightIcon={<AiOutlineDown />}>Sort By</MenuButton>
                <MenuList>
                    <MenuItem>Price: Low-High</MenuItem>
                    <MenuItem>Price: High-Low</MenuItem>
                    <MenuItem>Name: A-Z</MenuItem>
                    <MenuItem>Name: Z-A</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
};


const LeftSideFilter = () => {

    return (
        <>
            <Accordion allowMultiple>
                <FilterSection title={'Gender'} item={['Men', 'Women', 'Kids']} />
                <FilterSection title={'Size'} item={['Small', 'Medium', 'Large', 'Extra Large']} />
                <FilterSection title={'Colour'} item={['Black', 'White', 'Green', 'Red', 'Pink']} />
                <FilterSection title={'Fit'} item={['Oversized', 'Loose', 'Slim', 'Standard']} />
                <FilterSection title={'Brand'} item={['Nike Sportswear', 'Jordan', 'NikeLab', 'Nike Pro']} />
            </Accordion>
        </>
    );
};


const FilterSection = ({ title, item }) => {

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
                        <Checkbox key={i}>{e}</Checkbox>
                    ))}
                </Stack>

            </AccordionPanel>
        </AccordionItem>
    );
};