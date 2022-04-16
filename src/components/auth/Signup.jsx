import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../../redux/features/path/actions";

export const Signup = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();

    const handleModalOpen = () => {
        dispatch(setModalOpen(true));
        onOpen();
    }

    const handleModalClose = () => {
        dispatch(setModalOpen(false));
        onClose();
    }


    return (
        <>

            <Button onClick={handleModalOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={handleModalClose} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontSize={'23px'} mt={'40px'} textAlign={'center'}>Become a Nike Member</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <form>
                            <VStack w={'85%'} mx={'auto'} gap={'5px'}>
                                <Input type={'email'} placeholder="Email address" />
                                <Input type={'password'} placeholder="Password" />
                                <Input type={'text'} placeholder="First Name" />
                                <Input type={'text'} placeholder="Last Name" />
                                <Input type={'date'} />
                                <Select placeholder='Choose Gender'>

                                    <option>Male</option>
                                    <option>Female</option>
                                </Select>
                                <Button backgroundColor={'black'} _hover={{ backgroundColor: "#656565" }} color={'white'} w={'100%'}>Join Us</Button>

                            </VStack>
                        </form>
                        <Text textAlign={'center'} mt={'25px'}>Already a Member? Sing In</Text>

                    </ModalBody>

                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    );
};