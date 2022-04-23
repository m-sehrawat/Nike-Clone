import { Box, Button, Menu, MenuButton, MenuItem, MenuList, useToast } from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { nameAtoZ, nameZtoA, ratingHighToLow, ratingLowToHigh, sortHighToLow, sortLowToHigh } from "../../redux/features/products/actions";
import { setToast } from "../../utils/extraFunctions";

export const SortFilters = () => {

    const dispatch = useDispatch();
    const toast = useToast();

    const handleChange = ({ target: { textContent } }) => {

        setToast(toast, `${textContent} applied successfully`, "success");

        switch (textContent) {
            case "Price: Low-High":
                return dispatch(sortLowToHigh());
            case "Price: High-Low":
                return dispatch(sortHighToLow());
            case "Rating: Low-High":
                return dispatch(ratingLowToHigh());
            case "Rating: High-Low":
                return dispatch(ratingHighToLow());
            case "Name: A-Z":
                return dispatch(nameAtoZ());
            case "Name: Z-A":
                return dispatch(nameZtoA());
            default:
                console.log("default");
        }
    }

    return (
        <Box>
            <Menu>
                <MenuButton fontSize={['13px', '16px']} as={Button} rightIcon={<AiOutlineDown />}>Sort By</MenuButton>
                <MenuList>
                    <MenuItem onClick={handleChange}>Price: Low-High</MenuItem>
                    <MenuItem onClick={handleChange}>Price: High-Low</MenuItem>
                    <MenuItem onClick={handleChange}>Rating: Low-High</MenuItem>
                    <MenuItem onClick={handleChange}>Rating: High-Low</MenuItem>
                    <MenuItem onClick={handleChange}>Name: A-Z</MenuItem>
                    <MenuItem onClick={handleChange}>Name: Z-A</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
};
