import { Icon, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";


export const DarkModeBtn = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Icon
            w={'18px'}
            h={'18px'}
            ml={'10px'}
            onClick={toggleColorMode}
            as={colorMode === 'dark' ? FaSun : FaMoon}
        />
    );
};