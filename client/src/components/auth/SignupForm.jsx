import { Input, Select, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSignupSuccess } from "../../redux/features/auth/actions";
import { setToast } from "../../utils/extraFunctions";
import { isSignupFormEmpty, validateEmail, validatePassword } from "../../utils/formValidator";
import { AuthBtn } from "./AuthBtn";


export const SignupForm = () => {

    const initState = { firstName: "", lastName: "", email: "", password: "", gender: "", dateOfBirth: "" };

    const [form, setForm] = useState(initState);
    const toast = useToast();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleInputChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const isEmpty = isSignupFormEmpty(form);
        if (!isEmpty.status) {
            return setToast(toast, isEmpty.message, 'error');
        }

        const isEmail = validateEmail(form.email);
        if (!isEmail.status) {
            return setToast(toast, isEmail.message, 'error');
        }

        const isPassword = validatePassword(form.password);
        if (!isPassword.status) {
            return setToast(toast, 'Password must contain these things:', 'error', 3000, isPassword.message);
        }

        dispatch(getSignupSuccess(form, toast, navigate));
    };


    return (
        <>
            <form onSubmit={handleOnSubmit}>

                <VStack
                    w={['95%', '95%', '85%', '85%', '85%', '85%']}
                    mx={'auto'}
                    gap={'7px'}
                >

                    <Input
                        name="email"
                        onChange={handleInputChange}
                        type={'email'}
                        placeholder="Email address"
                    />

                    <Input
                        name="password"
                        onChange={handleInputChange}
                        type={'password'}
                        placeholder="Password"
                    />

                    <Input
                        name="firstName"
                        onChange={handleInputChange}
                        type={'text'}
                        placeholder="First Name"
                    />

                    <Input
                        name="lastName"
                        onChange={handleInputChange}
                        type={'text'}
                        placeholder="Last Name"
                    />

                    <Select name="gender" onChange={handleInputChange} placeholder='Choose Gender'>
                        <option>Male</option>
                        <option>Female</option>
                    </Select>

                    <Input
                        name="dateOfBirth"
                        onChange={handleInputChange}
                        type={'date'}
                    />

                    <AuthBtn value={'JOIN US'} />

                </VStack>
            </form>
        </>
    );
};