import { Button } from "@chakra-ui/react";


export const CheckoutBtn = ({ onClick}) => {
    return (
        <>
            <Button
                onClick={onClick}
                h={"62px"}
                bg={'black'}
                color={'white'}
                border={"1px solid black"}
                borderRadius={"50px"}
                w={"100%"}
                fontSize={"17px"}
                mt={"30px"}
                _hover={{ bg: '#1e1e1e'}}
            >
                Member Checkout
            </Button>
        </>
    );
};