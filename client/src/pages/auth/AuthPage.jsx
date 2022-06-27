import { Box, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { showLoginPage } from "../../redux/features/auth/actions";
import { LoginForm } from "../../components/auth/LoginForm";
import { ResetForm } from "../../components/auth/ResetForm";
import { SignupForm } from "../../components/auth/SignupForm";

export const AuthPage = () => {

    const isLogin = useSelector((state) => state.authReducer.isLogin);
    const isReset = useSelector((state) => state.authReducer.isReset);
    const dispatch = useDispatch();

    const displayLogin = () => {
        dispatch(showLoginPage());
    }


    return (
        <>
            <Box w={["95%", "95%", "50%", "37%", "27%"]} m={"20px auto"}>

                <Text fontWeight={'700'} fontSize={'23px'} my={'40px'} mx={'10%'} textAlign={'center'}>
                    {isLogin ? "YOUR ACCOUNT FOR EVERYTHING NIKE" : isReset ? "RESET PASSWORD" : "BECOME A NIKE MEMBER"}
                </Text>

                {isLogin ? <LoginForm /> : isReset ? <ResetForm /> : <SignupForm />}

                <Box textAlign={'center'} mt={'20px'}>
                    <Text display={'inline'} mt={'25px'} color={'#b0a8af'}>
                        {isLogin ? "Not a Member? " : isReset ? "Or return to " : "Already a Member? "}
                    </Text>
                    <Text onClick={displayLogin} display={'inline'} textDecoration={'underline'} cursor={'pointer'}>
                        {isLogin ? "Signup" : "Login"}
                    </Text>
                </Box>
            </Box>
        </>
    );
};