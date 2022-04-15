import { Box, Button, Center, color, Container, Flex, Heading, Icon, Image, Input, Spacer, Text } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiHeartLine, RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
        <>
            <Box h={'36px'} bg={'#f5f5f5'} >
                <Center h={'36px'} justifyContent={'right'} mr={'60px'} fontSize={'13px'} cursor={'pointer'} >Sign In</Center>
            </Box>

            <Flex h={'60px'} border={'1px solid red'} >

                <Image ml={'30px'} src="https://www.waveguide.com/wp-content/uploads/2016/05/Nike-logo.png" />

                <Spacer />

                <Category text={"All Products"} />
                <Category text={"Men"} />
                <Category text={"Women"} />
                <Category text={"Kids"} />

                <Spacer />

                <Center>
                    <Box borderRadius={50} w={'180px'} color={'#ced2d6'} bg={'#f5f5f5'} textAlign={'left'} p={'7px'}
                        _hover={{ bg: '#ececec', color: 'black' }} cursor={'text'} >
                        <Center justifyContent={'left'} >
                            <NavIcon iconName={AiOutlineSearch} />
                            <Text fontSize={'17px'}>Search</Text>
                        </Center>
                    </Box>
                </Center>

                <Center ml={'20px'} mr={'10px'} >
                    <NavIcon iconName={RiHeartLine} />
                </Center>

                <Center mr={'24px'}>
                    <NavIcon iconName={RiShoppingBagLine} />
                </Center>
            </Flex>

            <Box border={'1px solid red'} h={'60px'} ></Box>
        </>
    );
};


const Category = ({ text }) => {
    return <Center h={'60px'} _hover={{ borderBottom: '2px solid black' }} cursor={'pointer'} paddingX={'15px'}><Link to={'/products'} >{text}</Link></Center>;
};


const NavIcon = ({ iconName }) => {
    return <Icon as={iconName} w={'28px'} h={'28px'} mr={'10px'} color={'black'} />;
};



