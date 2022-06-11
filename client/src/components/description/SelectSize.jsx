import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setSize } from "../../redux/features/path/actions";

const RadioCard = (props) => {
   const { getInputProps, getCheckboxProps } = useRadio(props);
   const input = getInputProps();
   const checkbox = getCheckboxProps();

   return (
      <Box as="label">
         <input {...input} />
         <Box onClick={props.onClick} {...checkbox} cursor="pointer" borderWidth="1px" borderRadius="md" boxShadow="md" _checked={{ border: "2px solid black" }} px={5} py={3}>
            {props.children}
         </Box>
      </Box>
   );
};

export const SelectSize = ({ size }) => {
   const dispatch = useDispatch();

   const { getRootProps, getRadioProps } = useRadioGroup({ name: "SelectSize" });
   const group = getRootProps();

   return (
      <HStack {...group}>
         {size.map((value) => {
            const radio = getRadioProps({ value });
            return (
               <RadioCard
                  onClick={() => {
                     dispatch(setSize(value));
                  }}
                  key={value}
                  {...radio}
               >
                  {value}
               </RadioCard>
            );
         })}
      </HStack>
   );
};
