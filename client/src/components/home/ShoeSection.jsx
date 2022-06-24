import { Box, Grid } from "@chakra-ui/react";
import { BigGridBox, SmallGridBox } from "./GridBox";
import { HomeDescText, HomeText } from "./HomeText";


export const ShoeSection = ({ heading, description, img, gender, handleSection }) => {
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
                templateColumns={'repeat(2, 1fr)'}
            >
                <BigGridBox source={img[0]} />
                <SmallGridBox source={img[1]} />
                <SmallGridBox source={img[2]} />
            </Grid>
        </Box>
    );
};