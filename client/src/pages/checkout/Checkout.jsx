import { Box, Flex, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { isCheckoutFormEmpty } from "../../utils/checkoutFormValidator";
import { setToast } from "../../utils/extraFunctions";
import { ContinueBtn } from "./ContinueBtn";


export const Checkout = () => {

    const initState = {
        firstName: "",
        lastName: "",
        addressLine1: "",
        addressLine2: "",
        locality: "",
        postalCode: "",
        state: "",
        country: "",
        email: "",
        mobile: ""
    };

    const [form, setForm] = useState(initState);
    const toast = useToast();

    const handleInputChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const isEmpty = isCheckoutFormEmpty(form);
        if (!isEmpty.status) {
            return setToast(toast, isEmpty.message, 'error');
        }
        console.log(form);
    };



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

                <form onSubmit={handleFormSubmit}>
                    <Flex flexDirection={'column'} gap={'20px'}>
                        <Input onChange={handleInputChange} type={'text'} name={'firstName'} placeholder={'First Name*'} />
                        <Input onChange={handleInputChange} type={'text'} name={'lastName'} placeholder={'Last Name*'} />
                        <Input onChange={handleInputChange} type={'text'} name={'addressLine1'} placeholder={'Address Line 1*'} />
                        <Input onChange={handleInputChange} type={'text'} name={'addressLine2'} placeholder={'Address Line 2'} />
                        <Flex gap={'20px'}>
                            <Input onChange={handleInputChange} type={'text'} name={'locality'} placeholder={'City/Locality*'} />
                            <Input onChange={handleInputChange} type={'number'} name={'postalCode'} placeholder={'Postal Code*'} />
                        </Flex>
                        <Flex gap={'20px'}>
                            <Input onChange={handleInputChange} type={'text'} name={'state'} placeholder={'State/Territory*'} />
                            <Input onChange={handleInputChange} type={'text'} name={'country'} placeholder={'Country*'} />
                        </Flex>
                        <Text fontSize={'20px'} fontWeight={600} mt={'30px'}>What's your contact information?</Text>
                        <Input onChange={handleInputChange} type={'email'} name={'email'} placeholder={'Email*'} />
                        <Input onChange={handleInputChange} type={'number'} name={'mobile'} placeholder={'Mobile*'} />

                        <ContinueBtn />
                    </Flex>
                </form>

            </Box>
        </>
    );
};