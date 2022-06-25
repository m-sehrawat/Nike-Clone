import { Input } from "@chakra-ui/react";


export const ContinueBtn = () => {
    return (
        <>
            <Input
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
                Continue
            </Input>
        </>
    );
};