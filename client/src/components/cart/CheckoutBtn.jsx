import { Button } from "@chakra-ui/react";


export const CheckoutBtn = ({  onClick, name, bgColor, color, hoverBg, hoverBorder, borderColor}) => {
    return (
        <>
             <Button
                onClick={onClick}
                h={"60px"}
                bg={bgColor}
                color={color}
                border={`1px solid ${borderColor}`}
                borderRadius={"50px"}
                w={"100%"}
                fontSize={"17px"}
                mb={'20px'}
                _hover={{ bg: hoverBg, borderColor: hoverBorder }}
            >
                {name}
            </Button>
        </>
    );
};