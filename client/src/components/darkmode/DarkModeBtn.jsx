import { Button, ColorModeProvider, useColorMode } from "@chakra-ui/react";

export const DarkModeBtn = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    console.log('colorMode:', colorMode)

    return (
        <>
            <Button onClick={toggleColorMode}>Toggle</Button>
        </>
    );
};