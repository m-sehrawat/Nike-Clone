import { Accordion, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPriceRange, setAllFilters } from "../../redux/features/products/actions";
import { getGender, setToast } from "../../utils/extraFunctions";
import { FilterSection, PriceFilter } from "./LeftSideFilterComponents";


export const LeftSideFilter = () => {

    const init = {
        Gender: { Men: false, Women: false, Kids: false },
        Category: { Cloths: false, Shoes: false },
        Size: { Small: false, Medium: false, Large: false },
        Colour: { Black: false, White: false, Green: false, Red: false, Mix: false }
    }

    const [priceRange, setPriceRange] = useState({ minPrice: 0, maxPrice: Infinity });
    const [manageFilter, setManageFilter] = useState(init);
    const gender = useSelector((state) => state.pathReducer.path);
    const dispatch = useDispatch();
    const toast = useToast();

    const handleFilterChange = ({ target: { name, value, checked } }) => {
        setManageFilter({
            ...manageFilter,
            [name]: {
                ...manageFilter[name],
                [value]: checked
            }
        })
    };

    const handleFilterApply = (e) => {
        dispatch(setAllFilters(manageFilter));
        setToast(toast, "Filter Applied Successfully", "success", 1000);
    }

    const handleChange = ({ target: { value, name } }) => {
        setPriceRange({ ...priceRange, [name]: value })
    }

    const handleSubmit = () => {
        dispatch(getPriceRange(priceRange));
        setToast(toast, "Price Range Applied Successfully", "success", 1000);
    }


    return (
        <Accordion allowMultiple>
            <PriceFilter handleChange={handleChange} handleSubmit={handleSubmit} />
            {getGender(gender) && <FilterSection change={handleFilterChange} apply={handleFilterApply} title={'Gender'} item={['Men', 'Women', 'Kids']} />}
            <FilterSection change={handleFilterChange} apply={handleFilterApply} title={'Category'} item={['Cloths', 'Shoes']} />
            <FilterSection change={handleFilterChange} apply={handleFilterApply} title={'Size'} item={['Small', 'Medium', 'Large']} />
            <FilterSection change={handleFilterChange} apply={handleFilterApply} title={'Colour'} item={['Black', 'White', 'Green', 'Red', 'Blue']} />
        </Accordion>
    );
};


