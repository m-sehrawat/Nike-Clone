import { Box, Grid } from "@chakra-ui/react";
import { ClothGridBox } from "./GridBox";
import { HomeDescText, HomeText } from "./HomeText";


export const ClothSection = ({ heading, description, img, gender, handleSection }) => {
    return (
        <Box
            m={'60px auto 60px'}
            w={['94%', '94%', '94%', '94%', '80%']}
            textAlign={'center'}
        >
            <HomeText>{heading}</HomeText>
            <HomeDescText>{description}</HomeDescText>

            <Grid
                onClick={() => { handleSection(gender) }}
                gap={['10px', '10px', '10px', '10px', '20px']}
                templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)"]}
            >
                <ClothGridBox source={img[0]} />
                <ClothGridBox source={img[1]} />
                <ClothGridBox source={img[2]} />
                <ClothGridBox source={img[3]} />
            </Grid>
        </Box>
    );
};