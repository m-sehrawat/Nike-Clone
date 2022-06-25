import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { ContinueBtn } from "./ContinueBtn";


export const Checkout = () => {

    

    return (
        <>
            <Box
                maxW={'500px'}
                m={'20px auto 80px'}
            >
                <Text
                    fontSize={'20px'}
                    fontWeight={600}
                    mb={'20px'}
                >
                    Enter your name and address:
                </Text>

                <form>
                    <Flex flexDirection={'column'} gap={'20px'}>
                        <Input type={'text'} name={'firstName'} placeholder={'First Name*'} />
                        <Input type={'text'} name={'lastName'} placeholder={'Last Name*'} />
                        <Input type={'text'} name={'addressLine1'} placeholder={'Address Line 1*'} />
                        <Input type={'text'} name={'addressLine2'} placeholder={'Address Line 2'} />
                        <Flex gap={'20px'}>
                            <Input type={'text'} name={'locality'} placeholder={'City/Locality*'} />
                            <Input type={'text'} name={'postalCode'} placeholder={'Postal Code*'} />
                        </Flex>
                        <Flex gap={'20px'}>
                            <Input type={'text'} name={'state'} placeholder={'State/Territory*'} />
                            <Input type={'text'} name={'country'} placeholder={'Country*'} />
                        </Flex>
                        <Text fontSize={'20px'} fontWeight={600} mt={'30px'}>What's your contact information?</Text>
                        <Input type={'text'} name={'email'} placeholder={'Email*'} />
                        <Input type={'text'} name={'mobile'} placeholder={'Mobile*'} />

                        <ContinueBtn />
                    </Flex>
                </form>

            </Box>
        </>
    );
};