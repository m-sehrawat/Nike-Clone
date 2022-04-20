import { Box, Button, Grid, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../../utils/extraFunctions";
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

            <Box border={"1px solid red"} pl={"60px"}>
               <Text fontSize={"29px"}>{title}</Text>
               <Text>{description}</Text>
               <Text fontSize={"22px"} mt="20px">
                  ₹ {numberWithCommas(price)}
               </Text>
               <Text color={"gray"}>incl. of taxes and duties</Text>
               <Text fontSize={"18px"} mt={"30px"} mb={"10px"}>
                  Select Size
               </Text>
               <Box mb={"30px"}>
                  <SelectSize size={size} />
               </Box>

               <NewButton click={handleAddToCart} name={"Add to Bag"} bgColor={"black"} color={"white"} hoverBg={"grey"} />
               <NewButton click={handleAddToCart} name={"Favourite"} bgColor={"white"} color={"black"} hoverBorder={"black"} />

               <Text fontSize={"18px"} mt={"30px"} mb={"10px"} textDecoration={"underline"}>
                  Product Deatils
               </Text>
               <UnorderedList>
                  <ListItem>Gender: {gender}</ListItem>
                  <ListItem>Category: {category}</ListItem>
                  <ListItem>Colour: {color}</ListItem>
                  <ListItem>Rating: {rating}</ListItem>
               </UnorderedList>
            </Box>
         </Grid>
      </>
   );
};

const NewButton = ({ click, name, bgColor, color, hoverBg, hoverBorder }) => {
   return (
      <>
         <Button onClick={click} h={"62px"} bg={bgColor} color={color} border={"1px solid #cecdce"} borderRadius={"50px"} w={"100%"} fontSize={"17px"} my={"10px"} _hover={{ bg: hoverBg, borderColor: hoverBorder }}>
            {name}
         </Button>
      </>
   );
};
