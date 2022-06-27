import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";
import { numberWithCommas, shortString } from "../../utils/extraFunctions";
import { DescText, PriceText } from "./DescText";


export const ProductDisplayBox = ({ title, description, color, rating, price, size, gender, img, onClick }) => {

    return (
        <>
            <Flex onClick={onClick} flexDirection={'column'} cursor="pointer" mb={'10px'}>
                <Box overflow={'hidden'}>
                    <Image className="imgAnimation" src={img[0]} />
                </Box>
                <Box>
                    <Flex justifyItems={'center'} mt={'10px'}>
                        <Text
                            fontSize={['13px', '15px', '17px', '17px', '18px']}
                            fontWeight={600}
                        >
                            {shortString(title)}
                        </Text>
                        <Spacer />
                        <Box
                            fontSize={['13px', '15px', '17px', '17px', '18px']}
                            mr={'3px'}
                            mt={'4px'}
                        >
                            <AiOutlineStar />
                        </Box>
                        <Text fontSize={['13px', '15px', '17px', '17px', '18px']}>{rating}</Text>
                    </Flex>

                    <DescText>{shortString(description, 20)}</DescText>
                    <DescText>{size.join(", ")}</DescText>
                    <DescText>{gender}, {color} Colour</DescText>
                    <PriceText>₹{numberWithCommas(price)}.00</PriceText>
                </Box>
            </Flex>
        </>
    );
};

