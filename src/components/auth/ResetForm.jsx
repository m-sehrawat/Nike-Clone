import { Input, Text, VStack } from "@chakra-ui/react";

export const ResetForm = () => {

    return (
        <>
            <form>
                <VStack w={['95%', '85%']} mx={'auto'} gap={'15px'}>
                    <Text color={'gray'} textAlign={'center'}>Enter your email to receive instructions on how to reset your password.</Text>
                    <Input type={'email'} placeholder="Email address" />
                    <Input value={"RESET"} type={'submit'} backgroundColor={'black'}
                        _hover={{ backgroundColor: "#656565" }} color={'white'} w={'100%'} />
                </VStack>
            </form>
        </>
    );
};