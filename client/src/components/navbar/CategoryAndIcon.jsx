import { Center, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const Category = ({ text, link, handlePath, name, path }) => {
    return (
        <Center borderBottom={path === name ? '2px solid black' : undefined} h={'60px'} _hover={{ borderBottom: '2px solid black' }} cursor={'pointer'} paddingX={'15px'}>
            <Link onClick={handlePath} to={link} name={name} >{text}</Link>
        </Center>
    );
};


export const NavIcon = ({ iconName }) => {
    return <Icon as={iconName} w={'28px'} h={'28px'} mr={'10px'} />;
};
