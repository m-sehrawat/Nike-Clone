import { Button, MenuItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { RiCoupon3Line } from "react-icons/ri";


export const Coupon = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <MenuItem onClick={onOpen} icon={<RiCoupon3Line />} >
                Coupons
            </MenuItem>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Coupon Codes</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>

                    </ModalBody>

                    <ModalFooter>
                        <Button
                            bg={'black'}
                            color={'white'}
                            _hover={{ bg: '#1e1e1e' }}
                            onClick={onClose}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

