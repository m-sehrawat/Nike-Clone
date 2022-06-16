import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { showLoginPage } from "../../redux/features/auth/actions";
import { LoginForm } from "./LoginForm";
import { ResetForm } from "./ResetForm";
import { SignupForm } from "./SignupForm";

export const Auth = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.authReducer.isLogin);
    const isReset = useSelector((state) => state.authReducer.isReset);

    const displayLogin = () => {
        dispatch(showLoginPage());
    }


    return (
        <>
            <Button onClick={onOpen} bg={'transparent'} size={'sm'}>Sign up</Button>

            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontWeight={'700'} fontSize={'23px'} mt={'40px'} mx={'10%'} textAlign={'center'}>
                        {isLogin ? "YOUR ACCOUNT FOR EVERYTHING NIKE" : isReset ? "RESET PASSWORD" : "BECOME A NIKE MEMBER"}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {isLogin ? <LoginForm /> : isReset ? <ResetForm /> : <SignupForm />}

                        <Box textAlign={'center'} mt={'20px'}>
                            <Text display={'inline'} mt={'25px'} color={'#b0a8af'}>
                                {isLogin ? "Not a Member? " : isReset ? "Or return to " : "Already a Member? "}
                            </Text>
                            <Text onClick={displayLogin} display={'inline'} textDecoration={'underline'} cursor={'pointer'}>
                                {isLogin ? "Signup" : "Login"}
                            </Text>
                        </Box>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};