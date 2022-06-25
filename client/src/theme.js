import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
};

const styles = {
    global: {
        body: {
            fontFamily: "'Source Sans Pro', sans-serif",
        },
    },
};

const Input = {
    defaultProps: {
        focusBorderColor: 'black'
    }
};


export const theme = extendTheme({
    breakpoints,
    config,
    styles,
    components: { Input }
});