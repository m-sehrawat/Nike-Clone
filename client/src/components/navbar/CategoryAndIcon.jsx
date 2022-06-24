import { Center, Icon, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const Category = ({ text, link, handlePath, name }) => {
    const { colorMode } = useColorMode();
    return (
        <Center
            h={'60px'}
            cursor={'pointer'}
            paddingX={'15px'}
            _hover={{ borderBottom: `2px solid ${colorMode === 'light' ? 'black' : 'white'}` }}
        >
            <Link
                onClick={handlePath}
                to={link}
                name={name}
            >
                {text}
            </Link>
        </Center>
    );
};


export const DrawerCategory = ({ text, link, handlePath, name }) => {
    return (
        <Text fontSize={'20px'} fontWeight={500}>
            <Link
                onClick={handlePath}
                to={link}
                name={name}
            >
                {text}
            </Link>
        </Text>
    );
};


export const NavIcon = ({ iconName }) => {
    return (
        <Icon
            as={iconName}
            w={'28px'}
            h={'28px'}
            mr={'10px'}
        />
    );
};


//Search box, will add it later
export const SearchBox = () => {
    return (
        <Center>
            <Box
                borderRadius={50}
                w={'180px'}
                color={'#ced2d6'}
                bg={'#f5f5f5'}
                textAlign={'left'}
                p={'7px'}
                _hover={{ bg: '#ececec', color: 'black' }}
                cursor={'text'}
            >
                <Center justifyContent={'left'} >
                    <NavIcon iconName={AiOutlineSearch} />
                    <Text fontSize={'17px'}>Search</Text>
                </Center>
            </Box>
        </Center>
    );
};