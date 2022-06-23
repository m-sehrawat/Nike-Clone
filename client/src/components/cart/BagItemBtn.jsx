import { Button } from "@chakra-ui/react";


export const BagItemBtn = ({ title, onClick }) => {
    return (
        <Button
            variant={'ghost'}
            color={'gray'}
            textDecoration={'underline'}
            fontWeight={400}
            p={'0px'}
            _hover={{bg: 'transparent', color: 'black'}}
            onClick={onClick}
        >
            {title}
        </Button>
    );
};