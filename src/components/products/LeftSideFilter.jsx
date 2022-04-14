import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Checkbox, Flex, Input, Stack } from "@chakra-ui/react";

export const LeftSideFilter = ({ handleChange }) => {

    return (
        <>
            <Accordion defaultIndex={[1, 2]} allowMultiple>
                <PriceFilter />
                <FilterSection handleChange={handleChange} title={'Gender'} item={['Men', 'Women', 'Kids']} />
                <FilterSection title={'Size'} item={['Small', 'Medium', 'Large', 'Extra Large']} />
                <FilterSection title={'Colour'} item={['Black', 'White', 'Green', 'Red', 'Pink', 'Orange']} />
                <FilterSection title={'Rating'} item={['3 stars', '4 stars', '5 stars']} />
                <FilterSection title={'Brand'} item={['Nike Sportswear', 'Jordan', 'NikeLab', 'Nike Pro']} />
            </Accordion>
        </>
    );
};


const FilterSection = ({ title, item, handleChange }) => {

    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left' fontSize={'18px'}>{title}</Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>

                <Stack direction={'column'} gap={'5px'} >
                    {item.map((e, i) => (
                        <Checkbox onChange={(e) => { handleChange(e) }} value={e} key={i}>{e}</Checkbox>
                    ))}
                </Stack>

            </AccordionPanel>
        </AccordionItem>
    );
};

const PriceFilter = () => {

    return (
        <>

            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontSize={'18px'}>Price Filter</Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>

                    <Flex m={'2%'} direction={'column'} gap={2} >
                        <Input type={'number'} placeholder="₹ min price" />
                        <Input type={'number'} placeholder="₹ max price" />
                        <Button>Apply</Button>
                    </Flex>

                </AccordionPanel>
            </AccordionItem>
        </>
    );
};