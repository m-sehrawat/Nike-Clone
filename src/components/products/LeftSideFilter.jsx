import { Accordion } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPriceRange, setAllFilters } from "../../redux/features/products/actions";
import { FilterSection, PriceFilter } from "./LeftSideFilterComponents";


export const LeftSideFilter = () => {

    const init = {
        Gender: { Men: false, Women: false, Kids: false },
        Size: { Small: false, Medium: false, Large: false },
        Colour: { Black: false, White: false, Green: false, Red: false, Mix: false }
    }

    const [priceRange, setPriceRange] = useState({ minPrice: 0, maxPrice: Infinity });
    const [manageFilter, setManageFilter] = useState(init);
    const dispatch = useDispatch();

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
    }

    const handleChange = ({ target: { value, name } }) => {
        setPriceRange({ ...priceRange, [name]: value })
    }

    const handleSubmit = () => {
        dispatch(getPriceRange(priceRange));
    }


    return (
        <Accordion defaultIndex={[1, 2]} allowMultiple>
            <PriceFilter handleChange={handleChange} handleSubmit={handleSubmit} />
            <FilterSection change={handleFilterChange} apply={handleFilterApply} title={'Gender'} item={['Men', 'Women', 'Kids']} />
            <FilterSection change={handleFilterChange} apply={handleFilterApply} title={'Size'} item={['Small', 'Medium', 'Large']} />
            <FilterSection change={handleFilterChange} apply={handleFilterApply} title={'Colour'} item={['Black', 'White', 'Green', 'Red', 'Mix']} />
        </Accordion>
    );
};


