import { Box, Center, Flex, Icon, Image, Spacer, Text } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiHeartLine, RiShoppingBagLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setNavbarPath } from "../../redux/features/path/actions";
import { setItem } from "../../utils/localstorage";
import { Auth } from "../auth/Auth";


export const Navbar = () => {

    const dispatch = useDispatch();

    const handlePath = ({ target: { name } }) => {
        dispatch(setNavbarPath(name));
        setItem("path", name);
    }

    return (
        <>
            <Box h={'36px'} bg={'#f5f5f5'} >
                <Center h={'36px'} justifyContent={'right'} mr={'60px'} fontSize={'13px'} cursor={'pointer'}>
                    <Auth />
                </Center>
            </Box>

            <Flex display={['none', 'flex']} h={'60px'} border={'1px solid red'} flexDirection={["column", "row"]} >

                <Box w={'80px'}>
                    <Link to={'/'}><Image ml={'30px'} src="https://www.waveguide.com/wp-content/uploads/2016/05/Nike-logo.png" /></Link>
                </Box>

                <Spacer />

                <Category handlePath={handlePath} name={'allProducts'} text={"All Products"} link={'/allProducts'} />
                <Category handlePath={handlePath} name={'men'} text={"Men"} link={'/men'} />
                <Category handlePath={handlePath} name={'women'} text={"Women"} link={'women'} />
                <Category handlePath={handlePath} name={'kids'} text={"Kids"} link={'/kids'} />

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

            <Box display={['none', 'block']} border={'1px solid red'} h={'60px'} ></Box>
        </>
    );
};


const Category = ({ text, link, handlePath, name }) => {
    return (
        <Center onClick={handlePath} h={'60px'} _hover={{ borderBottom: '2px solid black' }} cursor={'pointer'} paddingX={'15px'}>
            <Link to={link} name={name} >{text}</Link>
        </Center>
    )
};


const NavIcon = ({ iconName }) => {
    return <Icon as={iconName} w={'28px'} h={'28px'} mr={'10px'} color={'black'} />;
};



