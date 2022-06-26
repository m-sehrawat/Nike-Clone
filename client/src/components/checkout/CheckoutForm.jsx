import { Box, Flex, Input, Text } from "@chakra-ui/react";


export const CheckoutForm = ({onChange}) => {
    return (
        <>
            <Box>
                <Text fontSize={'20px'} fontWeight={600} mb={'20px'}>Enter your name and address:</Text>

                <Flex flexDirection={'column'} gap={'20px'}>
                    <Input onChange={onChange} type={'text'} name={'firstName'} placeholder={'First Name*'} />
                    <Input onChange={onChange} type={'text'} name={'lastName'} placeholder={'Last Name*'} />
                    <Input onChange={onChange} type={'text'} name={'addressLine1'} placeholder={'Address Line 1*'} />
                    <Input onChange={onChange} type={'text'} name={'addressLine2'} placeholder={'Address Line 2'} />
                    <Flex gap={'20px'}>
                        <Input onChange={onChange} type={'text'} name={'locality'} placeholder={'City/Locality*'} />
                        <Input onChange={onChange} type={'number'} name={'pinCode'} placeholder={'Pin Code*'} />
                    </Flex>
                    <Flex gap={'20px'}>
                        <Input onChange={onChange} type={'text'} name={'state'} placeholder={'State/Territory*'} />
                        <Input onChange={onChange} type={'text'} name={'country'} placeholder={'Country*'} />
                    </Flex>
                    <Text fontSize={'20px'} fontWeight={600} mt={'30px'}>What's your contact information?</Text>
                    <Input onChange={onChange} type={'email'} name={'email'} placeholder={'Email*'} />
                    <Input onChange={onChange} type={'number'} name={'mobile'} placeholder={'Mobile*'} />
                </Flex>
            </Box>
        </>
    );
};