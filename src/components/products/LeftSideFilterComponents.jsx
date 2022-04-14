import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Checkbox, Flex, Input, Stack } from "@chakra-ui/react";

export const FilterSection = ({ title, item, change, apply }) => {

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
                        <Checkbox onChange={(e) => { change(e) }} value={e} name={title} key={i}>{e}</Checkbox>
                    ))}
                    <Button name={title} onClick={apply}>Apply</Button>
                </Stack>

            </AccordionPanel>
        </AccordionItem>
    );
};

export const PriceFilter = ({ handleChange, handleSubmit }) => {

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
                        <Input onChange={handleChange} type={'number'} name="minPrice" placeholder="₹ min price" />
                        <Input onChange={handleChange} type={'number'} name="maxPrice" placeholder="₹ max price" />
                        <Button onClick={handleSubmit}>Apply</Button>
                    </Flex>

                </AccordionPanel>
            </AccordionItem>
        </>
    );
};