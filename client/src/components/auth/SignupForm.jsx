import { Input, Select, VStack } from "@chakra-ui/react";
import { useState } from "react";

export const SignupForm = () => {

    const initState = { firstName: "", lastName: "", email: "", password: "", gender: "", dateOfBirth: "" };

    const [form, setForm] = useState(initState);

    const handleInputChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <VStack w={['95%', '85%']} mx={'auto'} gap={'7px'}>
                    <Input name="email" onChange={handleInputChange} type={'email'} placeholder="Email address" />
                    <Input name="password" onChange={handleInputChange} type={'password'} placeholder="Password" />
                    <Input name="firstName" onChange={handleInputChange} type={'text'} placeholder="First Name" />
                    <Input name="lastName" onChange={handleInputChange} type={'text'} placeholder="Last Name" />
                    <Select name="gender" onChange={handleInputChange} placeholder='Choose Gender'>
                        <option>Male</option>
                        <option>Female</option>
                    </Select>
                    <Input name="dateOfBirth" onChange={handleInputChange} type={'date'} />
                    <Input value={"JOIN US"} type={'submit'} backgroundColor={'black'}
                        _hover={{ backgroundColor: "#656565" }} color={'white'} w={'100%'} />

                </VStack>
            </form>
        </>
    );
};