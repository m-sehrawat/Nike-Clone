import { Input, Select, VStack } from "@chakra-ui/react";

export const SignupForm = () => {

    return (
        <>
            <form>
                <VStack w={['95%', '85%']} mx={'auto'} gap={'7px'}>
                    <Input type={'email'} placeholder="Email address" />
                    <Input type={'password'} placeholder="Password" />
                    <Input type={'text'} placeholder="First Name" />
                    <Input type={'text'} placeholder="Last Name" />
                    <Select placeholder='Choose Gender'>
                        <option>Male</option>
                        <option>Female</option>
                    </Select>
                    <Input type={'date'} />
                    <Input value={"JOIN US"} type={'submit'} backgroundColor={'black'}
                        _hover={{ backgroundColor: "#656565" }} color={'white'} w={'100%'} />

                </VStack>
            </form>
        </>
    );
};