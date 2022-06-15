import { Box, Center, Flex, Icon, Image, Spacer, Text, useColorMode } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiHeartLine, RiShoppingBagLine } from "react-icons/ri";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { nikeLogo } from "../../constants/images";
import { setNavbarPath } from "../../redux/features/path/actions";
import { setItem } from "../../utils/localstorage";
import { Auth } from "../auth/Auth";
import { Logout } from "../auth/Logout";
import { DarkModeBtn } from "../darkmode/DarkModeBtn";


export const Navbar = () => {

    const dispatch = useDispatch();
    const path = useSelector((state) => state.pathReducer.path);
    const { user, token } = useSelector((state) => state.authReducer, shallowEqual);
    const { colorMode } = useColorMode();

    const handlePath = ({ target: { name } }) => {
        dispatch(setNavbarPath(name));
        setItem("path", name);
    }

    return (
        <>
            <Box h={'36px'} bg={colorMode === 'light' && '#f5f5f5'} >
                <Center h={'36px'} justifyContent={'right'} mr={'60px'} fontSize={'16px'} cursor={'pointer'}>
                    {!token ? <Auth /> : <Logout />}
                    <DarkModeBtn />
                </Center>
            </Box>

            <Flex display={['none', 'flex']} h={'60px'} border={'1px solid red'} flexDirection={["column", "row"]} >

                <Box w={'80px'}>
                    <Link to={'/'}><Image ml={'30px'} src={nikeLogo} /></Link>
                </Box>

                <Spacer />

                <Category handlePath={handlePath} path={path} name={'/'} text={"Home"} link={'/'} />
                <Category handlePath={handlePath} path={path} name={'allProducts'} text={"All Products"} link={'/allProducts'} />
                <Category handlePath={handlePath} path={path} name={'men'} text={"Men"} link={'/men'} />
                <Category handlePath={handlePath} path={path} name={'women'} text={"Women"} link={'women'} />
                <Category handlePath={handlePath} path={path} name={'kids'} text={"Kids"} link={'/kids'} />

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


const Category = ({ text, link, handlePath, name, path }) => {

    return (
        <Center borderBottom={path === name ? '2px solid black' : undefined} h={'60px'} _hover={{ borderBottom: '2px solid black' }} cursor={'pointer'} paddingX={'15px'}>
            <Link onClick={handlePath} to={link} name={name} >{text}</Link>
        </Center>
    )
};


const NavIcon = ({ iconName }) => {
    return <Icon as={iconName} w={'28px'} h={'28px'} mr={'10px'} />;
};



