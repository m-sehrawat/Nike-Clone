import { Box, HStack, useColorMode, useRadio, useRadioGroup } from "@chakra-ui/react";


const RadioCard = (props) => {

    const { getInputProps, getCheckboxProps } = useRadio(props);
    const input = getInputProps();
    const checkbox = getCheckboxProps();
    const { colorMode } = useColorMode();

    return (
        <Box as="label">
            <input {...input} />
            <Box
                onClick={props.onClick}
                {...checkbox}
                cursor="pointer"
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                _checked={{ border: `2px solid ${colorMode === 'light' ? 'black' : 'white'}` }}
                px={5} py={3}
            >
                {props.children}
            </Box>
        </Box>
    );
};


export const SelectSize = ({ size, setMySize }) => {

    const { getRootProps, getRadioProps } = useRadioGroup({ name: "SelectSize" });
    const group = getRootProps();

    return (
        <HStack {...group}>
            {size.map((value) => {
                const radio = getRadioProps({ value });
                return (
                    <RadioCard
                        onClick={() => {
                            setMySize(value);
                        }}
                        key={value}
                        {...radio}
                    >
                        {value}
                    </RadioCard>
                );
            })}
        </HStack>
    );
};
