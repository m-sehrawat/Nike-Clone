import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Icon, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { BiMenu } from "react-icons/bi";

export const SideDrawer = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const user = useSelector((state) => state.authReducer.user.firstName);


    return (
        <>
            <Icon w={'28px'} h={'28px'} mr={'10px'} onClick={onOpen} as={BiMenu} />
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Hi {user}</DrawerHeader>

                    <DrawerBody>

                    </DrawerBody>

                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};
