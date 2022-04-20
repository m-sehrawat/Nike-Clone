import { Box, Button, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { getItem } from "../../utils/localstorage";
import { SelectSize } from "./SelectSize";

export const Description = () => {
   const data = getItem("singleProduct");
   const { title, gender, description, category, price, size, color, rating, img } = data;
   const mySize = useSelector((state) => state.pathReducer.size);

   const handleAddToCart = () => {
      if (mySize === false) {
         alert("select Size First");
      } else {
         console.log({ ...data, size: mySize });
      }
   };

   return (
      <>
         <Grid templateColumns={["65% 34%"]} border={"1px solid red"} minH={"400px"} w={["100%", "90%"]} m={"40px auto"} gap={"1%"}>
            <Grid templateColumns={["repeat(2, 1fr)"]} gap={"10px"}>
               {img.map((e, i) => (
                  <Box key={i}>
                     <Image src={e} />
                  </Box>
               ))}
            </Grid>

            <Box border={"1px solid red"} h={"400px"}>
               <Heading>{title}</Heading>
               <Text>{description}</Text>
               <Text>{price}</Text>
               <Text>incl. of taxes and duties</Text>

               <SelectSize size={size} />

               <Button onClick={handleAddToCart}>Add to cart</Button>
            </Box>
         </Grid>
      </>
   );
};
