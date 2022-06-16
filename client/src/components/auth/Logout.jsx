import { Button, Divider, Flex, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BsCart2, BsFillCaretDownFill } from "react-icons/bs";
import { RiLuggageCartLine, RiCoupon3Line } from "react-icons/ri";


export const Logout = () => {

    return (
        <>
            <Menu>
                <MenuButton as={Button} size='sm' bg={'transparent'} rightIcon={<BsFillCaretDownFill />}>Mohit</MenuButton>
                <MenuList >
                    <Flex flexDirection={'column'} gap={'5px'} fontSize={'17px'}>
                        <MenuItem icon={<FaRegHeart />} >
                            Wishlist
                        </MenuItem>
                        <MenuItem icon={<RiLuggageCartLine />} >
                            Orders
                        </MenuItem>
                        <MenuItem icon={<RiCoupon3Line />} >
                            Coupons
                        </MenuItem>
                        <MenuItem icon={<BsCart2 />} >
                            Cart
                        </MenuItem>
                        <Divider />
                        <MenuItem icon={<FiLogOut />}>
                            Logout
                        </MenuItem>
                    </Flex>
                </MenuList>
            </Menu>
        </>
    );
};