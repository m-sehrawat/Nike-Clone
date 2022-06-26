import { Input } from "@chakra-ui/react";


export const PlaceOrderBtn = ({ onClick }) => {
    return (
        <>
            <Input
                onClick={onClick}
                as={'button'}
                type={'submit'}
                h={"60px"}
                bg={'#edf2f7'}
                color={'black'}
                border={`1px solid #cecdce`}
                borderRadius={"50px"}
                w={"100%"}
                fontSize={"17px"}
                mt={'20px'}
                _hover={{ borderColor: 'black' }}
            >
                Place Order
            </Input>
        </>
    );
};