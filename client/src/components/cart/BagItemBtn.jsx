import { Button } from "@chakra-ui/react";


export const BagItemBtn = ({ title, onClick }) => {
    return (
        <Button
            variant={'ghost'}
            color={'gray'}
            textDecoration={'underline'}
            fontWeight={400}
            p={'0px'}
            _hover={{ bg: 'transparent', color: 'black' }}
            onClick={onClick}
        >
            {title}
        </Button>
    );
};


export const QuantityBtn = ({ text, name, onClick }) => {
    return (
        <>
            <Button
                onClick={onClick}
                variant={'ghost'}
                _hover={{ border: '1px solid black' }}
                border={'1px solid #cecdce'}
                borderRadius={'50%'}
                p={'0px'}
                fontWeight={600}
                fontSize={'23px'}
                name={name}
            >
                {text}
            </Button>
        </>
    );
};