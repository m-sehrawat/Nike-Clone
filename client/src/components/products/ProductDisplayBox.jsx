import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";
import { numberWithCommas } from "../../utils/extraFunctions";


export const ProductDisplayBox = ({ title, description, color, rating, price, size, gender, img, onClick }) => {

    return (
        <>
            <Flex onClick={onClick} border={'1px solid red'} flexDirection={'column'} cursor="pointer">
                <Image className="imgAnimation" src={img[0]} />
                <Box>
                    <Flex justifyItems={'center'}>
                        <Text fontSize={['14px', '18px']} fontWeight={500} mt={'8px'}>{title}</Text>
                        <Spacer />
                        <Box fontSize={['15px', '22px']} mt={'10px'} mr={'3px'}><AiOutlineStar /></Box>
                        <Text fontSize={['12px', '18px']} mt={'8px'} mr={'16px'}> {rating}</Text>
                    </Flex>
                    <Text fontSize={['12px', '17px']} color={'gray'} my={'2px'}>{description}</Text>
                    <Text display={['none', 'block']} my={'2px'} fontSize={['13px', '17px']} color={'gray'}>Size : {size.join(", ")}</Text>
                    <Text display={['none', 'block']} fontSize={['13px', '17px']} color={'gray'} my={'2px'}>Colour : {color}</Text>
                    <Text display={['none', 'block']} fontSize={['13px', '17px']} color={'gray'} my={'2px'}>Gender : {gender}</Text>
                    <Text fontSize={['15px', '20px']} fontWeight={500} my={'8px'}>₹ {numberWithCommas(price)}</Text>
                </Box>
            </Flex>
        </>
    );
};