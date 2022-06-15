import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";

export const Logout = () => {

    return (
        <>
            <Menu>
                <MenuButton>Mohit</MenuButton>
                <MenuList>
                    {/* <MenuItem icon={<AddIcon />} >
                        New Tab
                    </MenuItem>
                    <MenuItem icon={<ExternalLinkIcon />} >
                        New Window
                    </MenuItem>
                    <MenuItem icon={<RepeatIcon />} >
                        Open Closed Tab
                    </MenuItem> */}
                    <MenuItem icon={<FiLogOut />}>
                       Logout
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};