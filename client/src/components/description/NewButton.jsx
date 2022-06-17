import { Button } from "@chakra-ui/react";

export const NewButton = ({ click, name, bgColor, color, hoverBg, hoverBorder }) => {
    return (
        <>
            <Button
                onClick={click}
                h={"62px"}
                bg={bgColor}
                color={color}
                border={"1px solid #cecdce"}
                borderRadius={"50px"}
                w={"100%"}
                fontSize={"17px"}
                my={"10px"}
                _hover={{ bg: hoverBg, borderColor: hoverBorder }}
            >
                {name}
            </Button>
        </>
    );
};