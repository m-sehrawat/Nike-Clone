import { Box, Button, Grid, ListItem, Text, UnorderedList, useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { numberWithCommas, setToast } from "../../utils/extraFunctions";
import { getItem } from "../../utils/localstorage";
import { ImageModal } from "../../components/description/ImageModal";
import { SelectSize } from "../../components/description/SelectSize";
import { NewButton } from "../../components/description/NewButton";


export const Description = () => {
   
   const data = getItem("singleProduct");
   const { title, gender, description, category, price, size, color, rating, img } = data;
   const mySize = useSelector((state) => state.pathReducer.size);
   const toast = useToast();

   const handleAddToCart = () => {
      if (mySize === false) {
         setToast(toast, "Please select a Size", "error");
      } else {
         console.log({ ...data, size: mySize });
      }
   };


   return (
      <>
         <Grid
            templateColumns={["100%", "62% 34%"]}
            border={"1px solid red"}
            minH={"450px"}
            w={["100%", "90%"]}
            m={["40px auto 100px", "40px auto"]}
            gap={"4%"}
         >

            <ImageModal img={img} />

            <Box border={"1px solid red"} px={["20px", "40px"]}>
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

               <NewButton
                  click={handleAddToCart}
                  name={"Add to Bag"}
                  bgColor={"black"}
                  color={"white"}
                  hoverBg={"grey"}
               />
               <NewButton
                  click={handleAddToCart}
                  name={"Favourite"}
                  bgColor={"white"}
                  color={"black"}
                  hoverBorder={"black"}
               />

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


