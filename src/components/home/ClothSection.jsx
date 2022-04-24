import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";

export const ClothSection = ({ heading, description, img }) => {

    return (
        <Box mt={'80px'} w={['94%', '80%']} mx={'auto'} textAlign={'center'}>

            <Text fontFamily={"'Anton', sans-serif"} fontWeight={600} letterSpacing={2} mt={['60px']} fontSize={['40px', '60px']}>{heading}</Text>
            <Text mb={['30px']} px={['20px', '100px']} fontSize={['14px', '16px']}>{description}</Text>

            <Grid gap={['10px', '15px']} templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]} >

                <GridItem borderRadius={'15px'} overflow={'hidden'} border={'1px solid red'}>
                    <Image className="imgAnimation" src={img[0]} />
                </GridItem>

                <GridItem borderRadius={'15px'} overflow={'hidden'} border={'1px solid red'}>
                    <Image className="imgAnimation" src={img[1]} />
                </GridItem>

                <GridItem borderRadius={'15px'} overflow={'hidden'} border={'1px solid red'}>
                    <Image className="imgAnimation" src={img[2]} />
                </GridItem>

                <GridItem borderRadius={'15px'} overflow={'hidden'} border={'1px solid red'}>
                    <Image className="imgAnimation" src={img[3]} />
                </GridItem>
            </Grid>
        </Box>
    );
};